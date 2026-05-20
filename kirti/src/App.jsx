import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UnauthorizedVehicles from "./Pages2/UnauthorizedVehicles.jsx";
import VehicleDetail from "./Pages2/VehicleDetail.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UnauthorizedVehicles />} />

        <Route
          path="/vehicle/:id"
          element={<VehicleDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;