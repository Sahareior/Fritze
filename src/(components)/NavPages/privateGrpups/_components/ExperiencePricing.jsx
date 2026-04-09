import React from "react";
import { FaCheck, FaUsers, FaBriefcase, FaStar } from "react-icons/fa6";
import ReusableTitle from "../../../LandingPage/HomepageReusableComponents/ReusableTitle";

const PricingCard = ({
  icon,
  title,
  subtitle,
  price,
  guests,
  features,
  highlighted = false,
  dark = false,
  buttonText = "Inquire Now",
}) => {
  const Icon = icon;
  return (
    <div
      className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 ${
        highlighted
          ? "bg-[#F97415] text-white shadow-xl scale-105 z-10 py-12"
          : "bg-white border border-gray-100 shadow-sm hover:shadow-md"
      }`}
    >
      <div className="mb-6">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
            highlighted ? "bg-white/20" : "bg-orange-50 text-[#F97415]"
          }`}
        >
          <Icon size={24} />
        </div>
        <h3
          className={`lora text-2xl font-bold mb-2 ${
            highlighted ? "text-white" : "text-[#2A3C48]"
          }`}
        >
          {title}
        </h3>
        <p
          className={`raleway text-sm ${
            highlighted ? "text-white/80" : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span
            className={`lora text-4xl font-bold ${
              highlighted ? "text-white" : "text-[#2A3C48]"
            }`}
          >
            ${price}
          </span>
          <span
            className={`raleway text-sm font-medium ${
              highlighted ? "text-white/70" : "text-gray-400"
            }`}
          >
            starting
          </span>
        </div>
        <p
          className={`raleway text-[13px] mt-1 ${
            highlighted ? "text-white/80" : "text-gray-500"
          }`}
        >
          Up to {guests} guests
        </p>
      </div>

      <ul className="space-y-4 mb-10 grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <FaCheck
              className={`mt-1 shrink-0 ${
                highlighted ? "text-white" : "text-[#F97415]"
              }`}
              size={14}
            />
            <span
              className={`raleway text-sm font-medium ${
                highlighted ? "text-white/90" : "text-gray-600"
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-4 rounded-xl font-bold raleway transition-all duration-200 ${
          highlighted
            ? "bg-white text-[#F97415] hover:bg-orange-50"
            : dark
            ? "bg-[#2A3C48] text-white hover:bg-[#1A2832]"
            : "bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-50"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

const ExperiencePricing = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ReusableTitle
          title="Choose Your Experience"
          description="Simple pricing. Unforgettable moments."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 items-center">
          <PricingCard
            icon={FaUsers}
            title="Private Tour (standard)"
            subtitle="Perfect for families and friend groups"
            price="1,500"
            guests="10"
            features={[
              "Dedicated guide",
              "Flexible scheduling",
              "All immersive tech included",
              "Memory Vault access",
            ]}
          />

          <PricingCard
            icon={FaBriefcase}
            highlighted={true}
            title="Corporate Team"
            subtitle="Designed for team building"
            price="2,500"
            guests="20"
            features={[
              "Everything in Private plus",
              "Team-building moments",
              "Collaborative activities",
              "Custom branding options",
            ]}
          />

          <PricingCard
            icon={FaStar}
            dark={true}
            title="VIP After-Hours"
            subtitle="Exclusive access & experiences"
            price="5,000"
            guests="15"
            features={[
              "Everything in Corporate plus",
              "After-hours venue access",
              "Private finale experience",
              "Custom route design",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ExperiencePricing;
