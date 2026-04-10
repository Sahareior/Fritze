import React from "react";
import HighlightBanner from "./HighlightBanner";

const includedItems = [
  "3–4 authentic Cuban tastings included",
  "Expert cultural storytelling by local guides",
  "Optional immersive moments (spatial audio & light AR)",
  "Post-tour Memory Vault with photos & stories",
];

const features = [
  {
    icon: "🎧",
    text: "Spatial audio storytelling (earbuds recommended)",
  },
  {
    icon: "✨",
    text: "Light AR overlays revealing historic scenes (optional)",
  },
  {
    icon: "📱",
    text: "Interactive story choices at key moments",
  },
  {
    icon: "⭐",
    text: "Story Key token unlocks your personal Memory Vault",
  },
];

const ExperienceIntro = () => {
  return (
    <section className="space-y-10 ">
      
      {/* HEADER */}
      <div>
        

        <h2 className="font-serif lora text-[28px] md:text-[42px] font-semibold text-[#2A3C48] mb-3">
          The Experience
        </h2>

        <p className="text-[16px] md:text-[18px]  text-gray-600 leading-relaxed raleway">
          Step into the heart of Cuban Miami. This isn’t just a walk through colorful streets—it’s an immersion into a community forged by exile, revolution, and an unshakeable spirit. You’ll taste the same cafecito that’s been brewed the same way for decades, hear stories from families who rebuilt their lives one block at a time, and discover hidden murals that whisper of resilience. Every corner holds memory. Every taste carries history.
        </p>
      </div>

      {/* WHAT'S INCLUDED */}
      <div className="bg-[#F9F9F9] rounded-xl p-4 md:p-6 shadow-sm ">
        <h3 className="text-[18px] md:text-[20px] font-semibold raleway text-gray-700 mb-4">
          What’s Included:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {includedItems.map((item, index) => (
            <div key={index} className="flex items-start raleway text-[15px] md:text-[16px] gap-2 text-gray-600">
              <span className="text-orange-500 mt-1">✔</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* IMMERSIVE MOMENTS */}
      <div>
        <h3 className="lora text-[28px] md:text-[42px] font-semibold text-[#2A3C48] mb-2 leading-tight">
          Immersive Moments (Explained Simply)
        </h3>

        <p className="text-[16px] raleway text-gray-500 mb-6">
          We use gentle technology to deepen your experience—never to distract from it. Here’s how it works:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#E9E9E9] rounded-lg p-4 flex items-start gap-3"
            >
              <div className="min-w-10 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                {item.icon}
              </div>

              <p className="text-[15px] md:text-[16px] raleway text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
   <HighlightBanner />
    </section>
  );
};

export default ExperienceIntro;