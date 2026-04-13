import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa6';

const PrivateTouresContent = () => {
  const [tours, setTours] = useState([
    {
      id: 1,
      title: 'Little Havana Food & Culture',
      description: 'Authentic Cuban cuisine, street art stories, and neighborhood soul scenes.',
      duration: '3 hours',
      guests: '15 max guests',
      price: 'Starting at $4,200',
    },
    {
      id: 2,
      title: 'Wynwood Art & Design',
      description: 'Street art galleries, urban Miami murals, and creative culture exploration.',
      duration: '3 hours',
      guests: '15 max guests',
      price: 'Starting at $4,200',
    },
  ]);

  const handleAddTour = () => {
    const newTour = {
      id: Date.now(),
      title: '',
      description: '',
      duration: '',
      guests: '',
      price: '',
    };
    setTours([...tours, newTour]);
  };

  const handleDeleteTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const handleInputChange = (id, field, value) => {
    setTours(
      tours.map((tour) => (tour.id === id ? { ...tour, [field]: value } : tour))
    );
  };

  return (
    <div className="w-full px-5 bg-[#E8E8E8] min-h-screen">
      <div className="w-full px-5 mx-auto space-y-6">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="bg-[#EFF6FF] border border-[#D1E1F5] rounded-3xl p-6 relative shadow-sm"
          >
            {/* Header / Delete Button */}
            <div className="flex justify-between items-start mb-4">
              <label className="text-[17px] font-semibold text-[#344454]">
                Choose Your Tour
              </label>
              <button
                onClick={() => handleDeleteTour(tour.id)}
                className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors"
                aria-label="Delete Tour"
              >
                <FaTrash size={16} />
              </button>
            </div>

            {/* Title Input */}
            <div className="mb-4">
              <input
                type="text"
                value={tour.title}
                onChange={(e) => handleInputChange(tour.id, 'title', e.target.value)}
                placeholder="Tour Title"
                className="w-full bg-white border border-[#D1D5DC] rounded-xl py-3 px-4 text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
              />
            </div>

            {/* Description Textarea */}
            <div className="mb-4">
              <textarea
                value={tour.description}
                onChange={(e) =>
                  handleInputChange(tour.id, 'description', e.target.value)
                }
                placeholder="Description"
                rows={3}
                className="w-full bg-white border border-[#D1D5DC] rounded-xl py-3 px-4 text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all resize-none"
              />
            </div>

            {/* Metadata Inputs (Three Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                value={tour.duration}
                onChange={(e) =>
                  handleInputChange(tour.id, 'duration', e.target.value)
                }
                placeholder="Duration (e.g., 3 hours)"
                className="bg-white border border-[#D1D5DC] rounded-xl py-3 px-4 text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
              />
              <input
                type="text"
                value={tour.guests}
                onChange={(e) =>
                  handleInputChange(tour.id, 'guests', e.target.value)
                }
                placeholder="Max Guests"
                className="bg-white border border-[#D1D5DC] rounded-xl py-3 px-4 text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
              />
              <input
                type="text"
                value={tour.price}
                onChange={(e) => handleInputChange(tour.id, 'price', e.target.value)}
                placeholder="Price (e.g., Starting at $4,200)"
                className="bg-white border border-[#D1D5DC] rounded-xl py-3 px-4 text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
              />
            </div>
          </div>
        ))}

        {/* Add Button */}
        <div className="flex justify-center pt-4">
          <button
            onClick={handleAddTour}
            className="w-[20vw] bg-[#FF781F] text-white py-2 rounded-xl font-bold text-md hover:bg-[#E66A19] transition-all transform active:scale-[0.98] shadow-lg shadow-orange-100 flex items-center justify-center gap-2"
          >
            <span className="text-2xl">+</span> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivateTouresContent;
