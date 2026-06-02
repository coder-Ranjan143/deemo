import Card from "../../../../Components/Card";
import Slider4_Heading from "./Slider4_Heading";
import Slider4_Map from "./Slider4_Map";

import {
    ShieldAlert,
    ClockAlert,
    Clock3,
    LocateOff,
    Ban,
} from "lucide-react";

function Slider4() {
    return (
        <div className="min-h-screen overflow-x-hidden bg-gray-100">

            {/* Heading */}
            <Slider4_Heading />

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

                    <Card
                        icon={<ShieldAlert size={22} className="text-yellow-600" />}
                        title="Unauthorized Vehicle Entry"
                        value="641"
                        bgColor="bg-white"
                        titleColor="text-brown-950"
                        valueColor="text-red-800"
                        iconBg="bg-blue-100"
                        hoverEffect="from-red-100"
                    />

                    <Card
                        icon={<Ban size={22} className="text-purple-600" />}
                        title="Unauthorized Vehicle Exit"
                        value="109"
                        bgColor="bg-white"
                        titleColor="text-blue-900"
                        valueColor="text-red-800"
                        iconBg="bg-blue-100"
                        hoverEffect="from-blue-100"
                    />

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

                    <Card
                        icon={<LocateOff size={22} className="text-purple-600" />}
                        title="Destination Unreached"
                        value="0"
                        bgColor="bg-white"
                        titleColor="text-red-950"
                        valueColor="text-red-800"
                        iconBg="bg-blue-100"
                        hoverEffect="from-red-100"
                    />

                </div>

                {/* RIGHT SIDE MAP */}
                <div className="flex lg:h-[400px]">
                    <Slider4_Map />
                </div>

            </div>
        </div>
    );
}

export default Slider4;
