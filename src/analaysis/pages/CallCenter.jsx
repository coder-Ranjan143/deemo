import React from "react";

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
} from "recharts";

/* ================= DATA ================= */

const chartData = [
  { day: "Mon", incoming: 0, resolved: 0 },
  { day: "Tue", incoming: 0, resolved: 0 },
  { day: "Wed", incoming: 0, resolved: 0 },
  { day: "Thu", incoming: 0, resolved: 0 },
  { day: "Fri", incoming: 0, resolved: 0 },
];

/* ================= COMPONENT ================= */

const CallCenter = () => {
 return (
    <div className="min-h-screen bg-[#f5f6fa] p-6">
      
      {/* ================= HEADER ================= */}

      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
        
        {/* LEFT */}
        <div>
          <h1 className="text-[48px] font-bold text-[#0f172a] leading-none">
            Call Center Dashboard
          </h1>

          <p className="text-gray-500 text-[22px] mt-3">
            Real-time call center performance metrics
          </p>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex flex-wrap gap-3">
          
          {/* ACTIVE FILTER */}
          <button className="flex items-center gap-3 border border-blue-200 bg-[#eef4ff] text-[#1d4ed8] px-5 py-3 rounded-xl shadow-sm font-semibold">
            
            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
              <Info size={14} className="text-white fill-white" />
            </div>

            Active Filter : Today (20-May-2026 01:15 PM)
          </button>

          {/* NEW COMPLAINT */}
          <button className="flex items-center gap-3 border border-red-300 text-red-700 bg-white px-5 py-3 rounded-xl shadow-sm font-medium hover:bg-red-50 transition-all">
            
            <Plus size={18} />

            New Complaint
          </button>

          {/* FILTER */}
          <button className="flex items-center gap-3 border border-red-300 text-red-700 bg-white px-5 py-3 rounded-xl shadow-sm font-medium hover:bg-red-50 transition-all">
            
            <Filter size={18} />

            Filter
          </button>
        </div>
      </div>

      {/* ================= TOP CARDS ================= */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-7">
        
        {/* TOTAL CALLS */}
        <div className="bg-white border-l-4 border-blue-500 rounded-2xl p-6 shadow-sm">
          
          <div className="flex items-start justify-between">
            
            <div>
              <p className="text-gray-500 text-[28px]">
                Total Calls
              </p>

              <h1 className="text-[54px] font-bold text-[#0f172a] leading-tight">
                2
              </h1>

              <div className="flex items-center gap-2 text-green-600 font-medium mt-2">
                <ArrowUp size={18} />
                0%
              </div>
            </div>

            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
              <Phone size={28} className="text-blue-500" />
            </div>
          </div>
        </div>

        {/* RESOLVED */}
        <div className="bg-white border-l-4 border-green-500 rounded-2xl p-6 shadow-sm">
          
          <div className="flex items-start justify-between">
            
            <div>
              <p className="text-gray-500 text-[28px]">
                Resolved
              </p>

              <h1 className="text-[54px] font-bold text-[#0f172a] leading-tight">
                0
              </h1>

              <div className="flex items-center gap-2 text-green-600 font-medium mt-2">
                <ArrowUp size={18} />
                0%
              </div>
            </div>

            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle size={28} className="text-green-500" />
            </div>
          </div>
        </div>

        {/* PENDING */}
        <div className="bg-white border-l-4 border-yellow-500 rounded-2xl p-6 shadow-sm">
          
          <div className="flex items-start justify-between">
            
            <div>
              <p className="text-gray-500 text-[28px]">
                Pending
              </p>

              <h1 className="text-[54px] font-bold text-[#0f172a] leading-tight">
                0
              </h1>

              <div className="flex items-center gap-2 text-green-600 font-medium mt-2">
                <ArrowUp size={18} />
                0%
              </div>
            </div>

            <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center">
              <Clock3 size={28} className="text-yellow-500" />
            </div>
          </div>
        </div>

        {/* AVG HANDLE TIME */}
        <div className="bg-white border-l-4 border-purple-500 rounded-2xl p-6 shadow-sm">
          
          <div className="flex items-start justify-between">
            
            <div>
              <p className="text-gray-500 text-[28px]">
                Avg. Handle Time
              </p>

              <h1 className="text-[46px] font-bold text-[#0f172a] leading-tight">
                4m 32s
              </h1>

              <div className="flex items-center gap-2 text-green-600 font-medium mt-2">
                <ArrowDown size={18} />
                6%
              </div>
            </div>

            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
              <Timer size={28} className="text-purple-500" />
            </div>
          </div>
        </div>
      </div>

      {/* ================= CHART SECTION ================= */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-6">
        
        {/* LEFT CHART */}
        <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-200 p-5 shadow-sm h-[430px]">
          
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

              <Tooltip />

              <Legend
                verticalAlign="top"
                align="center"
              />

              <Area
                type="monotone"
                dataKey="incoming"
                name="Incoming Calls"
                stroke="#3498db"
                fill="#3498db"
                fillOpacity={0.2}
                strokeWidth={3}
              />

              <Area
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

        {/* RIGHT EMPTY BOX */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm h-[430px]" />
      </div>

      {/* ================= TABLE SECTION ================= */}

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm mt-6 p-5">
        
        <h2 className="text-[32px] font-bold text-[#0f172a] mb-5">
          Recent Call Logs
        </h2>

        {/* TABLE */}
        <div className="overflow-x-auto rounded-xl border border-[#8b1538]">
          
          <table className="w-full">
            
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
              
              <tr>
                <td
                  colSpan={8}
                  className="text-center py-10 text-gray-500 text-lg"
                >
                  No calls data available.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CallCenter