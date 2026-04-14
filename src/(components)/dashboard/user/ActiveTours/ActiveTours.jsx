import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Zap, Plus, Minus, RotateCw } from 'lucide-react';
import ShapeOverlay from '../../../../../tools/ShapeOverlay';
import { useMatchDetector } from '../../../../../tools/useMatchDetector';



const initialShape = {
  type: 'rectangle',
  x: 50,
  y: 50,
  scale: 100,
  rotation: 0,
  strokeColor: '#6366f1',
  strokeWidth: 3,
  fillColor: '#6366f1',
  fillOpacity: 0.2,
  cornerRadius: 8,
  starPoints: 5,
  lineThickness: 4,
};

const initialAlignment = {
  showGrid: false,
  showCenterLines: false,
  snapToCenter: true,
};

const initialCamera = {
  facingMode: 'environment',
  mirrored: false,
  zoom: 1,
};

const initialMatching = {
  enabled: false,
  threshold: 85,
  lastMatchPercentage: 0,
};

const ActiveTours = ({ initialImage }) => {
  const [shape, setShape] = useState(initialShape);
  const [alignment, setAlignment] = useState(initialAlignment);
  const [camera, setCamera] = useState(initialCamera);
  const [matching, setMatching] = useState(initialMatching);
  const [isLocked, setIsLocked] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [cameraError, setCameraError] = useState(null);
  const [cameraReady, setCameraReady] = useState(false);

  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const streamRef = useRef(null);

  // Camera setup
  const setupCamera = useCallback(async () => {
    try {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }

      const constraints = {
        video: {
          facingMode: camera.facingMode,
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current?.play();
          setCameraReady(true);
          setCameraError(null);
        };
      }
    } catch (err) {
      console.error('Camera error:', err);
      setCameraError('Unable to access camera.');
      setCameraReady(false);
    }
  }, [camera.facingMode]);

  useEffect(() => {
    setupCamera();
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, [setupCamera]);

  // Handle initial image
  useEffect(() => {
    if (initialImage) {
      setShape(prev => ({
        ...prev,
        type: 'custom',
        customSrc: initialImage,
      }));
      setMatching(prev => ({ ...prev, enabled: true }));
    }
  }, [initialImage]);

  const handleFlipCamera = () => {
    setCamera((prev) => ({
      ...prev,
      facingMode: prev.facingMode === 'user' ? 'environment' : 'user',
    }));
  };

  const handleShapeChange = (updates) => {
    setShape((prev) => ({ ...prev, ...updates }));
  };

  const handleAlignmentChange = (updates) => {
    setAlignment((prev) => ({ ...prev, ...updates }));
  };

  const handleCameraChange = (updates) => {
    setCamera((prev) => ({ ...prev, ...updates }));
  };

  const handleMatchingChange = (updates) => {
    setMatching((prev) => ({ ...prev, ...updates }));
  };

  useMatchDetector({
    videoRef,
    shape,
    matching,
    onMatchUpdate: (percentage) => setMatching(p => ({ ...p, lastMatchPercentage: percentage })),
    mirrored: camera.mirrored,
    zoom: camera.zoom,
  });

  const handleDragStart = () => {
    if (!isLocked) {
      setIsDragging(true);
    }
  };

  const updateShapePosition = useCallback((clientX, clientY) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let newX = ((clientX - rect.left) / rect.width) * 100;
    let newY = ((clientY - rect.top) / rect.height) * 100;
    if (alignment.snapToCenter) {
      const snapThreshold = 3;
      if (Math.abs(newX - 50) < snapThreshold) newX = 50;
      if (Math.abs(newY - 50) < snapThreshold) newY = 50;
    }
    newX = Math.max(5, Math.min(95, newX));
    newY = Math.max(5, Math.min(95, newY));
    setShape((prev) => ({ ...prev, x: newX, y: newY }));
  }, [alignment.snapToCenter]);

  useEffect(() => {
    const handleNativeMove = (e) => {
      if (!isDragging || isLocked) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      updateShapePosition(clientX, clientY);
    };
    const handleUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', handleNativeMove);
      window.addEventListener('mouseup', handleUp);
      window.addEventListener('touchmove', handleNativeMove);
      window.addEventListener('touchend', handleUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleNativeMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchmove', handleNativeMove);
      window.removeEventListener('touchend', handleUp);
    };
  }, [isDragging, isLocked, updateShapePosition]);

  return (
    <div
      className="w-full h-full flex flex-col"
      style={{ background: 'linear-gradient(160deg, #1a2540 0%, #111827 100%)' }}
    >
      {/* ── Header ── */}
      <div className="flex items-start px-5 pt-8 pb-4 shrink-0">
        <button
          onClick={() => window.history.back()}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white mr-4 mt-1 hover:bg-white/20 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>
        <div>
          <h1 className="text-white font-semibold text-lg leading-tight">Hi user!</h1>
          <p className="text-white/50 text-sm mt-0.5">Let's make your experience different</p>
        </div>
      </div>

      {/* ── Camera Viewfinder ── */}
      <div className="flex-1 flex flex-col items-center justify-center px-5 pb-8">
        {/* Viewfinder card */}
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden group"
          style={{
            borderRadius: '20px',
            aspectRatio: '3/4',
            maxHeight: '65vh',
            background: '#0d1520',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.07), 0 24px 60px rgba(0,0,0,0.5)',
          }}
        >
          {/* Video Feed */}
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: `scaleX(${camera.mirrored ? -1 : 1}) scale(${camera.zoom})`,
              transformOrigin: 'center',
              borderRadius: '20px',
            }}
          />

          {/* Grid */}
          {alignment.showGrid && (
            <div className="absolute inset-0 pointer-events-none opacity-20" style={{ borderRadius: '20px', overflow: 'hidden' }}>
              <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white" />
              <div className="absolute left-2/3 top-0 bottom-0 w-px bg-white" />
              <div className="absolute top-1/3 left-0 right-0 h-px bg-white" />
              <div className="absolute top-2/3 left-0 right-0 h-px bg-white" />
            </div>
          )}

          {/* Shape Overlay */}
          <ShapeOverlay
            shape={shape}
            onMove={(x, y) => setShape((prev) => ({ ...prev, x, y }))}
            onScaleChange={(scale) => setShape((prev) => ({ ...prev, scale }))}
            onRotationChange={(rotation) => setShape((prev) => ({ ...prev, rotation }))}
            onStartDrag={handleDragStart}
            onEndDrag={() => setIsDragging(false)}
            isDragging={isDragging}
          />

          {/* Bottom Controls — visible on hover/tap */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleFlipCamera}
                  className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
                >
                  <RotateCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsLocked(!isLocked)}
                  className={`w-9 h-9 flex items-center justify-center rounded-full text-white transition-colors ${isLocked ? 'bg-indigo-500' : 'bg-white/10 hover:bg-white/20'}`}
                >
                  {isLocked ? '🔒' : '🔓'}
                </button>
              </div>

              {matching.enabled && (
                <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                  <Zap className={`w-3 h-3 ${matching.lastMatchPercentage >= matching.threshold ? 'text-green-400' : 'text-indigo-400'}`} />
                  <span className="text-white font-mono text-xs">{matching.lastMatchPercentage}%</span>
                </div>
              )}
            </div>
          </div>

          {/* Zoom Slider — right side */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="bg-black/60 backdrop-blur-md p-2 rounded-full border border-white/10 flex flex-col items-center gap-2">
              <button onClick={() => handleCameraChange({ zoom: Math.min(5, camera.zoom + 0.2) })} className="text-white/60 hover:text-white transition-colors">
                <Plus className="w-4 h-4" />
              </button>
              <div className="h-16 w-1 bg-white/20 rounded-full relative">
                <div className="absolute bottom-0 w-full bg-indigo-400 rounded-full transition-all" style={{ height: `${((camera.zoom - 1) / 4) * 100}%` }} />
              </div>
              <button onClick={() => handleCameraChange({ zoom: Math.max(1, camera.zoom - 0.2) })} className="text-white/60 hover:text-white transition-colors">
                <Minus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Loading spinner */}
          {!cameraReady && !cameraError && (
            <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(13,21,32,0.85)', borderRadius: '20px' }}>
              <div className="w-8 h-8 border-2 border-indigo-500/30 border-t-indigo-400 rounded-full animate-spin" />
            </div>
          )}

          {/* Error state */}
          {cameraError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center" style={{ background: 'rgba(13,21,32,0.9)', borderRadius: '20px' }}>
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              </div>
              <p className="text-red-400 text-sm">{cameraError}</p>
            </div>
          )}
        </div>

            <button  className="text-[10px] bg-orange-500 text-white px-8 py-3 rounded-md text-sm hover:bg-orange-600 transition mt-10 uppercase tracking-widest font-bold">
        Exprience
      </button>
        {/* Hint text below viewfinder */}
        <p className="text-white/30 text-xs text-center mt-4">
          Tap &amp; hold to interact with the overlay
        </p>
      </div>
    </div>
  );
};

export default ActiveTours;