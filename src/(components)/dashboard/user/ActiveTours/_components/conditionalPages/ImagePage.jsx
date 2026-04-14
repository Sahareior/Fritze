import React from "react";
import { MapPin } from "lucide-react";

const ImagePage = () => {
  return (
    <div className="bg-[#24343d] min-h-screen text-white px-4 py-6 flex flex-col">
      
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-lg font-semibold">Hi user !</h1>
        <p className="text-sm text-gray-300">
          Let’s make your experience different
        </p>
      </div>

      {/* Horizontal Image Scroll */}
      <div className="flex gap-3 overflow-x-auto pb-3">
        {[1, 2, 3].map((item) => (
          <img
            key={item}
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
            alt="preview"
            className="w-28 h-20 rounded-lg object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Main Image Card */}
      <div className="mt-4">
        <img
          src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
          alt="main"
          className="w-full h-64 rounded-xl object-cover"
        />
      </div>

      {/* Title */}
      <div className="mt-4 flex items-center gap-2 text-orange-400 font-semibold text-lg">
        <MapPin size={18} />
        <h2>Calle Ocho Murals</h2>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-300 mt-2 leading-relaxed">
        Walk through a curated gallery of street murals telling the story of
        Cuban immigration, resilience, and celebration. Each mural has a hidden
        symbol — see if you can find them all!
      </p>

      {/* Button */}
      <button className="mt-auto bg-orange-500 hover:bg-orange-600 transition py-3 rounded-lg font-semibold uppercase tracking-widest">
        Complete
      </button>
    </div>
  );
};

export default ImagePage;