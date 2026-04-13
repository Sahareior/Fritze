import React, { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { LuPencil } from 'react-icons/lu';

const BioContent = () => {
  const [founderInfo, setFounderInfo] = useState({
    name: 'Maria Rodriguez',
    role: 'Founder & Chief Storyteller',
    image: null,
    bios: [
      'Maria Rodriguez is a Miami native with 15+ years of experience in cultural tourism and urban storytelling. After working with major tour operators and witnessing the disconnect between tourists and authentic local experiences, she founded our company to bridge that gap.',
      'A second-generation Cuban-American, Maria grew up in Little Havana and has deep roots in Miami\'s diverse communities. She holds a degree in Cultural Anthropology from the University of Miami and has been featured in Miami Herald, Travel + Leisure, and NPR\'s "Here & Now."',
      '"Every neighborhood has a story. We\'re here to help people listen."'
    ]
  });

  const updateBio = (index, value) => {
    const updatedBios = [...founderInfo.bios];
    updatedBios[index] = value;
    setFounderInfo({ ...founderInfo, bios: updatedBios });
  };

  const addBioField = () => {
    setFounderInfo({ ...founderInfo, bios: [...founderInfo.bios, ''] });
  };

  const handleFieldChange = (field, value) => {
    setFounderInfo({ ...founderInfo, [field]: value });
  };

  return (
    <div className="w-full px-5   h-full space-y-6 mx-auto p-6 pb-20">
      <div className="bg-[#EFF6FF] w-full p-8 rounded-2xl space-y-6 relative border border-[#D1E1F5]">
        <h4 className="text-[16px] font-semibold text-[#2A3C48] mb-4">Founder Bio</h4>

        {/* Image Upload Area */}
        <div className="flex flex-col items-center justify-center gap-2 py-4">
          <div className="relative group">
            <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-sm">
              {founderInfo.image ? (
                <img src={founderInfo.image} alt={founderInfo.name} className="w-full h-full object-cover" />
              ) : (
                <div className="text-gray-400">
                  {/* Placeholder */}
                </div>
              )}
            </div>
            <button className="absolute bottom-1 right-1 bg-white p-1.5 rounded-full shadow-md border border-gray-200 text-gray-600 hover:text-orange-500 transition-colors">
              <LuPencil size={14} />
            </button>
            <span className="absolute -left-32 top-10 font-medium text-gray-700">Upload Photo</span>
          </div>
        </div>

        {/* Name and Delete row */}
        <div className="flex gap-3">
          <input
            type="text"
            value={founderInfo.name}
            onChange={(e) => handleFieldChange('name', e.target.value)}
            placeholder="Name"
            className="w-full bg-white rounded-xl p-3 border border-transparent focus:border-blue-200 outline-none font-medium text-gray-700"
          />
          <button
            className="bg-red-500 text-white p-3 rounded-xl hover:bg-red-600 transition-colors shadow-sm"
          >
            <FiTrash2 />
          </button>
        </div>

        {/* Role row */}
        <input
          type="text"
          value={founderInfo.role}
          onChange={(e) => handleFieldChange('role', e.target.value)}
          placeholder="Job Title"
          className="w-full bg-white rounded-xl p-3 border border-transparent focus:border-blue-200 outline-none text-orange-500 font-medium"
        />

        {/* Bio Sections */}
        <div className="space-y-4">
          {founderInfo.bios.map((bio, index) => (
            <textarea
              key={index}
              value={bio}
              onChange={(e) => updateBio(index, e.target.value)}
              placeholder={`Bio Section ${index + 1}`}
              rows={4}
              className="w-full bg-white rounded-xl p-4 border border-transparent focus:border-blue-200 outline-none resize-none text-gray-600 leading-relaxed"
            />
          ))}
        </div>

        {/* Add Button */}
        <div className="pt-4">
          <button
            onClick={addBioField}
            className="w-[20vw] bg-orange-500 text-white block mx-auto py-3 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-100 transform active:scale-[0.98]"
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default BioContent;