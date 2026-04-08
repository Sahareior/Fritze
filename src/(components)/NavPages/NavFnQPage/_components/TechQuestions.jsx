import React from "react";

const questions = [
  {
    q: "Do I need an app?",
    a: "No. Everything works through your web browser. Just tap the link or scan the QR code—no downloads required.",
  },
  {
    q: "What if I don’t want to use my phone?",
    a: "The tour still works perfectly. Our expert guides share all the stories live. The digital experience is completely optional and enhances—but isn’t required—for enjoying the tour.",
  },
  {
    q: "Is this VR?",
    a: "No—we use light augmented reality (AR) and audio storytelling, all optional. You're experiencing the real Miami, not a virtual one.",
  },
];

const TechQuestions = () => {
  return (
    <section className="py-12">
      
      <div className="max-w-3xl mx-auto bg-[#F2F2F2] rounded-2xl p-6 text-center">
        
        {/* Title */}
        <h3 className="lora text-[28px] font-semibold text-[#2A3C48] mb-6">
          Tech Questions
        </h3>

        {/* Cards */}
        <div className="space-y-4 text-left">
          {questions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 "
            >
              <h4 className="text-[18px] raleway font-semibold text-gray-700 mb-1">
                {item.q}
              </h4>

              <p className="text-[16px] raleway text-gray-500 leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default TechQuestions;