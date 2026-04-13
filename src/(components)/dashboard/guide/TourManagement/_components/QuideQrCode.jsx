import React from "react";
import { MdOutlineQrCode } from "react-icons/md";

const GuideQrCode = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-10 px-4">
      
      {/* Back Button */}
      <button className="self-start mb-6 text-gray-600 flex items-center gap-2">
        ← Back
      </button>

      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-8">
        Generated QR Code
      </h1>

      {/* QR Container */}
      <div className="w-full max-w-2xl border-2 border-dashed border-orange-300 rounded-xl p-12 flex flex-col items-center justify-center bg-white">
        
        {/* QR Icon Placeholder */}
        <div className="text-orange-500 text-5xl mb-4">
      <MdOutlineQrCode size={100} />
        </div>

        {/* Instruction Text */}
        <p className="text-gray-500 text-sm">
          Scan QR code from Guest phone
        </p>
      </div>

      {/* Tour Title */}
      <h2 className="mt-8 text-lg font-semibold text-orange-700 text-center">
        Little Havana – Echoes of Exile
      </h2>

      {/* Subtitle */}
      <p className="text-gray-500 text-sm text-center mt-2">
        Go to Guest Account “My Tours” and Enter Tour to begin the experience
      </p>

      {/* Button */}
      <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md">
        Tap to Close
      </button>
    </div>
  );
};

export default GuideQrCode;