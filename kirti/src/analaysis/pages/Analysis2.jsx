import React from "react";
import { Download, Filter } from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  RadialBarChart,
  RadialBar,
} from "recharts";

// ---------------- DATA ----------------

const salesData = [
  { name: "Jan", value: 100 },
  { name: "Feb", value: 180 },
  { name: "Mar", value: 140 },
  { name: "Apr", value: 240 },
  { name: "May", value: 200 },
  { name: "Jun", value: 320 },
];

const cameraData = [
  { name: "Mon", value: 12 },
  { name: "Tue", value: 19 },
  { name: "Wed", value: 10 },
  { name: "Thu", value: 22 },
  { name: "Fri", value: 17 },
  { name: "Sat", value: 25 },
];

const pieData = [
  { name: "Vehicle", value: 35 },
  { name: "Camera", value: 25 },
  { name: "Entry", value: 20 },
  { name: "Exit", value: 20 },
];

const radialData = [
  {
    name: "Performance",
    value: 78,
    fill: "#8B5CF6",
  },
];

const authData = [
  { name: "Unit 1", entry: 40, exit: 20 },
  { name: "Unit 2", entry: 35, exit: 18 },
  { name: "Unit 3", entry: 28, exit: 14 },
  { name: "Unit 4", entry: 45, exit: 30 },
];

const COLORS = [
  "#8B5CF6",
  "#FACC15",
  "#38BDF8",
  "#F472B6",
];

// ---------------- CARD ----------------

const Card = ({ children, className = "" }) => {
  return (
       <div
      className={`bg-gradient-to-br from-white to-[#f3edff]
      rounded-3xl p-5 shadow-lg border border-[#e9ddff]
      ${className}`}
    >
      {children}
    </div>
  );
};

// ---------------- MAIN ----------------

const Analysis2 = () => {
  return (
   <div className="min-h-screen bg-gradient-to-br from-[#f8f5ff] via-[#f4efff] to-[#efe7ff] text-[#2d1b4e] p-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">

        <div>
         <h1 className="text-3xl font-bold ">
            Dashboard Analytics
          </h1>

         <p className="text-[#8d79c4] text-sm mt-1">
            Complete Analysis of Alerts & Activities
          </p>
        </div>

        <div className="flex gap-3">
<button className="flex items-center gap-2 px-4 py-2 rounded-xl
bg-gradient-to-r from-[#ede4ff] to-white
border border-[#dac8ff]
text-[#2C5EAD]
hover:scale-105 transition">
            <Download size={18} />
            Export
          </button>

          <button className="flex items-center gap-2 px-4 py-2 rounded-xl
bg-gradient-to-r from-[#f4bfbf] to-white
border border-[#fff4c8]
text-[#810B38]
hover:scale-105 transition">
            <Filter size={18} />
            Filter
          </button>

        </div>
      </div>

      {/* TOP STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">

        <Card>
          <h2 className="text-gray-300 text-sm">
            Vehicle Alerts
          </h2>

          <h1 className="text-3xl font-bold mt-2 text-cyan-400">
            2,540
          </h1>

          <div className="h-[70px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData}>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#38BDF8"
                  fill="#38BDF8"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <h2 className="text-gray-300 text-sm">
            Camera Down
          </h2>

          <h1 className="text-3xl font-bold mt-2 text-yellow-400">
            128
          </h1>

          <div className="h-[70px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={cameraData}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#FACC15"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <h2 className="text-gray-300 text-sm">
            ANPR Entries
          </h2>

          <h1 className="text-3xl font-bold mt-2 text-pink-400">
            980
          </h1>

          <div className="h-[70px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cameraData}>
                <Bar
                  dataKey="value"
                  fill="#F472B6"
                  radius={[5, 5, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <h2 className="text-gray-300 text-sm">
            Distillery Status
          </h2>

          <h1 className="text-3xl font-bold mt-2 text-violet-400">
            89%
          </h1>

          <div className="h-[70px] mt-4 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                innerRadius="70%"
                outerRadius="100%"
                data={radialData}
                startAngle={180}
                endAngle={0}
              >
                <RadialBar
                  minAngle={15}
                  dataKey="value"
                  cornerRadius={20}
                />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* LARGE AREA GRAPH */}
          <Card>

            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-semibold">
                Alert Statistics
              </h2>

              <div className="flex gap-4 text-sm">
                <span className="text-cyan-400">Vehicle</span>
                <span className="text-pink-400">Camera</span>
                <span className="text-yellow-400">Entry</span>
              </div>
            </div>

            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salesData}>
                  <defs>
                    <linearGradient
                      id="color1"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor="#38BDF8"
                        stopOpacity={0.6}
                      />
                      <stop
                        offset="95%"
                        stopColor="#38BDF8"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>

                  <CartesianGrid stroke="#2A225A" />
                  <XAxis dataKey="name" stroke="#aaa" />
                  <YAxis stroke="#aaa" />
                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#38BDF8"
                    fill="url(#color1)"
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

          </Card>

          {/* BAR GRAPH */}
          <Card>

            <h2 className="text-xl font-semibold mb-5">
              Authorised Entry / Exit
            </h2>

            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={authData}>
                  <CartesianGrid stroke="#2A225A" />
                  <XAxis dataKey="name" stroke="#aaa" />
                  <YAxis stroke="#aaa" />
                  <Tooltip />
                  <Legend />

                  <Bar
                    dataKey="entry"
                    fill="#8B5CF6"
                    radius={[8, 8, 0, 0]}
                  />

                  <Bar
                    dataKey="exit"
                    fill="#FACC15"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

          </Card>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">

          {/* PIE CHART */}
          <Card>

            <h2 className="text-xl font-semibold mb-5">
              Alerts Distribution
            </h2>

            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>

                  <Pie
                    data={pieData}
                    dataKey="value"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>

                  <Tooltip />

                </PieChart>
              </ResponsiveContainer>
            </div>

          </Card>

          {/* SMALL LINE GRAPH */}
          <Card>

            <h2 className="text-xl font-semibold mb-5">
              Weekly Reports
            </h2>

            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={cameraData}>
                  <CartesianGrid stroke="#2A225A" />
                  <XAxis dataKey="name" stroke="#aaa" />
                  <YAxis stroke="#aaa" />
                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#F472B6"
                    strokeWidth={3}
                  />

                </LineChart>
              </ResponsiveContainer>
            </div>

          </Card>

        </div>
      </div>
    </div>
  );
};

export default Analysis2;