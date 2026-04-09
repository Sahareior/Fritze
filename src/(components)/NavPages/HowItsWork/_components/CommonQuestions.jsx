import React, { useState } from "react";
import ReusableTitle from "../../../LandingPage/HomepageReusableComponents/ReusableTitle";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Do I need an app?",
    answer:
      "No. Everything works through your web browser. Just tap the link or scan the QR code—no downloads required.",
  },
  {
    question: "What if I don't want to use my phone?",
    answer:
      "The tour still works perfectly. Our guides share everything live. The digital experience is optional.",
  },
  {
    question: "Is this VR?",
    answer:
      "No—we use light AR and audio storytelling. You’re experiencing the real world, not a virtual one.",
  },
];

const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white border border-gray-200 rounded-xl px-5 py-4 cursor-pointer transition hover:shadow-sm"
    >
      
      {/* Question */}
      <div className="flex justify-between items-center">
        <h3 className="text-[20px] text-gray-700 font-semibold">
          {item.question}
        </h3>

        <FaChevronDown
          className={`text-gray-400 transition ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 mt-3" : "max-h-0"
        }`}
      >
        <p className="text-[17px] raleway text-gray-500">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const CommonQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f3f3f3] py-16">
      
      <div className="max-w-8xl mx-auto px-20 text-center">
        
        {/* Header */}
        <ReusableTitle
          title="Common Questions"
          description="Everything you need to know about our immersive technology"
        />

        {/* FAQ List */}
        <div className="space-y-4 mt-10 text-left">
          {faqs.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => toggle(index)}
            />
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-6">
          <button className="text-[18px] raleway font-semibold text-orange-500 hover:underline">
            View All FAQs →
          </button>
        </div>

      </div>

    </section>
  );
};

export default CommonQuestions;