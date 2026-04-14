import React from "react";
import { ArrowLeft } from "lucide-react";

const VideoPage = () => {
  return (
    <div className="bg-[#24343d] min-h-screen flex flex-col">
      
      {/* Header */}
      <div className="flex items-center justify-center relative text-white py-4 px-4">
        <button className="absolute left-4">
          <ArrowLeft size={20} />
        </button>

        <div className="text-center">
          <h1 className="text-sm font-semibold">Hi user !</h1>
          <p className="text-xs text-gray-300">
            Let’s make your experience different
          </p>
        </div>
      </div>

      {/* Video Container */}
      <div className="px-3 mt-2">
        <div className="rounded-3xl overflow-hidden">
          
          <video
            className="w-full h-[75vh] object-cover rounded-3xl"
            src="https://www.w3schools.com/html/mov_bbb.mp4" // replace with your video
            autoPlay
            loop
            muted
            controls
            playsInline
          />
          
        </div>
      </div>

    </div>
  );
};

export default VideoPage;