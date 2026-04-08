const features = [
  "Location-based audio narration",
  "Self-paced storytelling experience",
  "Offline access available",
  "Interactive cultural moments",
];

const FeaturesGrid = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {features.map((f, i) => (
        <div
          key={i}
          className="bg-white rounded-lg p-4 border text-sm text-gray-600"
        >
          ✨ {f}
        </div>
      ))}
    </div>
  );
};

export default FeaturesGrid;