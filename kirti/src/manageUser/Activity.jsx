import React from "react";
import { Download, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const activityData = Array.from({ length: 15 }, (_, index) => ({
  id: index + 1,
  logName: "default",
  activity: "updated",
  description: "updated",
  createdTime: "2025-10-13 16:28:46",
  updatedTime: "2025-10-13 16:28:46",
}));

const Activity = () => {
   return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-xl shadow-md p-5">

        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4 mb-5">
          <h1 className="text-4xl font-bold text-slate-800">
            Activity List
          </h1>

          <div className="flex items-center gap-2">

            <button className="flex items-center gap-2 border border-indigo-300 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50">
              <Download size={16} />
              Export
              <ChevronDown size={16} />
            </button>

            <select className="border w-[100px] border-red-700 rounded-lg px-3 py-2 text-sm text-gray-600">
              <option>25</option>
              <option>50</option>
              <option>75</option>
              <option>100</option>
            </select>

          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">

            <thead>
              <tr className="bg-gradient-to-r from-[#8b1234] to-[#a11c1c] text-white text-sm">
                <th className="px-4 py-4 text-left">#</th>
                <th className="px-4 py-4 text-left">LOG NAME</th>
                <th className="px-4 py-4 text-left">ACTIVITY</th>
                <th className="px-4 py-4 text-left">DESCRIPTION</th>
                <th className="px-4 py-4 text-left">CREATED TIME</th>
                <th className="px-4 py-4 text-left">UPDATED TIME</th>
              </tr>
            </thead>

            <tbody>
              {activityData.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-200 hover:bg-gray-50 text-sm"
                >
                  <td className="px-4 py-4">{item.id}</td>
                  <td className="px-4 py-4">{item.logName}</td>
                  <td className="px-4 py-4">{item.activity}</td>
                  <td className="px-4 py-4">{item.description}</td>
                  <td className="px-4 py-4">{item.createdTime}</td>
                  <td className="px-4 py-4">{item.updatedTime}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-6">

          <p className="text-sm text-red-600">
            Showing 1 to 15 of 17 results
          </p>

          <div className="flex items-center">

            <button className="border border-red-200 px-3 py-2 text-red-400 rounded-l-md">
              <ChevronLeft size={16} />
            </button>

            <button className="bg-red-600 text-white px-4 py-2">
              1
            </button>

            <button className="border-y border-red-200 px-4 py-2 text-red-600">
              2
            </button>

            <button className="border border-red-200 px-3 py-2 text-red-600 rounded-r-md">
              <ChevronRight size={16} />
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Activity