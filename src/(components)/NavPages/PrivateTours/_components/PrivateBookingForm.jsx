import React from "react";
import ReusableTitle from "../../../LandingPage/HomepageReusableComponents/ReusableTitle";


const Input = ({ label, placeholder, type = "text" }) => {
  return (
    <div className="w-full">
      <label className="text-[15px] raleway font-medium text-gray-500">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full mt-1 px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm outline-none focus:ring-2 focus:ring-orange-200"
      />
    </div>
  );
};

const PrivateBookingForm = () => {
  return (
    <section className="pb-16 mt-4 md:mt-0">
      
      <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">
        
        {/* Header */}
<ReusableTitle
title="Book Your Private Tour"
description="We’ll confirm availability and send you all the details"
/>

        {/* Form Card */}
        <div className="bg-white rounded-xl md:rounded-2xl border border-gray-200 shadow-sm p-4 md:p-8 text-left">
          
          <form className="space-y-4 md:space-y-5">
            
            {/* Select Tour */}
            <Input label="Select Tour *" placeholder="Choose a tour" />

            {/* Date + Guests */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Preferred Date *" type="date" />
              <Input label="Number of Guests *" placeholder="Enter number" />
            </div>

            {/* Name */}
            <Input label="Your Name *" placeholder="Enter your full name" />

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Email *" placeholder="your@email.com" />
              <Input label="Phone" placeholder="(555) 123-4567" />
            </div>

            {/* Textarea */}
            <div>
              <label className="text-xs text-gray-500">
                Special Requests or Questions
              </label>

              <textarea
                rows="4"
                placeholder="Dietary restrictions, accessibility needs, or anything else we should know..."
                className="w-full mt-1 px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm outline-none focus:ring-2 focus:ring-orange-200 resize-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg mt-2 hover:bg-orange-600 transition shadow-sm flex items-center justify-center gap-2"
            >
              Submit Booking Request →
            </button>

            {/* Footer Note */}
            <p className="text-[11px] text-gray-400 text-center mt-1">
              We’ll confirm availability and send booking details within 12 hours
            </p>

          </form>

        </div>

      </div>

    </section>
  );
};

export default PrivateBookingForm;