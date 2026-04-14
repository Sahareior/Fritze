import React from "react";
import { MapPin, SkipBack, SkipForward } from "lucide-react";

const AudioPage = () => {
  return (
    <div className="bg-[#24343d] min-h-screen text-white px-4 py-6 flex flex-col">
      
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-lg font-semibold">Hi user !</h1>
        <p className="text-sm text-gray-300">
          Let’s make your experience different
        </p>
      </div>

      {/* Audio Card */}
      <div className="bg-[#0f1b2a] rounded-3xl p-6 mx-auto w-full max-w-sm border border-gray-600">
        
        {/* Circle Visualizer */}
        <div className="flex justify-center items-center mb-6">
          <div className="relative w-40 h-40 rounded-full border border-gray-700 flex items-center justify-center">
            
            {/* Outer ring */}
            <div className="absolute w-28 h-28 rounded-full border border-orange-500 border-dashed"></div>

            {/* Inner animation bars */}
            <div className="flex gap-1">
              <div className="w-1 h-6 bg-orange-500 rounded"></div>
              <div className="w-1 h-10 bg-orange-500 rounded"></div>
              <div className="w-1 h-6 bg-orange-500 rounded"></div>
            </div>
          </div>
        </div>

        {/* Fake waveform */}
        <div className="h-2 bg-gray-500/40 rounded-full mb-4"></div>

        {/* Progress bar */}
        <div className="mb-4">
          <input
            type="range"
            className="w-full accent-orange-500"
            defaultValue={30}
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>1:45</span>
            <span>4:20</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-2">
          <SkipBack className="text-gray-400" />

          <button className="bg-orange-500 hover:bg-orange-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
            ▶
          </button>

          <SkipForward className="text-gray-400" />
        </div>
      </div>

      {/* Title */}
      <div className="mt-6 flex items-center gap-2 text-orange-400 text-lg font-semibold">
        <MapPin size={18} />
        <h2>Calle Ocho Murals</h2>
      </div>

      {/* Date */}
      <p className="text-sm text-gray-400 mt-1">
        Friday, 8 April 2026
      </p>

      {/* Description */}
      <div className="mt-4">
        <h3 className="font-semibold mb-1">Description</h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          Walk through a curated gallery of street murals telling the story of
          Cuban immigration, resilience, and celebration. Each mural has a
          hidden symbol — see if you can find them all!
        </p>
      </div>
    </div>
  );
};

export default AudioPage;