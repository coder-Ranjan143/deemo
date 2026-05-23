import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Non_permitted from "./Pages3/Non_permitted.jsx";
import VehicleDetails from "./Pages3/VehicleDetails.jsx";
import UnauthorizedVehiclePage from "./filt_export/pages/UnauthorizedVehiclePage.jsx";
import UnauthorizedVehicle from "./filt_export/pages/UnauthorizedVehicle.jsx";
import UnauthorizedVehicle5 from "./Card5/pages/UnauthorizedVehicle5.jsx";
import UnauthorizedVehiclePage5 from "./Card5/pages/UnauthorizedVehiclePage5.jsx";
import UnauthorizedVehicle1 from "./Card1/pages/UnauthorizedVehicle1.jsx";
import UnauthorizedVehiclePage1 from "./Card1/pages/UnauthorizedVehiclePage1.jsx";
import UnauthorizedVehicle3 from "./card3/pages/UnauthorizedVehicle3.jsx";
import UnauthorizedVehiclePage3 from "./card3/pages/UnauthorizedVehiclePage3.jsx";
import UnauthorizedVehicle4 from "./Card4/pages/UnauthorizedVehicle4.jsx";
import UnauthorizedVehiclePage4 from "./Card4/pages/UnauthorizedvehiclePage4.jsx";
import UnauthorizedVehicle6 from "./Card6/pages/UnauthorizedVehicle6.jsx";
import UnauthorizedVehiclePage6 from "./Card6/pages/UnauthorizedvehiclePage6.jsx";
import Dis_Camera from "./Camera/pages/Dis_Camera.jsx";
import Dis_Camera_page from "./Camera/pages/Dis_Camera_page.jsx";
import { Camera } from "lucide-react";
import CameraDetails from "./Camera/pages/CameraDetails.jsx";
import Gpstrack from "./GPS/pages/gpstrack.jsx";
import GpstrackPage from "./GPS/pages/GpstrackPage.jsx";
import GpsDetails from "./GPS/pages/GpsDetails.jsx";
import VehicleMovement from "./Vehicle_Movement/pages/VehicleMovement.jsx";
import VehicleMovementPage from "./Vehicle_Movement/pages/VehicleMovementPage.jsx";
import VehicleMovementDetails from "./Vehicle_Movement/pages/VehicleMovementDetails.jsx";
import AlertTablePage from "./Alert_Escalation_Mngt/Total_Alert/pages/AlertTablePage.jsx";
import AlertHeader from "./Alert_Escalation_Mngt/Total_Alert/pages/AlertHeader.jsx";
import AlertDetails from "./Alert_Escalation_Mngt/Total_Alert/pages/AlertDetails.jsx";



function App() {
  return (


    <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<Non_permitted />} />
        <Route
          path="/vehicle/:id"
          element={<VehicleDetails />}
        />
      </Routes> */}



      {/* Card1 */}

      {/* <UnauthorizedVehiclePage1/>
      <Routes>
        <Route
          path="/"
          element={<UnauthorizedVehicle1 />}
        />
        <Route
          path="/details/:id"
          element={<VehicleDetails />}
        />
      </Routes> */}

      
      {/* Card3 */}

      {/* <UnauthorizedVehiclePage3/>
      <Routes>
        <Route
          path="/"
          element={<UnauthorizedVehicle3 />}
        />
        <Route
          path="/details/:id"
          element={<VehicleDetails />}
        />
      </Routes> */}


      {/* Card4 */}

      {/* <UnauthorizedVehiclePage4/>
      <Routes>
        <Route
          path="/"
          element={<UnauthorizedVehicle4 />}
        />
        <Route
          path="/details/:id"
          element={<VehicleDetails />}
        />
      </Routes> */}



      {/* Card5 */}
    
      {/* <UnauthorizedVehiclePage5/>
      <Routes>
        <Route
          path="/"
          element={<UnauthorizedVehicle5 />}
        />
        <Route
          path="/details/:id"
          element={<VehicleDetails />}
        />
      </Routes> */}



      {/* Card6 */}

      {/* <UnauthorizedVehiclePage6/>
      <Routes>
        <Route
          path="/"
          element={<UnauthorizedVehicle6 />}
        />
        <Route
          path="/details/:id"
          element={<VehicleDetails />}
        />
      </Routes> */}




        {/* Camera */}

      {/* <Dis_Camera_page/>
      <Routes>
        <Route
          path="/"
          element={<Dis_Camera />}
        />
        <Route
          path="/details/:id"
          element={<CameraDetails />}
        />
      </Routes> */}



         {/* GPS */}

      {/* <GpstrackPage/>
      <Routes>
        <Route
          path="/"
          element={<Gpstrack />}
        />
        <Route
          path="/details/:id"
          element={<GpsDetails />}
        />
      </Routes> */}




       {/* Vehicle Movement */}

      {/* <VehicleMovementPage/>
      <Routes>
        <Route
          path="/"
          element={<VehicleMovement />}
        />
        <Route
          path="/details/:id"
          element={<VehicleMovementDetails />}
        />
      </Routes> */}




      {/* Vehicle Movement */}


      <AlertHeader/>
      <Routes>
        <Route
          path="/"
          element={<AlertTablePage />}
        />
        <Route
          path="/details/:id"
          element={<AlertDetails />}
        />
      </Routes>




      
    </BrowserRouter>
    
   
   

  );
}

export default App;