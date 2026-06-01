// pages/VehicleDetails.jsx

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import VehicleData from "../data/VehicleData";

function VehicleNotFoundDetails() {
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
            <p className="font-semibold">Unit Type</p>
            <p>{vehicle.unitType}</p>
          </div>

          <div>
            <p className="font-semibold">Distillery Name</p>
            <p>{vehicle.distilleryName}</p>
          </div>

          <div>
            <p className="font-semibold">Tp Type</p>
            <p>{vehicle.tpType}</p>
          </div>

          <div>
            <p className="font-semibold">Tp No</p>
            <p>{vehicle.tpNo}</p>
          </div>

          <div>
            <p className="font-semibold">Permit Generate</p>
            <p>{vehicle.permitgen}</p>
          </div>

          <div>
            <p className="font-semibold">Permit Exp.</p>
            <p className="text-red-500">{vehicle.permitExp}</p>
          </div>

          <div className="col-span-2">
            <p className="font-semibold">Vehicle No</p>
            <p>{vehicle.vehicleNo}</p>
          </div>

          <div className="col-span-2">
            <p className="font-semibold">Status</p>
            <p>{vehicle.status}</p>
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

export default VehicleNotFoundDetails;