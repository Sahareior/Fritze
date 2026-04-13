import React, { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';

const BrandStoryContent = () => {
  const [stories, setStories] = useState([
    "We're not just a walking tour company. CineWalk uses storytelling to transform everyday neighborhoods into captivating experiences. Our approach combines documentary filmmaking techniques with cutting-edge technology to create meaningful connections between visitors and the stories that define every city we operate in.",
    "We're not just a walking tour company. CineWalk uses storytelling to transform everyday neighborhoods into captivating experiences. Our approach combines documentary filmmaking techniques with cutting-edge technology to create meaningful connections between visitors and the stories that define every city we operate in.",
    "We're not just a walking tour company. CineWalk uses storytelling to transform everyday neighborhoods into captivating experiences. Our approach combines documentary filmmaking techniques with cutting-edge technology to create meaningful connections between visitors and the stories that define every city we operate in."
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

  return (
    <div className="w-full px-5 bg-[#E8E8E8] h-screen mx-auto p-6">
      <div className="bg-[#EFF6FF] w-full  rounded-2xl p-2 space-y-4 relative">
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

      </div>
      <button
        onClick={addStory}
        className="w-[20vw] bg-orange-500 mt-6 text-white block mx-auto py-3 rounded-lg font-medium hover:bg-orange-600"
      >
        + Add
      </button>
    </div>
  );
};

export default BrandStoryContent;