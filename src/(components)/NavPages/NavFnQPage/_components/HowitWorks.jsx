import React from "react";

const steps = [
  {
    icon: "📍",
    title: "Your Story Key",
    desc: "Simply tap or scan to unlock immersive content at each stop. No downloads, no hassle.",
    color: "bg-orange-500",
  },
  {
    icon: "🎧",
    title: "Immersive Moments",
    desc: "Experience audio stories, visual content, and interactive choices that bring neighborhoods to life.",
    color: "bg-[#5c614b]",
  },
  {
    icon: "🖼️",
    title: "Memory Vault",
    desc: "Access a curated collection of your tour moments and stories as a digital keepsake.",
    color: "bg-[#7a4b2b]",
  },
];

const HowItWorks = () => {
  return (
    <section className=" ">
      
      <div className="max-w-6xl mx-auto md:px-6  text-center">
        
        {/* Header */}
        <h2 className="lora md:text-[42px] text-[22px] font-semibold text-[#2A3C48] mb-2">
          How It Works
        </h2>

        <p className="md:text-[20px] text-[12px] font-medium  raleway text-[#8E98A8] mb-10">
          Technology in service of story.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm transition"
              style={{
                boxShadow: "4px 4px 6px -2px rgba(0,0,0,0.3)",
              }}
            >
              
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl ${step.color}`}
                >
                  {step.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="lora text-[24px] font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;