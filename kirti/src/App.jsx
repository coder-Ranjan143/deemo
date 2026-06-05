import { Routes, Route } from "react-router-dom";

import Home from "./Home.jsx";
import Executive from "./dashbord/executive/Executive.jsx";
import DashboardExcutive from "./dashbord/pages/Excutive.jsx";
import DashboardOperator from "./dashbord/pages/Operator.jsx";
import Administrative from "./dashbord/administrator/Administrative.jsx";
import AdministratorDashboard from "./dashbord/pages/administrator/Administrator_Dashboard.jsx";
import MfgUnit from "./dashbord/executive/pages/MfgUnitComm.jsx";

import AlertMngt from "./analaysis/pages/AlertMngt.jsx";
import AnalysisSummary from "./analaysis/pages/AnalysisSummary.jsx";
import CallCenter from "./analaysis/pages/CallCenter.jsx";
import SopReport from "./analaysis/pages/SopReport.jsx";
import Analysis2 from "./analaysis/pages/Analysis2.jsx";

import TpPassSummary from "./VTS/TpPassSummary.jsx";
import VtsElockId from "./VTS/VtsElockId.jsx";
import VtsElockTrip from "./VTS/VtsElockTrip.jsx";
import VtsgpsTrip from "./VTS/VtsgpsTrip.jsx";
import DocumentMngt from "./documentMngt/DocumentMngt.jsx";

import MfgDistilleries from "./Manufacturing/MfgDistilleries.jsx";
import ManufacturingInPremises from "./Manufacturing/InPremises.jsx";
import ManufacturingInTransit from "./Manufacturing/InTransit.jsx";
import WInPremises from "./warehouse/WInPremises.jsx";
import WarehouseInTransit from "./warehouse/InTransit.jsx";


import ManageUser from "./manageUser/ManageUser.jsx";
import Activity from "./manageUser/Activity.jsx";
import Edit from "./manageUser/Edit.jsx";
import AssignOperator from "./manageUser/AssignOperator.jsx";
import AssignedGroup from "./manageUser/AssignedGroup.jsx";

import UnauthorizedVehicle1 from "./Card1/pages/UnauthorizedVehicle1.jsx";
import UnauthorizedVehicle3 from "./card3/pages/UnauthorizedVehicle3.jsx";
import UnauthorizedVehicle4 from "./Card4/pages/UnauthorizedVehicle4.jsx";
import UnauthorizedVehicle5 from "./Card5/pages/UnauthorizedVehicle5.jsx";
import UnauthorizedVehicle6 from "./Card6/pages/UnauthorizedVehicle6.jsx";

import VehicleDelayMain from "./Operator/Vehicle_delayed/pages/VehicleDelayMain.jsx";
import VehicleRouteDeviationMain from "./Operator/Vehicle_Deviation/pages/VehicleRouteDeviationMain.jsx";
import VehicleUnreachedMain from "./Operator/Vehicle_Unreached/pages/VehicleUnreachedMain.jsx";
import VehiclePurposeMain from "./Operator/Vehicle_Purpose_Miss_Match/pages/VehiclePurposeMain.jsx";
import VehicleNotFoundMain from "./Operator/GPS_Elock Missing/pages/VehicleNotFoundMain.jsx";
import VehicleExitWithoutPassMain from "./Manufacturing/In Premises/Exit without TP Pass/pages/VehicleExitWithoutPassMain.jsx";
import VehicleTotalTPPassMain from "./VTS/Tp_Pass_Summery/Total_Tp_Pass/pages/VehicleTotalTPPassMain.jsx";
import VehicleExpireTPPassMain from "./VTS/Tp_Pass_Summery/Expired_and_Still_Open/pages/VehicleExpireTPPassMain.jsx";
import VehicleTPPassVTSMain from "./VTS/Tp_Pass_Summery/Active_Tp_Pass/pages/VehicleTPPassVTSMain.jsx";
import VehicleCloseTPPassMain from "./VTS/Tp_Pass_Summery/Closed_Tp_Pass/pages/VehicleCloseTPPassMain.jsx";

import TotalCamera from "./Administrator/Total_Camera/pages/TotalCamera.jsx";
import DownTimeCamera from "./Administrator/Down_Time_Summery/pages/DownTimeCamera.jsx";
import ManufacturingUnitMain from "./Administrator/Manufacturing_Unit/pages/ManufacturingUnitMain.jsx";
import MfgUnitComm from "./dashbord/executive/pages/MfgUnitComm.jsx";
import DisCamera from "./Camera/pages/Dis_Camera.jsx";
import Gpstrack from "./GPS/pages/Gpstrack.jsx";
import VehicleMovement from "./Vehicle_Movement/pages/VehicleMovement.jsx";
import Dis_Camera from "./Camera/pages/Dis_Camera.jsx";
import AlertTablePage from "./Alert_Escalation_Mngt/Total_Alert/pages/AlertTablePage.jsx";
import EscalateAlertTablePage from "./Alert_Escalation_Mngt/Escalted/pages/EscalateAlertTablePage.jsx";
import ResolveAlertTablePage from "./Alert_Escalation_Mngt/Resolved/pages/ResolveAlertTablePage.jsx";
import PendingAlertTablePage from "./Alert_Escalation_Mngt/Pending_Alert/pages/PendingAlertTablePage.jsx";
import Call_center_Main from "./Call Center/Total Calls/pages/Call_center_Main.jsx";
import ResolveCall_center_Main from "./Call Center/Resolved/pages/ResolveCall_center_Main.jsx";
import PendingCall_center_Main from "./Call Center/Pending/pages/PendingCall_center_Main.jsx";
import AvgCall_center_Main from "./Call Center/Avg_Handle_Time/pages/AvgCall_center_Main.jsx";
import VehicleExitWithVTPPMain from "./Manufacturing/In Premises/Exit with Valid Tp Pass/pages/VehicleExitWithVTPPMain.jsx";
import VehicleExitMain from "./Manufacturing/In Premises/Vehicle Exit/pages/VehicleExitMain.jsx";
import VehicleEntryMain from "./Manufacturing/In Premises/Vehicle Enter/pages/VehicleEntryMain.jsx";
import VehicleCaptureMain from "./Manufacturing/In Premises/Total Vahicle Capture(ANPR)/pages/VehicleCaptureMain.jsx";
import VehicleRunningWithPassMain from "./Manufacturing/In_Transit/Plant_Summery/VehicleRunnigWithVTPPass/pages/VehicleRunningWithPassMain.jsx";
import VehicleRunnigWithPassPage from "./Manufacturing/In_Transit/Plant_Summery/VehicleRunnigWithVTPPass/pages/VehicleRunningWithPassPage.jsx";
import VehicleRunningExpirePassMain from "./Manufacturing/In_Transit/Plant_Summery/VehicleRunnigWithExpiredPass/pages/VehicleRunningExpirePassMain.jsx";


function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}

      <Route path="/executive" element={<Executive />} />
      <Route path="/" element={<DashboardExcutive />} />
      <Route path="/executive/dashboard" element={<DashboardExcutive />} />
      <Route path="/operator" element={<DashboardOperator />} />
      <Route path="/operator/dashboard" element={<DashboardOperator />} />
      <Route path="/administrative" element={<Administrative />} />
      <Route path="/administrator/dashboard" element={<AdministratorDashboard />} />
      <Route path="/mfgunit" element={<MfgUnit />} />

      <Route path="/alertmangt" element={<AlertMngt />} />
      <Route path="/analysissummry" element={<AnalysisSummary />} />
      <Route path="/callcenter" element={<CallCenter />} />
      <Route path="/sopreport" element={<SopReport />} />
      <Route path="/sopreport/camera" element={<DisCamera />} />
      <Route path="/sopreport/gps" element={<Gpstrack />} />
      <Route path="/sopreport/vehicle-movements" element={<VehicleMovement />} />
      <Route path="/analysis2" element={<Analysis2 />} />

    
      <Route path="/mfg-distilleries" element={<MfgDistilleries />} />
     

      <Route path="/vts" element={<TpPassSummary />} />
      <Route path="/vts/elock-trip" element={<VtsElockTrip />} />
      <Route path="/vts/gps-trip" element={<VtsgpsTrip />} />
      <Route path="/vts/gps/id" element={<VtsElockId />} />
      <Route path="/vts/gpsElockMissing" element={<VehicleNotFoundMain />} />

      <Route path="/documents" element={<DocumentMngt />} />
      <Route path="/manage" element={<ManageUser />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/assign-oprator" element={<AssignOperator />} />
      <Route path="/assign-group" element={<AssignedGroup />} />

      <Route path="/unauthorized-vehicle" element={<UnauthorizedVehicle1 />} />
      <Route path="/vehicaltrackedAtLodingZone" element={<UnauthorizedVehicle3 />} />
      <Route path="/nonePermited" element={<UnauthorizedVehicle4 />} />
      <Route path="/unauthorizedExit" element={<UnauthorizedVehicle5 />} />
      <Route path="/permit-validation" element={<UnauthorizedVehicle6 />} />

      <Route path="/vehicle/delayed" element={<VehicleDelayMain />} />
      <Route path="/vehicle/deviated" element={<VehicleRouteDeviationMain />} />
      <Route path="/vehicle/unreached" element={<VehicleUnreachedMain />} />
      <Route path="/vehicle/total-pass" element={<VehicleTotalTPPassMain />} />
      <Route path="/vehicle/exitWithoutTpPass" element={<VehicleExitWithoutPassMain />} />
      <Route path="/operator/typePurposeMismatch" element={<VehiclePurposeMain />} />

      <Route path="/administrator/totalCamera" element={<TotalCamera />} />
      <Route path="/administrator/DownTimeCamera" element={<DownTimeCamera />} />
      <Route path="/administrator/manufacturingUnit" element={<ManufacturingUnitMain />} />

      <Route path="/cameras/mfg-unit" element={<MfgUnitComm />} />
      <Route path="/cameras/totalActiveCamera" element={<MfgDistilleries />} />
      <Route path="/cameras/totalActiveCriticalCameras" element={<MfgDistilleries />} />
      <Route path="/cameras/totalActiveNonCriticalCameras" element={<MfgDistilleries />} />
      <Route path="/sopreport/camera" element={<Dis_Camera />} />
      <Route path="/sopreport/gps" element={<Gpstrack />} />
      <Route path="/sopreport/vehicle-movements" element={<VehicleMovement />} />
      <Route path="/alert-escalation" element={<AlertMngt />} />


      <Route path="/alerts/all" element={<AlertTablePage />} />

      <Route path="/all/escalate" element={<EscalateAlertTablePage />} />
      <Route path="/all/resolved" element={<ResolveAlertTablePage />} />
      <Route path="/sopreport/pending-alerts" element={<PendingAlertTablePage />} />

      <Route path="/call-center" element={<CallCenter />} />

      <Route path="/callCenter/list-Resolved" element={<ResolveCall_center_Main />} />

      <Route path="/callCenter/pending" element={<PendingCall_center_Main />} />

      <Route path="/callCenter/statusList" element={<AvgCall_center_Main />} />

      <Route path="/analysis-summary" element={<AnalysisSummary />} />

      <Route path="/manufacturing/in-premises" element={<ManufacturingInPremises />} />
      <Route path="/manufacturing/in-transit" element={<ManufacturingInTransit />} />
      <Route path="/warehouse/in-premises" element={<WInPremises />} />
      <Route path="/warehouse/in-transit" element={<WarehouseInTransit />} />
      <Route path="/in-premise" element={<ManufacturingInPremises />} />
      <Route path="/in-transit" element={<ManufacturingInTransit />} />
      <Route path="/warehouse/in-premise" element={<WInPremises />} />
      <Route path="/In-Premises" element={<ManufacturingInPremises />} />
      
  <Route path="/vts/trip-gps" element={<VtsElockTrip/>} />

 <Route path="/vts/Tp-pass" element={<TpPassSummary/>} />

 <Route path="/VTS/total_Tp_Pass" element={<VehicleTotalTPPassMain/>} />
 <Route path="/VTS/expired_still_open" element={<VehicleExpireTPPassMain/>} />
 <Route path="/VTS/active_Tp_Pass" element={<VehicleTPPassVTSMain/>} />
 <Route path="/VTS/closed_Tp_Pass" element={<VehicleCloseTPPassMain/>} />



 <Route path="/in_premises/exitWithoutPass" element={<VehicleExitWithoutPassMain/>} />
 <Route path="/in_premises/exitWithValidPass" element={<VehicleExitWithVTPPMain/>} />
 <Route path="/in_premises/vehicleExit" element={<VehicleExitMain/>} />
 <Route path="/in_premises/vehicleEnter" element={<VehicleEntryMain/>} />
 <Route path="/in_premises/totalVahicleCapture" element={<VehicleCaptureMain/>} />



 <Route path="/in-Transit/vehicleRunningWithPass" element={<VehicleRunningWithPassMain/>} />
 <Route path="/in-Transit/runningWithexpiredTpPass" element={<VehicleRunningExpirePassMain/>} />
 <Route path="/in-Transit/vehicleRunningWithPass" element={<VehicleRunningWithPassMain/>} />

  {/* <Route path="/vts/Tp-pass" element={<MfgUnit/>} /> */}

  {/* /camaras/mfg */}

  {/* <Route path="/Document-Mngt" element={<DocumentMngt/>} /> */}
    </Routes>





  );
}

export default App;
