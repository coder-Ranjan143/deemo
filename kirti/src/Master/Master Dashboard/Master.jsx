// src/pages/MasterDashboard.jsx

import React from "react";
import {
  Building2,
  Warehouse,
  Layers3,
  MapPin,
  Users,
  Network,
  ArrowLeft,
} from "lucide-react";

const cards = [
  {
    title: "All Distilleries",
    desc: "View & manage all registered distillery units.",
    icon: <Building2 size={22} />,
    bg: "bg-indigo-100",
    text: "text-indigo-600",
    border: "border-indigo-200",
    hover: "hover:shadow-md hover:border-indigo-400",

  },
  {
    title: "All Warehouses",
    desc: "View and monitor all warehouse details.",
    icon: <Warehouse size={22} />,
    bg: "bg-blue-100",
    text: "text-blue-600",
    border: "border-blue-200",
    hover: "hover:shadow-md hover:border-blue-400",
    
  },
  {
    title: "Distillery Groups",
    desc: "Manage group assignments for distilleries.",
    icon: <Layers3 size={22} />,
    bg: "bg-green-100",
    text: "text-green-600",
    border: "border-green-200",
    hover: "hover:shadow-md hover:border-green-400",

  },
  {
    title: "Hope Points",
    desc: "Configure and manage Hope Points for locations.",
    icon: <MapPin size={22} />,
    bg: "bg-purple-100",
    text: "text-purple-600",
    border: "border-purple-200",
    hover: "hover:shadow-md hover:border-purple-400",

  },
  {
    title: "All Vendors",
    desc: "Browse and manage all approved vendors (Gps & ELocks).",
    icon: <Users size={22} />,
    bg: "bg-cyan-100",
    text: "text-cyan-600",
    border: "border-cyan-200",
    hover: "hover:shadow-md hover:border-teal-400",

  },
  {
    title: "All Divisions",
    desc: "Browse and manage all divisions in the system.",
    icon: <Network size={22} />,
    bg: "bg-orange-100",
    text: "text-orange-600",
    border: "border-orange-200",
    hover:"hover: shadow-md hover:border-orange-400",

  },
];

const Master = () => {
  return (
    <div className="min-h-screen bg-[#f8f8fb] flex justify-center px-4 py-10">
      <div className="w-full max-w-5xl">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Master Dashboard
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Quick actions for system masters
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-white border ${card.border} ${card.hover} rounded-2xl p-6 shadow-sm transition-all duration-200 cursor-pointer `}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center  ${card.bg} ${card.text}`}
                >
                  {card.icon}
                </div>

                {/* Text */}
                <div>
                  <h2 className={`text-xl font-semibold ${card.text}`}>
                    {card.title}
                  </h2>

                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <button className="mt-10 flex items-center gap-2 border border-gray-300 px-5 py-2 rounded-lg bg-white hover:bg-gray-100 transition">
          <ArrowLeft size={18} />
          BACK
        </button>
      </div>
    </div>
  );
};

export default Master;