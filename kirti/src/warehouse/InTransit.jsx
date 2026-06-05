import React from "react";

import {
  Download,
  Filter,
  ArrowLeft,
  Info,
  Image,
  Route,
  ShieldCheck,
  ShieldX,
  FileText,
  CheckCircle,
  XCircle,
  Van,
  Ban,
  ShieldBan,
} from "lucide-react";

import Navbar from "../Components/Navbar";
import Header from "../Components/Header";

const records = [
  { id: "01", vehicle: "ABC-1234" },
  { id: "02", vehicle: "XYZ-5678" },
  { id: "03", vehicle: "LMN-3456" },
  { id: "04", vehicle: "DEF-7890" },
  { id: "05", vehicle: "GHI-1122" },
  { id: "06", vehicle: "JKL-3344" },
];

const stats = [
  {
    title: "Vehicle running with valid TP Pass",
    value: "--",
    icon: <Van size={22} />,
    bg: "bg-green-100",
    border: "border-green-200",
    iconBg: "bg-green-500",
    text: "text-green-700",
  },

  {
    title: "Vehicle running with expired TP Pass",
    value: "--",
    icon: <Ban size={22} />,
    bg: "bg-red-50",
    border: "border-red-200",
    iconBg: "bg-red-500",
    text: "text-red-700",
  },

  {
    title: "TP Pass Generated",
    value: "--",
    icon: <FileText size={22} />,
    bg: "bg-yellow-100",
    border: "border-yellow-200",
    iconBg: "bg-yellow-500",
    text: "text-yellow-700",
  },

  {
    title: "Exits with valid TP Pass",
    value: "--",
    icon: <CheckCircle size={22} />,
    bg: "bg-blue-100",
    border: "border-blue-200",
    iconBg: "bg-blue-500",
    text: "text-blue-700",
  },

  {
    title: "Exits without valid TP Pass",
    value: "--",
    icon: <ShieldBan size={22} />,
    bg: "bg-pink-100",
    border: "border-pink-200",
    iconBg: "bg-pink-500",
    text: "text-pink-700",
  },
];

const InTransit = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <div className="min-h-screen bg-[#f4f4f4] p-4 mt-35">
      {/* Main Container */}
      <div className="bg-[#efefef] rounded-2xl shadow-md p-5">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-gray-300 pb-4">

          <h2 className="text-3xl font-bold text-slate-800">
            Warehouse - In-Transit
          </h2>

          <div className="flex flex-wrap items-center gap-3">

            <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium">
              <Info size={16} />
              Active Filter : Today (22-May-2026 05:08 PM)
            </div>

            <button className="flex items-center gap-2 border border-indigo-300 text-indigo-700 px-4 py-2 rounded-lg hover:bg-indigo-50 transition">
              <Download size={16} />
              Export
            </button>

            <button className="flex items-center gap-2 border border-red-300 text-red-700 px-4 py-2 rounded-lg hover:bg-red-50 transition">
              <Filter size={16} />
              Filter
            </button>

            <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100 transition">
              <ArrowLeft size={16} />
              BACK
            </button>

          </div>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">

          {/* Plant Summary */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">

            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-5 py-4">
              <h2 className="text-2xl font-bold">
                Plant Summary
              </h2>
            </div>

            <div className="p-5 space-y-4 h-[420px] overflow-y-auto">

              {stats.map((item, index) => (
                <div
                  key={index}
                  className={`${item.bg} ${item.border} border rounded-2xl p-4 flex items-center gap-4 hover:shadow-sm transition`}
                >

                  <div
                    className={`w-14 h-14 rounded-full ${item.iconBg} flex items-center justify-center text-white shrink-0`}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-gray-700">
                      {item.title}
                    </h3>

                    <p className={`text-2xl font-bold mt-1 ${item.text}`}>
                      {item.value}
                    </p>
                  </div>

                </div>
              ))}

            </div>
          </div>

          {/* Vehicle Statistics */}
          <div className="bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl shadow-md p-5">

            <h2 className="text-2xl font-bold text-white mb-5">
              📊 Vehicle Statistics
            </h2>

            <div className="bg-white rounded-xl h-[150px] w-[300px] flex items-center justify-center text-gray-400 text-lg">
              
            </div>

          </div>

        </div>

        {/* Records Table */}
        <div className="bg-white rounded-2xl shadow-md mt-8 p-4">

          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            📋 Records
          </h2>

          <div className="overflow-x-auto rounded-lg border">

            <table className="w-full min-w-[700px]">

              <thead className="bg-gradient-to-r from-[#7b0f2b] to-[#a01818] text-white">
                <tr className="text-left">

                  <th className="p-4">S.no</th>
                  <th className="p-4">Vehicle No</th>
                  <th className="p-4">Trip Details</th>
                  <th className="p-4">View Image</th>
                  <th className="p-4">Route Replay</th>

                </tr>
              </thead>

              <tbody>

                {records.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-4">{item.id}</td>

                    <td className="p-4 font-medium">
                      {item.vehicle}
                    </td>

                    <td className="p-4 text-blue-600 cursor-pointer hover:underline">
                      View Details
                    </td>

                    <td className="p-4">
                      <Image
                        className="text-cyan-600 cursor-pointer hover:scale-110 transition"
                        size={20}
                      />
                    </td>

                    <td className="p-4">
                      <Route
                        className="text-red-500 cursor-pointer hover:scale-110 transition"
                        size={20}
                      />
                    </td>

                  </tr>
                ))}

              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default InTransit;