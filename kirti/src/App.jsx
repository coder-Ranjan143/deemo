import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UnauthorizedVehicle from "./Pages2/UnauthorizedVehicle.jsx";
import VehicleDetails from "./Pages2/VehicleDetails.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UnauthorizedVehicle />} />

        <Route
          path="/vehicle/:id"
          element={<VehicleDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;