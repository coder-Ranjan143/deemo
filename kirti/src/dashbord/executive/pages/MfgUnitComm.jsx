import React, { useState } from "react";
import Navbar from "../../../Components/Navbar";
import Header from "../../../Components/Header";
import { useNavigate } from "react-router-dom";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
} from "recharts";

import {
  Camera,
  Cctv,
  Videotape,
  PlugZap,
  MonitorOff,
} from "lucide-react";

const data = [
  {
    name: "Total Cameras",
    active: 61,
    inactive: 242,
  },
  {
    name: "Critical Cameras",
    active: 33,
    inactive: 116,
  },
  {
    name: "Non-Critical",
    active: 28,
    inactive: 126,
  },
  {
    name: "Offline - Critical",
    active: 0,
    inactive: 116,
  },
  {
    name: "Offline - Non-Critical",
    active: 0,
    inactive: 126,
  },
];
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {

    const current = payload[0];


    return (
      <div className="bg-white/80 backdrop-blur-md border border-gray-200 shadow-2xl rounded-xl px-4 py-3">

        <p className="text-sm font-bold text-gray-800 mb-2">
          {current.payload.name}
        </p>

        <div
          className={`text-sm font-semibold ${
            current.dataKey === "active"
              ? "text-green-600"
              : "text-red-500"
          }`}
        >
          {current.name}: {current.value}
        </div>
      </div>
    );
  }

  return null;
};

const MfgUnitComm = () => {

  const navigate = useNavigate();

  const [hiddenBars, setHiddenBars] = useState({
    active: false,
    inactive: false,
  });

  const handleLegendClick = (data) => {
    setHiddenBars((prev) => ({
      ...prev,
      [data.dataKey]: !prev[data.dataKey],
    }));
  };

  return (


    <>
  
   
    <div className=" pt-20 min-h-screen  bg-[#f4f5f7] p-5 ">
 <Header/>
       <Navbar/>

      {/* MAIN CONTAINER */}

      
      <div className="bg-white rounded-2xl h-[75vh] border border-gray-200 shadow-lg p-5  mt-15">

        {/* HEADER */}
        <div className="flex items-center  justify-between border-b border-gray-200 pb-4 mb-6">
          
          <h1 className="text-[25px] font-bold text-[#1e293b]">
            Manufacturing-Unit
          </h1>

          <button className="px-5 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 text-sm font-medium shadow-sm transition">
            ← BACK
          </button>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* LEFT SECTION */}
          <div className="space-y-4">

            {/* CARD 1 */}
            <div className="bg-[rgba(253,242,242)] border border-[#f2d6d6] rounded-2xl p-5 shadow-sm">
              <div className="flex justify-between h-[40px] items-center">

                <div className="flex items-center gap-4">
                  <Camera className="text-gray-500 w-8 h-8" />

                  <div>
                    <p className="text-[13px] font-semibold uppercase tracking-wide text-[#9b3f3f]">
                      TOTAL ACTIVE CAMERAS
                    </p>

                    <h2 className="text-[42px] font-bold text-[#e53935] mt-2 leading-none">
                      61{" "}
                      <button onClick={() => navigate("/cameras/totalActiveCamera")} className="cursor-pointer">
                      <span className="text-[#1565c0] text-[38px]">
                        / 303
                      </span>
                      </button>
                    </h2>
                  </div>
                </div>

                <p className="text-green-600 font-semibold text-sm">
                  0%
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-[rgba(253,242,242)] border border-[#f2d6d6] rounded-2xl p-5 shadow-sm">
              <div className="flex justify-between h-[40px]   items-center">

                <div className="flex items-center gap-4">
                  <Cctv className="text-gray-500 w-8 h-8" />

                  <div>
                    <p className="text-[13px] font-semibold uppercase tracking-wide text-[#274690]">
                      TOTAL ACTIVE CRITICAL CAMERAS
                    </p>

                    <h2 className="text-[42px] font-bold text-[#e53935] mt-2 leading-none">
                      33{" "}
                      <button onClick={() => navigate("/cameras/totalActiveCriticalCameras")} className="cursor-pointer">
                      <span className="text-[#1565c0] text-[38px]">
                        / 149
                      </span>
                      </button>
                    </h2>
                  </div>
                </div>

                <p className="text-green-600 font-semibold text-sm">
                  0%
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-[rgba(253,242,242)] border border-[#f2d6d6] rounded-2xl p-5 shadow-sm">
              <div className="flex justify-between h-[40px]   items-center">

                <div className="flex items-center gap-4">
                  <Videotape className="text-gray-500 w-8 h-8" />

                  <div>
                    <p className="text-[13px] font-semibold uppercase tracking-wide text-[#8a5a00]">
                      TOTAL ACTIVE NON-CRITICAL CAMERAS
                    </p>

                    <h2 className="text-[42px] font-bold text-[#e53935] mt-2 leading-none">
                      28{" "}
                      <button onClick={() => navigate("/cameras/totalActiveNonCriticalCameras")} className="cursor-pointer">
                      <span className="text-[#1565c0] text-[38px]">
                        / 154
                      </span>
                      </button>
                    </h2>
                  </div>
                </div>

                <p className="text-green-600 font-semibold text-sm">
                  0%
                </p>
              </div>
            </div>

            {/* OFFLINE SECTION */}
            <div className="pt-1">

              <h2 className="text-[14px] font-bold uppercase tracking-wider text-gray-600 mb-4">
                Frequently Offline Active Cameras
              </h2>

              <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">

                {/* OFFLINE CARD 1 */}
                <div className="bg-white border  h-[100px]  border-gray-200 rounded-xl p-5 shadow-sm">

                  <div className="flex  justify-between items-center">

                    <div className="flex items-center gap-2">
                      <PlugZap className="text-gray-500 w-7 h-7" />

                      <div>
                        <p className="text-[13px] font-semibold uppercase text-[#a94442]">
                          Frequently Offline - Critical
                        </p>

                        <h2 className="text-[34px] font-bold text-[#e53935] mt-2">
                          0{" "}
                          <span className="text-[#1565c0] text-[30px]">
                            / 149
                          </span>
                        </h2>
                      </div>
                    </div>

                    <p className="text-green-600 text-sm font-semibold">
                      0%
                    </p>
                  </div>
                </div>

                {/* OFFLINE CARD 2 */}
                <div className="bg-white   h-[100px] border border-gray-200 rounded-xl p-5 shadow-sm">

                  <div className="flex justify-between    items-center">

                    <div className="flex items-center gap-4">
                      <MonitorOff className="text-gray-500 w-7 h-7" />

                      <div>
                        <p className="text-[13px] font-semibold uppercase text-[#d97706]">
                          Frequently Offline - Non Critical
                        </p>

                        <h2 className="text-[34px] font-bold text-[#e53935] mt-2">
                          0{" "}
                          <span className="text-[#1565c0] text-[30px]">
                            / 154
                          </span>
                        </h2>
                      </div>
                    </div>

                    <p className="text-green-600 text-sm font-semibold">
                      0%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CHART SECTION */}
          <div className="bg-white  h-[400px] border border-gray-200 rounded-2xl p-5 shadow-sm">

            <ResponsiveContainer width="100%" height={400}>
              
              <BarChart
                data={data}
                margin={{ top: 40, right: 10, left: 0, bottom: 20 }}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                />

                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 12, fill: "#666" }}
                />

                <YAxis
                  tick={{ fontSize: 12, fill: "#666" }}
                />

              <Tooltip
  content={<CustomTooltip />}
  shared={false}
/>

                <Legend
                  verticalAlign="top"
                  align="center"
                  wrapperStyle={{
                    paddingBottom: "20px",
                    cursor: "pointer",
                  }}
                  onClick={handleLegendClick}
                />

                {/* ACTIVE BAR */}
                <Bar
                  dataKey="active"
                  fill="#22c55e"
                  radius={[4, 4, 0, 0]}
                  name="Active"
                  hide={hiddenBars.active}
                >
                  <LabelList
                    dataKey="active"
                    position="top"
                    fill="#16a34a"
                    fontSize={12}
                  />
                </Bar>

                {/* INACTIVE BAR */}
               <Bar
  dataKey="inactive"
  fill="#ef4444"
  radius={[4, 4, 0, 0]}
  name="Inactive"
  hide={hiddenBars.inactive}
>
  <LabelList
    dataKey="inactive"
    position="top"
    fill="#dc2626"
    fontSize={12}
  />
</Bar>

              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
    </>
  );
  
};

export default MfgUnitComm;