import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const tours = [
  {
    id: 1,
    title: "Wynwood Hybrid: Walk & E-Bike",
    price: 109,
    duration: "3h",
    image:
      "https://images.unsplash.com/photo-1544986581-efac024faf62?q=80&w=1200",
    tag: "Immersive",
  },
  {
    id: 2,
    title: "South Beach VIP Sunset Experience",
    price: 159,
    duration: "3.5h",
    image:
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1200",
    tag: "VIP",
  },
  {
    id: 3,
    title: "Wynwood Hybrid: Walk & E-Bike",
    price: 109,
    duration: "3h",
    image:
      "https://images.unsplash.com/photo-1544986581-efac024faf62?q=80&w=1200",
    tag: "Immersive",
  },
];

const AdminTours = () => {
    const location = useLocation()
    console.log(location.pathname)
  return (
<div>
    {
        location.pathname === '/dashboard/admin-tours' ? (
            <div className="min-h-screen bg-gray-100 px-8 py-6">
      
      {/* Header */}
      <div className="flex justify-end mb-6">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg shadow">
          + Add New Tour
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-48 object-cover"
              />

              {/* Tag */}
              <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-md">
                {tour.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2">
                {tour.title}
              </h3>

              {/* Features */}
              <div className="text-gray-400 text-xs flex flex-wrap gap-3 mb-4">
                <span>🍽 Food Included</span>
                <span>👥 Max 12</span>
                <span>✨ Immersive Moments</span>
              </div>

              {/* Price + Duration */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-gray-400 text-xs">From</p>
                  <p className="font-semibold text-gray-800">
                    ${tour.price}
                  </p>
                </div>
                <div className="text-gray-400 text-sm">
                  ⏱ {tour.duration}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-100">
                  View Tour
                </button>
                <button className="flex-1 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">
                  Edit Content
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        ) : (
            <Outlet />
        )
    }
</div>
  );
};

export default AdminTours;