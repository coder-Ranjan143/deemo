import React from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  Circle,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";



import L from "leaflet";

import {
  Truck,
  ShieldCheck,
  Lock,
  Bell,
  MapPin,
  CheckCircle2,
  MapPinned,
  BellRing,
  User,
  Phone,
  CalendarCheck,
  CalendarX,
  Upload,
  Download,
  Microchip,
  Route,
  PackageOpen,
  Road,
  CircleCheck,
  Clock,
  Send,
} from "lucide-react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";

/* ---------------- CUSTOM ICON ---------------- */

const vehicleIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  iconSize: [30, 45],
  iconAnchor: [15, 45],
});

/* ---------------- MAP DATA ---------------- */

const positions = [
  [23.2599, 77.4126], // Bhopal
  [23.5, 77.7],
  [23.8, 78.0],
  [24.1, 78.2],
];

/* ---------------- STATUS DATA ---------------- */

const tripData = [
  {
    title: "VINDHYACHAL DISTILLERIES PVT. LTD",
    time: "22 May 2026, 12:15 PM",
    status: "Crossed",
  },

  {
    title: "MADHYA PRADESH RAJGARH",
    time: "22 May 2026, 12:36 PM",
    status: "Crossed",
  },

  {
    title: "MADHYA PRADESH SEHORE",
    time: "22 May 2026, 01:10 PM",
    status: "Crossed",
  },

  {
    title: "CS WAREHOUSE, BHOPAL",
    time: "22 May 2026, 02:34 PM",
    status: "Arrived",
  },
];

/* ---------------- COMPONENT ---------------- */

const VtsElockId = () => {
  return (
<>
    <Header/>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 p-4 mt-30">
      <div className="bg-white rounded-2xl shadow p-4 mb-4">
        <div className="flex   sm:items-center sm:justify-between gap-4">
          {/* CARD 1 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
              <Truck className="text-blue-600 shrink-0  w-6 h-6 object-contain" />
            </div>

            <div>
              <p className="text-xs text-gray-500">TP Pass Number</p>
              <p className="text-lg font-bold text-gray-800">
                T/VIND/CWH/CS/2026-2027/080826
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
              <Truck className="text-blue-600 shrink-0  w-6 h-6 object-contain" />
            </div>

            <div>
              <p className="text-xs text-gray-500">Vehicle Number</p>
              <p className="text-lg font-bold text-gray-800">MP04HE3528</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
              <MapPinned className="text-yellow-600  bg-yellow-100 shrink-0  w-6 h-6 object-contain" />
            </div>

            <div>
              <p className="text-xs text-gray-500">Trip Status</p>
              <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-yellow-500 text-white">
                OPEN
              </span>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center">
              <Lock className="text-green-600 bg-green-200 shrink-0  w-6 h-6 object-contain" />
            </div>

            <div>
              <p className="text-xs text-gray-500">Lock Status</p>
              <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-green-600 text-white">
                LOCKED
              </span>
            </div>
          </div>

          {/* CARD 5 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <BellRing className="text-red-600 shrink-0  w-6 h-6 object-contain" />
            </div>

            <div>
              <p className="text-xs text-gray-500">Total Alert (This Trip)</p>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN LAYOUT */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        {/* LEFT PANEL */}

        <div className="xl:col-span-4 space-y-4 xl:h[85vh]">
          <div className="bg-white rounded-2xl shadow p-4  space-y-4 text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <User className="text-indigo-600 mt-0.5" />

                <div>
                  {" "}
                  <p className="text-xs text-gray-500"> Driver Name</p>
                  <p className="font-semibold text-gray-800">"N/A"</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="text-indigo-600 mt-0.5" />

                <div>
                  {" "}
                  <p className="text-xs text-gray-500"> Driver Mobile</p>
                  <p className="font-semibold text-gray-800">N/A</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <CalendarCheck className="text-green-600 mt-0.5" />

                <div>
                  {" "}
                  <p className="text-xs text-gray-500"> Permit Generated</p>
                  <p className="font-semibold text-gray-800">
                    29 May 2026 11:00 AM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CalendarX className="text-red-600 mt-0.5" />

                <div>
                  {" "}
                  <p className="text-xs text-gray-500"> Permit Expiry</p>
                  <p className="font-semibold text-gray-800">
                    29 MAy 2026, 02:41 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <Upload className="text-blue-600 mt-0.5 size-12" />

                <div>
                  {" "}
                  <p className="text-xs text-gray-500"> Sending Unit</p>
                  <p className="font-semibold text-gray-800">
                    {" "}
                    Vindhyachal Disttileries pvt Ltd. (CS-1B) village Pilukhedi,
                    tehsil Narsingarh District Rajgarh, Madhya Pradesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Download className="text-purple-600 mt-0.5" />

                <div>
                  {" "}
                  <p className="text-xs text-gray-500"> Receiving Unit</p>
                  <p className="font-semibold text-gray-800">
                    Cs Warehouse, Bhopal. Distt-Bhopal, Madhaya Pradesh
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <Microchip className="text-orange-600 mt-0.5" />

                <div>
                  {" "}
                  <p className="text-xs text-gray-500"> Device IMEI</p>
                  <p className="font-semibold text-gray-800">7581295557</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Lock className="text-green-600 mt-0.5" />

                <div>
                  {" "}
                  <p className="text-xs text-gray-500"> Current Lock Status</p>
                  <p className="font-semibold text-gray-800">Lock</p>
                </div>
              </div>
            </div>
          </div>

          {/* hope Summary */}

          <div className="bg-white rounded-2xl shadow p-4">
            <div className="grid grid-cols-3 text-center">
              <div>
                {" "}
                <p className="text-xs text-gray-500"> Total Hops</p>
                <p className="text-lg font-bold text-indigo-600">8</p>
              </div>
              <div>
                {" "}
                <p className="text-xs text-gray-500"> Covered</p>
                <p className="text-lg font-bold text-green-600">4</p>
              </div>

              <div>
                {" "}
                <p className="text-xs text-gray-500"> Pending</p>
                <p className="text-lg font-bold text-red-600">8</p>
              </div>
            </div>

            <div className="mt-3">
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-green-500 rounded-full w-[50%]"></div>
              </div>
              <p className="text-xs text-gray-500 mt-1 text-right">
                {" "}
                50% Complated
              </p>
            </div>
          </div>

          {/* tab container */}

          <div className="bg-white rounded-2xl shadow flex flex-col h-full">
            {/* Tab header */}
            <div className="flex text-sm font-medium border-b border-gray-300">
              <button className="flex-1 py-2 flex items-center justify-center gap-2 border-indigo-600 text-indigo-600 border-b-2">
                <Route />
                Status
              </button>

              <button className="flex-1 py-2 flex items-center justify-center gap-2  text-gray-500">
                <PackageOpen />
                Consignment
              </button>

              <button className="flex-1 py-2 flex items-center justify-center gap-2  text-gray-500">
                <Road />
                Toll Plazz
              </button>

              <button className="flex-1 py-2 flex items-center justify-center gap-2  text-gray-500">
                <Lock />
                Toll Plazz
              </button>
            </div>
            <div className="flex overflow-y-auto p-3 custom-scroll">
              <div className="gap-3">
                <div className="border  border-gray-300 rounded-xl p-3 text-sm">
                  <div className="flex justify-between items-center ">
                    <p className="font-medium text-gray-800 flex items-center gap-2">
                      <CircleCheck className="text-green-500 size-13" />
                      VINDHYACHAL DISTTILLERIES PVT. LTD. (CS-1B) VILLAGE
                      PILUKHEDI. TEHSIL NARSINGARH DICTRICT RAJGARH, MADHAYA
                      PRADESH{" "}
                      <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-700">
                        {" "}
                        Crossed
                      </span>
                    </p>
                  </div>
                  <p className=" text-xs text-gray-500 mt-1 ml-7">
                    {" "}
                    29 May 2026, 11:17 AM
                  </p>
                </div>

                <div className="border  border-green-500 bg-green-50 rounded-xl p-3 text-sm mt-3">
                  <div className="flex justify-between items-center ">
                    <p className="font-medium text-gray-800 flex items-center gap-2">
                      <Send className="text-green-500 size-13" />
                      VINDHYACHAL DISTTILLERIES PVT. LTD. (CS-1B) VILLAGE
                      PILUKHEDI. TEHSIL NARSINGARH DICTRICT RAJGARH, MADHAYA
                      PRADESH{" "}
                      <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-700">
                        {" "}
                        Crossed
                      </span>
                    </p>
                  </div>
                  <p className=" text-xs text-gray-500 mt-1 ml-7">
                    {" "}
                    29 May 2026, 11:17 AM
                  </p>
                </div>

                <div className="border  border-gray-300 rounded-xl p-3 text-sm mt-3">
                  <div className="flex justify-between items-center ">
                    <p className="font-medium text-gray-800 flex items-center gap-2">
                      <Clock className="text-gray-500  size-5" />
                      MADHAYA PRADESH BHOPAL HANDHI NAGAR{" "}
                      <span className="px-2 py-0.5 text-xs rounded-full bg-red-100 text-red-700 ml-7">
                        {" "}
                        Pending
                      </span>
                    </p>
                  </div>
                  <p className=" text-xs text-gray-500 mt-1 ml-7">
                    {" "}
                    29 May 2026, 11:17 AM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* MAP SECTION */}
        <div className="xl:col-span-8 xl:sticky xl:top-4">
          <div id="map" className="w-full h-[60vh] sm:h-[70vh] xl:h-[85vh] rounded-2xl shadow border leaflet-conainer leflet-touch leflet-fade-anim leaflet-gray leaflet-touch-drag leaflate-touch-zoom">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm overflow-hidden h-[700px]">
          <MapContainer
            center={[23.2599, 77.4126]}
            zoom={8}
            scrollWheelZoom={true}
            className="h-full w-full z-0"
          >
            {/* MAP LAYER */}

            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* ROUTE LINE */}

            <Polyline
              positions={positions}
              pathOptions={{
                color: "blue",
                weight: 5,
              }}
            />

            {/* MARKERS */}

            {positions.map((pos, index) => (
              <Marker key={index} position={pos} icon={vehicleIcon}>
                <Popup>Vehicle Point {index + 1}</Popup>
              </Marker>
            ))}

            {/* CIRCLES */}

            {positions.map((pos, index) => (
              <Circle
                key={index}
                center={pos}
                radius={10000}
                pathOptions={{
                  color: "green",
                  fillColor: "green",
                  fillOpacity: 0.1,
                }}
              />
            ))}
          </MapContainer>
        </div>
        </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default VtsElockId;
