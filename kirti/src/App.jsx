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
import EscalateAlertDetails from "./Alert_Escalation_Mngt/Escalted/pages/EscalateAlertDetails.jsx";
import EscalateAlertHeader from "./Alert_Escalation_Mngt/Escalted/pages/EscalateAlertHeader.jsx";
import EscalateAlertTablePage from "./Alert_Escalation_Mngt/Escalted/pages/EscalateAlertTablePage.jsx";
import ResolveAlertDetails from "./Alert_Escalation_Mngt/Resolved/pages/ResolveAlertDetails.jsx";
import ResolveAlertHeader from "./Alert_Escalation_Mngt/Resolved/pages/ResolveAlertHeader.jsx";
import ResolveAlertTablePage from "./Alert_Escalation_Mngt/Resolved/pages/ResolveAlertTablePage.jsx";
import PendingAlertDetails from "./Alert_Escalation_Mngt/Pending_Alert/pages/PendingAlertDetails.jsx";
import PendingAlertHeader from "./Alert_Escalation_Mngt/Pending_Alert/pages/PendingAlertHeader.jsx";
import PendingAlertTablePage from "./Alert_Escalation_Mngt/Pending_Alert/pages/PendingAlertTablePage.jsx";
import CallDetails from "./Call Center/Total Calls/pages/CallDetails.jsx";
import Call_center_Main from "./Call Center/Total Calls/pages/Call_center_Main.jsx";
import CallCenterPage from "./Call Center/Total Calls/pages/CallCenterPage.jsx";
import ResolveCallCenterPage from "./Call Center/Resolved/pages/ResolveCallCenterPage.jsx";
import ResolveCallDetails from "./Call Center/Resolved/pages/ResolveCallDetails.jsx";
import ResolveCall_center_Main from "./Call Center/Resolved/pages/ResolveCall_center_Main.jsx";
import PendingCallCenterPage from "./Call Center/Pending/pages/PendingCallCenterPage.jsx";
import PendingCallDetails from "./Call Center/Pending/pages/PendingCallDetails.jsx";
import PendingCall_center_Main from "./Call Center/Pending/pages/PendingCall_center_Main.jsx";
import AvgCallCenterPage from "./Call Center/Avg_Handle_Time/pages/AvgCallCenterPage.jsx";
import AvgCallDetails from "./Call Center/Avg_Handle_Time/pages/AvgCallDetails.jsx";
import AvgCall_center_Main from "./Call Center/Avg_Handle_Time/pages/AvgCall_center_Main.jsx";
import RecentCallLog from "./Call Center/Recent Call Logs/pages/RecentCallLog.jsx";
import VehicleCaptureDetails from "./Manufacturing/In Premises/Total Vahicle Capture(ANPR)/pages/VehicleCaptureDetails.jsx";
import VehicleCaptureMain from "./Manufacturing/In Premises/Total Vahicle Capture(ANPR)/pages/VehicleCaptureMain.jsx";
import VehicleCapturePage from "./Manufacturing/In Premises/Total Vahicle Capture(ANPR)/pages/VehicleCapturePage.jsx";
import VehicleEntryDetails from "./Manufacturing/In Premises/Vehicle Enter/pages/VehicleEntryDetails.jsx";
import VehicleEntryMain from "./Manufacturing/In Premises/Vehicle Enter/pages/VehicleEntryMain.jsx";
import VehicleEntryPage from "./Manufacturing/In Premises/Vehicle Enter/pages/VehicleEntryPage.jsx";


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


      {/* Total Alert */}


      {/* <AlertHeader/>
      <Routes>
        <Route
          path="/"
          element={<AlertTablePage />}
        />
        <Route
          path="/details/:id"
          element={<AlertDetails />}
        />
      </Routes> */}


        {/* Escalated Alert */}

      {/* <EscalateAlertHeader/>
      <Routes>
        <Route
          path="/"
          element={<EscalateAlertTablePage />}
        />
        <Route
          path="/details/:id"
          element={<EscalateAlertDetails />}
        />
      </Routes> */}


        {/* Resolve Alert */}

      {/* <ResolveAlertHeader/>
      <Routes>
        <Route
          path="/"
          element={<ResolveAlertTablePage />}
        />
        <Route
          path="/details/:id"
          element={<ResolveAlertDetails />}
        />
      </Routes> */}

{/* Pending Alert */}

      {/* <PendingAlertHeader/>
      <Routes>
        <Route
          path="/"
          element={<PendingAlertTablePage />}
        />
        <Route
          path="/details/:id"
          element={<PendingAlertDetails />}
        />
      </Routes> */}

{/* Caller List */}

      {/* <CallCenterPage/>
      <Routes>
        <Route
          path="/"
          element={<Call_center_Main />}
        />
        <Route
          path="/details/:id"
          element={<CallDetails />}
        />
      </Routes> */}


{/* Resolve Call list */}

      {/* <ResolveCallCenterPage/>
      <Routes>
        <Route
          path="/"
          element={<ResolveCall_center_Main />}
        />
        <Route
          path="/details/:id"
          element={<ResolveCallDetails />}
        />
      </Routes> */}

{/* pending Call list */}

      {/* <PendingCallCenterPage/>
      <Routes>
        <Route
          path="/"
          element={<PendingCall_center_Main />}
        />
        <Route
          path="/details/:id"
          element={<PendingCallDetails />}
        />
      </Routes> */}

{/* Avg Call list */}

      {/* <AvgCallCenterPage/>
      <Routes>
        <Route
          path="/"
          element={<AvgCall_center_Main />}
        />
        <Route
          path="/details/:id"
          element={<AvgCallDetails />}
        />
      </Routes> */}

{/* Resolve Alert */}

      {/* <RecentCallLog/> */}


{/* Vehicle Cature(ANPR) Alert */}

      {/* <VehicleCapturePage/>
      <Routes>
        <Route
          path="/"
          element={<VehicleCaptureMain />}
        />
        <Route
          path="/details/:id"
          element={<VehicleCaptureDetails />}
        />
      </Routes> */}


{/* Vehicle Cature(ANPR) Alert */}

      <VehicleEntryPage/>
      <Routes>
        <Route
          path="/"
          element={<VehicleEntryMain />}
        />
        <Route
          path="/details/:id"
          element={<VehicleEntryDetails />}
        />
      </Routes>
      
    </BrowserRouter>
    
   
   

  );
}

export default App;