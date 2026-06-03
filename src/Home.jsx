import { Link } from "react-router-dom";
import Administrative from "./dashbord/administrator/Administrative";
import Operator from "./dashbord/operator/Operator";
import Executive from "./dashbord/executive/Executive";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center flex-col">
      <div className="bg-zinc-900 p-8 rounded-2xl w-[350px]">
        <h1 className="text-3xl font-bold mb-6 text-center text-cyan-400">
          Dashboard List
        </h1>

        <div className="flex flex-col gap-4">
          <Link
            to="/executive"
            className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded-xl text-center"
          >
            Executive Dashboard
          </Link>
          <hr />
          <Link
            to="/operator"
            className="bg-purple-500 hover:bg-purple-600 p-3 rounded-xl text-center"
          >
            Operator Dashboard
          </Link>
          <hr />
          <Link
            to="/administrative"
            className="bg-pink-500 hover:bg-pink-600 p-3 rounded-xl text-center"
          >
            Administrative Dashboard
          </Link>
        </div>
      </div>

      <br />

      <div className="bg-zinc-900 p-8 rounded-2xl w-[350px]">
        <h1 className="text-3xl font-bold mb-6 text-center text-cyan-400">
          Analysis
        </h1>

        <div className="flex flex-col gap-4">
          <Link
            to="/sopreport"
            className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded-xl text-center"
          >
            SOS Report
          </Link>

          <Link
            to="/alertmangt"
            className="bg-purple-500 hover:bg-purple-600 p-3 rounded-xl text-center"
          >
            Alert Escalation Mngt
          </Link>

          <Link
            to="/callcenter"
            className="bg-pink-500 hover:bg-pink-600 p-3 rounded-xl text-center"
          >
            Call Center
          </Link>

          <Link
            to="/analysissummry"
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-xl text-center"
          >
            Analysis Summary
          </Link>

          <Link
            to="/analysis2"
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-xl text-center"
          >
            Analysis Summary 2
          </Link>
        </div>
      </div>

      <br />

      <div className="bg-zinc-900 p-8 rounded-2xl w-[350px]">
        <h1 className="text-3xl font-bold mb-6 text-center text-cyan-400">
          Manufacturing
        </h1>

        <div className="flex flex-col gap-4">
          <Link
            to="/in-transit"
            className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-xl text-center"
          >
            In Transit
          </Link>

          <Link
            to="/in-premise"
            className="bg-cyan-500 hover:bg-cyan-600  text-white p-3 rounded-xl text-center"
          >
            In premise
          </Link>
        </div>
      </div>

      <br />

      <div className="bg-zinc-900 p-8 rounded-2xl w-[350px]">
        <h1 className="text-3xl font-bold mb-6 text-center text-cyan-400">
          Warehouse
        </h1>

        <div className="flex flex-col gap-4">
          <Link
            to="/warehouse/in-transit"
            className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-xl text-center"
          >
            In Transit
          </Link>

          <Link
            to="/warehouse/in-premise"
            className="bg-cyan-500 hover:bg-cyan-600  text-white p-3 rounded-xl text-center"
          >
            In premise
          </Link>
        </div>
      </div>

      <br />

      <div className="bg-zinc-900 p-8 rounded-2xl w-[350px]">
        <h1 className="text-3xl font-bold mb-6 text-center text-cyan-400">
          VTS
        </h1>

        <div className="flex flex-col gap-4">
          <Link
            to="/vts/elock-trip"
            className="bg-[#8b7cd7] hover:bg-[#c9beff] text-white p-3 rounded-xl text-center"
          >
            Vehicle Trip Elock
          </Link>

          <Link
            to="/vts/gps-trip"
            className="bg-[#3f6446] hover:bg-[#57825e]  text-white p-3 rounded-xl text-center"
          >
            Vehicle Trip-GPS
          </Link>

          <Link
            to="/vts"
            className="bg-[#62819e] hover:bg-[#6085b1]  text-white p-3 rounded-xl text-center"
          >
            Tp pass Summary
          </Link>

          <Link
            to="/vts/gps/id"
            className="bg-[#629e86] hover:bg-[#60b188]  text-white p-3 rounded-xl text-center"
          >
            GPS ID
          </Link>

          <Link
            to="/documents"
            className="bg-[#629e86] hover:bg-[#60b188]  text-white p-3 rounded-xl text-center"
          >
            documents
          </Link>
          <Link
            to="/mfg-distilleries"
            className="bg-[#629e86] hover:bg-[#60b188]  text-white p-3 rounded-xl text-center"
          >
            mfg-distilleries
          </Link>

          <Link
            to="/manage"
            className="bg-[#62709e] hover:bg-[#1137b3]  text-white p-3 rounded-xl text-center"
          >
            Manage User
          </Link>

          <Link
            to="/activity"
            className="bg-[#629e7e] hover:bg-[#137839]  text-white p-3 rounded-xl text-center"
          >
            Activity
          </Link>

          <Link
            to="/edit"
            className="bg-[#abce5f] hover:bg-[#465909]  text-white p-3 rounded-xl text-center"
          >
            edit
          </Link>

          <Link
            to="/assign-oprator"
            className="bg-[#E89951] hover:bg-[#465909]  text-white p-3 rounded-xl text-center"
          >
            assign-oprator
          </Link>

          <Link
            to="/assign-group"
            className="bg-[#760031] hover:bg-[#465909]  text-white p-3 rounded-xl text-center"
          >
            assign-Group
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
