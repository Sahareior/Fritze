import React from "react";
import { IoMdPlay } from "react-icons/io";

const features = [
  { icon: "⭐", text: "5.0 Rating" },
  { icon: "👥", text: "Small Groups (Max 14)" },
  { icon: "🍽️", text: "Food Included" },
  { icon: "📱", text: "No App Required" },
];

function Hero() {
  return (
  <section>
      <div className=" md:px-20 py-10">
      <div className="w-full mx-auto">
        {/* Top Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT */}
          <div>
            <h1 className="text-6xl lora font-medium leading-tight text-gray-800 ">
              Experience <br />
              Miami From the <br />
              Inside
            </h1>

   

            <div className="mt-6 flex flex-col gap-1">
                       <p className="mt-4 text-gray-500 max-w-md">
              Story-driven cultural tours blending cuisine, motion, and immersive moments.
            </p>
<div className="flex gap-4 mt-1">
                <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition">
                Check Availability
              </button>

              <button className="border border-[#2A3C48] px-6 py-3 rounded-md text-gray-700 hover:bg-gray-100 transition">
                Explore Experiences
              </button>
</div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1775149649911-2714110db00b?q=80&w=1074&auto=format&fit=crop"
              alt="Miami Experience"
              className="rounded-md w-full h-[400px] object-cover"
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition">
                <IoMdPlay size={28} color="white" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Bar */}
     
      </div>
    </div>
       <div className="mt-10 bg-[#F2F2F2] rounded-md  px-18 py-4 flex flex-wrap justify-between gap-4">
          {features.map((item, index) => (
            <div key={index} className="flex mx-11 items-center gap-2 text-gray-600 text-sm">
              <span className="text-orange-500">{item.icon}</span>
              <span className="lora text-[18px]">{item.text}</span>
            </div>
          ))}
        </div>
  </section>
  );
}

export default Hero;