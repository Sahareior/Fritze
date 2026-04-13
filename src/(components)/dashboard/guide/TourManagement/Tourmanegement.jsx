import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack, IoChevronDown, IoQrCodeOutline } from "react-icons/io5";

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

const HighlightCard = ({ text }) => (
  <div className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] border border-gray-50 flex items-center justify-center min-h-[120px] text-center">
    <p className="text-gray-500 font-medium leading-tight">{text}</p>
  </div>
);

const TourStopItem = ({ number, title, subtitle }) => (
  <div className="bg-white rounded-2xl p-5 mb-4 shadow-sm border border-gray-50 flex items-center gap-5 cursor-pointer hover:bg-gray-50 transition-all group">
    <div className="w-10 h-10 rounded-full bg-[#fff0e6] flex items-center justify-center text-[#fb8500] font-bold text-lg">
      {number}
    </div>
    <div className="flex-1">
      <h4 className="text-[#344454] font-semibold text-lg">{title}</h4>
      <p className="text-gray-400 text-sm">{subtitle}</p>
    </div>
    <IoChevronDown className="text-gray-300 text-xl group-hover:text-gray-500 transition-colors" />
  </div>
);

const Tourmanegement = () => {
      const navigate = useNavigate();
  const highlights = [
    "Authentic Cuban coffee tasting",
    "Live salsa music experience",
    "Street art storytelling",
    "Traditional cuisine sampling",
  ];

  const stops = [
    { number: 1, title: "Welcome & Cuban Cafecito", subtitle: "20 min · cuisine" },
    { number: 2, title: "Calle Ocho Murals", subtitle: "25 min · art" },
    { number: 3, title: "Salsa & Son", subtitle: "30 min · music" },
    { number: 4, title: "Traditional Cuisine Tasting", subtitle: "40 min · food" },
  ];

  return (
    <div className="min-h-screen bg-[#fcfbfa] p-10 raleway text-gray-700">
      <div className="max-w-8xl mx-auto">
        {/* Navigation */}
        <BackButton />

        {/* Content Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
          <div className="flex-1">
            <h1 className="lora text-[42px] font-bold text-[#895A3E] mb-3 leading-tight">
              Little Havana — Echoes of Exile
            </h1>
            <p className="text-gray-400 text-lg mb-6 max-w-2xl leading-relaxed">
              Walk Calle Ocho through the stories of migration, identity, and resilience.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-[#f6f2ee] text-[#8a7a6c] text-xs px-5 py-2 rounded-full font-semibold">
                Walking
              </span>
              <span className="bg-[#f6f2ee] text-[#8a7a6c] text-xs px-5 py-2 rounded-full font-semibold">
                max 14 person
              </span>
              <span className="bg-[#f6f2ee] text-[#8a7a6c] text-xs px-5 py-2 rounded-full font-semibold">
                Food Included
              </span>
            </div>
          </div>

          <button onClick={()=>navigate('/dashboard/guide/qr-code')} className="bg-[#fb8500] hover:bg-[#e67a00] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all shadow-lg shadow-orange-100 whitespace-nowrap">
            <IoQrCodeOutline className="text-2xl" />
            <span>Generate QR Code</span>
          </button>
        </div>

        {/* Highlights Section */}
        <div className="mb-14">
          <h2 className="lora text-[32px] font-bold text-[#344454] mb-8">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((text, index) => (
              <HighlightCard key={index} text={text} />
            ))}
          </div>
        </div>

        {/* Tour Stops Section */}
        <div className="max-w-8xl">
          <h2 className="lora text-[32px] font-bold text-[#344454] mb-8">Tour Stops (4)</h2>
          <div className="space-y-4">
            {stops.map((stop) => (
              <TourStopItem 
                key={stop.number} 
                number={stop.number} 
                title={stop.title} 
                subtitle={stop.subtitle} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tourmanegement;