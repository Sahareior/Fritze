import React from "react";
import { FaBullseye } from "react-icons/fa";

const stats = [
  { value: "15,000+", label: "Explorers worldwide" },
  { value: "12", label: "Cities and growing" },
  { value: "50+", label: "Unique tour experiences" },
  { value: "4.9/5", label: "Average customer rating" },
];

const MissionSection = () => {
  return (
    <section className="bg-[#f3f3f3] py-16">
      
      <div className="max-w-8xl mx-auto px-20 grid md:grid-cols-2 gap-10 items-start">
        
        {/* LEFT CONTENT */}
        <div>
          
          {/* Icon */}
          <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
            <FaBullseye className="text-blue-500 text-xl" />
          </div>

          {/* Title */}
          <h2 className="lora font-bold text-[36px] text-gray-800 mb-4">
            Our Mission
          </h2>

          {/* Paragraphs */}
          <div className="space-y-4 text-[17px] font-medium raleway text-gray-600 leading-relaxed">
            <p>
              Traditional city tours are broken. They're rushed, inflexible, and often boring. We created CineWalk to fix that.
            </p>

            <p>
              We believe that exploring a city should feel like watching your favorite documentary—compelling, educational, and deeply personal. Every location has stories that deserve to be told with care and creativity.
            </p>

            <p>
              Our mission is to help millions of people fall in love with cities through stories that move them, inspire them, and stay with them long after the tour ends.
            </p>
          </div>

        </div>

        {/* RIGHT STATS CARD */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          
          <div className="space-y-6">
            {stats.map((item, index) => (
              <div key={index}>
                
                <h3 className="text-[36px] font-bold  text-gray-800">
                  {item.value}
                </h3>

                <p className="text-[17px] font-medium raleway text-gray-500">
                  {item.label}
                </p>

              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};

export default MissionSection;