import React from "react";
import { FaWheelchair, FaVolumeUp, FaBatteryHalf, FaLanguage, FaCheck } from "react-icons/fa";
import ReusableTitle from "../../../LandingPage/HomepageReusableComponents/ReusableTitle";

const cards = [
  {
    icon: FaVolumeUp,
    title: "Hearing & Visual",
    items: [
      "Audio content has visual captions",
      "AR overlays work without audio",
      "Guides are trained in inclusive communication",
    ],
  },
  {
    icon: FaBatteryHalf,
    title: "Phone Battery Tips",
    items: [
      "Start with 50%+ battery charge",
      "Portable chargers recommended",
      "Low-power mode available",
    ],
  },
  {
    icon: FaLanguage,
    title: "Language Support",
    items: [
      "English tours available now",
      "Spanish immersive content",
      "Portuguese support",
    ],
    badge: "COMING SOON",
  },
];

const AccessibilitySection = () => {
  return (
    <section className="bg-[#f3f3f3] py-12 md:py-16">
      
      <div className="w-full px-4 md:px-20 text-center">
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <FaWheelchair className="text-orange-500 text-4xl" />
        </div>

<ReusableTitle
          title="Accessibility & Considerations"
          description="Everything you need to know about our immersive technology"
        />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-left mt-6 md:mt-10">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 hover:shadow-md transition"
              >
                
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#F974151A]/90 flex items-center justify-center">
                    <Icon size={18} className="text-[#F97415]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="lora text-[18px] md:text-[20px] font-semibold text-gray-800 mb-3">
                  {card.title}
                </h3>

                {/* List */}
                <ul className="space-y-2 text-sm text-gray-500">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <FaCheck className="text-gray-400 text-xs mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Badge */}
                {card.badge && (
                  <span className="inline-block mt-3 text-xs bg-orange-100 text-orange-500 px-2 py-1 rounded">
                    {card.badge}
                  </span>
                )}

              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-8 md:mt-12 bg-[#2f3e46] text-white rounded-2xl py-8 md:py-10 px-4 md:px-6">
          
          <h3 className="lora text-[22px] md:text-[26px] font-semibold text-white mb-2 md:mb-3">
            Have specific accessibility needs?
          </h3>

          <p className="raleway text-[16px] md:text-[18px] text-gray-300 mb-6 mx-auto">
            Contact us before booking and we’ll work with you to ensure the best possible experience.
          </p>

          <button className="bg-orange-500 text-white px-6 md:px-8 py-3 rounded-md hover:bg-orange-600 transition w-full md:w-auto font-medium">
            Explore Experiences
          </button>

        </div>

      </div>

    </section>
  );
};

export default AccessibilitySection;