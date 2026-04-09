import React from "react";
import { FaHeart, FaUsers, FaLightbulb } from "react-icons/fa";
import ReusableTitle from "../../../LandingPage/HomepageReusableComponents/ReusableTitle";

const values = [
  {
    icon: FaHeart,
    title: "Storytelling First",
    desc: "We believe stories create emotional connections. Every tour is crafted to move, inspire, and educate through narrative.",
  },
  {
    icon: FaUsers,
    title: "Freedom & Flexibility",
    desc: "Travel should be on your terms. We design experiences that respect your pace, interests, and schedule.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation",
    desc: "We combine cutting-edge technology with timeless storytelling to create something truly unique.",
  },
];

const team = [
  {
    name: "Maria Gonzalez",
    role: "Founder & Chief Storyteller",
    desc: "Former documentary filmmaker with a passion for bringing history to life through immersive narratives.",
  },
  {
    name: "David Chen",
    role: "Head of Technology",
    desc: "Tech innovator focused on creating seamless, magical user experiences that feel effortless.",
  },
  {
    name: "Sarah Williams",
    role: "Lead Historian",
    desc: "PhD in Urban History with expertise in cultural narratives and architectural storytelling.",
  },
  {
    name: "Alex Johnson",
    role: "Audio Director",
    desc: "Award-winning sound designer creating immersive audio landscapes for our tours.",
  },
];

const ValuesAndTeam = () => {
  return (
    <section className="bg-[#f3f3f3] py-16">
      
      <div className="max-w-8xl mx-auto px-20">
        
        {/* ================= VALUES ================= */}
        <div className="text-center mb-12">
         <ReusableTitle title="Our Values" />

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className=" rounded-xl px-6 py-12 text-left hover:shadow-md transition"
                  style={{
                    background: "linear-gradient(135deg, #EEF2FF 0%, #FAF5FF 100%)",

                  }}
                >
                  
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mb-4">
                    <Icon className="text-gray-700" />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold lora text-[24px]  text-gray-800 mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[17px] raleway text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>

                </div>
              );
            })}
          </div>
        </div>

        {/* ================= TEAM ================= */}
        <div className="text-center">
          
   <ReusableTitle title="Meet Our Team" />

          <div className="grid md:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition"
              >
                
                {/* Avatar */}
                <div className="w-14 h-14 mx-auto rounded-full bg-[#2f3e46] text-white flex items-center justify-center text-lg mb-4">
                  {member.name.charAt(0)}
                </div>

                {/* Name */}
                <h3 className="text-[20px] lora font-bold text-gray-800">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-[17px] font-semibold raleway text-[#4F39F6] mb-2">
                  {member.role}
                </p>

                {/* Description */}
                <p className="text-[14px] raleway text-gray-500 leading-relaxed">
                  {member.desc}
                </p>

              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};

export default ValuesAndTeam;