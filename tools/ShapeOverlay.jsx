import React, { useRef, useCallback, useState, useEffect } from 'react';

const ShapeOverlay = ({
  shape,
  onMove,
  onScaleChange,
  onRotationChange,
  onStartDrag,
  onEndDrag,
  isDragging,
}) => {
  const containerRef = useRef(null);
  const touchStartDistRef = useRef(null);
  const touchStartScaleRef = useRef(100);
  const [svgContent, setSvgContent] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Load and process custom SVG content
  useEffect(() => {
    if (shape.type === 'custom' && shape.customType === 'svg' && shape.customSrc) {
      fetch(shape.customSrc)
        .then(res => res.text())
        .then(svgText => {
          setSvgContent(svgText);
          setImageLoaded(true);
        })
        .catch(err => {
          console.error('Failed to load SVG:', err);
          setSvgContent(null);
        });
    } else if (shape.type === 'custom' && shape.customType === 'image' && shape.customSrc) {
      setImageLoaded(true);
    } else {
      setSvgContent(null);
      setImageLoaded(false);
    }
  }, [shape.type, shape.customSrc, shape.customType]);

  const baseSize = 150;
  const currentScale = shape.scale / 100;
  const scaledSize = baseSize * currentScale;

  // Account for rotation by using diagonal to ensure shape fits at any angle
  const diagonal = scaledSize * 1.415;
  const viewBoxSize = Math.max(200, diagonal + (shape.strokeWidth * 2) + 40);
  const halfViewBox = viewBoxSize / 2;

  const handleMouseDown = useCallback(
    (e) => {
      e.preventDefault();
      onStartDrag();
    },
    [onStartDrag]
  );

  const getShapePath = () => {
    switch (shape.type) {
      case 'rectangle':
        return (
          <rect
            x={-scaledSize / 2}
            y={-scaledSize / 2}
            width={scaledSize}
            height={scaledSize}
            rx={shape.cornerRadius}
            ry={shape.cornerRadius}
            fill={shape.fillColor}
            fillOpacity={shape.fillOpacity}
            stroke={shape.strokeColor}
            strokeWidth={shape.strokeWidth}
          />
        );
      case 'circle':
        return (
          <ellipse
            cx={0}
            cy={0}
            rx={scaledSize / 2}
            ry={scaledSize / 2}
            fill={shape.fillColor}
            fillOpacity={shape.fillOpacity}
            stroke={shape.strokeColor}
            strokeWidth={shape.strokeWidth}
          />
        );
      case 'triangle': {
        const h = scaledSize;
        const w = scaledSize;
        return (
          <polygon
            points={`0,${-h / 2} ${w / 2},${h / 2} ${-w / 2},${h / 2}`}
            fill={shape.fillColor}
            fillOpacity={shape.fillOpacity}
            stroke={shape.strokeColor}
            strokeWidth={shape.strokeWidth}
            strokeLinejoin="round"
          />
        );
      }
      case 'star': {
        const outerRadius = scaledSize / 2;
        const innerRadius = outerRadius * 0.4;
        const points = shape.starPoints;
        let starPoints = '';
        for (let i = 0; i < points * 2; i++) {
          const radius = i % 2 === 0 ? outerRadius : innerRadius;
          const angle = (Math.PI / points) * i - Math.PI / 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          starPoints += `${x},${y} `;
        }
        return (
          <polygon
            points={starPoints.trim()}
            fill={shape.fillColor}
            fillOpacity={shape.fillOpacity}
            stroke={shape.strokeColor}
            strokeWidth={shape.strokeWidth}
            strokeLinejoin="round"
          />
        );
      }
      case 'cross': {
        const crossSize = scaledSize;
        const thickness = shape.lineThickness;
        return (
          <g>
            <rect
              x={-crossSize / 2}
              y={-thickness / 2}
              width={crossSize}
              height={thickness}
              fill={shape.strokeColor}
            />
            <rect
              x={-thickness / 2}
              y={-crossSize / 2}
              width={thickness}
              height={crossSize}
              fill={shape.strokeColor}
            />
          </g>
        );
      }
      case 'line': {
        const lineLength = scaledSize;
        return (
          <line
            x1={-lineLength / 2}
            y1={0}
            x2={lineLength / 2}
            y2={0}
            stroke={shape.strokeColor}
            strokeWidth={shape.lineThickness}
            strokeLinecap="round"
          />
        );
      }
      case 'custom':
        // Custom shape - display uploaded image/SVG
        if (shape.customSrc) {
          return (
            <image
              href={shape.customSrc}
              x={-scaledSize / 2}
              y={-scaledSize / 2}
              width={scaledSize}
              height={scaledSize}
              preserveAspectRatio="xMidYMid meet"
            />
          );
        }
        return null;
      default:
        return null;
    }
  };

  const getDistance = (touches) => {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };


  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      touchStartDistRef.current = getDistance(e.touches);
      touchStartScaleRef.current = shape.scale;
    } else {
      onStartDrag();
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2 && touchStartDistRef.current !== null) {
      const currentDist = getDistance(e.touches);
      const ratio = currentDist / touchStartDistRef.current;
      const newScale = Math.min(500, Math.max(50, touchStartScaleRef.current * ratio));
      onScaleChange(newScale);
    }
  };

  const handleTouchEnd = () => {
    touchStartDistRef.current = null;
    onEndDrag();
  };

  return (
    <div
      ref={containerRef}
      className="absolute select-none"
      style={{
        left: `${shape.x}%`,
        top: `${shape.y}%`,
        width: `${viewBoxSize}px`,
        height: `${viewBoxSize}px`,
        transform: 'translate(-50%, -50%)',
        touchAction: 'none',
        cursor: isDragging ? 'grabbing' : 'grab',
        zIndex: 10,
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`${-halfViewBox} ${-halfViewBox} ${viewBoxSize} ${viewBoxSize}`}
        className={`transition-opacity duration-150 ${isDragging ? 'opacity-90' : 'opacity-100'}`}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ pointerEvents: 'auto' }}
      >
        <g
          transform={`rotate(${shape.rotation})`}
          className="transition-transform duration-75"
        >
          {getShapePath()}
        </g>
      </svg>
      {/* Invisible drag handle padding */}
      <div
        className="absolute -inset-4 pointer-events-auto"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      />
    </div>
  );
};

export default ShapeOverlay;