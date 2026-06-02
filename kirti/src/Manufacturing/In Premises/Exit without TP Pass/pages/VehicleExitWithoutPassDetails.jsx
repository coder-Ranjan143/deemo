// pages/VehicleDetails.jsx

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import VehicleData from "../data/VehicleData";

function VehicleExitWithoutPassDetails() {
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
            <p className="font-semibold">DistilleryInfo</p>
            <p>{vehicle.distilleryInfo}</p>
          </div>

          <div>
            <p className="font-semibold">VehicleNo</p>
            <p>{vehicle.vehicleNo}</p>
          </div>

          <div>
            <p className="font-semibold">Purpose</p>
            <p>{vehicle.pepose}</p>
          </div>

          <div>
            <p className="font-semibold">Entry</p>
            <p>{vehicle.entry}</p>
          </div>

          <div>
            <p className="font-semibold">Event</p>
            <p>{vehicle.event}</p>
          </div>

          <div>
            <p className="font-semibold">Exit</p>
            <p className="text-red-500">{vehicle.exit}</p>
          </div>

          <div className="col-span-2">
            <p className="font-semibold"> Status</p>
            <p>{vehicle.status}</p>
          </div>

          <div>
            <p className="font-semibold">Created At</p>
            <p>{vehicle.createdAt}</p>
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

export default VehicleExitWithoutPassDetails;