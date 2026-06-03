import React, { useState } from "react";

import {
  Phone,
  CheckCircle,
  Clock3,
  Timer,
  Info,
  Plus,
  Filter,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

/* ================= DATA ================= */

const chartData = [
  { day: "Mon", incoming: 2, resolved: 1 },
  { day: "Tue", incoming: 2, resolved: 3},
  { day: "Wed", incoming: 1.8, resolved: 0 },
  { day: "Thu", incoming: 1.5, resolved: 0 },
  { day: "Fri", incoming: 2, resolved: 7 },
];

const pieData = [
  {
    name: "Distilleries",
    value: 100,
  },
];

const tableData = [
  {
    id: 1,
    type: "Distilleries",
    name: "preet sahu",
    mobile: "",
    description: "----------------",
    location: "",
    status: "Open",
    created: "20/05/2026 01:27 PM",
  },
  {
    id: 2,
    type: "Distilleries",
    name: "KHA_AAB_27_2021_0004-Main_gate_anpr_entry",
    mobile: "",
    description: "------------------------",
    location: "",
    status: "Open",
    created: "20/05/2026 01:28 PM",
  },
];

/* ================= TOOLTIP ================= */

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl shadow-xl px-4 py-3">
        
        <p className="text-sm font-bold text-gray-700 mb-2">
          {label}
        </p>

        {payload.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-sm font-semibold"
            style={{
              color: item.color,
            }}
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: item.color,
              }}
            />

            {item.name}: {item.value}
          </div>
        ))}
      </div>
    );
  }

  return null;
};

/* ================= COMPONENT ================= */

const CallCenter = () => {
  /* ================= HIDE GRAPH STATE ================= */

  const [hiddenGraphs, setHiddenGraphs] = useState({
    incoming: false,
    resolved: false,
  });

  /* ================= LEGEND CLICK ================= */

  const handleLegendClick = (o) => {
    const key = o.dataKey;

    setHiddenGraphs((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen bg-[#f5f6fa] p-3 sm:p-5 lg:p-6">
      
      {/* ================= HEADER ================= */}

      <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-5">
        
        {/* LEFT */}
        <div>
          <h1 className="text-[28px] sm:text-[38px] lg:text-[48px] font-bold text-[#0f172a] leading-none">
            Call Center Dashboard
          </h1>

          <p className="text-gray-500 text-sm sm:text-lg lg:text-[22px] mt-2">
            Real-time call center performance metrics
          </p>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex flex-wrap gap-3">
          
          {/* ACTIVE FILTER */}
          <button className="flex items-center gap-3 border border-blue-200 bg-[#eef4ff] text-[#1d4ed8] px-4 py-2 rounded-xl shadow-sm font-semibold text-sm">
            
            <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
              <Info size={12} className="text-white fill-white" />
            </div>

            Active Filter : Today (20-May-2026 01:28 PM)
          </button>

          {/* NEW COMPLAINT */}
          <button className="flex items-center gap-2 border border-red-300 text-red-700 bg-white px-4 py-2 rounded-xl shadow-sm font-medium hover:bg-red-50 transition-all text-sm">
            
            <Plus size={16} />

            New Complaint
          </button>

          {/* FILTER */}
          <button className="flex items-center gap-2 border border-red-300 text-red-700 bg-white px-4 py-2 rounded-xl shadow-sm font-medium hover:bg-red-50 transition-all text-sm">
            
            <Filter size={16} />

            Filter
          </button>
        </div>
      </div>

      {/* ================= TOP CARDS ================= */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-6">
        
        {/* TOTAL CALLS */}
        <div className="bg-white border-l-4 border-blue-500 rounded-2xl p-5 shadow-sm">
          
          <div className="flex items-start justify-between">
            
            <div>
              <p className="text-gray-500 text-lg sm:text-xl">
                Total Calls
              </p>

              <h1 className="text-4xl sm:text-5xl font-bold text-[#0f172a]">
                2
              </h1>

              <div className="flex items-center gap-1 text-green-600 font-medium mt-2">
                <ArrowUp size={16} />
                100%
              </div>
            </div>

            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
              <Phone size={24} className="text-blue-500" />
            </div>
          </div>
        </div>

        {/* RESOLVED */}
        <div className="bg-white border-l-4 border-green-500 rounded-2xl p-5 shadow-sm">
          
          <div className="flex items-start justify-between">
            
            <div>
              <p className="text-gray-500 text-lg sm:text-xl">
                Resolved
              </p>

              <h1 className="text-4xl sm:text-5xl font-bold text-[#0f172a]">
                0
              </h1>

              <div className="flex items-center gap-1 text-green-600 font-medium mt-2">
                <ArrowUp size={16} />
                0%
              </div>
            </div>

            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle size={24} className="text-green-500" />
            </div>
          </div>
        </div>

        {/* PENDING */}
        <div className="bg-white border-l-4 border-yellow-500 rounded-2xl p-5 shadow-sm">
          
          <div className="flex items-start justify-between">
            
            <div>
              <p className="text-gray-500 text-lg sm:text-xl">
                Pending
              </p>

              <h1 className="text-4xl sm:text-5xl font-bold text-[#0f172a]">
                2
              </h1>

              <div className="flex items-center gap-1 text-green-600 font-medium mt-2">
                <ArrowUp size={16} />
                100%
              </div>
            </div>

            <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center">
              <Clock3 size={24} className="text-yellow-500" />
            </div>
          </div>
        </div>

        {/* AVG HANDLE TIME */}
        <div className="bg-white border-l-4 border-purple-500 rounded-2xl p-5 shadow-sm">
          
          <div className="flex items-start justify-between">
            
            <div>
              <p className="text-gray-500 text-lg sm:text-xl">
                Avg. Handle Time
              </p>

              <h1 className="text-3xl sm:text-4xl font-bold text-[#0f172a]">
                4m 32s
              </h1>

              <div className="flex items-center gap-1 text-green-600 font-medium mt-2">
                <ArrowDown size={16} />
                6%
              </div>
            </div>

            <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center">
              <Timer size={24} className="text-purple-500" />
            </div>
          </div>
        </div>
      </div>

      {/* ================= CHART SECTION ================= */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-6">
        
        {/* LEFT GRAPH */}
        <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-200 p-3 sm:p-5 shadow-sm h-[300px] sm:h-[420px]">
          
          <ResponsiveContainer width="100%" height="100%">
            
            <AreaChart
              data={chartData}
              margin={{
                top: 30,
                right: 20,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="day" />

              <YAxis />

              <Tooltip content={<CustomTooltip />} />

              {/* LEGEND */}
              <Legend
                verticalAlign="top"
                align="center"
                wrapperStyle={{
                  paddingBottom: "20px",
                  cursor: "pointer",
                }}
                onClick={handleLegendClick}
              />

              {/* INCOMING */}
              <Area
                hide={hiddenGraphs.incoming}
                type="monotone"
                dataKey="incoming"
                name="Incoming Calls"
                stroke="#3498db"
                fill="#3498db"
                fillOpacity={0.2}
                strokeWidth={3}
              />

              {/* RESOLVED */}
              <Area
                hide={hiddenGraphs.resolved}
                type="monotone"
                dataKey="resolved"
                name="Resolved Calls"
                stroke="#2ecc71"
                fill="#2ecc71"
                fillOpacity={0.2}
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* RIGHT PIE CHART */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm h-[300px] sm:h-[420px] flex items-center justify-center">
          
          <ResponsiveContainer width="100%" height="100%">
            
            <PieChart>
              
              <Pie
                data={pieData}
                dataKey="value"
                innerRadius={80}
                outerRadius={110}
                paddingAngle={0}
              >
                <Cell fill="#3498db" />
              </Pie>

              <Legend />

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ================= TABLE SECTION ================= */}

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm mt-6 p-3 sm:p-5">
        
        <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-5">
          Recent Call Logs
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[#8b1538]">
          
          <table className="w-full min-w-[1000px]">
            
            <thead className="bg-gradient-to-r from-[#8b1538] to-[#9b1c1c] text-white">
              
              <tr className="text-left">
                
                <th className="px-5 py-4 text-sm font-bold">#</th>

                <th className="px-5 py-4 text-sm font-bold">
                  CALLER TYPE
                </th>

                <th className="px-5 py-4 text-sm font-bold">
                  NAME
                </th>

                <th className="px-5 py-4 text-sm font-bold">
                  MOBILE
                </th>

                <th className="px-5 py-4 text-sm font-bold">
                  DESCRIPTION
                </th>

                <th className="px-5 py-4 text-sm font-bold">
                  LOCATION
                </th>

                <th className="px-5 py-4 text-sm font-bold">
                  STATUS
                </th>

                <th className="px-5 py-4 text-sm font-bold">
                  CREATED AT
                </th>
              </tr>
            </thead>

            <tbody>
              
              {tableData.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-200"
                >
                  <td className="px-5 py-4 text-sm">
                    {item.id}
                  </td>

                  <td className="px-5 py-4 text-sm">
                    {item.type}
                  </td>

                  <td className="px-5 py-4 text-sm">
                    {item.name}
                  </td>

                  <td className="px-5 py-4 text-sm">
                    {item.mobile}
                  </td>

                  <td className="px-5 py-4 text-sm">
                    {item.description}
                  </td>

                  <td className="px-5 py-4 text-sm">
                    {item.location}
                  </td>

                  <td className="px-5 py-4 text-sm">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      {item.status}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm">
                    {item.created}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CallCenter;