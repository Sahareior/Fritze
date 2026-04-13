import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoCheckmark, IoLocationSharp } from "react-icons/io5";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const TourCreate = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, label: "Initial Step", sub: "Edit hero image/video" },
    { id: 2, label: "Step 1", sub: "Tour details" },
    { id: 3, label: "Step 2", sub: "Tour stops & media" },
    { id: 4, label: "Step 3", sub: "Pricing tiers" },
  ];

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      default:
        return <Step1 />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="max-w-8xl mx-auto w-full px-8 py-6 flex-1 flex flex-col">
        
        {/* Persistent Header */}
        <div className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-2xl p-6 mb-10 flex items-center gap-5 shadow-sm border border-orange-100/50">
          <div className="w-14 h-14 bg-orange-200/50 rounded-xl flex items-center justify-center text-[#fb8500] text-3xl shadow-inner">
            <IoLocationSharp />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#344454] lora">
              Add New Tour
            </h1>
            <p className="text-sm text-gray-400 font-medium raleway">
              {steps[currentStep - 1].sub}
            </p>
          </div>
        </div>

        {/* Stepper Logic */}
        <div className="flex items-center justify-center mb-14">
          <div className="flex items-center">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                {/* Step Circle */}
                <div className="flex flex-col items-center relative">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 border-2 ${
                      currentStep > step.id
                        ? "bg-blue-600 border-blue-600 text-white shadow-md"
                        : currentStep === step.id
                        ? "bg-blue-600 border-blue-600 text-white shadow-lg scale-110"
                        : "bg-white border-gray-300 text-gray-400"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <IoCheckmark className="text-xl" />
                    ) : (
                      step.id
                    )}
                  </div>
                  <p
                    className={`text-[11px] font-bold mt-3 absolute -bottom-6 whitespace-nowrap uppercase tracking-wider ${
                      currentStep >= step.id ? "text-blue-600" : "text-gray-400"
                    }`}
                  >
                    {step.label}
                  </p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div
                    className={`w-24 h-[3px] mx-4 rounded-full transition-all duration-500 ${
                      currentStep > step.id ? "bg-blue-600" : "bg-gray-200"
                    }`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white rounded-3xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] border border-gray-50 mb-8 overflow-hidden">
          <div className="p-8">
             {renderStep()}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex justify-between items-center py-6 border-t border-gray-100 bg-gray-100/30 px-4">
          <button
            onClick={() => (currentStep === 1 ? navigate(-1) : prevStep())}
            className={`px-8 py-3 rounded-xl font-bold transition-all border ${
              currentStep === 1
                ? "text-red-500 border-red-100 hover:bg-red-50"
                : "text-gray-500 border-gray-200 hover:bg-white"
            }`}
          >
            {currentStep === 1 ? "Cancel" : "Back"}
          </button>

          <button
            onClick={currentStep === 4 ? () => navigate('/dashboard/admin-tours') : nextStep}
            className="px-12 py-3 bg-[#fb8500] text-white rounded-xl font-bold hover:bg-[#e67a00] transition-all shadow-lg shadow-orange-100 transform active:scale-95"
          >
            {currentStep === 4 ? "Save Tour" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCreate;