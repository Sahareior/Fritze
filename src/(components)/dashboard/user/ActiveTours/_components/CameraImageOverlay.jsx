import React from "react";

const CameraImageOverlay = () => {
  return (
    <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
      
      {/* Background Image (camera simulation) */}
      <img
        src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
        alt="camera"
        className="w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Scan Area */}
      <div className="absolute inset-0 flex items-center justify-center">
        
        <div className="relative w-[200px] h-[200px]">
          
          {/* Transparent center */}
          <div className="absolute inset-0 border-2 border-white/20 rounded-lg" />

          {/* Corner Borders */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white rounded-tl-lg" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white rounded-tr-lg" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white rounded-bl-lg" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white rounded-br-lg" />

        </div>

      </div>

    </div>
  );
};

export default CameraImageOverlay;