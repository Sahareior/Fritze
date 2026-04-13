import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack, IoCloseCircle } from "react-icons/io5";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-gray-500 text-sm font-medium hover:bg-gray-50 transition-colors mb-8"
    >
      <IoArrowBack className="text-lg" />
      <span>Back</span>
    </button>
  );
};

const PhotoItem = ({ id }) => (
  <div className="flex flex-col items-center gap-2 group">
    <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
      <img
        src="https://images.unsplash.com/photo-1543739225-349f2b87641d?auto=format&fit=crop&q=80&w=200"
        alt={`Upload ${id}`}
        className="w-full h-full object-cover"
      />
      <button className="absolute top-1 right-1 text-red-500 bg-white rounded-full hover:scale-110 transition-transform shadow-sm">
        <IoCloseCircle size={20} />
      </button>
    </div>
    <span className="text-[10px] text-gray-400 font-medium">Image - {id}</span>
  </div>
);

const UploadBulkPhotos = () => {
  // Creating an array of 16 dummy photos to match the screenshot density
  const photos = Array.from({ length: 16 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-[#fcfbfa] p-10 raleway text-gray-700">
      <div className="max-w-7xl mx-auto">
        <BackButton />

        <div className="mb-10">
          <h1 className="lora text-[36px] font-bold text-[#344454] mb-8 text-center md:text-left">
            Upload Tour Photos
          </h1>

          {/* Photos Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 mb-14">
            {photos.map((id) => (
              <PhotoItem key={id} id={1} /> 
            ))}
          </div>

          {/* Tour Info Description */}
          <div className="text-center mb-12">
            <h2 className="lora text-2xl font-bold text-[#895A3E] mb-2">
              Little Havana — Echoes of Exile
            </h2>
            <p className="text-gray-400 text-sm">
              Go to Guest Account "My Tours" and View report to see photos
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto min-w-[280px] py-4 bg-white border-2 border-[#fb8500] text-[#fb8500] rounded-2xl font-bold text-base hover:bg-orange-50 transition-all">
              Add more
            </button>
            <button className="w-full sm:w-auto min-w-[280px] py-4 bg-[#fb8500] text-white rounded-2xl font-bold text-base hover:bg-[#e67a00] transition-all shadow-lg shadow-orange-100">
              Upload Photos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadBulkPhotos;