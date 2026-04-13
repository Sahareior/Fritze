import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack, IoEyeOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";

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

const GuestCard = ({ name, email, time, checkedNumber, image }) => (
  <div className="bg-white rounded-2xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col relative w-full">
    <div className="flex justify-between items-start mb-4">
      <span className="text-[#fb8500] font-bold text-xs raleway">Checked #{checkedNumber}</span>
      <span className="text-gray-300 text-[11px] font-medium">{time}</span>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-100">
          <img 
            src={image || "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="lora text-lg font-bold text-[#344454] leading-tight">{name}</h4>
          <p className="text-gray-400 text-xs mt-1 raleway">{email}</p>
        </div>
      </div>
      <button className="text-gray-600 hover:text-[#fb8500] transition-colors p-2">
        <IoEyeOutline size={22} />
      </button>
    </div>
  </div>
);

const Checkins = () => {
  const guests = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@gmail.com",
      time: "09:30am",
      checkedNumber: 1,
    },
    {
      id: 2,
      name: "Alex Johnson",
      email: "alex@gmail.com",
      time: "09:30am",
      checkedNumber: 1,
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfbfa] p-10 raleway text-gray-700">
      <div className="max-w-8xl mx-auto">
        <BackButton />

        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-4">
          <div>
            <h1 className="lora text-[42px] font-bold text-[#344454] mb-2 leading-tight">
              List of checked-in guests
            </h1>
            <p className="text-gray-400 text-lg">
              See details and progress of checked-in guests
            </p>
          </div>

          <div className="bg-white px-8 py-5 rounded-3xl shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)] flex items-center gap-12 border border-gray-50">
            <div className="flex items-center gap-3">
              <FaUserFriends className="text-gray-400 text-xl" />
              <span className="text-[#344454] font-semibold">14 guests</span>
            </div>
            <div className="text-right">
              <span className="text-[#fb8500] text-4xl font-bold lora block">10</span>
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Check-ins</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full mb-14 overflow-hidden">
          <div className="h-full bg-[#fb8500] rounded-full transition-all duration-500" style={{ width: '15%' }}></div>
        </div>

        {/* Grid of Guests */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl">
          {guests.map((guest) => (
            <GuestCard key={guest.id} {...guest} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkins;