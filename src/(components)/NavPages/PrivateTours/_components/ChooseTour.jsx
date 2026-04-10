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
<div className="bg-[#F8F9FA]">
      <section className="md:mx-20  mx-4">
      
      <div className="max-w-8xl mx-auto  px-0 md:px-6 py-6">
        
        {/* Header */}
        <ReusableTitle 
          title="Choose Your Tour"
          description="All of our signature experiences are available as private tours"
        />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#E5E5E5] rounded-xl p-5 md:p-6 hover:shadow-md transition"
            >
              
              {/* Title */}
              <h3 className="lora text-[20px] md:text-[24px] font-semibold text-[#2A3C48] mb-1 md:mb-2">
                {tour.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] md:text-[16px] raleway text-[#8E98A8] mb-4">
                {tour.desc}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap md:flex-nowrap raleway text-[13px] md:text-[14px] items-center gap-4 md:gap-6 text-gray-500 mb-4">
                <span className="flex items-center gap-1 md:gap-2">
                  <FaClock /> {tour.duration}
                </span>
                <span className="flex items-center gap-1 md:gap-2">
                  <FaUsers /> {tour.guests}
                </span>
              </div>

              {/* Divider */}
              <div className="border-t border-[#E5E5E5] mb-4"></div>

              {/* Price */}
              <p className="text-orange-500 font-semibold raleway text-[15px] md:text-[16px]">
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
</div>
  );
};

export default ChooseTour;