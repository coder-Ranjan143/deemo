import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

import {
  Filter,
  Info,
} from "lucide-react";

const alertData = [
  { day: "Thu", alerts: 3300 },
  { day: "Fri", alerts: 3250 },
  { day: "Sat", alerts: 2950 },
  { day: "Sun", alerts: 2500 },
  { day: "Mon", alerts: 3300 },
  { day: "Tue", alerts: 7800 },
  { day: "Wed", alerts: 1200 },
];

const pendingData = [
  {
    level: "L1",
    Pending: 1066,
    Resolved: 0,
  },
  {
    level: "L2",
    Pending: 0,
    Resolved: 0,
  },
  {
    level: "L3",
    Pending: 0,
    Resolved: 0,
  },
];

const stats = [
  {
    title: "Total Alerts",
    value: "1066",
    bg: "bg-red-50",
    border: "border-red-500",
    text: "text-red-700",
     path: "/alerts/all",
  },
  {
    title: "Escalated",
    value: "0",
    bg: "bg-yellow-50",
    border: "border-yellow-500",
    text: "text-yellow-700",
    path: "/all/escalate",
  },
  {
    title: "Resolved",
    value: "0",
    bg: "bg-green-50",
    border: "border-green-500",
    text: "text-green-700",
    path: "/all/resolved",
  },
  {
    title: "Pending Alerts",
    value: "1066",
    bg: "bg-orange-50",
    border: "border-orange-500",
    text: "text-orange-700",
    path: "/sopreport/pending-alerts",
  },
];

const AlertMngt = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className={`${item.bg} border-l-4 ${item.border}
            rounded-lg p-4 shadow-sm`}
          >
            <h4 className={`font-medium ${item.text}`}>
              {item.title}
            </h4>

            <h2 className={`text-4xl font-bold ${item.text}`}>
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Filter Section */}
      <div className="flex justify-end items-center gap-3 mt-5">
        <button
          className="flex items-center gap-2
          bg-blue-50 border border-blue-200
          text-blue-700 px-4 py-2 rounded-lg"
        >
          <Info size={16} />
          Active Filter : Today (20-May-2026 11:33 AM)
        </button>

        <button
          className="flex items-center gap-2
          border border-red-300 text-red-600
          px-4 py-2 rounded-lg bg-white"
        >
          <Filter size={16} />
          Filter
        </button>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
        {/* Area Chart */}
        <div className="bg-white rounded-2xl p-5 shadow">
          <h2 className="font-semibold text-xl mb-4">
            📈 Alerts - Last 7 Days
          </h2>

          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={alertData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="day" />
              <YAxis />

              <Tooltip />
              <Legend />

              <Area
                type="monotone"
                dataKey="alerts"
                name="Alerts Raised"
                stroke="#3b82f6"
                fill="#93c5fd"
                fillOpacity={0.4}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white rounded-2xl p-5 shadow">
          <h2 className="font-semibold text-xl mb-4">
            📊 Pending Alerts by Level
          </h2>

          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={pendingData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="level" />
              <YAxis />

              <Tooltip />
              <Legend />

              <Bar
                dataKey="Pending"
                fill="#f87171"
                radius={[6, 6, 0, 0]}
              />

              <Bar
                dataKey="Resolved"
                fill="#34d399"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

}

export default AlertMngt