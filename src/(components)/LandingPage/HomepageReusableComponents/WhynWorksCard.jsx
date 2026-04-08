import React from "react";

const WhyWorksCard = ({ icon, title, subtitle,hide }) => {
  return (
    <div className={`bg-white rounded-xl  py-8 text-center  ${hide ? '' : 'shadow-sm'} hover:shadow-md transition w-full`}>
      
      {/* Icon */}
      <div className="text-orange-500 text-2xl mb-3">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-serif lora text-gray-800 text-[20px] font-semibold">
        {title}
      </h3>

      {/* Subtitle */}
      <p className="text-[16px] font-normal text-[#8E98A8] mt-2">
        {subtitle}
      </p>
    </div>
  );
};

export default WhyWorksCard;