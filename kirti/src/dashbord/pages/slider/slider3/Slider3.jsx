import Card from "../../../../Components/Card";
import Slider3_Heading from "./Slider3_Heading";
import Slider3_Map from "./Slider3_Map";
import {
    Route,
    ShieldAlert,
    ClockAlert,
    Clock3,
    LocateOff,
    FileWarning,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function Slider3() {

    const navigate = useNavigate();

    return (
        
        <div className="min-h-screen overflow-x-hidden bg-gray-100">

            {/* Heading */}
            <Slider3_Heading />

            <div className="
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-3
                p-4
                md:p-5
                items-stretch
            ">

                {/* LEFT SIDE CARDS */}
                <div className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-3
                    lg:h-[400px]
                    auto-rows-fr
                    items-stretch
                ">
                    <div
                        onClick={() => navigate("/vehicle/exitWithoutTpPass")}
                        className="cursor-pointer"
                    >

                    <Card
                        icon={<FileWarning size={22} className="text-yellow-600" />}
                        title="Vehicle Exit Without TP Pass"
                        value="641"
                        bgColor="bg-white"
                        titleColor="text-brown-950"
                        valueColor="text-red-800"
                        iconBg="bg-blue-100"
                        hoverEffect="from-red-100"
                    />
                    </div>


                    <div
                        onClick={() => navigate("/vehicle/deviated")}
                        className="cursor-pointer"
                    >
                    <Card
                        icon={<Route size={22} className="text-blue-600" />}
                        title="Route Deviation"
                        value="109"
                        bgColor="bg-white"
                        titleColor="text-blue-900"
                        valueColor="text-red-800"
                        iconBg="bg-blue-100"
                        hoverEffect="from-blue-100"
                    />
                    </div>

                    <Card
                        icon={<ShieldAlert size={22} className="text-pink-600" />}
                        title="E-Lock Tampering"

                        value="0"
                        bgColor="bg-white"
                        titleColor="text-pink-950"
                        valueColor="text-red-800"
                        iconBg="bg-blue-100"
                        hoverEffect="from-pink-100"
                    />

                    <Card
                        icon={<ClockAlert size={22} className="text-green-600" />}
                        title="Non-Permitted Hours Vehicle"
                        value="0"
                        bgColor="bg-white"
                        titleColor="text-gray-800"
                        valueColor="text-red-800"
                        iconBg="bg-blue-100"
                        hoverEffect="from-green-100"
                    />



                    <div
                        onClick={() => navigate("/vehicle/delayed")}
                        className="cursor-pointer"
                    >
                    <Card
                        icon={<Clock3 size={22} className="text-purple-600" />}
                        title="Vehicle Delayed"
                        value="709"
                        bgColor="bg-white"
                        titleColor="text-blue-900"
                        valueColor="text-red-800"
                        iconBg="bg-blue-100"
                        hoverEffect="from-purple-100"
                    />

                    </div>


                    <div
                        onClick={() => navigate("/vehicle/unreached")}
                        className="cursor-pointer"
                    >
                    <Card
                        icon={<LocateOff size={22} className="text-red-500" />}
                        title="Destination Unreached"
                        value="0"
                        bgColor="bg-white"
                        titleColor="text-red-950"
                        valueColor="text-red-800"
                        iconBg="bg-blue-100"
                        hoverEffect="from-red-100"
                    />
                    </div>

                </div>

                {/* RIGHT SIDE MAP */}
                <div className="flex lg:h-[400px]">
                    <Slider3_Map />
                </div>

            </div>
        </div>
    );
}

export default Slider3;
