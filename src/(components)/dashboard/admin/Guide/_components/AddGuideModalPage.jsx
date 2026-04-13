import React, { useState } from "react";
import { FiX, FiPlus, FiMail, FiPhone, FiMapPin, FiStar } from "react-icons/fi";

const AddGuideModalPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    languages: "",
    photo: null,
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <div className=" w-2xl  ">
      <div className="bg-white w-full max-w-4xl rounded-2xl overflow-hidden ">
        {/* Header */}
        <div className="bg-slate-700 text-white p-5 flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-600/30 p-2 rounded-lg">
              <FiPlus />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Add New Guide</h2>
              <p className="text-sm text-gray-200">
                Create a new tour guide profile
              </p>
            </div>
          </div>
          <button>
            <FiX />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-8">
          {/* Profile Photo */}
          <div>
            <p className="text-sm mb-2">Profile Photo</p>
            <label className="w-16 h-16 bg-orange-500 text-white flex items-center justify-center rounded-lg cursor-pointer">
              <FiPlus size={20} />
              <input
                type="file"
                className="hidden"
                onChange={(e) => handleChange("photo", e.target.files[0])}
              />
            </label>
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm">First Name *</label>
              <input
                type="text"
                placeholder="e.g., Maria"
                value={form.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                className="w-full border rounded-lg p-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm">Last Name *</label>
              <input
                type="text"
                placeholder="e.g., Rodriguez"
                value={form.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className="w-full border rounded-lg p-2 mt-1"
              />
            </div>
          </div>

          {/* Contact */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm flex items-center gap-1">
                <FiMail size={14} /> Email *
              </label>
              <input
                type="email"
                placeholder="guide@example.com"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full border rounded-lg p-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm flex items-center gap-1">
                <FiPhone size={14} /> Phone
              </label>
              <input
                type="text"
                placeholder="(305) 123-4567"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="w-full border rounded-lg p-2 mt-1"
              />
            </div>
          </div>

          {/* Location & Language */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm flex items-center gap-1">
                <FiMapPin size={14} /> Primary City
              </label>
              <input
                type="text"
                value={form.city}
                onChange={(e) => handleChange("city", e.target.value)}
                className="w-full border rounded-lg p-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm flex items-center gap-1">
                <FiStar size={14} /> Languages
              </label>
              <input
                type="text"
                placeholder="e.g., English, Spanish"
                value={form.languages}
                onChange={(e) => handleChange("languages", e.target.value)}
                className="w-full border rounded-lg p-2 mt-1"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center pt-4">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">
              Cancel
            </button>
            <button className="bg-orange-500 text-white px-4 py-2 hover:cursor-pointer rounded-lg flex items-center gap-2">
              <FiPlus /> Add Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGuideModalPage;
