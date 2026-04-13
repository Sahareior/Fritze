import React, { useState } from "react";
import { FaTrash } from "react-icons/fa6";

const Step4 = () => {
  const [tiers, setTiers] = useState([
    {
      name: "Core",
      price: "79",
      period: "person",
      badge: "",
      highlighted: false,
      features: [
        "Self-guided tour experience",
        "All food and drink included",
        "Access to storytelling audio",
      ],
    },
  ]);

  const addTier = () => {
    setTiers([
      ...tiers,
      {
        name: "",
        price: "",
        period: "",
        badge: "",
        highlighted: false,
        features: [""],
      },
    ]);
  };

  const removeTier = (index) => {
    setTiers(tiers.filter((_, i) => i !== index));
  };

  const updateTier = (index, field, value) => {
    const updated = [...tiers];
    updated[index][field] = value;
    setTiers(updated);
  };

  const updateFeature = (tierIndex, featureIndex, value) => {
    const updated = [...tiers];
    updated[tierIndex].features[featureIndex] = value;
    setTiers(updated);
  };

  const addFeature = (tierIndex) => {
    const updated = [...tiers];
    updated[tierIndex].features.push("");
    setTiers(updated);
  };

  const removeFeature = (tierIndex, featureIndex) => {
    const updated = [...tiers];
    updated[tierIndex].features = updated[tierIndex].features.filter(
      (_, i) => i !== featureIndex,
    );
    setTiers(updated);
  };

  return (
    <div className="max-w-8xl mx-auto p-6 space-y-6">
      <h1 className="text-xl font-semibold">Pricing Tiers</h1>

      {tiers.map((tier, index) => (
        <div
          key={index}
          className="border border-[#E5E7EB] rounded-xl p-6 space-y-5 relative bg-white"
        >
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="font-medium">{tier.name || "New Tier"}</h2>
            <button
              onClick={() => removeTier(index)}
              className="text-red-500 hover:text-red-700"
            >
              <FaTrash />
            </button>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm mb-2">Name</label>
            <select
              value={tier.name}
              onChange={(e) => updateTier(index, "name", e.target.value)}
              className="w-full border border-[#E5E7EB] rounded-lg p-3"
            >
              <option value="">Select tier</option>
              <option value="Core">Core</option>
              <option value="Premium">Premium</option>
              <option value="VIP">VIP</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm mb-2">Price</label>
            <input
              type="number"
              value={tier.price}
              onChange={(e) => updateTier(index, "price", e.target.value)}
              className="w-full border border-[#E5E7EB] rounded-lg p-3"
            />
          </div>

          {/* Period */}
          <div>
            <label className="block text-sm mb-2">Period*</label>
            <input
              type="text"
              value={tier.period}
              onChange={(e) => updateTier(index, "period", e.target.value)}
              className="w-full border border-[#E5E7EB] rounded-lg p-3"
            />
          </div>

          {/* Badge */}
          <div>
            <label className="block text-sm mb-2">Badge (optional)</label>
            <input
              type="text"
              placeholder="e.g., Popular, Best Value"
              value={tier.badge}
              onChange={(e) => updateTier(index, "badge", e.target.value)}
              className="w-full border border-[#E5E7EB] rounded-lg p-3"
            />
          </div>

          {/* Highlight */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={tier.highlighted}
              onChange={(e) =>
                updateTier(index, "highlighted", e.target.checked)
              }
            />
            <label>Highlighted</label>
          </div>

          {/* Features */}
          <div>
            <label className="block text-sm mb-2">Features</label>

            <div className="space-y-2">
              {tier.features.map((feature, fIndex) => (
                <div key={fIndex} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={feature}
                    onChange={(e) =>
                      updateFeature(index, fIndex, e.target.value)
                    }
                    className="w-full border border-[#E5E7EB] rounded-lg p-2"
                  />
                  <button
                    onClick={() => removeFeature(index, fIndex)}
                    className="text-red-500"
                  >
                    🗑
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => addFeature(index)}
              className="text-red-500 text-sm mt-2"
            >
              + Add Feature
            </button>
          </div>
        </div>
      ))}

      {/* Add Tier */}
      <button
        onClick={addTier}
        className="w-full border border-dashed rounded-lg py-3 text-gray-700 hover:bg-gray-50"
      >
        + Add New Tier
      </button>
    </div>
  );
};

export default Step4;
