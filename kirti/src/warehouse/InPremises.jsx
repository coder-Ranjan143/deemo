import React from "react";

import {
  Download,
  Filter,
  ArrowLeft,
  Info,
  Truck,
  Image,
  Route,
} from "lucide-react";

const records = [
  {
    id: "01",
    vehicle: "ABC-1234",
  },
  {
    id: "02",
    vehicle: "XYZ-5678",
  },
  {
    id: "03",
    vehicle: "LMN-3456",
  },
  {
    id: "04",
    vehicle: "DEF-7890",
  },
  {
    id: "05",
    vehicle: "GHI-1122",
  },
  {
    id: "06",
    vehicle: "JKL-3344",
  },
];

const InPremises = () => {
  return (
    <div className="min-h-screen bg-[#f4f4f4] p-4">
      
      {/* Main Container */}
      <div className="bg-[#efefef] rounded-2xl shadow-md p-5">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b  border-gray-400 pb-4">

          <h2 className="text-4xl font-bold text-slate-800 sm:text-2xl">
            Warehouse - In-Premises
          </h2>

          <div className="flex flex-wrap items-center gap-3">

            <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-lg text-sm font-medium">
              <Info size={16} />
              Active Filter : Today (22-May-2026 05:08 PM)
            </div>

            <button className="flex items-center gap-2 border border-indigo-300 text-indigo-700 px-4 py-3 rounded-lg hover:bg-indigo-50">
              <Download size={16} />
              Export
            </button>

            <button className="flex items-center gap-2 border border-red-300 text-red-700 px-4 py-3 rounded-lg hover:bg-red-50">
              <Filter size={16} />
              Filter
            </button>

            <button className="flex items-center gap-2 border px-4 py-3 rounded-lg hover:bg-gray-100">
              <ArrowLeft size={16} />
              BACK
            </button>

          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">

          {/* Plant Summary */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">

            <div className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white px-5 py-4">
              <h2 className="text-3xl font-bold">
                Plant Summary
              </h2>
            </div>

            <div className="p-5 space-y-4">

              {/* Card 1 */}
              <div className="bg-green-100 border border-green-200 rounded-2xl p-5 flex items-center gap-4">

                <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white">
                  <Truck size={28} />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-700">
                    Vehicle Entered
                  </h3>

                  <p className="text-4xl font-bold text-green-700">
                    00
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-red-100 border border-red-200 rounded-2xl p-5 flex items-center gap-4">

                <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center text-white">
                  <Truck size={28} />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-700">
                    Vehicle Exits
                  </h3>

                  <p className="text-4xl font-bold text-red-700">
                    00
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Vehicle Statistics */}
          <div className="bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl shadow-md p-5">

            <h2 className="text-3xl font-bold text-white mb-5">
              📊 Vehicle Statistics
            </h2>

            <div className="bg-white rounded-xl w-[350px] h-[220px]"></div>

          </div>

        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-md mt-8 p-4">

          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            📋 Records
          </h2>

          <div className="overflow-auto rounded-lg border">

            <table className="w-full">

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
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-4">{item.id}</td>

                    <td className="p-4">{item.vehicle}</td>

                    <td className="p-4 text-blue-600 cursor-pointer">
                      View Details
                    </td>

                    <td className="p-4">
                      <Image
                        className="text-cyan-600 cursor-pointer"
                        size={20}
                      />
                    </td>

                    <td className="p-4">
                      <Route
                        className="text-red-500 cursor-pointer"
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
  );
}

export default InPremises