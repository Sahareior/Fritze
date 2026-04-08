import { FaPlay } from "react-icons/fa";

const TourHero = () => {
  return (
<div>
        <div className="relative h-[90vh]">
      <img
        src="https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?q=80&w=1200"
        className="w-full h-full object-cover"
        alt=""
      />

      <div className="absolute inset-0 bg-black/30"></div>

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[208px] h-[208px] bg-orange-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
          <FaPlay className="text-5xl" />
        </div>
      </div>
      
    </div>
<div className="py-8 border-b border-[#E9E9E9]">
        <p className="text-xs pl-20 text-orange-500 mb-2 underline cursor-pointer">
          What’s Included
        </p>
</div>
</div>
  );
};

export default TourHero;