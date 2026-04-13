import React from "react";
import { FaRegImages } from "react-icons/fa6";

const GuideUploadPhotos = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      
      {/* Back Button */}
      <button className="self-start mb-6 text-gray-600 flex items-center gap-2">
        ← Back
      </button>

      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-8">
        Upload Tour Photos
      </h1>

      {/* Upload Card */}
      <div className="w-full max-w-2xl bg-gray-200 rounded-xl py-16 flex flex-col items-center justify-center">
        
        {/* Icon */}
        <div className="text-orange-500 text-5xl mb-4">
          <FaRegImages />
        </div>

        {/* Title */}
        <p className="text-gray-700 font-medium">Tour Photos</p>

        {/* Subtitle */}
        <p className="text-gray-500 text-sm mt-1 text-center">
          Your photos will be shared among the guests
        </p>
      </div>

      {/* Tour Name */}
      <h2 className="mt-8 text-lg font-semibold text-orange-700 text-center">
        Little Havana – Echoes of Exile
      </h2>

      {/* Instruction */}
      <p className="text-gray-500 text-sm text-center mt-2">
        Go to Guest Account “My Tours” and View report to see photos
      </p>

      {/* Button */}
      <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md">
        Upload Photos
      </button>
    </div>
  );
};

export default GuideUploadPhotos;