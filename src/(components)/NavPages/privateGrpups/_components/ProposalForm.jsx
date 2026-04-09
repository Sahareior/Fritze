import React from "react";
import ReusableTitle from "../../../LandingPage/HomepageReusableComponents/ReusableTitle";

const Input = ({ label, placeholder, type = "text" }) => (
  <div className="w-full">
    <label className="text-[13px] md:text-[15px] raleway font-semibold text-[#2A3C48]/80 mb-1.5">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3.5 rounded-xl border border-gray-100 bg-white text-[14px] md:text-[15px] raleway font-medium outline-none focus:ring-2 focus:ring-orange-100 transition-all placeholder:text-gray-300 shadow-sm"
    />
  </div>
);

const ProposalForm = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <ReusableTitle
          title="Request a Proposal"
          description="Tell us about your group and we'll create a custom experience"
        />

        <div className="bg-white rounded-3xl border-2 border-[#00000014]/92  p-6 md:p-12">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Date Range *" placeholder="e.g., March 15-20, 2025" />
              <Input label="Group Size *" placeholder="Enter number of guests" />
            </div>

            <Input
              label="Interests *"
              placeholder="e.g., Food culture, art scene, team building"
            />

            <Input label="Budget *" placeholder="Roughly how much per person?" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <Input label="Contact Name *" placeholder="Your full name" />
              <Input label="Email *" type="email" placeholder="your@email.com" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Phone" placeholder="(555) 123-4567" />
              <Input label="Company/Organization" placeholder="Your organization" />
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-[#F97415] text-white py-4 rounded-2xl font-bold raleway text-lg hover:bg-[#E86400] transition-all shadow-xl flex items-center justify-center gap-3 group"
              >
                Request Proposal
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
              <p className="text-center text-gray-400 text-xs mt-4 raleway font-medium">
                We'll respond within 24 hours with a custom proposal
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProposalForm;
