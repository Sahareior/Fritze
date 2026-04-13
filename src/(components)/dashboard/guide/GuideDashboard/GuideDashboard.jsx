import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegCalendarAlt, FaUserFriends } from "react-icons/fa";

const StatCard = ({ title, value, indicatorClass, textColor }) => (
  <div className="flex-1 bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] p-4 flex relative min-w-[200px]">
    <div
      className={`absolute left-0 top-3 bottom-3 w-1.5 rounded-r-lg ${indicatorClass}`}
    ></div>
    <div className="ml-5 flex flex-col justify-center">
      <h3 className={`text-sm font-medium mb-1 ${textColor}`}>{title}</h3>
      <p className="text-4xl font-semibold text-gray-800 lora">{value}</p>
    </div>
  </div>
);

const FilterButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-8 py-2 rounded-full text-sm font-medium transition-colors ${
      active
        ? "bg-[#fb8500] text-white shadow-md"
        : "bg-[#eeedea] text-gray-500 hover:bg-gray-200"
    }`}
  >
    {label}
  </button>
);

const TourCard = ({ image, title, date, guests, status }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm pb-5 flex flex-col w-full">
      {/* Image with badge */}
      <div className="relative h-56 mb-4 rounded-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-[#fb8500] text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow">
          {status}
        </div>
      </div>

      {/* Title */}
      <h3 className="lora text-xl font-bold text-[#895A3E] mb-4">
        {title}
      </h3>

      {/* Details info */}
      <div className="flex justify-between items-center text-sm text-gray-400 mb-4 raleway">
        <div className="flex items-center gap-2">
          <FaRegCalendarAlt className="text-gray-400" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUserFriends className="text-gray-400" />
          <span>{guests} guests</span>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6 raleway">
        <span className="bg-[#f6f2ee] text-[#8a7a6c] text-[11px] px-3 py-1 rounded-full font-medium tracking-wide">
          Walking
        </span>
        <span className="bg-[#f6f2ee] text-[#8a7a6c] text-[11px] px-3 py-1 rounded-full font-medium tracking-wide">
          max 14 person
        </span>
        <span className="bg-[#f6f2ee] text-[#8a7a6c] text-[11px] px-3 py-1 rounded-full font-medium tracking-wide">
          Food Included
        </span>
      </div>

      {/* Action Button */}
      <div className="mt-auto pt-2">
        <button 
          onClick={() => navigate("/dashboard/guide/tour-management")}
          className="w-full py-3 bg-[#fff0e6] text-[#fb8500] rounded-xl font-medium raleway hover:bg-[#ffe0cc] transition-colors"
        >
          Activate Tour
        </button>
      </div>
    </div>
  );
};

const GuideDashboard = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const tourData = [
    {
      id: 1,
      title: "Little Havana — Echoes of Exile",
      image: "https://images.unsplash.com/photo-1543739225-349f2b87641d?auto=format&fit=crop&q=80&w=800",
      date: "2026-03-15",
      guests: 14,
      status: "Active"
    },
    {
      id: 2,
      title: "Miami Art Deco — Historic Walk",
      image: "https://images.unsplash.com/photo-1514336020557-e54f056bd949?auto=format&fit=crop&q=80&w=800",
      date: "2026-03-20",
      guests: 10,
      status: "Active"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfbfa] p-8 raleway text-gray-700">
      <div className="max-w-8xl mx-auto">
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="lora text-[32px] font-bold text-[#344454] mb-1">
            Overview
          </h1>
          <p className="text-gray-400 text-[15px]">
            Have a view of tours information
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard
            title="All Tours"
            value="5"
            indicatorClass="bg-gray-600"
            textColor="text-gray-500"
          />
          <StatCard
            title="Active Tour"
            value="1"
            indicatorClass="bg-[#fb8500]"
            textColor="text-[#fb8500]"
          />
          <StatCard
            title="Upcoming Tour"
            value="2"
            indicatorClass="bg-[#3b82f6]"
            textColor="text-[#3b82f6]"
          />
          <StatCard
            title="Completed Tour"
            value="2"
            indicatorClass="bg-[#22c55e]"
            textColor="text-[#22c55e]"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-12">
          <FilterButton
            label="All"
            active={activeFilter === "All"}
            onClick={() => setActiveFilter("All")}
          />
          <FilterButton
            label="Active"
            active={activeFilter === "Active"}
            onClick={() => setActiveFilter("Active")}
          />
          <FilterButton
            label="Upcoming"
            active={activeFilter === "Upcoming"}
            onClick={() => setActiveFilter("Upcoming")}
          />
          <FilterButton
            label="Completed"
            active={activeFilter === "Completed"}
            onClick={() => setActiveFilter("Completed")}
          />
        </div>

        {/* List of Tours Section */}
        <div className="mb-6">
          <h2 className="lora text-[28px] font-bold text-[#344454] mb-1">
            List of Tours
          </h2>
          <p className="text-gray-400 text-[14px]">
            Filter out the list at preference
          </p>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
          {tourData.map(tour => (
            <TourCard 
              key={tour.id}
              image={tour.image}
              title={tour.title}
              date={tour.date}
              guests={tour.guests}
              status={tour.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuideDashboard;
