import React from 'react'

import {
  Download,
  ChevronDown,
  Tag,
} from "lucide-react";


const sites = [
  "All Sites",
  "Indore",
  "Morena",
  "Dhar",
  "Khargone (West Nimar)",
  "Khargone",
  "Gwalior",
  "Rajgarh",
  "Sagar",
  "Bhopal",
];

const categories = [
  "All Categories",
  "Entry Gate",
  "Exit Gate",
  "Others",
  "Bottling Hall",
  "UnLoading Area",
  "Storage Area",
  "Loading Area",
  "MAIN GATE",
];

const cameras = [
  {
    site: "INDORE",
    status: "OFF",
    cameraName: "mpbeermainentrygate",
    description: "high",
    category: "N/A",
  },
  {
    site: "INDORE",
    status: "OFF",
    cameraName: "mpbeerbeerloading1",
    description: "high",
    category: "N/A",
  },
  {
    site: "INDORE",
    status: "OFF",
    cameraName: "mpbeerfactoryparisar",
    description: "low",
    category: "N/A",
  },
  {
    site: "INDORE",
    status: "ON",
    cameraName: "mpbeerrawmaterialunloading1",
    description: "high",
    category: "N/A",
  },
];

const MfgDistilleries = () => {
    return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-2xl shadow-sm p-5">

        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-400 pb-4">
          <h2 className="text-4xl font-bold text-slate-700">
            Manufacturing-Distilleries
          </h2>

          <button className="flex items-center gap-2 border border-indigo-500 text-indigo-600 px-4 py-2 rounded-lg hover:bg-violet-50">
            <Download size={16} />
            Export
            <ChevronDown size={16} />
          </button>
        </div>

        {/* Site Filter */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-gray-500 mb-3">
            Filter by Site
          </h3>

          <div className="flex flex-wrap gap-3">
            {sites.map((site, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg border text-sm font-medium
                ${
                  index === 0
                    ? "bg-red-800 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                {site}
              </button>
            ))}
          </div>
        </div>

        {/* Status Filter */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-gray-500 mb-3">
            Filter by Status
          </h3>

          <div className="flex gap-3">
            <button className="bg-red-800 text-white px-4 py-2 rounded-lg">
              All Status
            </button>

            <button className="border border-green-500 text-green-700 px-4 py-2 rounded-lg">
              ● ON
            </button>

            <button className="border border-red-500 text-red-700 px-4 py-2 rounded-lg">
              ● OFF
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-gray-500 mb-3">
            Filter by Category
          </h3>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm
                ${
                  index === 0
                    ? "bg-indigo-800 text-white"
                    : "bg-white text-gray-500 font-medium"
                }`}
              >
                {index !== 0 && <Tag size={14} className='fill-gray-700 text-white'/>}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-8">

          {cameras.map((camera, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-2xl shadow-sm p-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-red-700 font-bold text-2xl">
                  {camera.site}
                </h3>

                <span
                  className={`px-2 py-1 rounded-full text-xs font-bold text-white
                  ${
                    camera.status === "ON"
                      ? "bg-green-600"
                      : "bg-red-700"
                  }`}
                >
                  {camera.status}
                </span>
              </div>

              <p className="text-sm mb-1">
                Camera Name →
                <span className="text-teal-600 font-semibold ml-1">
                  {camera.cameraName}
                </span>
              </p>

              <p className="text-sm">
                <b>Status:</b> {camera.status}
              </p>

              <p className="text-sm">
                <b>Description:</b> {camera.description}
              </p>

              <p className="text-sm mb-4">
                <b>Camera Category:</b> {camera.category}
              </p>

              <button
                className={`w-full py-2 rounded-md text-white font-medium
                ${
                  camera.status === "ON"
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-red-800 hover:bg-red-900"
                }`}
              >
                View
              </button>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default MfgDistilleries