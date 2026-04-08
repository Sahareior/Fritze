export default function ReusableCardHome({ item }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg shadow-t-md border-t-2 border-t-[#F97415] transition">
      
      {/* Image */}
      <div className="relative px-3 pt-3 ">
        <img
          src={item?.image}
          alt={item?.title}
          className="h-60 rounded-xl w-full object-cover"
        />

        {/* Price Badge */}
        <span className="absolute top-7 right-7 lora  bg-[#F97415] text-white text-[18px] px-3 py-1 rounded-full">
          {item?.price}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-serif text-lg text-gray-800">
          {item?.title}
        </h3>

        <p className="text-sm text-gray-500 mt-2">
          {item?.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {item?.tags?.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-5">
          <button className="flex-1 border border-gray-300 py-2 rounded-md text-sm hover:bg-gray-100 transition">
            View Tour
          </button>
          <button className="flex-1 bg-[#5c614b] text-white py-2 rounded-md text-sm hover:opacity-90 transition">
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
};