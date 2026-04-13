const StepTabs = ({ activeStep = 1 }) => {
  return (
    <div className="flex gap-3 mt-4">
      
      {/* Step 1 */}
      <button
        className={`px-4 py-2 rounded-lg text-sm font-medium ${
          activeStep === 1
            ? "bg-orange-500 text-white"
            : "bg-gray-600 text-gray-300"
        }`}
      >
        Stop 1: Welcome & Cuban Cafecito
      </button>

      {/* Step 2 */}
      <button
        className={`px-4 py-2 rounded-lg text-sm font-medium ${
          activeStep === 2
            ? "bg-orange-500 text-white"
            : "bg-gray-600 text-gray-300"
        }`}
      >
        Stop 2: History
      </button>
    </div>
  );
};

export default StepTabs