// pages/VehicleDetails.jsx

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import CameraData from "../data/CameraData";

function DownTimeCameraDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const vehicle = CameraData.find(
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
          Camera Details
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="font-semibold">Unit Name:</p>
            <p>{vehicle.unitName}</p>
          </div>

          <div>
            <p className="font-semibold">Distilary Name:</p>
            <p>{vehicle.distilleryName}</p>
          </div>

          <div>
            <p className="font-semibold">Camera Name:</p>
            <p>{vehicle.cameraName}</p>
          </div>

          <div>
            <p className="font-semibold">criticality:</p>
            <p>{vehicle.criticality}</p>
          </div>

          <div>
            <p className="font-semibold">Down Count:</p>
            <p>{vehicle.downCount}</p>
          </div>

          <div>
            <p className="font-semibold">Total Down count:</p>
            <p>{vehicle.totalDownTime}</p>
          </div>

          <div>
            <p className="font-semibold">Max Down count:</p>
            <p>{vehicle.maxDownTime}</p>
          </div>

          <div>
            <p className="font-semibold">Category:</p>
            <p>{vehicle.category}</p>
          </div>

          <div>
            <p className="font-semibold">Last Down At:</p>
            <p>{vehicle.lastDownTown}</p>
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

export default DownTimeCameraDetails;