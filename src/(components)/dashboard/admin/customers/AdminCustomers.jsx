import React, { useState } from 'react';
import { FiSearch, FiEye } from 'react-icons/fi';

const AdminCustomers = () => {
  const [search, setSearch] = useState('');

  const customers = [
    {
      name: 'Alex Johnson',
      email: 'alex@gmail.com',
      time: '09:30am',
      avatar: 'https://i.pravatar.cc/100?img=12'
    },
    {
      name: 'Alex Johnson',
      email: 'alex@gmail.com',
      time: '09:30am',
      avatar: 'https://i.pravatar.cc/100?img=12'
    }
  ];

  return (
    <div className="max-w-8xl h-screen mx-auto p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold">Customers</h1>
        <p className="text-sm text-gray-500">
          Manage your customer base and relationships
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search customers by name, email, or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-xl pl-10 pr-4 py-3"
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {customers.map((customer, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-4 shadow-sm flex justify-between items-center"
          >
            <div className="flex items-center gap-3">
              <img
                src={customer.avatar}
                alt="avatar"
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <p className="text-orange-500 text-xs font-medium">
                  Checked #{index + 1}
                </p>
                <p className="font-medium">{customer.name}</p>
                <p className="text-sm text-gray-500">{customer.email}</p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <p className="text-xs text-gray-400">{customer.time}</p>
              <button className="text-gray-600 hover:text-black">
                <FiEye />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCustomers;