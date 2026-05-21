import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Non_permitted from "./Pages3/Non_permitted.jsx";
import VehicleDetails from "./Pages3/VehicleDetails.jsx";
import UnauthorizedVehiclePage from "./filt_export/pages/UnauthorizedVehiclePage.jsx";
import UnauthorizedVehicle from "./filt_export/pages/UnauthorizedVehicle.jsx";

function App() {
  return (


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Non_permitted />} />

        <Route
          path="/vehicle/:id"
          element={<VehicleDetails />}
        />


        
      </Routes>


      {/* <UnauthorizedVehiclePage/>
      <Routes>

      
        <Route
          path="/"
          element={<UnauthorizedVehicle />}
        />

    
        <Route
          path="/details/:id"
          element={<VehicleDetails />}
        />

      </Routes> */}

      
      
    </BrowserRouter>
    
   
   

  );
}

export default App;