import React from "react";
import ReusableTitle from "../HomepageReusableComponents/ReusableTitle";

const ContactInfo = () => {
  return (
    <div className="bg-[#4b5337] rounded-xl md:p-6 p-4 flex flex-col justify-between h-full">
      
      <div className="md:p-8 p-2">
        <h3 className="font-serif md:text-[24px] text-[20px] text-[#FFFFFF] lora font-bold mb-2">Contact Information</h3>
        <p className="md:text-[18px] text-[15px] raleway font-medium text-[#EAEAEA] md:mb-10 mb-6">
          Tell us about your project and we’ll provide the answers within 24 hours
        </p>

        {/* Info Items */}
        <div className="flex flex-col md:gap-8 gap-6">
          
          <div className="flex items-start gap-3">
            <div className="bg-white text-orange-500 rounded-full min-w-[32px] min-h-[32px] w-8 h-8 flex items-center justify-center">
              ✉️
            </div>
            <div>
              <p className="md:text-[18px] text-[16px] text-[#FFFFFF] lora font-medium">Email</p>
              <p className="md:text-[16px] text-[14px] raleway text-[#CAD5E2]">example@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-white text-orange-500 rounded-full min-w-[32px] min-h-[32px] w-8 h-8 flex items-center justify-center">
              📞
            </div>
            <div>
              <p className="md:text-[18px] text-[16px] text-[#FFFFFF] lora font-medium">Phone Number</p>
              <p className="md:text-[16px] text-[14px] raleway text-[#CAD5E2]">(862)254-3380</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-white text-orange-500 rounded-full min-w-[32px] min-h-[32px] w-8 h-8 flex items-center justify-center">
              🕒
            </div>
            <div>
              <p className="md:text-[18px] text-[16px] text-[#FFFFFF] lora font-medium">Business Hours</p>
              <p className="md:text-[16px] text-[14px] raleway text-[#CAD5E2]">
                Monday - Friday, 7:00 AM - 5:00 PM
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3 mt-8 md:px-8 px-2 pb-2">
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
    <div className="md:py-8 py-2">
      <h3 className="font-serif lora font-medium md:text-[28px] text-[22px] text-[#825126] mb-6">
        Fill the information
      </h3>

      <form className="md:space-y-8 space-y-5">
        
        {/* Name + Email */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <label className="raleway md:text-[16px] text-[14px] font-medium" htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter here"
              className="w-full mt-1.5 px-4 py-3 rounded-md bg-gray-100 text-sm outline-none"
            />
          </div>
          <div>
            <label className="raleway md:text-[16px] text-[14px] font-medium" htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter here"
              className="w-full mt-1.5 px-4 py-3 rounded-md bg-gray-100 text-sm outline-none"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="raleway md:text-[16px] text-[14px] font-medium" htmlFor="">Subject</label>
          <input
            type="text"
            placeholder="Enter here"
            className="w-full mt-1.5 px-4 py-3 rounded-md bg-gray-100 text-sm outline-none"
          />
        </div>

        {/* Message */}
        <div>
          <label className="raleway md:text-[16px] text-[14px] font-medium" htmlFor="">Share your thoughts</label>
          <textarea
            rows="5"
            placeholder="Enter here"
            className="w-full mt-1.5 px-4 py-3 rounded-md bg-gray-100 text-sm outline-none resize-none"
          ></textarea>
        </div>
        
        {/* Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 mt-2 rounded-md hover:bg-orange-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

function ContactPage() {
  return (
    <section className=" min-h-screen  ">
      <div className="max-w-8xl md:px-20 px-4 md:py-24 py-10 mx-auto">
      <h3 className="lora md:text-[36px] text-[24px] font-semibold text-center text-gray-800 mb-6 md:mb-10">Have A Question?</h3>

        {/* Card */}
        <div className="bg-white rounded-2xl  grid md:grid-cols-2 gap-8 md:gap-12 md:p-14 ">
          
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