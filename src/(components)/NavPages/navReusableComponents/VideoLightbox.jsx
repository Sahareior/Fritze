import React from "react";
import {
  FaPlay,
  FaDownload,
  FaXmark,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";

const VideoLightbox = ({
  isOpen,
  onClose,
  currentItem,
  onNext,
  onPrev,
  type = "video",
}) => {
  if (!isOpen || !currentItem) return null;

  return (
    <div className="fixed inset-0 bg-[#0B0B0B] z-50 flex flex-col items-center justify-center animate-fadeIn overflow-y-auto">
      {/* Top Controls */}
      <div className="absolute top-4 right-4 md:top-8 md:right-12 z-20">
        <button
          onClick={onClose}
          className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
        >
          <FaXmark size={20} className="md:w-6 md:h-6" />
        </button>
      </div>

      {/* Navigation - Prev */}
      <button
        onClick={onPrev}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-200 z-20 backdrop-blur-sm"
      >
        <FaChevronLeft size={16} className="md:w-5 md:h-5" />
      </button>

      {/* Navigation - Next */}
      <button
        onClick={onNext}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-200 z-20 backdrop-blur-sm"
      >
        <FaChevronRight size={16} className="md:w-5 md:h-5" />
      </button>

      {/* Content Container */}
      <div className="w-full px-4 md:px-6 py-16 md:py-0 flex flex-col items-center justify-center min-h-screen md:min-h-0">
        {/* Main Media Area */}
        <div className="relative w-full max-w-[95vw] md:max-w-5xl flex justify-center mb-4 md:mb-10">
          <div className="relative max-h-[40vh] md:max-h-[60vh] w-full flex justify-center overflow-hidden rounded-lg shadow-2xl group cursor-pointer bg-black/20">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="w-full h-full object-contain select-none"
              style={{ maxHeight: '40vh', objectFit: 'contain' }}
            />
            {/* Big Play Button Overlay for Videos */}
            {type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 md:w-24 md:h-24 rounded-full bg-[#F97415] flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                  <FaPlay className="ml-0.5 md:ml-2" size={16} className="md:w-6 md:h-6" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Info & CTA */}
        <div className="text-center w-full max-w-2xl px-2 md:px-4 pb-8 md:pb-0">
          <div className="flex items-center justify-center gap-3 mb-2">
            <p className="text-[#F97415] text-[10px] md:text-[12px] font-bold uppercase tracking-wider">
              {currentItem.category}
            </p>
          </div>

          <h2 className="text-white lora text-[20px] md:text-[40px] font-semibold mb-2 md:mb-3 leading-tight break-words">
            {currentItem.title}
          </h2>
          <p className="text-[#8E98A8] raleway text-[12px] md:text-[16px] mb-6 md:mb-8 leading-relaxed line-clamp-3 md:line-clamp-none px-2 md:px-0">
            {currentItem.desc}
          </p>

          <button className="bg-[#F97415] text-white px-5 md:px-10 py-2.5 md:py-4 rounded-lg font-bold raleway text-sm md:text-base flex items-center gap-2 mx-auto hover:bg-[#E86400] transition-colors shadow-lg">
            <FaDownload size={14} className="md:w-[18px] md:h-[18px]" /> 
            <span className="text-xs md:text-base whitespace-nowrap">
              {type === "video" ? "Download HD Content" : "Download High-Res"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoLightbox;