import React from 'react'
import { Camera, MapPinned, Car } from "lucide-react";


const SopReport = () => {
  const cards = [
    {
      title: "Camera",
      icon: <Camera size={28} />,
      color: "text-blue-500",
      border: "border-blue-300",
    },
    {
      title: "GPS",
      icon: <MapPinned size={28} />,
      color: "text-green-500",
      border: "border-green-300",
    },
    {
      title: "Vehicle Movements",
      icon: <Car size={28} />,
      color: "text-purple-500",
      border: "border-purple-300",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Dashboard Container */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        
        {/* Heading */}
        <div className="mb-6 border-b border-gray-200  pb-4  ">
          <h1 className="text-4xl font-bold text-gray-800">
            SOP Report Dashboard
          </h1>
          <p className="text-gray-500 mt-1">
            Analyze distillery activities with real-time data
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`border ${card.border} rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 h-40 flex flex-col items-center justify-center cursor-pointer`}
            >
              <div className={`${card.color} mb-3`}>
                {card.icon}
              </div>

              <h2 className={`font-semibold text-lg ${card.color}`}>
                {card.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SopReport