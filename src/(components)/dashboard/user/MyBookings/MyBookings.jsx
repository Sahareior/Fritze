import React, { useState } from 'react';
import { 
  FiFilter, 
  FiCalendar, 
  FiClock, 
  FiUsers, 
  FiMapPin, 
  FiMessageCircle,
  FiBookOpen,
  FiStar
} from 'react-icons/fi';

const mockBookings = [
  {
    id: 'BK-2024-001',
    title: 'Explore Miami: Art Deco & Cuban Culture',
    confirmation: 'CW-2024-ABC123',
    date: 'March 15, 2026',
    time: '10:00 AM',
    duration: '3 hours',
    participants: '2 people',
    pickup: 'Ocean Drive, South Beach',
    guide: 'Carlos Rodriguez',
    totalPaid: 198,
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'BK-2024-002',
    title: 'Food Tour: Taste of Little Havana',
    confirmation: 'CW-2024-DEF456',
    date: 'March 20, 2026',
    time: '2:00 PM',
    duration: '4 hours',
    participants: '4 people',
    pickup: 'Versailles Restaurant, Little Havana',
    guide: 'Maria Santos',
    totalPaid: 356,
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1543353071-103ef3c77482?auto=format&fit=crop&q=80&w=800',
  }
];

const StatCard = ({ title, value, icon, bgColor, iconColor }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center justify-center shadow-sm">
    <div className={`w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center mb-3 mb-1 mt-1`}>
      {React.cloneElement(icon, { className: `w-6 h-6 ${iconColor}` })}
    </div>
    <p className="text-gray-400 text-xs font-medium mb-1">{title}</p>
    <p className="text-2xl font-bold text-gray-800">{value}</p>
  </div>
);

const BookingCard = ({ booking }) => (
  <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg mb-8">
    {/* Image Section */}
    <div className="relative h-56">
      <img 
        src={booking.image} 
        alt={booking.title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute top-4 right-4 bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
        {booking.status}
      </div>
    </div>

    {/* Content Section */}
    <div className="p-8">
      <p className="text-gray-400 text-sm font-medium mb-2">Booking ID : {booking.id}</p>
      <h3 className="text-2xl font-black text-gray-900 mb-2 leading-tight">{booking.title}</h3>
      <p className="text-gray-400 text-sm font-medium mb-6">Confirmation: {booking.confirmation}</p>

      {/* Details Grid */}
      <div className="space-y-4 mb-8">
        <div className="flex items-start gap-4">
          <FiCalendar className="w-5 h-5 text-blue-500 mt-0.5" />
          <div>
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Date & Time</p>
            <p className="text-gray-800 font-bold">{booking.date}</p>
            <p className="text-gray-800 font-bold">{booking.time}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FiClock className="w-5 h-5 text-green-500 mt-0.5" />
          <div>
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Duration</p>
            <p className="text-gray-800 font-bold">{booking.duration}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FiUsers className="w-5 h-5 text-purple-500 mt-0.5" />
          <div>
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Participants</p>
            <p className="text-gray-800 font-bold">{booking.participants}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FiMapPin className="w-5 h-5 text-orange-500 mt-0.5" />
          <div>
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Pickup Point</p>
            <p className="text-gray-800 font-bold leading-snug">{booking.pickup}</p>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="bg-gray-50 rounded-2xl p-5 flex items-center justify-between mb-6">
        <div>
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Your Guide</p>
          <p className="text-gray-800 font-bold text-base">{booking.guide}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Total Paid</p>
          <p className="text-gray-900 font-black text-2xl">${booking.totalPaid}</p>
        </div>
      </div>

      {/* Action Button */}
      <button className="w-full py-4 border-2 border-gray-100 rounded-2xl flex items-center justify-center gap-3 text-gray-700 font-bold hover:bg-gray-50 transition-colors">
        <FiMessageCircle className="w-5 h-5" />
        <span>WhatsApp</span>
      </button>
    </div>
  </div>
);

const MyBookings = () => {
  const [activeTab, setActiveTab] = useState('My Bookings');

  const tabs = ['My Bookings', 'Upcoming', 'Completed'];

  return (
    <div className=" py-6 px-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-8">
        <FiFilter className="w-5 h-5 text-gray-700 mt-1" />
        <h1 className="text-lg font-black text-gray-900">Filter Bookings</h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-10 overflow-x-auto pb-2 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
              activeTab === tab 
                ? 'bg-[#FF7A29] text-white shadow-lg shadow-orange-100' 
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <StatCard 
          title="Total Bookings" 
          value="2" 
          icon={<FiBookOpen />}
          bgColor="bg-blue-50"
          iconColor="text-blue-500"
        />
        <StatCard 
          title="Upcoming Tour" 
          value="2" 
          icon={<FiClock />}
          bgColor="bg-green-50"
          iconColor="text-green-500"
        />
        <StatCard 
          title="Completed" 
          value="0" 
          icon={<FiStar />}
          bgColor="bg-purple-50"
          iconColor="text-purple-500"
        />
      </div>

      {/* Booking List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockBookings.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>
    </div>
  );
};

export default MyBookings;