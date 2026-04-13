import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack, IoLocationOutline, IoStarOutline } from "react-icons/io5";
import { FaRegImage } from "react-icons/fa6";
import { MdOutlineAudiotrack, MdOutlineVideocam } from "react-icons/md";

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

const GalleryItem = ({ image, name, size, date }) => (
  <div className="min-w-[240px] h-[280px] bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col relative group cursor-pointer">
    <div className="flex-1 relative bg-gray-100">
      <img src={image} alt={name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <FaRegImage className="text-[#fb8500] text-3xl drop-shadow-sm" />
      </div>
    </div>
    <div className="bg-[#0b2b4d] p-3 text-white">
      <div className="text-[12px] font-medium truncate mb-1">{name}</div>
      <div className="flex justify-between items-center text-[10px] text-blue-200 opacity-80">
        <span>{size} MB</span>
        <span>{date}</span>
      </div>
    </div>
  </div>
);

const UploadBox = ({ icon: Icon, label, className = "" }) => (
  <div className={`border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center bg-white group hover:border-[#fb8500] hover:bg-orange-50/20 transition-all cursor-pointer ${className}`}>
    <div className="bg-[#fcfbfa] p-3 rounded-full group-hover:bg-white transition-all mb-2">
      <Icon className="text-2xl text-gray-400 group-hover:text-[#fb8500] transition-colors" />
    </div>
    <p className="text-gray-400 text-xs font-medium group-hover:text-[#fb8500]">{label}</p>
  </div>
);

const FormField = ({ label, children }) => (
  <div className="mb-6">
    <label className="block text-[#344454] text-[13px] font-semibold mb-2 ml-1">{label}</label>
    {children}
  </div>
);

const GuidePhotoInfo = () => {
  const images = [
    { id: 1, name: "domino-park.jpg", size: "2.4", date: "Mar 8, 2026", image: "https://images.unsplash.com/photo-1543739225-349f2b87641d?auto=format&fit=crop&q=80&w=400" },
    { id: 2, name: "calle-ocho.jpg", size: "3.1", date: "Mar 7, 2026", image: "https://images.unsplash.com/photo-1514336020557-e54f056bd949?auto=format&fit=crop&q=80&w=400" },
    { id: 3, name: "tower-theater.jpg", size: "2.8", date: "Mar 6, 2026", image: "https://images.unsplash.com/photo-1543739225-349f2b87641d?auto=format&fit=crop&q=80&w=400" },
    { id: 4, name: "little-havana.jpg", size: "2.2", date: "Mar 5, 2026", image: "https://images.unsplash.com/photo-1514336020557-e54f056bd949?auto=format&fit=crop&q=80&w=400" },
  ];

  return (
    <div className="min-h-screen bg-[#fcfbfa] p-6 raleway text-gray-700">
      <div className="max-w-7xl mx-auto">
        <BackButton />

        {/* Gallery Section */}
        <div className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide no-scrollbar">
          {images.map((img) => (
            <GalleryItem key={img.id} {...img} />
          ))}
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-8 shadow-[0_2px_25px_-5px_rgba(0,0,0,0.03)] border border-gray-50 mt-4">
          
          {/* Rating */}
          <div className="mb-10">
            <h3 className="text-[#344454] font-bold text-base mb-4">Rate Your Experience</h3>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <IoStarOutline key={s} className="text-3xl text-gray-300 hover:text-[#fb8500] cursor-pointer transition-colors" />
              ))}
            </div>
          </div>

          <hr className="border-gray-100 mb-10" />

          {/* Main Image Upload */}
          <UploadBox icon={FaRegImage} label="Upload Image" className="w-full h-40 mb-10" />

          {/* Form Fields */}
          <div className="max-w-6xl mx-auto">
            <FormField label="Title">
              <input 
                type="text" 
                defaultValue="Welcome & Cuban Cafecito" 
                className="w-full p-4 border border-gray-100 rounded-xl bg-[#fcfbfa] text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-100 text-sm"
              />
            </FormField>

            <FormField label="Description">
              <textarea 
                placeholder="Describe this stop..." 
                className="w-full p-4 h-32 border border-gray-100 rounded-xl bg-[#fcfbfa] text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-100 text-sm resize-none"
              />
            </FormField>

            <FormField label="Location">
              <div className="relative">
                <IoLocationOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                <input 
                  type="text" 
                  placeholder="Enter location..." 
                  className="w-full p-4 pl-12 border border-gray-100 rounded-xl bg-[#fcfbfa] text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-100 text-sm"
                />
              </div>
            </FormField>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <FormField label="Duration">
                <input 
                  type="text" 
                  defaultValue="20" 
                  className="w-full p-4 border border-gray-100 rounded-xl bg-[#fcfbfa] text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-100 text-sm"
                />
              </FormField>
              <FormField label="Category">
                <input 
                  type="text" 
                  defaultValue="cuisine" 
                  className="w-full p-4 border border-gray-100 rounded-xl bg-[#fcfbfa] text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-100 text-sm"
                />
              </FormField>
            </div>

            <FormField label="Audio & Video">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <UploadBox icon={MdOutlineAudiotrack} label="Audio" className="h-32" />
                <UploadBox icon={MdOutlineVideocam} label="Video" className="h-32" />
              </div>
            </FormField>

            <button className="w-full bg-[#fb8500] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#e67a00] transition-all shadow-lg shadow-orange-100 mt-6 mt-10">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidePhotoInfo;