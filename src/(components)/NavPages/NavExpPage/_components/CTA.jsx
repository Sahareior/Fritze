import React from "react";

const CTA = () => {
  return (
    <section className="text-center py-16">
      
      {/* Top Link */}
      <p className="text-[16px] raleway font-semibold text-orange-500 mb-4 cursor-pointer hover:underline">
        View ALL FAQs →
      </p>

      {/* Title */}
      <h3 className="lora text-[48px] font-semibold text-[#2A3C48] mb-2">
        Ready to step inside the story?
      </h3>

      {/* Subtitle */}
      <p className="text-[20px] raleway font-medium text-gray-500 mb-6">
        Join us for an unforgettable journey through Little Havana.
      </p>

      {/* Button */}
      <button
      style={{
        boxShadow: "4px 8px 16px 0px #00000033",

      }}
      className="bg-white raleway text-[18px] font-semibold text-orange-500 px-8 py-3 rounded-md  hover:shadow-lg transition">
        Check Availability
      </button>

    </section>
  );
};

export default CTA;