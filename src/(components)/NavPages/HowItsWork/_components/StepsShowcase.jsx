import React from "react";
import { FaQrcode, FaMagic, FaFolderOpen, FaCheck } from "react-icons/fa";

const steps = [
  {
    step: "STEP 1",
    title: "Your Story Key",
    desc: "At key moments during your tour, your guide will reveal a Story Key marker. Simply tap or scan it with your phone’s camera.",
    icon: FaQrcode,
    color: "bg-[#e8c3a5]",
    iconBg: "bg-orange-500",
    features: [
      "No app download required",
      "Works on any smartphone",
      "Instant, seamless access",
    ],
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=600",
  },
  {
    step: "STEP 2",
    title: "Immersive Moments",
    desc: "Unlock multi-sensory layers: spatial audio stories, visual AR overlays, and interactive choices that let you shape your experience.",
    icon: FaMagic,
    color: "bg-[#d9d9d4]",
    iconBg: "bg-[#5c614b]",
    features: [
      "Spatial audio storytelling",
      "Light AR visual overlays",
      "Interactive story choices",
    ],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600",
  },
  {
    step: "STEP 3",
    title: "Memory Vault",
    desc: "After your tour, access your personal Memory Vault—a curated collection of photos, stories, and recommendations to relive the experience.",
    icon: FaFolderOpen,
    color: "bg-[#e3d6c9]",
    iconBg: "bg-[#7a4b2b]",
    features: [
      "Curated tour photos",
      "Story highlights & deep dives",
      "Local recommendations",
    ],
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600",
  },
];

const StepsShowcase = () => {
  return (
<div className="bg-[#f3f3f3]">
      <section className="px-10 py-16">
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 ">
        
        {steps.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className={`${item.color} rounded-2xl p-6 shadow-sm pb-10 flex flex-col`}
            >
              
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div
                  className={`w-24 h-24 rounded-full flex items-center justify-center ${item.iconBg}`}
                >
                  <Icon size={40} className="text-white text-lg" />
                </div> 
              </div>

              {/* Step */}
              <p className="text-[18px] raleway font-bold text-center text-orange-500 mb-1">
                {item.step}
              </p>

              {/* Title */}
              <h3 className="text-center text-[32px] font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[17px] raleway text-gray-600 text-center mb-4">
                {item.desc}
              </p>

              {/* Features Box */}
              <div className="bg-white rounded-lg p-4 mb-4 space-y-2">
                {item.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-[17px] text-gray-600">
                    <FaCheck className="text-orange-500 text-xs" />
                    {f}
                  </div>
                ))}
              </div>

              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg h-[200px] object-cover mt-auto"
              />

            </div>
          );
        })}

      </div>

    </section>
</div>
  );
};

export default StepsShowcase;