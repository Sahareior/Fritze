import React from "react";
import ReusableTitle from "../../../LandingPage/HomepageReusableComponents/ReusableTitle";
import WhyWorksCard from "../../../LandingPage/HomepageReusableComponents/WhynWorksCard";

const PrivateTourBanner = () => {
const features = [
  {
    icon: "🔊",
    title: "Story-Driven",
    subtitle: "Stories told where they happened",
  },
  {
    icon: "👥",
    title: "Small Groups",
    subtitle: "Food as cultural language",
  },
  {
    icon: "🤝",
    title: "Memory Vault",
    subtitle: "Technology that disappears",
  },
  {
    icon: "📱",
    title: "Immersive Moments",
    subtitle: "Small groups, premium pacing",
  },
];

  return (
    <>
    <section className="relative h-[400px] md:h-[600px]">
      
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop"
        alt="Private Tours"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        
        {/* Title */}
        <h1 className="lora text-[68px] font-semibold text-white mb-3">
          Private Tours
        </h1>

        {/* Subtitle */}
        <p className="text-white raleway text-[26px] font-medium mb-2">
          Your family. Your friends. Your Miami.
        </p>

        {/* Description */}
      <p className="text-[#FFFFFFD9]/80 text-[18px] raleway max-w-md mb-6">
          Intimate cultural experiences designed for small groups who want to explore together.
        </p>

        {/* CTA */}
        <button className="bg-[#F97415] text-white px-6 py-4 rounded-md flex items-center gap-2 hover:bg-orange-600 transition">
          Book Your Private Tour
          <span>→</span>
        </button>

      </div>
    </section>

    <section className="mx-20 py-16">
      <ReusableTitle 
      title="What's Included"
      description="Every private tour comes with the full experience"
      />

      <div className="grid md:grid-cols-4 gap-4 mt-10">
        {features.map((item, index) => (
          <WhyWorksCard hide={true} key={index} icon={item.icon} title={item.title} subtitle={item.subtitle} />
        ))}
      </div>
    </section>
    </>
  );
};

export default PrivateTourBanner;