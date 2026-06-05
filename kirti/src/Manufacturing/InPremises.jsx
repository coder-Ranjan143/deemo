import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Car,
  ArrowRight,
  Check,
  Minus,
  AlertTriangle,
  Download,
  Filter,
  ArrowLeft,
  Dot,
  Circle,
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  LabelList,
} from "recharts";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";

const stats = [
  {
    title: "Total Vehicle Capture (ANPR)",
    value: 848,
    icon: <Circle className="text-red-700  rounded-full " size={18} />,
    bg: "bg-red-50",
    border: "border-red-200",
    text: "text-red-700",
    path: "/in_premises/totalVahicleCapture",

  },
  {
    title: "Vehicle Enter",
    value: 151,
    icon: <span className="text-3xl text-blue-700">+</span>,
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-700",
    path: "/in_premises/vehicleEnter",
  },
  {
    title: "Vehicle Exit",
    value: 7,
    icon: <Minus className="text-pink-700" size={20} />,
    bg: "bg-pink-50",
    border: "border-pink-200",
    text: "text-pink-700",
    path: "/in_premises/vehicleExit",
  },
  {
    title: "Exit with Valid TP Pass",
    value: 2,
    icon: <Check className="text-green-700 " size={20} />,
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-700",
    path: "/in_premises/exitWithValidPass",
  },
  {
    title: "Exit without TP Pass",
    value: 0,
    icon: <AlertTriangle className="text-amber-700 " size={18} />,
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    text: "text-yellow-700",
    path: "/in_premises/exitWithoutPass",
  },
];

const chartData = [
  {
    name: "ANPR Today",
    value: 848,
    color: "#ef4444",
  },
  {
    name: "Vehicle Enter",
    value: 151,
    color: "#3b82f6",
  },
  {
    name: "Vehicle Exit",
    value: 7,
    color: "#ec4899",
  },
  {
    name: "Exit with Valid TP",
    value: 2,
    color: "#10b981",
  },
  {
    name: "Exit without TP",
    value: 0,
    color: "#f59e0b",
  },
];






const InPremises = () => {

  const navigate = useNavigate();

  const handleClick = (path) => {
    if (path) {
      navigate(path);
    }
  };


  return (
    <>
      <Header />
      <Navbar />

      <div className="min-h-screen bg-[#f4f4f4] p-5 mt-30">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-5 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                Manufacturer Dashboard
              </h1>

              <p className="text-gray-500 mt-2">
                In-Premises Overview • Quick stats & drill-down reports
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-indigo-50 text-indigo-700 px-5 py-2 rounded-full text-sm font-medium border border-indigo-200 flex items-center gap-3">
                <Dot size={9} className="bg-indigo-700 rounded-full" />
                Filter: Today (22-May-2026 01:33 PM)
              </div>

              <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-xl shadow-sm hover:bg-gray-50">
                <Download size={16} />
                Export
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-xl shadow-sm hover:bg-red-700">
                <Filter size={16} />
                Filter
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-xl shadow-sm hover:bg-gray-50">
                <ArrowLeft size={16} />
                BACK
              </button>
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Panel */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-[#7b0f2b] to-[#9f1239] text-white p-5">
              <h2 className="text-2xl font-bold">Plant Summary</h2>
              <p className="text-sm opacity-90 mt-1">
                Tap a card to view details
              </p>
            </div>
            {/* 
          <div className="p-4 space-y-4">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`${item.bg} ${item.border} border rounded-2xl p-5 flex justify-between items-start hover:shadow-md transition`}
              >
                <div>
                  <h3 className="text-gray-700 font-semibold text-sm">
                    {item.title}
                  </h3>

                  <p className={`text-4xl font-bold mt-3 ${item.text}`}>
                    {item.value}
                  </p>

                  <button className="flex items-center gap-1 text-gray-500 text-sm mt-4 hover:text-black">
                    View Report
                    <ArrowRight size={14} />
                  </button>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-white shadow flex items-center justify-center text-gray-700">
                  {item.icon}
                </div>
              </div>
            ))}
          </div> */}

            <div className="p-3 space-y-3">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className={`${item.bg} ${item.border} border rounded-xl p-3 flex justify-between items-start hover:shadow-md transition`}
                >
                  <div>
                    <button
                      type="button"
                      className="w-full text-left"
                      onClick={() => handleClick(item.path)}
                    >
                    <h3 className="text-gray-700 font-semibold text-xs">
                      {item.title}
                    </h3>

                    <p className={`text-2xl font-bold mt-2 ${item.text}`}>
                      {item.value}
                    </p>
                    </button>

                    <button className="flex items-center gap-1 text-gray-500 text-xs mt-2 hover:text-black">
                      View Report
                      <ArrowRight size={12} />
                    </button>
                  </div>

                  <div className="w-9 h-9 rounded-xl bg-white shadow flex items-center justify-center text-gray-700">
                    {item.icon}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Panel */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm">
            <div className="p-5 border-b border-gray-300 flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Vehicle Statistics
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  Click on bar to open report
                </p>
              </div>

              <p className="text-sm text-gray-400">
                Updated: 22 May 2026, 01:33 PM
              </p>
            </div>

            <div className="h-[550px] p-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  margin={{
                    top: 30,
                    right: 20,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />

                  <XAxis dataKey="name" />

                  <YAxis />

                  <Tooltip />
                  <Legend
                    verticalAlign="top"
                    align="center"
                    height={40}
                    layout="horizontal"
                    content={() => (
                      <div className="flex items-center justify-center gap-6 mt-2">

                        <div className="flex items-center gap-2">
                          <div className="w-12 h-3 bg-red-500 "></div>
                          <span className=" text-sm font-medium text-gray-500 ">
                            Vehicle Stats
                          </span>
                        </div>

                      </div>
                    )}
                  />
                  <Bar
                    dataKey="value"
                    radius={[10, 10, 0, 0]}
                    barSize={140}
                  >
                    <LabelList
                      dataKey="value"
                      position="top"
                      style={{
                        fill: "#000",
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    />

                    {chartData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>


    </>
  );

}

export default InPremises
