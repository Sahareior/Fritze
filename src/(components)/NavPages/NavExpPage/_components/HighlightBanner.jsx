import React from "react";

const HighlightBanner = () => {
  return (
    <section className="py-6">
      <div className="bg-[#2f3e46] text-white rounded-2xl py-10 px-6 text-center w-full mx-auto">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-10 h-10 rounded-md border-2 border-orange-500 flex items-center justify-center text-orange-500 text-xl">
            📱
          </div>
        </div>

        {/* Title */}
        <h3
          className="font-serif lora text-[28px] font-semibold 
         mb-2"
        >
          No app. No login. Works on any smartphone.
        </h3>

        {/* Subtitle */}
        <p className="text-sm raleway text-[16px] font-medium text-gray-300">
          Technology should enhance the story, not complicate it.
        </p>
      </div>
      
    </section>
  );
};

export default HighlightBanner;
