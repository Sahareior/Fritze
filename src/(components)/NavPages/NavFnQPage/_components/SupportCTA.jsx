import React from "react";
import { useNavigate } from "react-router-dom";

const SupportCTA = () => {
    const navigate = useNavigate()

  return (
    <section className="">
      
      <div className="max-w-8xl mx-auto bg-[#5c614b] text-white rounded-2xl py-10 px-6 text-center">
        
        {/* Title */}
        <h3 className="lora text-[32px] font-semibold  mb-2">
          Still have questions?
        </h3>

        {/* Subtitle */}
        <p className="text-[18px] raleway text-gray-200 mb-6  mx-auto">
          We’re here to help! Reach out to our team and we’ll get back to you within 24 hours.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          
          {/* Secondary */}
          <button className="bg-white raleway text-[16px] font-semibold text-gray-800 px-7 py-3 rounded-md hover:shadow-md transition">
            Get in Touch
          </button>

          {/* Primary */}
          <button onClick={()=> navigate('/private-tours')} className="bg-orange-500 raleway text-[16px] font-semibold text-white px-7 py-3 rounded-md text-sm hover:bg-orange-600 transition">
            Book a Private Tour
          </button>

        </div>

      </div>

    </section>
  );
};

export default SupportCTA;