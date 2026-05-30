// pages/VehicleDetails.jsx

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import VehicleData from "../data/VehicleData";

function VehicleRunningWithPassDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const vehicle = VehicleData.find(
    (item) => item.id === Number(id)
  );

  if (!vehicle) {
    return (
      <div className="p-10 text-center text-red-500">
        Vehicle Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-[#7b1028]">
          Vehicle Details
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="font-semibold">Trip Id</p>
            <p>{vehicle.tripid}</p>
          </div>

          <div>
            <p className="font-semibold">VehicleNo</p>
            <p>{vehicle.vehicleNo}</p>
          </div>

          <div>
            <p className="font-semibold">TP Number</p>
            <p>{vehicle.tpno}</p>
          </div>

          <div>
            <p className="font-semibold">Permit Generated Time</p>
            <p>{vehicle.permitGenerateTime}</p>
          </div>

          <div>
            <p className="font-semibold">Permit Validity Time</p>
            <p>{vehicle.permitvalidityTime}</p>
          </div>

          <div>
            <p className="font-semibold">Driver Name</p>
            <p className="text-red-500">{vehicle.drivername}</p>
          </div>

        </div>

        <button
          onClick={() => navigate(-1)}
          className="mt-8 bg-[#7b1028] text-white px-6 py-2 rounded-lg"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default VehicleRunningWithPassDetails;