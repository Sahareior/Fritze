import React from "react";
import { FiUploadCloud } from "react-icons/fi";

const Step1 = () => {
  return (
    <div className="raleway">
      <div className="mb-10">
        <p className="text-sm text-gray-600 mb-3 flex items-center gap-2">
          🖼 Hero Image/Video
        </p>

        <div className="border-2 border-dashed border-gray-400 rounded-xl h-64 flex flex-col items-center justify-center text-center bg-white">
          
          {/* Upload Icon */}
          <div className="text-4xl text-gray-500 mb-3">⬆️</div>

          <p className="text-gray-600 text-sm">
            Upload photos of this location
          </p>
          <p className="text-gray-400 text-xs mt-1">
            PNG, JPG • Multiple files supported
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step1;