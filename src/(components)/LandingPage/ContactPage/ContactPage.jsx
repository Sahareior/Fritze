import React from "react";
import ReusableTitle from "../HomepageReusableComponents/ReusableTitle";

const ContactInfo = () => {
  return (
    <div className="bg-[#4b5337] rounded-xl p-6 flex flex-col justify-between h-full">
      
      <div className="p-8">
        <h3 className="font-serif text-[24px] text-[#FFFFFF] lora font-bold mb-2">Contact Information</h3>
        <p className="text-[18px] raleway font-medium text-[#EAEAEA] mb-6">
          Tell us about your project and we’ll provide the answers within 24 hours
        </p>

        {/* Info Items */}
        <div className="flex flex-col justify-between h-full">
          
          <div className="flex items-start gap-3">
            <div className="bg-white text-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
              ✉️
            </div>
            <div>
              <p className="text-[18px] text-[#FFFFFF] lora font-medium">Email</p>
              <p className="text-[16px] raleway text-[#CAD5E2]">example@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-white text-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
              📞
            </div>
            <div>
              <p className="text-[18px] text-[#FFFFFF] lora font-medium">Phone Number</p>
              <p className="text-[16px] raleway text-[#CAD5E2]">(862)254-3380</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-white text-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
              🕒
            </div>
            <div>
              <p className="text-[18px] text-[#FFFFFF] lora font-medium">Business Hours</p>
              <p className="text-[16px] raleway text-[#CAD5E2]">
                Monday - Friday, 7:00 AM - 5:00 PM
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3 mt-6">
        <span className="w-8 h-8 rounded-full bg-white text-orange-500 flex items-center justify-center cursor-pointer">
          f
        </span>
        <span className="w-8 h-8 rounded-full bg-white text-orange-500 flex items-center justify-center cursor-pointer">
          📸
        </span>
        <span className="w-8 h-8 rounded-full bg-white text-orange-500 flex items-center justify-center cursor-pointer">
          X
        </span>
      </div>
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="">
      <h3 className="font-serif lora font-medium text-[28px] text-[#825126] mb-6">
        Fill the information
      </h3>

      <form className="space-y-12">
        
        {/* Name + Email */}
        <div className="grid md:grid-cols-2 gap-4">
<div>
    <label className="raleway text-[16px] font-medium" htmlFor="">Name</label>
              <input
            type="text"
            placeholder="Enter here"
            className="w-full mt-1 px-4 py-3 rounded-md bg-gray-100 text-sm outline-none"
          />
</div>
<div>
    <label className="raleway text-[16px] font-medium" htmlFor="">Email</label>
              <input
            type="email"
            placeholder="Enter here"
            className="w-full mt-1 px-4 py-3 rounded-md bg-gray-100 text-sm outline-none"
          />
</div>
        </div>

        {/* Subject */}
        <div>
    <label className="raleway text-[16px] font-medium" htmlFor="">Subject</label>
              <input
            type="text"
            placeholder="Enter here"
            className="w-full mt-1 px-4 py-3 rounded-md bg-gray-100 text-sm outline-none"
          />
</div>

        {/* Message */}
        <div>
    <label className="raleway text-[16px] font-medium" htmlFor="">Share your thoughts</label>
              <textarea
          rows="5"
          placeholder="Enter here"
          className="w-full mt-1 px-4 py-3 rounded-md bg-gray-100 text-sm outline-none resize-none"
        ></textarea>
</div>
        {/* Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

function ContactPage() {
  return (
    <section className="bg-[#f3f3f3] min-h-screen  ">
      <div className="max-w-8xl md:px-20 py-24 mx-auto">
        
        {/* Title */}
<ReusableTitle title="Have A Question?" />

        {/* Card */}
        <div className="bg-white rounded-2xl  shadow-md grid md:grid-cols-2 gap-12 p-14">
          
          {/* Left */}
          <ContactInfo />

          {/* Right */}
          <ContactForm />

        </div>
      </div>
    </section>
  );
}

export default ContactPage;