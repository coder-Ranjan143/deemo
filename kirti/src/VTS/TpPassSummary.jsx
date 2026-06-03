import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  Legend
} from "recharts";

import {
  CircleAlert,
  Download,
  Filter,
  ArrowLeft,
  ChevronDown,
} from "lucide-react";
 

const summaryData = [
  {
    title: "Total TP Passes (Today)",
    value: 483,
    color: "border-blue-600 text-blue-700",
    borderColor: "border-blue-600",
    
  },
  {
    title: "Expired & Still Open",
    value: 79,
    color: "border-red-500 text-red-700",
  },
  {
    title: "Active TP Passes",
    value: 471,
    color: "border-green-500 text-green-700 ",
    p:"text-blue900"
  },
  {
    title: "Closed TP Passes",
    value: 12,
    color: "border-yellow-500 text-yellow-700",
  },
];

const areaData = [
  { day: "24 May", value: 200 },
  { day: "25 May", value: 3050 },
  { day: "26 May", value: 2800 },
  { day: "27 May", value: 2850 },
  { day: "28 May", value: 750 },
  { day: "29 May", value: 3000 },
  { day: "30 May", value: 500 },
];

const barData = [
  { type: "Manufacturing", value: 45 },
  { type: "Warehouse", value: 418 },
  { type: "Export", value: 5 },
];

const tableData = [
  {
    id: 1,
    tp: "T/FL_WH/RET/FL/2026-2027/090811",
    permit: "Warehouse ➡️ Retail Outlet",
    status: "Active",
    created: "30 May 2026, 03:02 PM",
  },
  {
    id: 2,
    tp: "T/M/PERN/EXP/FL/2026-2027/000917",
    permit: "Warehouse ➡️ Retail Outlet",
    status: "Active",
    created: "30 May 2026, 03:02 PM",
  },
  {
    id: 3,
    tp: "T/M/PERN/EXP/FL/2026-2027/000917",
    permit: "Warehouse ➡️ Retail Outlet",
    status: "Active",
    created: "30 May 2026, 03:02 PM",
  },
   {
    id: 1,
    tp: "T/FL_WH/RET/FL/2026-2027/090811",
    permit: "Warehouse ➡️ Retail Outlet",
    status: "Active",
    created: "30 May 2026, 03:02 PM",
  },
  {
    id: 2,
    tp: "T/M/PERN/EXP/FL/2026-2027/000917",
    permit: "Warehouse ➡️ Retail Outlet",
    status: "Active",
    created: "30 May 2026, 03:02 PM",
  },
  {
    id: 3,
    tp: "T/M/PERN/EXP/FL/2026-2027/000917",
    permit: "Warehouse ➡️ Retail Outlet",
    status: "Active",
    created: "30 May 2026, 03:02 PM",
  }, {
    id: 1,
    tp: "T/FL_WH/RET/FL/2026-2027/090811",
    permit: "Warehouse ➡️ Retail Outlet",
    status: "Active",
    created: "30 May 2026, 03:02 PM",
  },
  {
    id: 2,
    tp: "T/M/PERN/EXP/FL/2026-2027/000917",
    permit: "Warehouse ➡️ Retail Outlet",
    status: "Active",
    created: "30 May 2026, 03:02 PM",
  },
  {
    id: 3,
    tp: "T/M/PERN/EXP/FL/2026-2027/000917",
    permit: "Warehouse ➡️ Retail Outlet",
    status: "Active",
    created: "30 May 2026, 03:02 PM",
  },
   {
    id: 1,
    tp: "T/FL_WH/RET/FL/2026-2027/090811",
    permit: "Warehouse ➡️ Retail Outlet",
    status: "Active",
    created: "30 May 2026, 03:02 PM",
  },
  {
    id: 2,
    tp: "T/M/PERN/EXP/FL/2026-2027/000917",
    permit: "Warehouse ➡️ Retail Outlet",
    status: "Active",
    created: "30 May 2026, 03:02 PM",
  },
  {
    id: 3,
    tp: "T/M/PERN/EXP/FL/2026-2027/000917",
    permit: "Warehouse ➡️ Retail Outlet",
    status: "Active",
    created: "30 May 2026, 03:02 PM",
  },
];


const TpPassSummary = () => {
  return (
    <div className="p-5 bg-gray-100 min-h-screen">

      <div className="justify-between flex items-center  mb-6 ">
    <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
      📊  TP Pass Summary Dashboard
      </h1>
 
   <button className="flex items-center gap-2 border border-red-700 text-red-700 px-4 py-2  text-sm rounded-md hover:bg-red-50 transition shadow-sm">
              <Filter size={16} />
              Filter
            </button> 


      </div>


   
      {/* Summary Cards */}


      

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-6 ">
     
        {summaryData.map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl border-l-4 shadow p-5 ${item.color}`}
          >
            <h3 className="text-lg font-semibold ">{item.title}</h3>
            <p className="text-3xl font-bold ">{item.value}</p>
          </div>
        ))}
      
</div>



      {/* Charts */}


       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
        <div className="bg-white rounded-xl shadow p-4 h-[400px]">
          <h3 className=" text-lg font-bold text-gray-800 mb-6">
            📈  TP Passes - Last 7 Days
          </h3>

        <ResponsiveContainer width="100%" height="90%" >
  <AreaChart data={areaData}>
    <CartesianGrid strokeDasharray="0,0" />
    <XAxis dataKey="day"  />
    <YAxis />
    <Tooltip />

    <Legend
  verticalAlign="top"
  align="center"
  height={36}
  iconType="none"
  formatter={(value) => (
    <span style={{ color: "#6b7280", fontSize: "14px", fontWeight: 500 }}>
      {value}
    </span>
  )}
/>

    <Area
      type="monotone"
      dataKey="value"
      name=" 📆 Showing Last 7 Days Data"
      stroke="#3b82f6"
      fill="#bfdbfe"
        dot={{ r: 3 }}
  activeDot={{ r: 7 }}
      
    />
  </AreaChart>
</ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow p-4 ">
          <h3 className="text-lg font-bold text-gr mb-2">
              📊  TP Passes by Permit Type(Today)
          </h3>

          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="0 0" />
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      

      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto p-4 mt-6">
        <div className="p-4 border-b">
          <h3 className="text-lg font-bold text-gray-800"> 📝 Recent TP Passes (Today)</h3> 
        </div>
 <div className="h-[300px] overflow-y-aut">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-red-800 text-white font-semibold">
            <tr>
              <th className="px-4 py-4">#</th>
              <th className="px-4 py-4">TP No</th>
              <th className="px-4 py-4">Permit Type</th>
              <th className="px-4 py-4">Status</th>
              <th className="px-4 py-4">Created At</th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((row) => (
              <tr
                key={row.id}
                className="border-b border-gray-300 hover:bg-gray-50"
              >
                <td className="px-4 py-2">{row.id}</td>
                <td className="px-4 py-2">{row.tp}</td>
                <td className="px-4 py-2">{row.permit}</td>
                <td className="px-4 py-2 ">
                  <span className="text-green-600 font-semibold"> {row.status}</span>
                 
                </td>
                <td className="px-4 py-2">{row.created}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}

export default TpPassSummary