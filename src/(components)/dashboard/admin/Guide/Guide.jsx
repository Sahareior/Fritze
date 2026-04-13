import React, { useState } from 'react';
import { FiEdit, FiTrash2, FiSearch } from 'react-icons/fi';
import ReusableModal from '../../../Projects_Reusable_Components/ReusableModal';
import AddGuideModalPage from './_components/AddGuideModalPage';

const Guide = () => {
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);

  const guides = [
    {
      name: 'Carlos Fernandez',
      email: 'carlos@tours.com',
      phone: '+1 (305) 555-0124',
      assigned: 'Art Deco District',
      tours: 142,
      rating: 4.8,
      image: 'https://i.pravatar.cc/100'
    },
    {
      name: 'Carlos Fernandez',
      email: 'carlos@tours.com',
      phone: '+1 (305) 555-0124',
      assigned: 'Art Deco District',
      tours: 142,
      rating: 4.8
    },
    {
      name: 'Carlos Fernandez',
      email: 'carlos@tours.com',
      phone: '+1 (305) 555-0124',
      assigned: 'Art Deco District',
      tours: 142,
      rating: 4.8
    }
  ];

  return (
    <div className="max-w-8xl mx-auto p-6 space-y-5">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div />
        <button onClick={() => setShowModal(true)} className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
          + Add Guide
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search guides..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg pl-10 pr-4 py-2"
        />
      </div>

      {/* List */}
      <div className="space-y-4">
        {guides.map((guide, index) => (
          <div key={index} className="border rounded-xl p-4 bg-white space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                {guide.image ? (
                  <img
                    src={guide.image}
                    alt="avatar"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-lg bg-orange-500 text-white flex items-center justify-center font-semibold">
                    CF
                  </div>
                )}

                <div>
                  <p className="font-medium">{guide.name}</p>
                  <p className="text-sm text-gray-500">
                    {guide.email} • {guide.phone}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="bg-green-600 text-white p-2 rounded-md">
                  <FiEdit size={16} />
                </button>
                <button className="bg-red-500 text-white p-2 rounded-md">
                  <FiTrash2 size={16} />
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 bg-gray-100 rounded-lg p-3 text-sm">
              <div>
                <p className="text-gray-500">Assigned Tour</p>
                <p className="font-medium">{guide.assigned}</p>
              </div>
              <div>
                <p className="text-gray-500">Total Tours</p>
                <p className="font-medium">{guide.tours}</p>
              </div>
              <div>
                <p className="text-gray-500">Avg. Rating</p>
                <p className="font-medium">
                  {guide.rating} ⭐
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ReusableModal 
        open={showModal} 
        onCancel={() => setShowModal(false)}
        title="Add New Guide"
        children={
            <AddGuideModalPage onClose={() => setShowModal(false)} />
        }
      />
    </div>
  );
};

export default Guide;