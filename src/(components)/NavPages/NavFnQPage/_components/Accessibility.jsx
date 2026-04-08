import React from "react";
import { FaGlobe } from "react-icons/fa";

const items = [
  {
    title: "Hearing & Visual Support",
    desc: "Audio content includes captions. Visual elements include audio descriptions. Contact us for specific accommodations.",
  },
  {
    title: "Phone Battery Tips",
    desc: "Bring a portable charger if you plan to use the digital experience. Tours last 3–3.5 hours, and Miami sunshine can drain batteries quickly.",
  },
  {
    title: "Language Support",
    desc: "Currently offered in English. Spanish and additional languages coming soon.",
  },
  {
    title: "Mobility Considerations",
    desc: "Walking tours cover 1–2 miles with frequent stops. Contact us to discuss specific mobility needs and alternative arrangements.",
  },
];

const Accessibility = () => {
  return (
    <section className="">
      
      <div className=" mx-auto bg-white rounded-2xl shadow-md p-6">
        
        {/* Header */}
        <div className="flex lora text-[28px] font-semibold items-center gap-3 mb-6">
          <FaGlobe className="text-orange-500 text-lg" />
          <h3 className="">
            Accessibility
          </h3>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {items.map((item, index) => (
            <div key={index}>
              
              <h4 className="text-[16px] raleway font-semibold text-gray-700 mb-1">
                {item.title}
              </h4>

              <p className="text-[14px] raleway text-gray-500 leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Accessibility;