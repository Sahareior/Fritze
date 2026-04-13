import React from 'react'
import { IoArrowForward } from 'react-icons/io5'

const ReusableAdminTable = ({bookings,title,headers}) => {
  return (
    <div>
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-50">
                  <div className="flex justify-between items-center mb-10">
                    <h2 className="text-[#344454] font-bold text-2xl lora">{title}</h2>
                    <button className="flex items-center gap-1 text-[#4f46e5] font-semibold text-sm hover:underline group transition-all">
                      <span>View All</span>
                      <IoArrowForward className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
        
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="text-gray-400 text-xs uppercase tracking-wider font-semibold border-b border-gray-50">
                          {headers.map((header, idx) => (
                            <th key={idx} className="pb-4 sm:pl-4">{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {bookings.map((booking) => (
                          <tr key={booking.id} className="group hover:bg-gray-50/50 transition-colors">
                            <td className="py-5 sm:pl-4 font-bold text-[#344454] text-sm">{booking.id}</td>
                            <td className="py-5 text-[#344454] font-medium text-sm">{booking.customer}</td>
                            <td className="py-5 text-gray-500 text-sm lora ">{booking.tour}</td>
                            <td className="py-5 text-gray-400 text-sm font-medium">{booking.date}</td>
                            <td className="py-5 font-bold text-[#344454] text-[15px] lora">{booking.amount}</td>
                            <td className="py-5">
                              <span className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm ${
                                booking.status === "confirmed" 
                                  ? "bg-green-100 text-green-600" 
                                  : "bg-yellow-100 text-yellow-600"
                              }`}>
                                {booking.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
    </div>
  )
}

export default ReusableAdminTable