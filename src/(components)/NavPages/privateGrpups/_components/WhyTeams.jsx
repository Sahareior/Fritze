import React from 'react';
import { FaHandshake } from 'react-icons/fa';
import { HiHeart, HiLightBulb } from 'react-icons/hi2';

const FeatureItem = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-[#F97415] mb-6 shadow-sm">
        <Icon size={32} />
      </div>
      <h3 className="lora text-[22px] font-semibold text-[#2A3C48] mb-4">{title}</h3>
      <p className="raleway text-[15px] text-gray-500 leading-relaxed max-w-xs font-medium">
        {description}
      </p>
    </div>
  );
};

const WhyTeams = () => {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="lora text-[42px] font-bold text-[#2A3C48] mb-4">Why It Works for Teams</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <FeatureItem
            icon={HiHeart}
            title="Shared Story Moments"
            description="Everyone experiences the same cultural narrative, creating shared references and collective memory that strengthens team bonds."
          />
          <FeatureItem
            icon={HiLightBulb}
            title="Lightweight Interactivity"
            description="Optional group decision moments and collaborative choices that feel natural, not forced. Team building without awkward ice-breakers."
          />
          <FeatureItem
            icon={FaHandshake}
            title="Local Vendor Support"
            description="Every private tour directly supports local family-owned businesses. Your team event creates economic impact and authentic community connection."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyTeams;
