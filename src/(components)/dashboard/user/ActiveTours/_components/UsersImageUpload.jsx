import React from "react";
import { ArrowLeft, Upload, Camera } from "lucide-react";

const UsersImageUpload = () => {
  return (
    <div className="bg-[#f2f2f2] min-h-screen flex flex-col justify-between">
      
      {/* Top Section */}
      <div className="px-4 pt-4">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <ArrowLeft size={20} />
          <h1 className="text-lg font-semibold">Add your Image</h1>
        </div>

        {/* Upload Box */}
        <div className="border-2 border-dashed border-gray-400 rounded-xl p-6 flex flex-col items-center justify-center text-center">
          
          <Upload size={40} className="mb-3 text-gray-600" />

          <p className="text-sm text-gray-600">
            Upload photos of this location
          </p>

          <p className="text-xs text-gray-400 mt-1">
            PNG, JPG, Video File
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-400 text-sm">Or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Take Photo Button */}
        <button className="w-full flex items-center justify-center gap-2 border-2 border-orange-500 text-gray-800 py-3 rounded-full font-medium hover:bg-orange-50 transition">
          <Camera size={18} />
          Take Photo
        </button>

      </div>

      {/* Bottom CTA */}
      <div className="p-4">
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-full font-semibold text-lg transition">
          Continue
        </button>
      </div>
    </div>
  );
};

export default UsersImageUpload;