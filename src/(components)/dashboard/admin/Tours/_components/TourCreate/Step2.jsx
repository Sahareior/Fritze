import React, { useState } from "react";
import { FaTrash } from "react-icons/fa6";

const Step2 = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [stops, setStops] = useState([
    { name: "Welcome & Cuban Cafecito", details: "" },
    { name: "Calle Ocho Murals", details: "" },
  ]);

  const addStop = () => {
    setStops([...stops, { name: "", details: "" }]);
  };

  const updateStop = (index, field, value) => {
    const updated = [...stops];
    updated[index][field] = value;
    setStops(updated);
  };

  const removeStop = (index) => {
    const updated = stops.filter((_, i) => i !== index);
    setStops(updated);
  };

  return (
    <div className="max-w-8xl mx-auto p-6 space-y-6">
      {/* Title */}
      <div>
        <label className="block font-medium mb-2">Title *</label>
        <input
          type="text"
          placeholder="e.g., Domino Park"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block font-medium mb-2">Description</label>
        <textarea
          placeholder="Step into Little Havana like never before..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* Tour Stops */}
      <div>
        <label className="block font-medium mb-3">Tour Stops</label>

        <div className="space-y-4">
          {stops.map((stop, index) => (
            <div
              key={index}
              className="border rounded-lg p-8 space-y-3 relative"
            >
              <button
                onClick={() => removeStop(index)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>

              <input
                type="text"
                value={stop.name}
                onChange={(e) => updateStop(index, "name", e.target.value)}
                className="w-full border rounded-md p-2"
              />

              <textarea
                placeholder="Tour stops details write here"
                value={stop.details}
                onChange={(e) => updateStop(index, "details", e.target.value)}
                rows={3}
                className="w-full border rounded-md p-2"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Add Button */}
      <button
        onClick={addStop}
        className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition"
      >
        + Add Tour
      </button>
    </div>
  );
};

export default Step2;
