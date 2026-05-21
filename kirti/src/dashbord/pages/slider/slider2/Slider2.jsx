import Card from "../../../../Components/Card";
import AlertBox from "../../../../Components/AlertBox";
import Slider2_Heading from "./Slider2_Heading";
import {
    Clock3,
    Route,
    MapPinOff,
    Radar,
    Ticket,
    LocateOff,
} from "lucide-react";

function Slider2() {
    return (
        <div className="min-h-screen overflow-x-hidden bg-gray-100">
            <Slider2_Heading />

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
                        icon={<Clock3 size={22} className="text-yellow-600" />}
                        title="Vehicle Delayed"
                        value="641"
                        bgColor="bg-white"
                        titleColor="text-brown-950"
                        valueColor="text-red-800"
                        iconBg="bg-blue-100"
                        hoverEffect="from-red-100"
                    />

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

                    <Card
                        icon={<MapPinOff size={22} className="text-pink-600" />}
                        title="Vehicle Not Reached Destination"

                        value="0"
                        bgColor="bg-white"
                        titleColor="text-pink-950"
                        valueColor="text-red-800"
                        iconBg="bg-blue-100"
                        hoverEffect="from-pink-100"
                    />

                    <Card
                        icon={<Radar size={22} className="text-green-600" />}
                        title="Active GPS Devices"
                        value="0"
                        bgColor="bg-white"
                        titleColor="text-gray-800"
                        valueColor="text-red-800"
                        iconBg="bg-blue-100"
                        hoverEffect="from-green-100"
                    />

                    <Card
                        icon={<Ticket size={22} className="text-purple-600" />}
                        title="Live TP Pass Count"
                        value="709"
                        bgColor="bg-white"
                        titleColor="text-blue-900"
                        valueColor="text-red-800"
                        iconBg="bg-blue-100"
                        hoverEffect="from-purple-100"
                    />

                    <Card
                        icon={<LocateOff size={22} className="text-red-500" />}
                        title="Inactive GPS Devices"
                        value="0"
                        bgColor="bg-white"
                        titleColor="text-red-950"
                        valueColor="text-red-800"
                        iconBg="bg-blue-100"
                        hoverEffect="from-red-100"
                    />

                </div>

                {/* RIGHT SIDE ALERT BOX */}
                <div className="flex lg:h-[400px]">
                    <AlertBox heading="Latest VTS Alerts" />
                </div>

            </div>
        </div>
    );
}

export default Slider2;
