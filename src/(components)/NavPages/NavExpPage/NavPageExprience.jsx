import React from "react";
import ReusableCardHome from "../../LandingPage/HomepageReusableComponents/ReusableCardHome";
import ReusableTitle from "../../LandingPage/HomepageReusableComponents/ReusableTitle";

const filters = ["Neighborhood", "Format", "Tier", "Duration"];

const ReusableSelect = ({ title }) => {
  return (
    <div className="w-full">
      <label className="text-sm raleway font-semibold text-gray-500">{title}</label>

      <div className="relative mt-1">
        <select className="w-full px-4 py-3 rounded-md bg-white border border-gray-200 text-sm appearance-none outline-none">
          <option>Select</option>
        </select>

        {/* Dropdown Icon */}
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          ▼
        </span>
      </div>
    </div>
  );
};

const NavPageExprience = () => {
  const experiences = [
    {
      title: "Little Havana: Stories & Sabor",
      desc: "Immerse yourself in the heart of Miami's Cuban community with authentic flavors and histories.",
      image:
        "https://images.unsplash.com/photo-1603883993892-3b7c5f65f3c5?q=80&w=1200",
      price: "$79",
      duration: "3h",
      tags: ["Walking", "Food", "History"],
    },
    {
      title: "Wynwood: Art, Culture & Community",
      desc: "Walk through the world's most famous street art district and discover the stories behind the murals.",
      image:
        "https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?q=80&w=1200",
      price: "$75",
      duration: "3h",
      tags: ["Art", "Culture", "Street Art"],
    },
    {
      title: "South Beach: Deco & Ocean Stories",
      desc: "Discover the architectural gems of Art Deco and the history of Miami's world-famous beachfront.",
      image:
        "https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=1200",
      price: "$69",
      duration: "2.5h",
      tags: ["Architecture", "History", "Beach"],
    },
  ];

  return (
    <section className="bg-[#f3f3f3] min-h-screen">
      {/* HERO */}
      <div className="bg-[#e6d2b5] py-16 text-center">
        <ReusableTitle
          title="Experiences"
          description="Choose your neighborhood. Choose your story."
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-8xl mx-auto md:px-20 px-4 py-10">
        {/* FILTERS */}
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mb-10">
          {filters?.map((item, index) => (
            <ReusableSelect key={index} title={item} />
          ))}
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6">
          {experiences?.map((item, index) => (
            <ReusableCardHome from="experience" key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavPageExprience;
