import React from "react";

const PressCTA = () => {
  return (
    <section className="bg-[#f3f3f3] py-16 text-center">
      
      <div className="max-w-2xl mx-auto px-4 md:px-6">
        
        {/* Title */}
        <h2 className="lora text-[28px] md:text-[36px] font-semibold text-gray-800 mb-3">
          Experience it yourself
        </h2>

        {/* Subtitle */}
        <p className="text-[16px] md:text-[18px] raleway text-gray-500 mb-6 md:mb-8 leading-relaxed">
          We invite press and media professionals to experience our tours firsthand. 
          Contact us to arrange a complimentary press tour.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-col md:flex-row">
          
          {/* Secondary Button */}
          <button className="px-6 py-3 rounded-xl border border-[#2A3C48] text-gray-700 hover:bg-gray-100 transition w-full md:w-auto font-medium">
            Schedule Press Tour
          </button>
  
  
          {/* Primary Button */}
          <button className="px-6 py-3 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition w-full md:w-auto font-medium">
            Explore Our Tours
          </button>

        </div>

      </div>

    </section>
  );
};

export default PressCTA;