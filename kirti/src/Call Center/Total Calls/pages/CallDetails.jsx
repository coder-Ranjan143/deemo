// pages/VehicleDetails.jsx

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import CallData from "../data/CallData";

function CallDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const vehicle = CallData.find(
    (item) => item.id === Number(id)
  );

  if (!vehicle) {
    return (
      <div className="p-10 text-center text-red-500">
        Call List Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-[#7b1028]">
          Call Details
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="font-semibold">Caller Type:</p>
            <p>{vehicle.callerType}</p>
          </div>

          <div>
            <p className="font-semibold">Name</p>
            <p>{vehicle.name}</p>
          </div>

          <div>
            <p className="font-semibold">Mobile</p>
            <p>{vehicle.mobile}</p>
          </div>

          <div>
            <p className="font-semibold">Description</p>
            <p>{vehicle.description}</p>
          </div>

          <div>
            <p className="font-semibold">Location</p>
            <p>{vehicle.location}</p>
          </div>

          <div>
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

export default CallDetails;