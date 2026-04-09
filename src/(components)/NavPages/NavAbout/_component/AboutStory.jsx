import React from "react";
import ReusableTitle from "../../../LandingPage/HomepageReusableComponents/ReusableTitle";

const AboutStory = () => {
  return (
    <section className="bg-[#f3f3f3] py-16">
      
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Title */}

<ReusableTitle title="Our Story" />

        {/* Card */}
        <div className="bg-white raleway rounded-2xl shadow-md p-8 text-left space-y-6">
          
          <p className="text-[18px] text-gray-600 leading-relaxed">
            CineWalk was born from a frustrating experience. Our founder, Maria, was on a guided tour in Miami when she realized she was spending more time keeping up with the group than actually experiencing the city.
          </p>

          <p className="text-[18px] text-gray-600 leading-relaxed">
            As a documentary filmmaker, she knew there was a better way. She assembled a team of storytellers, historians, and technologists to create something completely new—a tour experience that felt like stepping into a film.
          </p>

          <p className="text-[18px] text-gray-600 leading-relaxed">
            We spent two years researching, writing, and refining our approach. We interviewed historians, tested with hundreds of users, and obsessed over every detail from the audio quality to the GPS triggers.
          </p>

          <p className="text-[18px] text-gray-600 leading-relaxed">
            Today, CineWalk is transforming how people explore cities. We’re proud to have helped thousands discover stories they never knew existed, right in their own neighborhoods or while traveling the world.
          </p>

        </div>

      </div>

    </section>
  );
};

export default AboutStory;