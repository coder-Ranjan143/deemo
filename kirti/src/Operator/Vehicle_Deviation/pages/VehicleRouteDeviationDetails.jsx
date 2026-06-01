// pages/VehicleDetails.jsx

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import VehicleData from "../data/VehicleData";

function VehicleRouteDeviationDetails() {
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
            <p className="font-semibold">Alert No</p>
            <p>{vehicle.alertNo}</p>
          </div>

          <div>
            <p className="font-semibold">Distillery</p>
            <p>{vehicle.distilleryName}</p>
          </div>

          <div>
            <p className="font-semibold">Tp Pass</p>
            <p>{vehicle.tpPassNo}</p>
          </div>

          <div>
            <p className="font-semibold">Vehicle No</p>
            <p>{vehicle.vehicleNo}</p>
          </div>

          <div>
            <p className="font-semibold">Sending Unit</p>
            <p>{vehicle.sendingUnit}</p>
          </div>

          <div>
            <p className="font-semibold">Receiving Unit</p>
            <p className="text-red-500">{vehicle.receivingUnit}</p>
          </div>

          <div className="col-span-2">
            <p className="font-semibold">Description</p>
            <p>{vehicle.description}</p>
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

export default VehicleRouteDeviationDetails;