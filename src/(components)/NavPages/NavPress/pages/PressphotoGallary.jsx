import React, { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaXmark,
  FaChevronLeft,
  FaChevronRight,
  FaDownload,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const categories = [
  "All",
  "Neighborhoods",
  "Food & Drink",
  "Street Art",
  "Experiences",
];

const photos = [
  {
    id: 1,
    title: "Little Havana Streets",
    category: "Neighborhoods",
    image:
      "https://images.unsplash.com/photo-1603883993892-3b7c5f65f3c5?q=80&w=1200",
    desc: "Vibrant street scenes capturing the essence of Little Havana's Cuban heritage.",
  },
  {
    id: 2,
    title: "Little Havana Streets",
    category: "Neighborhoods",
    image:
      "https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?q=80&w=1200",
    desc: "Vibrant street scenes capturing the essence of Little Havana's Cuban heritage.",
  },
  {
    id: 3,
    title: "Little Havana Streets",
    category: "Neighborhoods",
    image:
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=1200",
    desc: "Vibrant street scenes capturing the essence of Little Havana's Cuban heritage.",
  },
  {
    id: 4,
    title: "Little Havana Streets",
    category: "Neighborhoods",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200",
    desc: "Vibrant street scenes capturing the essence of Little Havana's Cuban heritage.",
  },
  {
    id: 5,
    title: "Little Havana Streets",
    category: "Neighborhoods",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef23a6f8?q=80&w=1200",
    desc: "Vibrant street scenes capturing the essence of Little Havana's Cuban heritage.",
  },
  {
    id: 6,
    title: "Little Havana Streets",
    category: "Neighborhoods",
    image:
      "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=1200",
    desc: "Vibrant street scenes capturing the essence of Little Havana's Cuban heritage.",
  },
  {
    id: 7,
    title: "Little Havana Streets",
    category: "Neighborhoods",
    image:
      "https://images.unsplash.com/photo-1566847438217-76e82d383f84?q=80&w=1200",
    desc: "Vibrant street scenes capturing the essence of Little Havana's Cuban heritage.",
  },
  {
    id: 8,
    title: "Little Havana Streets",
    category: "Neighborhoods",
    image:
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=1200",
    desc: "Vibrant street scenes capturing the essence of Little Havana's Cuban heritage.",
  },
  {
    id: 9,
    title: "Little Havana Streets",
    category: "Neighborhoods",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200",
    desc: "Vibrant street scenes capturing the essence of Little Havana's Cuban heritage.",
  },
  {
    id: 10,
    title: "Little Havana Streets",
    category: "Neighborhoods",
    image:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200",
    desc: "Vibrant street scenes capturing the essence of Little Havana's Cuban heritage.",
  },
  {
    id: 11,
    title: "Little Havana Streets",
    category: "Neighborhoods",
    image:
      "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1200",
    desc: "Vibrant street scenes capturing the essence of Little Havana's Cuban heritage.",
  },
  {
    id: 12,
    title: "Little Havana Streets",
    category: "Neighborhoods",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1200",
    desc: "Vibrant street scenes capturing the essence of Little Havana's Cuban heritage.",
  },
  {
    id: 13,
    title: "Little Havana Streets",
    category: "Neighborhoods",
    image:
      "https://images.unsplash.com/photo-1512100356956-c1227c331f01?q=80&w=1200",
    desc: "Vibrant street scenes capturing the essence of Little Havana's Cuban heritage.",
  },
  {
    id: 14,
    title: "Little Havana Streets",
    category: "Neighborhoods",
    image:
      "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=1200",
    desc: "Vibrant street scenes capturing the essence of Little Havana's Cuban heritage.",
  },
  {
    id: 15,
    title: "Little Havana Streets",
    category: "Neighborhoods",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",
    desc: "Vibrant street scenes capturing the essence of Little Havana's Cuban heritage.",
  },
  {
    id: 16,
    title: "Little Havana Streets",
    category: "Neighborhoods",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200",
    desc: "Vibrant street scenes capturing the essence of Little Havana's Cuban heritage.",
  },
];

import VideoLightbox from "../../navReusableComponents/VideoLightbox";


const PressphotoGallary = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  const handleOpenLightbox = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % filteredPhotos.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? filteredPhotos.length - 1 : prev - 1,
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
            Photo Gallery
          </h1>

          <p className="raleway text-[18px] text-gray-500 max-w-2xl leading-relaxed">
            High-resolution images for media use. All photos are available for
            download and use with proper attribution.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => handleOpenLightbox(index)}
                className="relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 aspect-square cursor-pointer"
              >
                {/* Image */}
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                  <p className="text-[#F97415] text-[10px] font-bold uppercase tracking-wider mb-1">
                    {photo.category}
                  </p>
                  <h3 className="text-white lora text-[18px] font-semibold mb-1">
                    {photo.title}
                  </h3>
                  <p className="text-gray-300 raleway text-[11px] leading-relaxed line-clamp-2">
                    {photo.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-screen Lightbox Modal */}
      <VideoLightbox
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentItem={filteredPhotos[selectedIndex]}
        onNext={handleNext}
        onPrev={handlePrev}
        type="photo"
      />
    </div>
  );
};

export default PressphotoGallary;
