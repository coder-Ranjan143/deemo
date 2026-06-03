import React from "react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

import {
  Truck,
  AlertTriangle,
  TicketsPlane,
  Download,
  Filter,
  ArrowLeft,
  ChevronDown ,
CircleAlert,
LocateOff 
} from "lucide-react";

const statsData = [
  {
    name: "Active TP Passes",
    value: 64,
  },
  {
    name: "Expired TP Passes",
    value: 0,
  },
  {
    name: "TP Pass Generated",
    value: 633,
  },
];

const tableData = [
  {
    id: 1,
    vehicle: "MP09DM6975",
    delayed: "No",
    source: "gps",
    driver: "AJAY",
    vendor: "QTS SOLUTIONS PVT LTD",
    trip: "1105737",
  },
  {
    id: 2,
    vehicle: "MP04HE0995",
    delayed: "No",
    source: "gps",
    driver: "SALMAN",
    vendor: "QTS SOLUTIONS PVT LTD",
    trip: "1105754",
  },
  {
    id: 3,
    vehicle: "MP09GG4002",
    delayed: "No",
    source: "gps",
    driver: "N/A",
    vendor: "Fleetrobo",
    trip: "TRIP807881",
  },
  {
    id: 4,
    vehicle: "MP09GG6568",
    delayed: "No",
    source: "gps",
    driver: "N/A",
    vendor: "Fleetrobo",
    trip: "TRIP807882",
  },
  {
    id: 5,
    vehicle: "CG15EA4721",
    delayed: "No",
    source: "gps",
    driver: "Driver 1",
    vendor: "Intugine Technologies",
    trip: "INT4ed0751",
  },
];

function InTransit() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="bg-white rounded-xl shadow p-5 mb-5">

        <div className="flex items-center justify-between flex-wrap gap-4 ">

          <h1 className="text-3xl font-bold text-gray-700">
            Manufacturer - In-Transit
          </h1>

          <div className="flex gap-3 flex-wrap">

            <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2" >
               <CircleAlert  className=" bg-blue-700 text-white rounded-full"/>
              Active Filter : Today (21-May-2026 03:50 PM)
            </button>

          <button className="border px-4 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2 text-perple  border-indigo-600 text-indigo-600">
  
  <Download size={16} />

  Export

  <ChevronDown size={16} />

</button>
            <button className="border px-4 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2 border-red-600 text-red-600 ">
              <Filter size={16} />
              Filter
            </button>

            <button className="border-gray-300 border px-4 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2 bg-gray-100">
              <ArrowLeft size={16} />
              Back
            </button>
           
           

          </div>


        </div>

        <div className="border-b border-gray-300 mt-5 mb-5"></div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">


  {/* Plant Summary */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">

          <div className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white p-4 text-xl font-bold">
            Plant Summary
          </div>

          <div className="p-5 space-y-4">

            {/* Card 1 */}
            <div className="bg-green-100 rounded-xl p-5 flex items-center gap-4">

              <div className="bg-green-500 text-white p-4 rounded-full">
                <Truck size={28} />
              </div>

              <div>
                <h2 className="font-semibold text-gray-700">
                  VEHICLE RUNNING WITH VALID TP PASS:
                </h2>

                <p className="text-3xl font-bold text-green-700 mt-2">
                  64
                </p>
              </div>

            </div>

            {/* Card 2 */}
            <div className="bg-red-100 rounded-xl p-5 flex items-center gap-4">

              <div className="bg-red-500 text-white p-4 rounded-full">
                <LocateOff  size={28} />
              </div>

              <div>
                <h2 className="font-semibold text-gray-700">
                  VEHICLE RUNNING WITH EXPIRED TP PASS And Delayed:
                </h2>

                <p className="text-3xl font-bold text-red-600 mt-2">
                  0
                </p>
              </div>

            </div>

            {/* Card 3 */}
            <div className="bg-yellow-100 rounded-xl p-5 flex items-center gap-4">

              <div className="bg-yellow-500 text-white p-4 rounded-full">
                <TicketsPlane size={28} />
              </div>

              <div>
                <h2 className="font-semibold text-gray-700">
                  TP Pass Generated:
                </h2>

                <p className="text-3xl font-bold text-yellow-700 mt-2">
                  633
                </p>
              </div>

            </div>

          </div>
          
        </div>


         <div className="bg-white rounded-2xl shadow overflow-hidden">

          <div className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white p-4 text-xl font-bold">
            Vehicle Statistics
          </div>

          <div className="h-[400px] p-5">

            <ResponsiveContainer width="100%" height="100%">

              <BarChart data={statsData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Legend />

                <Bar
                  dataKey="value"
                  fill="#facc15"
                  radius={[10, 10, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>
        </div>
        </div>

      </div>



      {/* Table */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <div className="p-4 border-b">
          <h2 className="text-2xl font-bold text-gray-700">
            Vehicles In-Transit
          </h2>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-gray-100 text-gray-700">

              <tr>
                <th className="p-4 text-left">#</th>
                <th className="p-4 text-left">Vehicle No</th>
                <th className="p-4 text-left">Delayed</th>
                <th className="p-4 text-left">Source</th>
                <th className="p-4 text-left">Driver</th>
                <th className="p-4 text-left">Vendor</th>
                <th className="p-4 text-left">Trip ID</th>
              </tr>

            </thead>

            <tbody>

              {tableData.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="p-4">{item.id}</td>

                  <td className="p-4 font-semibold">
                    {item.vehicle}
                  </td>

                  <td className="p-4">{item.delayed}</td>

                  <td className="p-4">{item.source}</td>

                  <td className="p-4">{item.driver}</td>

                  <td className="p-4">{item.vendor}</td>

                  <td className="p-4">{item.trip}</td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4">

          <p className="text-sm text-red-700 font-sm">
            Showing 1 to 25 of 64 results
          </p>

          <div className="flex gap-2">

 <button className="px-3 py-1 border rounded border-red-700 text-red-700">
              <ArrowLeft  size={16}/>
            </button>

            <button className="px-3 py-1 border rounded bg-red-700 text-white">
              1
            </button>

            <button className="px-3 py-1 border rounded  border-red-700 text-red-700 ">
              2
            </button>

            <button className="px-3 py-1 border rounded  border-red-700 text-red-700 ">
              3
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default InTransit;