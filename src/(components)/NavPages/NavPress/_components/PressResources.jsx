import React from "react";
import { FaImage, FaVideo, FaExternalLinkAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PressResources = () => {
  const navigate = useNavigate();
  return (
    <section className=" pt-12 pb-20">
      <div className="max-w-8xl mx-auto px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          
          {/* ================= LEFT COLUMN (2/3 width) ================= */}
          <div className="md:col-span-2 space-y-10 md:space-y-16">
            
            {/* Photo & Video Gallery */}
            <div>
              <h2 className="lora text-[28px] md:text-[36px] font-semibold text-[#2A3C48] mb-6 md:mb-8">
                Photo & Video Gallery
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Photo Card */}
                <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 flex flex-col hover:shadow-md transition border border-gray-100">
                  <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-white mb-6">
                    <FaImage size={24} />
                  </div>
                  <h3 className="lora text-[22px] font-semibold text-gray-800 mb-2">
                    Photo Library
                  </h3>
                  <p className="raleway text-[16px] text-gray-400 mb-6 leading-relaxed">
                    High-resolution tour photos, neighborhood scenes, and guest experiences.
                  </p>
                  <button onClick={() => navigate('/press/photo-gallery')} className="mt-auto flex items-center gap-2 text-orange-500 font-bold raleway text-sm hover:underline">
                    View Gallery <FaExternalLinkAlt size={12} />
                  </button>
                </div>

                {/* Video Card */}
                <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 flex flex-col hover:shadow-md transition border border-gray-100">
                  <div className="w-14 h-14 rounded-full bg-[#52583E] flex items-center justify-center text-white mb-6">
                    <FaVideo size={24} />
                  </div>
                 
                  <p className="raleway text-[16px] text-gray-400 mb-6 leading-relaxed">
                    Tour highlights, testimonials, and b-roll footage for media use.
                  </p>
                  <button onClick={() => navigate('/press/video-gallery')} className="mt-auto flex items-center gap-2 text-orange-500 font-bold raleway text-sm hover:underline">
                    View Videos <FaExternalLinkAlt size={12} />
                  </button>
                </div>
              </div>
            </div>

            {/* Founder Bio */}
            <div>
              <h2 className="lora text-[28px] md:text-[36px] font-semibold text-[#2A3C48] mb-6 md:mb-8">
                Founder Bio
              </h2>
              
              <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                  {/* Image Placeholder */}
                  <div className="w-full md:w-[280px] h-[340px] bg-[#D9D9D9] rounded-2xl shrink-0"></div>
                  
                  {/* Bio Text */}
                  <div className="flex flex-col">
                    <h3 className="lora text-[26px] md:text-[32px] font-bold text-gray-800 mb-1">
                      Maria Rodriguez
                    </h3>
                    <p className="raleway text-[16px] md:text-[18px] font-medium text-orange-500 mb-6">
                      Founder & Chief Storyteller
                    </p>
                    
                    <div className="raleway text-[15px] md:text-[16px] max-w-[400px] text-gray-500 space-y-4  mb-8 leading-relaxed">
                      <p>
                        Maria Rodriguez is a Miami native with 15+ years of experience in cultural tourism and urban storytelling. After working with major tour operators and witnessing the disconnect between tourists and authentic local experiences, she founded our company to bridge that gap.
                      </p>
                      <p>
                        A second-generation Cuban-American, Maria grew up in Little Havana and has deep roots in Miami’s diverse communities. She holds a degree in Cultural Anthropology from the University of Miami and has been featured in Miami Herald, Travel + Leisure, and NPR’s "Here & Now."
                      </p>
                      <p className="italic font-medium text-gray-700 pt-2 border-t border-gray-100">
                        "Every neighborhood has a story. We’re here to help people listen."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN (1/3 width) ================= */}
          <div className="space-y-10 mt-8 md:mt-0">
            
            {/* Recent Coverage */}
            <div className="bg-white md:mt-[80px] rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
              <h2 className="lora text-[22px] md:text-[24px] font-semibold text-[#2A3C48] mb-6 md:mb-8">
                Recent Coverage
              </h2>
              
              <div className="space-y-10">
                <div>
                  <h4 className="raleway font-bold text-[16px] text-gray-800">Miami Herald</h4>
                  <p className="raleway text-[14px] text-gray-400 mt-1">"A New Way to Experience Miami’s Cultural Heart"</p>
                  <p className="raleway text-[12px] text-gray-300 mt-2">March 2024</p>
                </div>
                <div className="border-t border-gray-100 pt-8">
                  <h4 className="raleway font-bold text-[16px] text-gray-800">Travel + Leisure</h4>
                  <p className="raleway text-[14px] text-gray-400 mt-1">"10 Most Innovative Tours in America"</p>
                  <p className="raleway text-[12px] text-gray-300 mt-2">February 2024</p>
                </div>
                <div className="border-t border-gray-100 pt-8">
                  <h4 className="raleway font-bold text-[16px] text-gray-800">NPR - Here & Now</h4>
                  <p className="raleway text-[14px] text-gray-400 mt-1">"Tech Meets Tradition in Miami Tours"</p>
                  <p className="raleway text-[12px] text-gray-300 mt-2">January 2024</p>
                </div>
              </div>
            </div>

            {/* Press Contact */}
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
              <h2 className="lora text-[22px] md:text-[24px] font-semibold text-[#2A3C48] mb-6 md:mb-8">
                Press Contact
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h4 className="raleway font-bold text-[16px] text-gray-800 mb-4">Media Inquiries</h4>
                  <div className="space-y-3 text-[14px] raleway break-words">
                    <a href="mailto:press@miamiexperiences.com" className="flex items-center gap-3 text-orange-500 hover:underline">
                      <FaEnvelope /> press@miamiexperiences.com
                    </a>
                    <a href="tel:3055550123" className="flex items-center gap-3 text-orange-500 hover:underline">
                      <FaPhoneAlt /> (305) 555-0123
                    </a>
                  </div>
                  <p className="raleway text-[14px] text-gray-400 mt-6 leading-relaxed">
                    For interview requests, press visits, or additional materials, please contact us directly. We typically respond within 24 hours.
                  </p>
                </div>
                
                <div className="border-t border-gray-100 pt-8">
                  <h4 className="raleway font-bold text-[16px] text-gray-800 mb-2">Media Hours</h4>
                  <p className="raleway text-[14px] text-gray-400">Monday - Friday</p>
                  <p className="raleway text-[14px] text-gray-400 font-medium">9:00 AM - 6:00 PM EST</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default PressResources;
