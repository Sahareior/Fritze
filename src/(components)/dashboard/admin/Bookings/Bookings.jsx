import React from "react";
import { FiSearch, FiDownload, FiUser } from "react-icons/fi";
import { IoLocationOutline, IoCalendarOutline, IoTimeOutline, IoChevronDown } from "react-icons/io5";

const StatCard = ({ label, value, color }) => (
  <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-50 flex flex-col justify-between min-w-[200px]">
    <div className="flex items-center gap-2 mb-4">
      <div className={`w-3 h-3 rounded-full ${color}`} />
      <span className="text-gray-400 text-[13px] font-medium uppercase tracking-wider raleway">{label}</span>
    </div>
    <p className="text-4xl font-bold text-[#344454] lora tracking-tight">{value}</p>
  </div>
);

const Bookings = () => {
  const stats = [
    { label: "Total Bookings", value: "1,234", color: "bg-blue-500" },
    { label: "Confirmed", value: "892", color: "bg-green-500" },
    { label: "Pending", value: "45", color: "bg-yellow-500" },
    { label: "Completed", value: "287", color: "bg-purple-500" },
  ];

  const bookings = [
    {
      id: "BK-1234",
      bookedDate: "Mar 1, 2026",
      customer: { name: "Sarah Johnson", email: "sarah.j@email.com", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" },
      tour: "Miami City Tour",
      date: "Mar 15, 2026",
      time: "10:00 AM",
      participants: "2 people",
      amount: "39",
      status: "confirmed",
    },
    {
      id: "BK-1233",
      bookedDate: "Mar 2, 2026",
      customer: { name: "Michael Chen", email: "m.chen@email.com", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" },
      tour: "Los Angeles Culture Tour",
      date: "Mar 15, 2026",
      time: "2:00 PM",
      participants: "1 person",
      amount: "45",
      status: "confirmed",
    },
    {
      id: "BK-1232",
      bookedDate: "Mar 3, 2026",
      customer: { name: "Emily Wilson", email: "emily.w@email.com", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100" },
      tour: "New York History Tour",
      date: "Mar 16, 2026",
      time: "9:00 AM",
      participants: "3 people",
      amount: "49",
      status: "pending",
    },
    {
      id: "BK-1231",
      bookedDate: "Mar 4, 2026",
      customer: { name: "James Davis", email: "james.d@email.com", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" },
      tour: "Miami City Tour",
      date: "Mar 16, 2026",
      time: "11:00 AM",
      participants: "2 people",
      amount: "39",
      status: "confirmed",
    },
    {
      id: "BK-1230",
      bookedDate: "Mar 5, 2026",
      customer: { name: "Lisa Anderson", email: "lisa.a@email.com", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" },
      tour: "New York Architecture Tour",
      date: "Mar 17, 2026",
      time: "1:00 PM",
      participants: "1 person",
      amount: "42",
      status: "confirmed",
    },
    {
       id: "BK-1229",
       bookedDate: "Feb 28, 2026",
       customer: { name: "David Park", email: "d.park@email.com", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100" },
       tour: "Los Angeles Culture Tour",
       date: "Mar 17, 2026",
       time: "3:00 PM",
       participants: "2 people",
       amount: "45",
       status: "completed"
    },
    {
       id: "BK-1228",
       bookedDate: "Mar 1, 2026",
       customer: { name: "Rachel Green", email: "rachel.g@email.com", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" },
       tour: "Miami City Tour",
       date: "Mar 18, 2026",
       time: "10:30 AM",
       participants: "1 person",
       amount: "39",
       status: "cancelled"
    }
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "confirmed": return "bg-green-100 text-green-600";
      case "pending": return "bg-yellow-100 text-yellow-600";
      case "completed": return "bg-purple-100 text-purple-600";
      case "cancelled": return "bg-red-100 text-red-600 font-bold uppercase tracking-wider";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfbfa] p-8 raleway text-gray-700">
      <div className="max-w-8xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="lora text-4xl font-bold text-[#344454] mb-2 leading-tight">Bookings Management</h1>
          <p className="text-gray-400 font-medium">View and manage customer tour reservations</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-[2rem] p-4 shadow-sm border border-gray-50 flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
          <div className="relative w-full md:max-w-md">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-2xl" />
            <input 
              type="text" 
              placeholder="Search by customer, booking ID, or tour..."
              className="w-full bg-[#fcfbfa] border border-gray-100 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <select className="appearance-none bg-white border border-[#4f46e5]/20 rounded-xl px-6 py-3 pr-12 text-sm font-bold text-[#4f46e5] focus:outline-none cursor-pointer">
                <option>All Status</option>
                <option>Confirmed</option>
                <option>Pending</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
              <IoChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#4f46e5] pointer-events-none" />
            </div>
            <button className="flex items-center gap-2 border border-gray-200 rounded-xl px-6 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all">
              <FiDownload />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-50 overflow-hidden">
          <div className="overflow-x-auto overflow-y-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-400 text-[10px] uppercase tracking-[0.1em] font-bold border-b border-gray-50">
                  <th className="py-6 pl-8">Booking</th>
                  <th className="py-6">Customer</th>
                  <th className="py-6">Tour</th>
                  <th className="py-6">Date & Time</th>
                  <th className="py-6">Participants</th>
                  <th className="py-6">Amount</th>
                  <th className="py-6">Status</th>
                  <th className="py-6 pr-8">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-6 pl-8">
                       <p className="font-bold text-[#344454] text-sm">{booking.id}</p>
                       <p className="text-gray-400 text-[10px] mt-1 font-medium italic">Booked: {booking.bookedDate}</p>
                    </td>
                    <td className="py-6">
                      <div className="flex items-center gap-3">
                         <div className="w-11 h-11 rounded-full overflow-hidden border border-gray-100 bg-blue-100 flex items-center justify-center">
                            {booking.customer.avatar ? (
                              <img src={booking.customer.avatar} className="w-full h-full object-cover" />
                            ) : (
                              <FiUser className="text-blue-500" />
                            )}
                         </div>
                         <div>
                            <p className="font-bold text-[#344454] text-sm">{booking.customer.name}</p>
                            <p className="text-gray-400 text-[10px] mt-0.5 font-medium">{booking.customer.email}</p>
                         </div>
                      </div>
                    </td>
                    <td className="py-6">
                       <div className="flex items-center gap-2 text-gray-400">
                          <IoLocationOutline className="text-lg" />
                          <span className="text-[#344454] font-medium text-[13px]">{booking.tour}</span>
                       </div>
                    </td>
                    <td className="py-6">
                       <div className="space-y-1">
                          <div className="flex items-center gap-2 text-gray-400 text-xs">
                             <IoCalendarOutline className="text-sm" />
                             <span className="font-medium text-[#344454]">{booking.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400 text-xs">
                             <IoTimeOutline className="text-sm" />
                             <span className="font-medium">{booking.time}</span>
                          </div>
                       </div>
                    </td>
                    <td className="py-6">
                       <p className="text-[#344454] font-medium text-[13px]">{booking.participants}</p>
                    </td>
                    <td className="py-6">
                       <p className="text-[#344454] font-bold text-base lora">$ {booking.amount}</p>
                    </td>
                    <td className="py-6">
                       <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${getStatusStyle(booking.status)} shadow-sm`}>
                          {booking.status}
                       </span>
                    </td>
                    <td className="py-6 pr-8">
                       <button className="text-[#4f46e5] font-bold text-sm hover:underline">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer / Pagination */}
          <div className="bg-[#fcfbfa]/50 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-50">
             <p className="text-gray-400 text-sm font-medium">Showing {bookings.length} of {bookings.length} bookings</p>
             <div className="flex gap-3">
                <button className="px-6 py-2 rounded-xl bg-white border border-gray-200 text-gray-500 font-bold text-sm hover:bg-gray-50 transition-all">Previous</button>
                <button className="px-6 py-2 rounded-xl bg-[#4f46e5] text-white font-bold text-sm hover:bg-[#3d36b8] transition-all shadow-md active:scale-95">Next</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;