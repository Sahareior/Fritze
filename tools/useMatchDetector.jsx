import { useEffect, useRef, useCallback } from 'react';

export const useMatchDetector = ({
    videoRef,
    shape,
    matching,
    onMatchUpdate,
    mirrored,
    zoom,
    debug = false,
}) => {
    const canvasRef = useRef(null);
    const maskCanvasRef = useRef(null);
    const rafRef = useRef(null);
    const lastAlertTimeRef = useRef(0);
    const customImageRef = useRef(null);

    // Initialize canvases once
    useEffect(() => {
        if (!canvasRef.current) {
            canvasRef.current = document.createElement('canvas');
            canvasRef.current.width = 180; // Increased resolution for accuracy
            canvasRef.current.height = 180;
        }
        if (!maskCanvasRef.current) {
            maskCanvasRef.current = document.createElement('canvas');
            maskCanvasRef.current.width = 180;
            maskCanvasRef.current.height = 180;
        }
    }, []);

    // Pre-load custom image
    useEffect(() => {
        if (shape.type === 'custom' && shape.customSrc) {
            const img = new Image();
            img.src = shape.customSrc;
            img.onload = () => {
                customImageRef.current = img;
            };
            img.onerror = () => {
                console.error('Failed to load custom image for matching');
                customImageRef.current = null;
            };
        } else {
            customImageRef.current = null;
        }
    }, [shape.type, shape.customSrc]);

    const processFrame = useCallback(() => {
        if (!matching.enabled || !videoRef.current || !canvasRef.current || !maskCanvasRef.current) {
            return;
        }

        const video = videoRef.current;
        const canvas = canvasRef.current;
        const maskCanvas = maskCanvasRef.current;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        const maskCtx = maskCanvas.getContext('2d', { willReadFrequently: true });

        if (!ctx || !maskCtx) return;

        // 1. Draw mask template
        maskCtx.clearRect(0, 0, maskCanvas.width, maskCanvas.height);
        maskCtx.save();
        maskCtx.translate(maskCanvas.width / 2, maskCanvas.height / 2);
        maskCtx.rotate((shape.rotation * Math.PI) / 180);

        const size = 110; // target size in our 180x180 canvas

        if (shape.type === 'custom' && customImageRef.current) {
            const img = customImageRef.current;
            const aspectRatio = img.width / img.height;
            let drawW = size;
            let drawH = size / aspectRatio;
            if (drawH > size) {
                drawH = size;
                drawW = size * aspectRatio;
            }
            maskCtx.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH);
        } else {
            maskCtx.fillStyle = 'white';
            if (shape.type === 'rectangle') {
                maskCtx.fillRect(-size / 2, -size / 2, size, size);
            } else if (shape.type === 'circle') {
                maskCtx.beginPath();
                maskCtx.arc(0, 0, size / 2, 0, Math.PI * 2);
                maskCtx.fill();
            } else if (shape.type === 'triangle') {
                maskCtx.beginPath();
                maskCtx.moveTo(0, -size / 2);
                maskCtx.lineTo(size / 2, size / 2);
                maskCtx.lineTo(-size / 2, size / 2);
                maskCtx.closePath();
                maskCtx.fill();
            } else {
                maskCtx.fillRect(-size / 2, -size / 2, size, size);
            }
        }
        maskCtx.restore();

        // 2. Capture video area
        const vWidth = video.videoWidth;
        const vHeight = video.videoHeight;
        const containerW = video.clientWidth;
        const containerH = video.clientHeight;

        if (vWidth === 0 || vHeight === 0 || containerW === 0 || containerH === 0) return;

        const containerAspect = containerW / containerH;
        const videoAspect = vWidth / vHeight;

        let videoScale, offsetX = 0, offsetY = 0;
        if (videoAspect > containerAspect) {
            videoScale = containerH / vHeight;
            const visibleWidth = vWidth * videoScale;
            offsetX = (visibleWidth - containerW) / 2;
        } else {
            videoScale = containerW / vWidth;
            const visibleHeight = vHeight * videoScale;
            offsetY = (visibleHeight - containerH) / 2;
        }

        const effectiveShapeX = mirrored ? (100 - shape.x) : shape.x;
        const screenX = (effectiveShapeX / 100) * containerW;
        const screenY = (shape.y / 100) * containerH;

        const centerX = (screenX + offsetX) / videoScale;
        const centerY = (screenY + offsetY) / videoScale;

        // Zoom Synchronization: divide by zoom to capture the smaller zoomed-in area of the raw video
        const captureSize = ((shape.scale / 100) * 245 * (1 / videoScale)) / zoom;

        ctx.drawImage(
            video,
            centerX - captureSize / 2,
            centerY - captureSize / 2,
            captureSize,
            captureSize,
            0,
            0,
            canvas.width,
            canvas.height
        );

        // 3. Peak-Finding Local Search (to handle jitter)
        const frameData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const maskData = maskCtx.getImageData(0, 0, maskCanvas.width, maskCanvas.height);

        const offsets = [
            { dx: 0, dy: 0 },
            { dx: -3, dy: 0 }, { dx: 3, dy: 0 },
            { dx: 0, dy: -3 }, { dx: 0, dy: 3 }
        ];

        let bestScore = 0;

        for (const { dx, dy } of offsets) {
            let totalError = 0;
            let relevantPixels = 0;
            let frameSum = 0;
            let maskSum = 0;
            let count = 0;

            for (let y = 10; y < maskCanvas.height - 10; y++) {
                for (let x = 10; x < maskCanvas.width - 10; x++) {
                    const mIdx = (y * maskCanvas.width + x) * 4;
                    if (maskData.data[mIdx + 3] > 60) {
                        const fIdx = ((y + dy) * canvas.width + (x + dx)) * 4;
                        const fb = (frameData.data[fIdx] + frameData.data[fIdx + 1] + frameData.data[fIdx + 2]) / 3;
                        const mb = (maskData.data[mIdx] + maskData.data[mIdx + 1] + maskData.data[mIdx + 2]) / 3;
                        frameSum += fb;
                        maskSum += mb;
                        count++;
                    }
                }
            }

            if (count === 0) continue;

            const frameMean = frameSum / count;
            const maskMean = maskSum / count;
            const meanDiff = frameMean - maskMean;

            for (let y = 10; y < maskCanvas.height - 10; y++) {
                for (let x = 10; x < maskCanvas.width - 10; x++) {
                    const mIdx = (y * maskCanvas.width + x) * 4;
                    if (maskData.data[mIdx + 3] > 60) {
                        const fIdx = ((y + dy) * canvas.width + (x + dx)) * 4;
                        const fb = (frameData.data[fIdx] + frameData.data[fIdx + 1] + frameData.data[fIdx + 2]) / 3;
                        const mb = (maskData.data[mIdx] + maskData.data[mIdx + 1] + maskData.data[mIdx + 2]) / 3;
                        const normalizedFB = fb - meanDiff;
                        totalError += Math.abs(normalizedFB - mb);
                        relevantPixels++;
                    }
                }
            }

            const avgError = totalError / relevantPixels;
            const score = Math.round(Math.max(0, 100 - (avgError / 1.0)));
            if (score > bestScore) bestScore = score;
        }

        onMatchUpdate(bestScore);

        if (bestScore >= matching.threshold) {
            const now = Date.now();
            if (now - lastAlertTimeRef.current > 3000) {
                lastAlertTimeRef.current = now;
                window.alert(`SUCCESSFULLY MATCHED! (${bestScore}%)`);
            }
        }
    }, [videoRef, shape, matching, onMatchUpdate, mirrored, zoom]);

    useEffect(() => {
        let lastTime = 0;
        const loop = (time) => {
            if (time - lastTime > 150) {
                processFrame();
                lastTime = time;
            }
            rafRef.current = requestAnimationFrame(loop);
        };

        if (matching.enabled) {
            rafRef.current = requestAnimationFrame(loop);
        } else {
            onMatchUpdate(0);
        }

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [matching.enabled, processFrame, onMatchUpdate, zoom]);
};