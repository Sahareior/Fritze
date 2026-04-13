import React from "react";
import { MdAttachMoney, MdCalendarToday, MdPeople, MdStar, MdTrendingUp, MdTrendingDown } from "react-icons/md";
import { IoArrowForward } from "react-icons/io5";
import ReusableAdminTable from "./reusableComponents/ReusableAdminTable";

const StatCard = ({ icon: Icon, title, value, trend, trendValue, iconBg }) => (
  <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-50 flex flex-col justify-between h-full">
    <div className="flex justify-between items-start mb-6">
      <div className={`${iconBg} p-3 rounded-xl text-white shadow-lg`}>
        <Icon size={24} />
      </div>
      <div className="flex items-center gap-1">
        {trend === "up" ? (
          <MdTrendingUp className="text-green-500 text-lg" />
        ) : (
          <MdTrendingDown className="text-red-500 text-lg" />
        )}
        <span className={`text-[13px] font-bold ${trend === "up" ? "text-green-500" : "text-red-500"}`}>
          {trendValue}
        </span>
      </div>
    </div>
    <div>
      <p className="text-4xl font-bold text-[#344454] lora mb-1 tracking-tight">{value}</p>
      <p className="text-gray-400 text-sm font-medium raleway">{title}</p>
    </div>
  </div>
);

const AdminDashoard = () => {
  const stats = [
    {
      icon: MdAttachMoney,
      title: "Total Revenue",
      value: "$45,231",
      trend: "up",
      trendValue: "+12.5%",
      iconBg: "bg-[#22c55e]",
    },
    {
      icon: MdCalendarToday,
      title: "Total Bookings",
      value: "1,234",
      trend: "up",
      trendValue: "+8.2%",
      iconBg: "bg-[#3b82f6]",
    },
    {
      icon: MdPeople,
      title: "Active Customers",
      value: "892",
      trend: "up",
      trendValue: "+15.3%",
      iconBg: "bg-[#a855f7]",
    },
    {
      icon: MdStar,
      title: "Avg Rating",
      value: "4.9",
      trend: "up",
      trendValue: "+0.2",
      iconBg: "bg-[#f59e0b]",
    },
  ];

  const headers = ["Booking ID", "Customer", "Tour", "Date", "Amount", "Status"];

  const bookings = [
    { id: "BK-1234", customer: "Sarah Johnson", tour: "Miami City Tour", date: "Mar 15, 2026", amount: "$39", status: "confirmed" },
    { id: "BK-1233", customer: "Michael Chen", tour: "LA Culture Tour", date: "Mar 15, 2026", amount: "$45", status: "confirmed" },
    { id: "BK-1232", customer: "Emily Wilson", tour: "NY History Tour", date: "Mar 16, 2026", amount: "$49", status: "pending" },
    { id: "BK-1231", customer: "James Davis", tour: "Miami City Tour", date: "Mar 16, 2026", amount: "$39", status: "confirmed" },
    { id: "BK-1230", customer: "Lisa Anderson", tour: "NY Architecture", date: "Mar 17, 2026", amount: "$42", status: "confirmed" },
  ];

  return (
    <div className="min-h-screen bg-[#fcfbfa] p-8 raleway text-gray-700">
      <div className="max-w-8xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>
        <ReusableAdminTable bookings={bookings} title="Recent Bookings" headers={headers} />
      </div>
    </div>
  );
};

export default AdminDashoard;