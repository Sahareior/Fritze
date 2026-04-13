import React, { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { LuPencil } from 'react-icons/lu';



const HIW =({title,placeholder,type,show})=> {
    return(
   <div className="w-full mx-auto ">
      <div className="bg-[#EFF6FF]  rounded-2xl p-4 space-y-4 relative">
        {/* Delete Button */}
<div className='flex flex-row-reverse gap-4'>
            <button className=" top-4 right-4 bg-red-500 text-white p-2 rounded-lg">
          <FiTrash2 />
        </button>

        {/* Title */}
        <div className="w-full bg-white  rounded-lg p-3 font-medium">
          How It Works
        </div>
</div>

        {/* Subtitle */}
        <input
          type="text"
          defaultValue="Everything you need to know about our immersive Miami tours"
          className="w-full bg-white  rounded-lg p-3 text-gray-500"
        />

        {/* Section Title */}
{
    show && (
        <div className='flex flex-col gap-5'>
 <div className="w-full bg-white  rounded-lg p-3 font-medium">
          Your Story Key
        </div>

        {/* Description */}
        <textarea
          defaultValue="Simply mt-6 tap or scan to unlock immersive content at each stop. No downloads, no hassle."
          rows={4}
          className="w-full bg-white  rounded-lg p-3 resize-none"
        />
</div>
    )
}
      </div>
    </div>
    )
}

const AboutContent = () => {
  const [stories, setStories] = useState([
    "We're not just a walking tour company. CineWalk uses storytelling to transform everyday neighborhoods into captivating experiences. Our approach combines documentary filmmaking techniques with cutting-edge technology to create meaningful connections between visitors and the stories that define every city we operate in.",
    "We're not just a walking tour company. CineWalk uses storytelling to transform everyday neighborhoods into captivating experiences. Our approach combines documentary filmmaking techniques with cutting-edge technology to create meaningful connections between visitors and the stories that define every city we operate in.",
    "We're not just a walking tour company. CineWalk uses storytelling to transform everyday neighborhoods into captivating experiences. Our approach combines documentary filmmaking techniques with cutting-edge technology to create meaningful connections between visitors and the stories that define every city we operate in."
  ]);

  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: 'Maria Gonzalez',
      role: 'Founder & Chief Storyteller',
      bio: 'We believe stories create emotional connections. Every tour is crafted to move, inspire, and educate through narrative.',
      image: null
    },
    {
      id: 2,
      name: 'Maria Gonzalez',
      role: 'Founder & Chief Storyteller',
      bio: 'We believe stories create emotional connections. Every tour is crafted to move, inspire, and educate through narrative.',
      image: null
    }
  ]);

  const updateStory = (index, value) => {
    const updated = [...stories];
    updated[index] = value;
    setStories(updated);
  };

  const addStory = () => {
    setStories([...stories, '']);
  };

  const removeAll = () => {
    setStories([]);
  };

  const addMember = () => {
    setTeamMembers([
      ...teamMembers,
      { id: Date.now(), name: '', role: '', bio: '', image: null }
    ]);
  };

  const deleteMember = (id) => {
    setTeamMembers(teamMembers.filter(m => m.id !== id));
  };

  const updateMember = (id, field, value) => {
    setTeamMembers(teamMembers.map(m => m.id === id ? { ...m, [field]: value } : m));
  };

  return (
    <div className="w-full px-5 bg-[#E8E8E8] h-full space-y-6 mx-auto p-6 pb-20">
      <div className="bg-[#EFF6FF] w-full pb-11 rounded-2xl p-2 space-y-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="font-medium text-sm text-gray-700">Brand Story</div>
          <button
            onClick={removeAll}
            className="bg-red-500 text-white p-2 rounded-lg"
          >
            <FiTrash2 />
          </button>
        </div>

        {/* Story Blocks */}
        <div className="space-y-3">
          {stories.map((story, index) => (
            <textarea
              key={index}
              value={story}
              onChange={(e) => updateStory(index, e.target.value)}
              rows={4}
              className="w-full bg-white  rounded-lg p-3 resize-none"
            />
          ))}
        </div>

        <button
          onClick={addStory}
          className="w-[20vw] bg-orange-500 mt-6 text-white block mx-auto py-3 rounded-lg font-medium hover:bg-orange-600"
        >
          + Add
        </button>
      </div>

      <div className='bg-[#EFF6FF] py-8 text-[#2A3C48] rounded-2xl'>
        <p className='text-[16px] px-4 font-semibold mb-4'>Our Values</p>
        <div className="space-y-4 px-4">
          <HIW />
          <HIW />
        </div>
        <button
          onClick={() => {}} // Placeholder for Add Value
          className="w-[20vw] bg-orange-500 mt-6 text-white block mx-auto py-3 rounded-lg font-medium hover:bg-orange-600"
        >
          + Add
        </button>
      </div>

      {/* Meet Our Team */}
      <div className="bg-[#EFF6FF] p-6 rounded-2xl relative">
        <h4 className="text-[16px] font-semibold text-[#2A3C48] mb-6">Meet Our Team</h4>
        
        <div className="space-y-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="space-y-4">
              {/* Image Upload Area */}
              <div className="flex flex-col items-center justify-center gap-2 py-4">
                <div className="relative group">
                  <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-sm">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-gray-400">
                        {/* Placeholder circle icon if any */}
                      </div>
                    )}
                  </div>
                  <button className="absolute bottom-1 right-1 bg-white p-1.5 rounded-full shadow-md border border-gray-200 text-gray-600 hover:text-orange-500">
                    <LuPencil size={14} />
                  </button>
                </div>
                <span className="text-sm font-medium text-gray-500">Upload Photo</span>
              </div>

              {/* Name and Delete row */}
              <div className="flex gap-3">
                <input
                  type="text"
                  value={member.name}
                  onChange={(e) => updateMember(member.id, 'name', e.target.value)}
                  placeholder="Name"
                  className="w-full bg-white rounded-xl p-3 border border-transparent focus:border-blue-200 outline-none font-medium"
                />
                <button
                  onClick={() => deleteMember(member.id)}
                  className="bg-red-500 text-white p-3 rounded-xl hover:bg-red-600 transition-colors"
                >
                  <FiTrash2 />
                </button>
              </div>

              {/* Role row */}
              <input
                type="text"
                value={member.role}
                onChange={(e) => updateMember(member.id, 'role', e.target.value)}
                placeholder="Job Title"
                className="w-full bg-white rounded-xl p-3 border border-transparent focus:border-blue-200 outline-none text-blue-600 font-medium"
              />

              {/* Bio row */}
              <textarea
                value={member.bio}
                onChange={(e) => updateMember(member.id, 'bio', e.target.value)}
                placeholder="Bio"
                rows={4}
                className="w-full bg-white rounded-xl p-4 border border-transparent focus:border-blue-200 outline-none resize-none"
              />
            </div>
          ))}
        </div>

        {/* Global Add Button for Team */}
               <button
          onClick={() => {}} // Placeholder for Add Value
          className="w-[20vw] bg-orange-500 mt-6 text-white block mx-auto py-3 rounded-lg font-medium hover:bg-orange-600"
        >
          + Add
        </button>
      </div>
    </div>
  );
};

export default AboutContent;