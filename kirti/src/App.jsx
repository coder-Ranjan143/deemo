import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import VehicleExitDetails from "./Manufacturing/In Premises/Vehicle Exit/pages/VehicleExitDetails.jsx";
import VehicleExitMain from "./Manufacturing/In Premises/Vehicle Exit/pages/VehicleExitMain.jsx";
import VehicleExitPage from "./Manufacturing/In Premises/Vehicle Exit/pages/VehicleExitPage.jsx";
import VehicleExitWithVTPPDetails from "./Manufacturing/In Premises/Exit with Valid Tp Pass/pages/VehicleExitWithVTPPDetails.jsx";
import VehicleExitWithVTPPMain from "./Manufacturing/In Premises/Exit with Valid Tp Pass/pages/VehicleExitWithVTPPMain.jsx";
import VehicleExitWithVTPPPage from "./Manufacturing/In Premises/Exit with Valid Tp Pass/pages/VehicleExitWithVTPPPage.jsx";
import VehicleExitWithoutPassDetails from "./Manufacturing/In Premises/Exit without TP Pass/pages/VehicleExitWithoutPassDetails.jsx";
import VehicleExitWithoutPassPMain from "./Manufacturing/In Premises/Exit without TP Pass/pages/VehicleExitWithoutPassMain.jsx";
import VehicleExitWithoutPassPage from "./Manufacturing/In Premises/Exit without TP Pass/pages/VehicleExitWithoutPassPage.jsx";
import VehicleRunningWithPassDetails from "./Manufacturing/In_Transit/Plant_Summery/VehicleRunnigWithVTPPass/pages/VehicleRunningWithPassDetails.jsx";
import VehicleRunnigWithPassPage from "./Manufacturing/In_Transit/Plant_Summery/VehicleRunnigWithVTPPass/pages/VehicleRunningWithPassPage.jsx";
import VehicleRunningWithPassMain from "./Manufacturing/In_Transit/Plant_Summery/VehicleRunnigWithVTPPass/pages/VehicleRunningWithPassMain.jsx";
import VehicleRunnigExpirePassPage from "./Manufacturing/In_Transit/Plant_Summery/VehicleRunnigWithExpiredPass/pages/VehicleRunningExpirePassPage.jsx";
import VehicleRunningExpirePassDetails from "./Manufacturing/In_Transit/Plant_Summery/VehicleRunnigWithExpiredPass/pages/VehicleRunningExpireTPPassDetails.jsx";
import VehicleRunningExpirePassMain from "./Manufacturing/In_Transit/Plant_Summery/VehicleRunnigWithExpiredPass/pages/VehicleRunningExpirePassMain.jsx";
import VehicleTPPassPage from "./Manufacturing/In_Transit/Plant_Summery/TP_PassGenerated/pages/VehicleTPPassPage.jsx";
import VehicleTPPassMain from "./Manufacturing/In_Transit/Plant_Summery/TP_PassGenerated/pages/VehicleTPPassMain.jsx";
import VehicleTPPassDetails from "./Manufacturing/In_Transit/Plant_Summery/TP_PassGenerated/pages/VehicleTPPassDetails.jsx";
import Vehicle_In_Transit from "./Manufacturing/In_Transit/Vehicle_In_Transit/pages/Vehicle_In_Transit.jsx";
import VehicleTPPassVTSDetails from "./VTS/Tp_Pass_Summery/Active_Tp_Pass/pages/VehicleTPPassVTSDetails.jsx";
import VehicleTPPassVTSMain from "./VTS/Tp_Pass_Summery/Active_Tp_Pass/pages/VehicleTPPassVTSMain.jsx";
import VehicleTPPassVTSPage from "./VTS/Tp_Pass_Summery/Active_Tp_Pass/pages/VehicleTPPassVTSPage.jsx";
import VehicleCloseTPPassDetails from "./VTS/Tp_Pass_Summery/Closed_Tp_Pass/pages/VehicleCloseTPPassDetails.jsx";
import VehicleCloseTPPassMain from "./VTS/Tp_Pass_Summery/Closed_Tp_Pass/pages/VehicleCloseTPPassMain.jsx";
import VehicleCloseTPPassPage from "./VTS/Tp_Pass_Summery/Closed_Tp_Pass/pages/VehicleCloseTPPassPage.jsx";
import VehicleExpireTPPassMain from "./VTS/Tp_Pass_Summery/Expired_and_Still_Open/pages/VehicleExpireTPPassMain.jsx";
import VehicleExpireTPPassPage from "./VTS/Tp_Pass_Summery/Expired_and_Still_Open/pages/VehicleExpireTPPassPage.jsx";
import VehicleExpire_StillTPPassDetails from "./VTS/Tp_Pass_Summery/Expired_and_Still_Open/pages/VehicleExpire_StillTPPassDetails.jsx";
import VehicleTotalTPPassDetails from "./VTS/Tp_Pass_Summery/Total_Tp_Pass/pages/VehicleTotalTPPassDetails.jsx";
import VehicleTotalTPPassMain from "./VTS/Tp_Pass_Summery/Total_Tp_Pass/pages/VehicleTotalTPPassMain.jsx";
import VehicleTotalTPPassPage from "./VTS/Tp_Pass_Summery/Total_Tp_Pass/pages/VehicleTotalTPPassPage.jsx";
import VehicleDelayDetails from "./Operator/Vehicle_delayed/pages/VehicleDelayDetails.jsx";
import VehicleDelayPage from "./Operator/Vehicle_delayed/pages/VehicleDelayPage.jsx";
import VehicleDelayMain from "./Operator/Vehicle_delayed/pages/VehicleDelayMain.jsx";
import VehicleUnreachedDetails from "./Operator/Vehicle_Unreached/pages/VehicleUnreachedDetails.jsx";
import VehicleUnreachedPage from "./Operator/Vehicle_Unreached/pages/VehicleUnreachedPage.jsx";
import VehicleUnreachedMain from "./Operator/Vehicle_Unreached/pages/VehicleUnreachedMain.jsx";
import VehicleRouteDeviationDetails from "./Operator/Vehicle_Deviation/pages/VehicleRouteDeviationDetails.jsx";
import VehicleRouteDeviationPage from "./Operator/Vehicle_Deviation/pages/VehicleRouteDeviationPage.jsx";
import VehicleRouteDeviationMain from "./Operator/Vehicle_Deviation/pages/VehicleRouteDeviationMain.jsx";
import VehiclePurposeDetails from "./Operator/Vehicle_Purpose_Miss_Match/pages/VehiclePurposeDetails.jsx";
import VehiclePurposeMain from "./Operator/Vehicle_Purpose_Miss_Match/pages/VehiclePurposeMain.jsx";
import VehiclePurposePage from "./Operator/Vehicle_Purpose_Miss_Match/pages/VehiclePurposePage.jsx";
import VehicleNotFoundDetails from "./Operator/GPS_Elock Missing/pages/VehicleNotFoundDetails.jsx";
import VehicleNotFoundMain from "./Operator/GPS_Elock Missing/pages/VehicleNotFoundMain.jsx";
import VehicleNotFoundPage from "./Operator/GPS_Elock Missing/pages/VehicleNotFoundPage.jsx";
import TotalCamera from "./Administrator/Total_Camera/pages/TotalCamera.jsx";
import TotalCameraDetails from "./Administrator/Total_Camera/pages/TotalCameraDetails.jsx";
import TotalCamera_page from "./Administrator/Total_Camera/pages/TotalCamera_page.jsx";
import DownTimeCamera from "./Administrator/Down_Time_Summery/pages/DownTimeCamera.jsx";
import DownTimeCameraDetails from "./Administrator/Down_Time_Summery/pages/DownTimeCameraDetails.jsx";
import DownTimeCamera_page from "./Administrator/Down_Time_Summery/pages/DownTimeCamera_page.jsx";

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

      {/* <VehicleEntryPage/>
      <Routes>
        <Route
          path="/"
          element={<VehicleEntryMain />}
        />
        <Route
          path="/details/:id"
          element={<VehicleEntryDetails />}
        />
      </Routes> */}
      
{/* Vehicle Exit */}

      {/* <VehicleExitPage/>
      <Routes>
        <Route
          path="/"
          element={<VehicleExitMain />}
        />
        <Route
          path="/details/:id"
          element={<VehicleExitDetails />}
        />
      </Routes> */}

{/* Vehicle Exit With Valid TP pass */}

      {/* <VehicleExitWithVTPPPage/>
      <Routes>
        <Route
          path="/"
          element={<VehicleExitWithVTPPMain />}
        />
        <Route
          path="/details/:id"
          element={<VehicleExitWithVTPPDetails />}
        />
      </Routes> */}


{/* Vehicle Exit Without Valid TP pass */}

      {/* <VehicleExitWithoutPassPage/>
      <Routes>
        <Route
          path="/"
          element={<VehicleExitWithoutPassPMain />}
        />
        <Route
          path="/details/:id"
          element={<VehicleExitWithoutPassDetails />}
        />
      </Routes> */}

{/* Vehicle Exit Without Valid TP pass */}

      {/* <VehicleRunnigWithPassPage/>
      <Routes>
        <Route
          path="/"
          element={<VehicleRunningWithPassMain />}
        />
        <Route
          path="/details/:id"
          element={<VehicleRunningWithPassDetails />}
        />
      </Routes> */}

{/* Vehicle Exit Without Valid TP pass */}

      {/* <VehicleRunnigExpirePassPage/>
      <Routes>
        <Route
          path="/"
          element={<VehicleRunningExpirePassMain />}
        />
        <Route
          path="/details/:id"
          element={<VehicleRunningExpirePassDetails />}
        />
      </Routes> */}

{/* TP Pass Generated */}

      {/* <VehicleTPPassPage/>
      <Routes>
        <Route
          path="/"
          element={<VehicleTPPassMain />}
        />
        <Route
          path="/details/:id"
          element={<VehicleTPPassDetails />}
        />
      </Routes> */}

{/* TP Pass Generated */}

        {/* <Vehicle_In_Transit/> */}

{/* Active TP Pass */}   

        {/* <VehicleTPPassVTSPage/>
      <Routes>
        <Route
          path="/"
          element={<VehicleTPPassVTSMain />}
        />
        <Route
          path="/details/:id"
          element={<VehicleTPPassVTSDetails />}
        />
      </Routes> */}

{/* Closed TP Pass */}   

        {/* <VehicleCloseTPPassPage/>
      <Routes>
        <Route
          path="/"
          element={<VehicleCloseTPPassMain />}
        />
        <Route
          path="/details/:id"
          element={<VehicleCloseTPPassDetails />}
        />
      </Routes>       */}

{/* Expire & Still TP Pass */}   

      {/* <VehicleExpireTPPassPage/>
      <Routes>
        <Route
          path="/"
          element={<VehicleExpireTPPassMain />}
        />
        <Route
          path="/details/:id"
          element={<VehicleExpire_StillTPPassDetails />}
        />
      </Routes>   */}

{/* Expire & Still TP Pass */}   

        {/* <VehicleTotalTPPassPage/>
      <Routes>
        <Route
          path="/"
          element={<VehicleTotalTPPassMain />}
        />
        <Route
          path="/details/:id"
          element={<VehicleTotalTPPassDetails />}
        />
      </Routes>   */}


{/* Vehicle Delayed */}   

      {/* <VehicleDelayPage/>
      <Routes>
        <Route
          path="/"
          element={<VehicleDelayMain />}
        />
        <Route
          path="/details/:id"
          element={<VehicleDelayDetails />}
        />
      </Routes>   */}

{/* Vehicle Unreached */}   

      {/* <VehicleUnreachedPage/>
      <Routes>
        <Route
          path="/"
          element={<VehicleUnreachedMain />}
        />
        <Route
          path="/details/:id"
          element={<VehicleUnreachedDetails />}
        />
      </Routes>  */}

{/* Vehicle Route Deviation */}   

      {/* <VehicleRouteDeviationPage/>
      <Routes>
        <Route
          path="/"
          element={<VehicleRouteDeviationMain />}
        />
        <Route
          path="/details/:id"
          element={<VehicleRouteDeviationDetails />}
        />
      </Routes>  */}

{/* Vehicle Purpose */}   

      {/* <VehiclePurposePage/>
      <Routes>
        <Route
          path="/"
          element={<VehiclePurposeMain />}
        />
        <Route
          path="/details/:id"
          element={<VehiclePurposeDetails />}
        />
      </Routes>  */}

{/* Vehicle Not Found In GPS */}   

      {/* <VehicleNotFoundPage/>
      <Routes>
        <Route
          path="/"
          element={<VehicleNotFoundMain />}
        />
        <Route
          path="/details/:id"
          element={<VehicleNotFoundDetails />}
        />
      </Routes>       */}

 {/* Total Cameras */}   

      {/* <TotalCamera_page/>
      <Routes>
        <Route
          path="/"
          element={<TotalCamera />}
        />
        <Route
          path="/details/:id"
          element={<TotalCameraDetails />}
        />
      </Routes> */}

 {/* Down Time Summary */}   

      <DownTimeCamera_page/>
      <Routes>
        <Route
          path="/"
          element={<DownTimeCamera />}
        />
        <Route
          path="/details/:id"
          element={<DownTimeCameraDetails />}
        />
      </Routes>      

    </BrowserRouter>
   

  );
}

export default App;