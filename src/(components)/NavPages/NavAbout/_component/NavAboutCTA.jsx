import React from "react";

const NavAboutCTA = () => {
  return (
    <section>
      
      {/* ================= DARK SECTION ================= */}
      <div className="bg-[#2f3e46] text-white py-16 text-center px-6">
        
        <div className="max-w-3xl mx-auto">
          
          {/* Title */}
          <h2 className="font-bold text-[36px] mb-4">
            Our Tour Philosophy
          </h2>

          {/* Description */}
          <p className="text-[20px] text-gray-300 leading-relaxed mb-8">
            We believe the best tours are invisible. Technology should fade into the background, leaving you fully present in the moment. Stories should feel natural, not scripted. And most importantly, you should leave with a deeper connection to the place—not just facts and dates, but real understanding and appreciation.
          </p>

          {/* Quote Card */}
          <div className="bg-white/10 border border-white/10 rounded-xl p-5">
            <p className="text-[20px] font-bold mb-2">
              “Stories connect us to places in ways facts never can.”
            </p>
            <p className="text-[16px] font-bold text-gray-400">
              — Maria Gonzalez, Founder
            </p>
          </div>

        </div>

      </div>

      {/* ================= LIGHT CTA ================= */}
      <div className="bg-[#f3f3f3] py-14 text-center px-6">
        
        <div className=" mx-auto">
          
          {/* Title */}
          <h3 className="font-bold text-[36px] text-gray-800 mb-2">
            Join Our Journey
          </h3>

          {/* Subtitle */}
          <p className="text-[20px] text-[#4A5565] mb-6">
            Experience the future of city tours. Book your first CineWalk adventure today.
          </p>

          {/* Button */}
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition">
            Explore Experiences
          </button>

        </div>

      </div>

    </section>
  );
};

export default NavAboutCTA;