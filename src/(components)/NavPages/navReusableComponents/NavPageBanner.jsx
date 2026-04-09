import React from "react";

const NavPageBanner = () => {
  return (
    <section className="bg-linear-to-r from-[#2f3e46] to-[#5c614b] py-20 text-center">
      
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title */}
        <h1 className=" font-semibold text-3xl md:text-[64px] text-white mb-4">
          Private & Corporate Experiences
        </h1>

        {/* Subtitle */}
        <p className="text-gray-200 text-[20px] font-medium raleway">
          High-touch, premium cultural programming for teams and VIP guests.
        </p>

      </div>

    </section>
  );
};

export default NavPageBanner;