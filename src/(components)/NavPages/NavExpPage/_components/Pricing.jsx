import React from "react";

const plans = [
  {
    name: "Core",
    price: "$79",
    features: [
      "Full guided tour experience",
      "All food tastings included",
      "Expert cultural storytelling",
    ],
    type: "default",
  },
  {
    name: "Immersive+",
    price: "$99",
    features: [
      "Everything in Core, plus:",
      "Immersive audio & AR moments",
      "Interactive story choices",
      "Memory Vault access",
    ],
    type: "highlight",
  },
  {
    name: "VIP",
    price: "$149",
    features: [
      "Everything in Immersive+, plus:",
      "Exclusive finale experience",
      "Behind-the-scenes access",
      "Premium upgrades & gifts",
    ],
    type: "dark",
  },
];

const Pricing = () => {
  return (
    <section>
      
      {/* Title */}
      <h3 className="lora text-[42px] font-semibold text-[#2A3C48] mb-2">
        Pricing Tiers
      </h3>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, index) => {
          const isHighlight = plan.type === "highlight";
          const isDark = plan.type === "dark";

          return (
            <div
              key={index}
              className={`relative rounded-xl p-6 transition ${
                isDark
                  ? "bg-[#3f4a3c] text-white"
                  : "bg-white border"
              } ${isHighlight ? "border-2 border-orange-500" : ""}`}
            >
              
              {/* Popular Badge */}
              {isHighlight && (
                <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                  POPULAR
                </span>
              )}

              {/* Title */}
              <h4 className="lora text-[28px] font-semibold mb-2">
                {plan.name}
              </h4>

              {/* Price */}
              <div className="flex items-end gap-1 mb-4">
                <span className="text-[48px] lora font-bold text-orange-500">
                  {plan.price}
                </span>
                <span className="text-sm opacity-70">/ person</span>
              </div>

              {/* Features */}
              <ul className="space-y-2 text-sm mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✔</span>
                    <span className={isDark ? "text-gray-200" : "text-gray-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`w-full py-2 rounded-md text-sm transition ${
                  isDark
                    ? "bg-white text-gray-800"
                    : isHighlight
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                Check Availability
              </button>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default Pricing;