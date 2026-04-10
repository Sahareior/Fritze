import React from "react";
import { FaDownload } from "react-icons/fa";

const facts = [
  { label: "Founded", value: "2024" },
  { label: "Location", value: "Miami, Florida" },
  { label: "Tours Offered", value: "3+ Cultural Experiences" },
  { label: "Average Group Size", value: "8–12 guests" },
  { label: "Max Group Size", value: "14 guests" },
  { label: "Tour Duration", value: "3–3.5 hours" },
  { label: "Languages", value: "English (Spanish coming soon)" },
  { label: "Rating", value: "5.0 stars" },
];

const PressBrandStory = () => {
  return (
    <section className="bg-white py-16">
      
      <div className="max-w-8xl mx-auto px-4 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        
        {/* ================= LEFT ================= */}
        <div>
          
          {/* Title */}
          <h2 className="lora font-semibold text-[28px] md:text-[36px] text-gray-800 mb-4 md:mb-6">
            Brand Story
          </h2>

          {/* Content */}
          <div className="space-y-4 md:space-y-5 text-[15px] md:text-[17px] raleway text-gray-600 leading-relaxed">
            <p> 
              We’re reimagining cultural tourism in Miami—one story, one taste, one neighborhood at a time. Our small-group tours blend curated local experiences with optional immersive technology, creating deeper connections between visitors and the city’s rich cultural tapestry.
            </p>

            <p>
              Unlike typical tourist experiences, we focus on authenticity and intimacy. With groups capped at 14 guests, our expert guides share the untold stories of Miami’s neighborhoods—from the resilient Cuban community in Little Havana to the vibrant creative energy of Wynwood.
            </p>

            <p>
              Every tour includes carefully selected food and beverage tastings from local establishments, supporting the communities we explore. Our optional audio experiences and light AR elements enhance—but never replace—the real-world experience, ensuring guests remain present in the moment.
            </p>

            {/* Highlight */}
            <p className="text-orange-500 font-medium">
              Technology in service of story. Culture at the heart of connection.
            </p>
          </div>

          {/* ================= MEDIA KIT ================= */}
          <div className="mt-8 md:mt-10 bg-[#52583E] text-white rounded-2xl py-8 md:py-12 p-5 md:p-6">
            
            <h3 className="lora text-[26px] md:text-[32px] font-semibold text-lg mb-2">
              Media Kit
            </h3>

            <p className="text-[15px] md:text-[16px] raleway  text-gray-200 mb-5">
              Complete press materials including logos, brand guidelines, high-resolution images, and fact sheets.
            </p>

            <button className="bg-white text-[#52583E] font-semibold raleway w-full justify-center md:justify-start md:w-auto px-6 py-3 rounded-md flex items-center gap-2 hover:shadow-md transition">
              <FaDownload />
              Download Media Kit (PDF)
            </button>

          </div>

        </div>

        {/* ================= RIGHT ================= */}
        <div className="bg-[#F2F2F2] rounded-2xl shadow-md p-5 md:p-6 mt-6 md:mt-0">
          
          <h3 className="lora text-[22px] md:text-[24px] font-semibold text-gray-800 mb-4">
            Fast Facts
          </h3>

          <div className="space-y-4">
            {facts.map((item, index) => (
               <div key={index}>
                
                <p className="text-[12px] raleway text-gray-400">
                  {item.label}
                </p>

                <p className="text-[15px] md:text-[16px] raleway font-semibold text-gray-700 mb-2">
                  {item.value}
                </p>

                {index !== facts.length - 1 && (
                  <div className="border-t border-gray-200 mt-2"></div>
                )}

              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};

export default PressBrandStory;