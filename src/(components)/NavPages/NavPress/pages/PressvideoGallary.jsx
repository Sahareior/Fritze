import React, { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaPlay,
  FaDownload,
  FaEye,
  FaXmark,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const categories = [
  "All",
  "Tour Highlights",
  "Testimonials",
  "Food Tours",
  "B-Roll",
  "Interviews",
];

const videos = [
  {
    id: 1,
    title: "Little Havana Cultural Tour",
    category: "Tour Highlights",
    views: "12.8K",
    duration: "2:45",
    image:
      "https://images.unsplash.com/photo-1603883993892-3b7c5f65f3c5?q=80&w=800",
    desc: "Experience the vibrant streets, authentic cuisine, and rich Cuban heritage of Little Havana.",
  },
  {
    id: 2,
    title: "Wynwood Art District Experience",
    category: "Tour Highlights",
    views: "18.2K",
    duration: "3:15",
    image:
      "https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?q=80&w=800",
    desc: "Explore world-class street art, local galleries, and the creative pulse of Wynwood.",
  },
  {
    id: 3,
    title: "Guest Testimonials",
    category: "Testimonials",
    views: "8.3K",
    duration: "4:20",
    image:
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=800",
    desc: "Hear from our guests about their unforgettable Miami cultural tour experiences.",
  },
  {
    id: 4,
    title: "Miami Food & Flavor Stories",
    category: "Food Tours",
    views: "15.3K",
    duration: "5:30",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    desc: "Discover authentic Cuban cuisine and hidden culinary gems with our expert guides.",
  },
  {
    id: 5,
    title: "Behind the Scenes: Tour Life",
    category: "B-Roll",
    views: "11.4K",
    duration: "2:55",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef23a6f8?q=80&w=800",
    desc: "A day in the life of our tour guides and the magic of small-group storytelling.",
  },
  {
    id: 6,
    title: "Street Art Time-Lapse",
    category: "B-Roll",
    views: "23.1K",
    duration: "2:10",
    image:
      "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=800",
    desc: "Stunning murals and urban art transforming Miami's creative districts.",
  },
  {
    id: 7,
    title: "Founder Interview: Maria Rodriguez",
    category: "Interviews",
    views: "9.5K",
    duration: "8:45",
    image:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800",
    desc: "Our founder shares her vision for authentic cultural tourism in Miami.",
  },
  {
    id: 8,
    title: "Cuban Coffee Tradition",
    category: "Food Tours",
    views: "11.2K",
    duration: "3:25",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800",
    desc: "The art and culture behind Miami's beloved cafecito tradition.",
  },
  {
    id: 9,
    title: "Neighborhood Walking Footage",
    category: "B-Roll",
    views: "13.0K",
    duration: "12:20",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=800",
    desc: "Comprehensive b-roll of Miami's most vibrant neighborhoods for media use.",
  },
];

import VideoLightbox from "../../navReusableComponents/VideoLightbox";


const PressvideoGallary = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredVideos =
    activeCategory === "All"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  const handleOpenLightbox = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % filteredVideos.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? filteredVideos.length - 1 : prev - 1,
    );
  };

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent scroll when modal open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  return (
    <div className="bg-white min-h-screen">
      {/* HEADER */}
      <section className="bg-gray-50/50 py-16">
        <div className="max-w-8xl mx-auto px-20">
          <Link
            to="/press"
            className="flex items-center gap-2 text-orange-500 font-medium raleway text-sm mb-6 hover:underline"
          >
            <FaArrowLeft size={12} /> Back to Press & Media
          </Link>

          <h1 className="lora text-[48px] font-semibold text-[#2A3C48] mb-4">
            Video Content Library
          </h1>

          <p className="raleway text-[18px] text-gray-500 max-w-3xl leading-relaxed">
            B-roll footage, tour highlights, testimonials, and interviews
            available for media use with proper attribution.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-10">
        <div className="max-w-8xl mx-auto px-20">
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedIndex(0);
                }}
                className={`px-6 py-2 rounded-full border transition-all duration-200 text-sm font-medium ${
                  activeCategory === cat
                    ? "bg-[#F97415] text-white border-[#F97415]"
                    : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="pb-20">
        <div className="max-w-8xl mx-auto px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => (
              <div
                key={video.id}
                onClick={() => handleOpenLightbox(index)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video group overflow-hidden">
                  <img
                    src={video.image}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#F97415] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <FaPlay className="ml-1" size={18} />
                    </div>
                  </div>
                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[10px] px-2 py-1 rounded font-mono">
                    {video.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-orange-500 bg-orange-50 px-2 py-1 rounded">
                      {video.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
                      <FaEye size={12} /> {video.views}
                    </span>
                  </div>

                  <h3 className="lora text-[20px] font-semibold text-gray-800 mb-2 leading-tight">
                    {video.title}
                  </h3>

                  <p className="raleway text-[13px] text-gray-500 leading-relaxed mb-6 flex-grow">
                    {video.desc}
                  </p>

                  <button className="w-full border border-orange-500 text-orange-500 py-2.5 rounded-lg text-sm font-bold raleway flex items-center justify-center gap-2 hover:bg-orange-50 transition-colors duration-200">
                    <FaDownload size={14} /> Download HD
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-screen Video Lightbox Modal */}
      <VideoLightbox
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentItem={filteredVideos[selectedIndex]}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default PressvideoGallary;
