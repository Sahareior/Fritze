import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack, IoChevronDown } from "react-icons/io5";
import { FiTrash2, FiUploadCloud } from "react-icons/fi";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-gray-500 text-sm font-medium hover:bg-gray-50 transition-colors mb-8"
    >
      <IoArrowBack className="text-lg" />
      <span>Back</span>
    </button>
  );
};

const CardWrapper = ({ children, onDelete }) => (
  <div className="bg-white rounded-3xl p-8 mb-8 shadow-[0_2px_25px_-5px_rgba(0,0,0,0.05)] border border-gray-50 relative group">
    <button
      onClick={onDelete}
      className="absolute top-6 right-6 p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all"
    >
      <FiTrash2 className="text-xl" />
    </button>
    {children}
    <div className="flex justify-between items-center mt-8">
      <button className="bg-[#eeedea] text-gray-500 px-6 py-2.5 rounded-xl font-medium text-sm hover:bg-gray-200 transition-colors">
        Add more
      </button>
      <button className="bg-[#fb8500] text-white px-10 py-2.5 rounded-xl font-bold text-sm hover:bg-[#e67a00] transition-all shadow-lg shadow-orange-100">
        Create
      </button>
    </div>
  </div>
);

const QuestionInput = () => (
  <input
    type="text"
    placeholder="Type your que here"
    className="w-full p-4 mb-4 border border-gray-100 rounded-xl bg-white text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all text-sm"
  />
);

const CompleteSteps = () => {
  return (
    <div className="min-h-screen bg-[#fcfbfa] p-10 raleway text-gray-700">
      <div className="max-w-8xl mx-auto">
        <BackButton />
        <h1 className="lora text-[36px] font-bold text-[#344454] mb-10">
          Moment of Reflection
        </h1>

        {/* 1. Essay/Reflection Block */}
        <CardWrapper>
          <QuestionInput />
          <textarea
            placeholder="Share your thoughts"
            className="w-full p-4 h-32 border border-gray-50 rounded-xl bg-[#f8f7f6] text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all resize-none text-sm"
          />
        </CardWrapper>

        {/* 2. Dropdown Block */}
        <CardWrapper>
          <QuestionInput />
          <div className="relative">
            <select
              className="w-full p-4 border border-gray-100 rounded-xl bg-white text-gray-400 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all text-sm cursor-pointer"
              defaultValue=""
            >
              <option value="" disabled>Type option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
            <IoChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </CardWrapper>

        {/* 3. Multiple Choice Input Block */}
        <CardWrapper>
          <QuestionInput />
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Create option"
              className="w-full p-4 border border-gray-100 rounded-xl bg-white text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all text-sm"
            />
            <input
              type="text"
              placeholder="Create option"
              className="w-full p-4 border border-gray-100 rounded-xl bg-white text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all text-sm"
            />
          </div>
        </CardWrapper>

        {/* 4. Selection List Block */}
        <CardWrapper>
          <QuestionInput />
          <div className="space-y-2 mt-4">
            {[
              { label: "The architectural preservation", active: true },
              { label: "The cultural transformation", active: false },
              { label: "The community resilience", active: false },
              { label: "The economic development", active: false },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl bg-white group cursor-pointer hover:bg-gray-50 transition-all"
              >
                <div
                  className={`w-3 h-3 rounded-full ${
                    item.active ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" : "bg-gray-200"
                  }`}
                />
                <span className={`text-sm font-medium ${item.active ? "text-[#344454]" : "text-gray-400"}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </CardWrapper>

        {/* 5. Upload Block */}
        <CardWrapper>
          <QuestionInput />
          <div className="border-2 border-dashed border-gray-200 rounded-3xl p-16 flex flex-col items-center justify-center bg-white group hover:border-[#fb8500] hover:bg-orange-50/20 transition-all cursor-pointer">
            <div className="bg-[#fcfbfa] p-4 rounded-full group-hover:bg-white transition-all">
              <FiUploadCloud className="text-4xl text-gray-400 group-hover:text-[#fb8500] transition-colors" />
            </div>
          </div>
        </CardWrapper>
      </div>
    </div>
  );
};

export default CompleteSteps;