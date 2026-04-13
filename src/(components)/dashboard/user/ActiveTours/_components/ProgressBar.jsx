const ProgressBar = ({ step = 3, total = 6 }) => {
  const percentage = (step / total) * 100;

  return (
    <div className="w-full">
      {/* Step text */}
      <p className="text-white text-sm mb-2">Step {step} of {total}</p>

      {/* Bar */}
      <div className="relative w-full h-2 bg-gray-300 rounded-full">
        
        {/* Filled part */}
        <div
          className="h-2 bg-orange-500 rounded-full"
          style={{ width: `${percentage}%` }}
        />

        {/* Bubble */}
        <div
          className="absolute -top-6 transform -translate-x-1/2"
          style={{ left: `${percentage}%` }}
        >
          <div className="bg-orange-400 text-white text-xs px-2 py-1 rounded-full">
            9%
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar