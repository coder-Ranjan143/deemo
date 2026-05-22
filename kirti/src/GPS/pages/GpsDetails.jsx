// pages/VehicleDetails.jsx

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import GpsData from "../data/GpsData";

function GpsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const gps = GpsData.find(
    (item) => item.id === Number(id)
  );

  if (!gps) {
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
            <p className="font-semibold">Distellery</p>
            <p>{gps.distillery}</p>
          </div>

          <div>
            <p className="font-semibold">Date</p>
            <p>{gps.date}</p>
          </div>

          <div>
            <p className="font-semibold">Total Issued TP Pass</p>
            <p>{gps.totalIssuedTPpass}</p>
          </div>

          <div>
            <p className="font-semibold">Total Matched Tp Pass</p>
            <p>{gps.totalMatchTPpass}</p>
          </div>

          <div>
            <p className="font-semibold">Deviation of matched TP Pass</p>
            <p>{gps.deviationOfMatchTPpass}</p>
          </div>

          <div>
            <p className="font-semibold">Match %</p>
            <p>{gps.match}</p>
          </div>
          <div>
            <p className="font-semibold">Deviation %</p>
            <p>{gps.deviation}</p>
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

export default GpsDetails;