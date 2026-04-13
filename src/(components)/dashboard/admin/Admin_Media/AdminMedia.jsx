import React, { useState } from "react";
import { FiSearch, FiSliders, FiUploadCloud, FiTrash2 } from "react-icons/fi";

const MediaCard = ({ name, size, date, image, onDelete }) => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-all">
    <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" />
      <button 
        onClick={onDelete}
        className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-xl text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
      >
        <FiTrash2 size={18} />
      </button>
    </div>
    <div className="p-5 bg-white border-t border-gray-50">
      <p className="font-bold text-[#344454] text-sm mb-1 truncate">{name}</p>
      <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-gray-400">
        <span>{size} MB</span>
        <span>{date}</span>
      </div>
    </div>
  </div>
);

const AdminMedia = () => {
  const [activeTab, setActiveTab] = useState("Images");

  const mediaData = [
    { id: 1, name: "domino-park.jpg", size: "2.4", date: "Mar 8, 2026", image: "https://images.unsplash.com/photo-1543739225-349f2b87641d?auto=format&fit=crop&q=80&w=400" },
    { id: 2, name: "calle-ocho.jpg", size: "3.1", date: "Mar 7, 2026", image: "https://images.unsplash.com/photo-1514336020557-e54f056bd949?auto=format&fit=crop&q=80&w=400" },
    { id: 3, name: "tower-theater.jpg", size: "2.8", date: "Mar 6, 2026", image: "https://images.unsplash.com/photo-1543739225-349f2b87641d?auto=format&fit=crop&q=80&w=400" },
    { id: 4, name: "little-havana.jpg", size: "2.2", date: "Mar 5, 2026", image: "https://images.unsplash.com/photo-1514336020557-e54f056bd949?auto=format&fit=crop&q=80&w=400" },
    { id: 5, name: "domino-park-2.jpg", size: "2.4", date: "Mar 8, 2026", image: "https://images.unsplash.com/photo-1543739225-349f2b87641d?auto=format&fit=crop&q=80&w=400" },
    { id: 6, name: "calle-ocho-2.jpg", size: "3.1", date: "Mar 7, 2026", image: "https://images.unsplash.com/photo-1514336020557-e54f056bd949?auto=format&fit=crop&q=80&w=400" },
    { id: 7, name: "tower-theater-2.jpg", size: "2.8", date: "Mar 6, 2026", image: "https://images.unsplash.com/photo-1543739225-349f2b87641d?auto=format&fit=crop&q=80&w=400" },
    { id: 8, name: "little-havana-2.jpg", size: "2.2", date: "Mar 5, 2026", image: "https://images.unsplash.com/photo-1514336020557-e54f056bd949?auto=format&fit=crop&q=80&w=400" },
  ];

  return (
    <div className="min-h-screen bg-[#fcfbfa] p-8 raleway text-gray-700 font-sans">
      <div className="max-w-8xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
          <div>
            <h1 className="lora text-4xl font-bold text-[#344454] mb-2 leading-tight tracking-tight">Media Library</h1>
            <p className="text-gray-400 font-medium">Manage your tour media assets</p>
          </div>
          <button className="flex items-center gap-2 bg-[#fb8500] text-white px-8 py-3.5 rounded-2xl font-bold text-base hover:bg-[#e67a00] transition-all shadow-lg shadow-orange-100 active:scale-95">
            <FiUploadCloud size={20} />
            <span>Upload Photos</span>
          </button>
        </div>

        {/* Toolbar Section */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
           <div className="relative flex-1">
              <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-2xl" />
              <input 
                type="text" 
                placeholder="Search photos..."
                className="w-full bg-gray-100/50 border border-gray-50 rounded-2xl py-4 pl-14 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all font-medium"
              />
           </div>
           <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-bold text-sm hover:bg-gray-50 transition-all">
              <FiSliders size={18} />
              <span>Filters</span>
           </button>
        </div>

        {/* Tabs Section */}
        <div className="relative mb-10">
          <div className="flex gap-12 px-2">
            {["Images", "Video"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-bold tracking-widest uppercase relative transition-colors ${
                  activeTab === tab ? "text-[#fb8500]" : "text-gray-400 hover:text-gray-500"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#fb8500] rounded-full shadow-[0_0_8px_rgba(251,133,0,0.3)] transition-all" />
                )}
              </button>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-100 -z-10" />
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {mediaData.map((media) => (
            <MediaCard key={media.id} {...media} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminMedia;