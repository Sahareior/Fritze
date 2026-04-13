import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";

const Step3 = () => {
  const [stops, setStops] = useState([
    { title: "", description: "", files1: [], files2: [] },
  ]);

  const addStop = () => {
    setStops([
      ...stops,
      { title: "", description: "", files1: [], files2: [] },
    ]);
  };

  const removeStop = (index) => {
    const updated = stops.filter((_, i) => i !== index);
    setStops(updated);
  };

  const updateField = (index, field, value) => {
    const updated = [...stops];
    updated[index][field] = value;
    setStops(updated);
  };

  const handleFileChange = (index, field, files) => {
    const updated = [...stops];
    updated[index][field] = Array.from(files);
    setStops(updated);
  };

  return (
    <div className="max-w-8xl h-screen mx-auto p-6 space-y-6">
      {stops.map((stop, index) => (
        <div
          key={index}
          className="border border-[#E5E7EB] rounded-xl p-6 space-y-5 relative bg-white"
        >
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg">Sample Stop {index + 1}</h2>
            <button
              onClick={() => removeStop(index)}
              className="text-red-500 hover:text-red-700"
            >
              🗑
            </button>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-2">Title *</label>
            <input
              type="text"
              placeholder="e.g., Domino Park"
              value={stop.title}
              onChange={(e) => updateField(index, "title", e.target.value)}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              placeholder="Enter descriptive text for this moment"
              value={stop.description}
              onChange={(e) =>
                updateField(index, "description", e.target.value)
              }
              rows={4}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          {/* File Uploads */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {/* File 1 */}
            <div>
              <p className="text-sm mb-2">Stop File 1</p>
              <label className="flex flex-col items-center h-48 justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer text-center hover:bg-gray-50">
                <input
                  type="file"
                  multiple
                  className="hidden "
                  onChange={(e) =>
                    handleFileChange(index, "files1", e.target.files)
                  }
                />
                <div className="text-3xl mb-2">
                  <FiUpload />
                </div>
                <p className="text-sm font-medium">Upload Scratch</p>
                <p className="text-xs text-gray-500">
                  Multiple files supported
                </p>
              </label>
            </div>

            {/* File 2 */}
            <div>
              <p className="text-sm mb-2">Stop File 2</p>
              <label className="flex flex-col items-center h-48 justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer text-center hover:bg-gray-50">
                <input
                  type="file"
                  multiple
                  className="hidden"
                  onChange={(e) =>
                    handleFileChange(index, "files2", e.target.files)
                  }
                />
                <div className="text-3xl mb-2">
                  <FiUpload />
                </div>
                <p className="text-sm font-medium">
                  Upload photos of this location
                </p>
                <p className="text-xs text-gray-500">
                  PNG, JPG, Video, Audio • Multiple files supported
                </p>
              </label>
            </div>
          </div>
        </div>
      ))}

      {/* Add Stop */}
      <button
        onClick={addStop}
        className="w-full border border-dashed rounded-lg py-3 text-gray-700 hover:bg-gray-50"
      >
        + Add Stop
      </button>
    </div>
  );
};

export default Step3;
