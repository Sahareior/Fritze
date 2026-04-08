import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxDropdownMenu } from "react-icons/rx";

const faqs = [
  {
    question: "What should I bring?",
    answer:
      "Comfortable walking shoes, a charged smartphone, and curiosity!",
  },
  {
    question: "Do I need to be tech-savvy?",
    answer:
      "Not at all. The experience is simple and designed for everyone.",
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer:
      "Yes, most dietary needs can be accommodated with prior notice.",
  },
  {
    question: "Is this tour wheelchair accessible?",
    answer:
      "Most routes are accessible. Please check details before booking.",
  },
];

const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <div
      className="bg-white border border-[#E9E9E9] rounded-xl px-5 py-4 cursor-pointer transition hover:shadow-sm"
      onClick={onClick}
    >
      
      {/* Question */}
      <div className="flex justify-between items-center">
        <h3 className="text-sm text-gray-700 font-medium">
          {item.question}
        </h3>

        <span
          className={`text-gray-400 transition ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <RiArrowDropDownLine size={24} />
        </span>
      </div>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 mt-3" : "max-h-0"
        }`}
      >
        <p className="text-sm text-gray-500">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const TourFnQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="">
      
      {/* Title */}
      <h3 className="lora text-[42px] font-semibold text-[#2A3C48] mb-6">
        Frequently Asked Questions
      </h3>

      {/* FAQ List */}
      <div className="space-y-4 ">
        {faqs.map((item, index) => (
          <FAQItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onClick={() => toggle(index)}
          />
        ))}
      </div>



    </section>
  );
};

export default TourFnQ;