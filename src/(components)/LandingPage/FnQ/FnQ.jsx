import React, { useState } from "react";
import ReusableTitle from "../HomepageReusableComponents/ReusableTitle";

const faqs = [
  {
    question: "How long are the tours?",
    answer:
      "Most experiences last approximately 3 hours. Specific duration is listed on each tour page.",
  },
  {
    question: "Where do we meet?",
    answer:
      "Meeting points are shared after booking and are typically central and easy to access.",
  },
  {
    question: "What about dietary restrictions?",
    answer:
      "We accommodate most dietary needs. Please inform us in advance.",
  },
  {
    question: "Do I need to download an app?",
    answer:
      "No app is required. Everything works directly from your phone browser.",
  },
  {
    question: "Do I need to be tech-savvy?",
    answer:
      "Not at all. The experience is designed to be simple and intuitive.",
  },
];

const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-300 py-4 cursor-pointer">
      
      {/* Question */}
      <div
        className="flex justify-between items-center"
        onClick={onClick}
      >
        <h3 className="text-gray-700 text-[20px] lora font-medium">
          {item.question}
        </h3>

        <span className="text-gray-500 text-lg">
          {isOpen ? "−" : "+"}
        </span>
      </div>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 mt-2" : "max-h-0"
        }`}
      >
        <p className="text-gray-500 text-[18px] raleway ">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

function FnQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f3f3f3] py-16 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
<ReusableTitle title="Frequently Asked Questions" description="Everything you need to know before your experience." />

        {/* FAQ List */}
        <div>
          {faqs.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FnQ;