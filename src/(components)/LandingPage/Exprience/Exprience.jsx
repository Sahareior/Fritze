import React from "react";
import ReusableCardHome from "../HomepageReusableComponents/ReusableCardHome";
import ReusableTitle from "../HomepageReusableComponents/ReusableTitle";

const experiences = [
  {
    title: "Little Havana — Echoes of Exile",
    desc: "Walk Calle Ocho through the stories of migration, identity, and resilience.",
    image:
      "https://images.unsplash.com/photo-1603883993892-3b7c5f65f3c5?q=80&w=1200&auto=format&fit=crop",
    price: "$120",
    tags: ["Walking", "max 14 person", "Food Included"],
  },
  {
    title: "Wynwood — Canvas of Change",
    desc: "Explore Miami’s most dynamic creative district where art, culture, and entrepreneurship collide.",
    image:
      "https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?q=80&w=1200&auto=format&fit=crop",
    price: "$120",
    tags: ["Biking", "max 14 person", "Food Included"],
  },
  {
    title: "Little Havana — Echoes of Exile",
    desc: "Walk Calle Ocho through the stories of migration, identity, and resilience.",
    image:
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=1200&auto=format&fit=crop",
    price: "$120",
    tags: ["Walking", "max 14 person", "Food Included"],
  },
];



function Experience() {
  return (
    <section className="bg-white py-14 ">
      <div className="max-w-8xl md:px-16 mx-auto">
        
        {/* Header */}
<ReusableTitle title="FEATURED EXPERIENCES" description="Choose your Preference. Choose your story." />

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((item, index) => (
            <ReusableCardHome key={index} item={item} />
          ))}
        </div>

        {/* Footer Link */}
        <div className="text-center md:text-right px mt-6">
          <button className="text-orange-500 text-sm hover:underline">
            View All Tours
          </button>
        </div>
      </div>
    </section>
  );
}

export default Experience;