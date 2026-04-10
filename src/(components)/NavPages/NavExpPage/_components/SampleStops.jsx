import React from "react";

const stops = [
  {
    title: "La Rosa Bakery",
    desc: "Family-owned since 1972. Taste authentic pastelitos while hearing the story of how this bakery became a lifeline for newly arrived Cuban families.",
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=800",
  },
  {
    title: "Calle Ocho Walk of Fame",
    desc: "Discover the stars embedded in the sidewalk honoring Cuban and Latin American icons. Hear their stories through immersive audio.",
    img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=800",
  },
  {
    title: "Hidden Mural District",
    desc: "Behind-the-scenes access to murals painted by local artists. AR reveals the stories behind each piece.",
    img: "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?q=80&w=800",
  },
];

const SampleStops = () => {
  return (
    <section>
      
      {/* Header */}
      <div className="mb-6">
        <h3 className="font-serif text-[28px] md:text-[42px] font-semibold lora text-gray-800">
          Sample Stops
        </h3>
        <p className="text-[15px] md:text-[16px] raleway  text-gray-400 mt-2 md:mt-3">
          Note: Actual stops may vary based on availability and local events
        </p>
      </div>

      {/* List */}
      <div className="space-y-6">
        {stops.map((stop, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-0 md:gap-4 rounded-xl shadow-md items-stretch bg-white"
          >
            
            {/* IMAGE */}
            <img
              src={stop.img}
              alt={stop.title}
              className="w-full md:w-[360px] rounded-t-xl md:rounded-l-xl md:rounded-tr-none h-[200px] md:h-[250px] object-cover "
            />

            {/* CONTENT CARD */}
            <div className="flex-1 p-5 lg:p-6 flex flex-col justify-center rounded-b-xl md:rounded-r-xl md:rounded-bl-none">
              
              {/* Title Row */}
              <div className="flex items-center gap-3 mb-2 md:mb-3">
                
                {/* Step Number */}
                <span className="min-w-6 w-6 h-6 flex items-center justify-center text-xs bg-orange-500 text-white rounded-full">
                  {index + 1}
                </span>

                <h4 className="lora text-[20px] md:text-[26px] font-semibold text-gray-800">
                  {stop.title}
                </h4>
              </div>

              {/* Description */}
              <p className="text-[15px] md:text-[17px] raleway text-gray-600 leading-relaxed">
                {stop.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default SampleStops;