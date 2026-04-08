import React from "react";
import { FaClock, FaUsers } from "react-icons/fa";
import ReusableTitle from "../../../LandingPage/HomepageReusableComponents/ReusableTitle";

const tours = [
  {
    title: "Little Havana Food & Culture",
    desc: "Authentic Cuban cuisine, family stories, and neighborhood secrets",
    duration: "3 hours",
    guests: "2–12 guests",
    price: "$1,200",
  },
  {
    title: "Wynwood Art & Design",
    desc: "Street art, galleries, and Miami’s creative evolution",
    duration: "2.5 hours",
    guests: "2–10 guests",
    price: "$1,000",
  },
  {
    title: "Historic Miami",
    desc: "Architecture, pioneers, and hidden Miami stories",
    duration: "3 hours",
    guests: "2–12 guests",
    price: "$1,200",
  },
  {
    title: "Coastal Culture",
    desc: "Beach communities, maritime heritage, and local life",
    duration: "2.5 hours",
    guests: "2–10 guests",
    price: "$1,000",
  },
];

const ChooseTour = () => {
  return (
    <section className="">
      
      <div className="max-w-8xl mx-auto px-6 py-6">
        
        {/* Header */}
        <ReusableTitle 
          title="Choose Your Tour"
          description="All of our signature experiences are available as private tours"
        />

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-6 hover:shadow-md transition"
            >
              
              {/* Title */}
              <h3 className="lora text-[24px] font-semibold text-[#2A3C48] mb-2">
                {tour.title}
              </h3>

              {/* Description */}
              <p className="text-[16px] raleway text-[#8E98A8] mb-4">
                {tour.desc}
              </p>

              {/* Meta Info */}
              <div className="flex raleway text-[14px] items-center gap-6  text-gray-500 mb-4">
                <span className="flex items-center gap-2">
                  <FaClock /> {tour.duration}
                </span>
                <span className="flex items-center gap-2">
                  <FaUsers /> {tour.guests}
                </span>
              </div>

              {/* Divider */}
              <div className="border-t mb-4"></div>

              {/* Price */}
              <p className="text-orange-500 font-semibold raleway text-[16px]">
                Starting at {tour.price}
              </p>

            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-[15px] raleway text-gray-400 mt-10">
          All prices are for private groups. Add more guests for +$75–100 per person.
        </p>

      </div>

    </section>
  );
};

export default ChooseTour;