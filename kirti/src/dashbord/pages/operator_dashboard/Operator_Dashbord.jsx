import Header from "../../../Components/Header";
import Navbar from "../../../Components/Navbar";
import DashboardCard from "./Operator_DashboardCard";

import {
    ShieldAlert,
    CameraOff,
    Truck,
    Ban,
    BadgeCheck,
    Lock,
} from "lucide-react";

function Operator_Dashboard() {
    return (
        <div className="min-h-screen bg-gray-100 pt-36">

            {/* Header */}
            <Header />

            {/* Navbar */}
            <Navbar />

            {/* MAIN BOX */}
            <div className="mx-4 rounded-2xl border border-gray-200 bg-white shadow-sm">

                {/* Top Section */}
                <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">

                    {/* Dashboard Heading */}
                    <h2 className="text-2xl font-bold text-gray-900">
                        Dashboard
                    </h2>

                    {/* Filter */}
                    <div className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-2">
                        <p className="text-sm font-medium text-blue-700">
                            Active Filter : Today
                        </p>
                    </div>

                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 lg:grid-cols-4">

                    <DashboardCard
                        icon={<ShieldAlert size={22} className="text-yellow-600" />}
                        title="Unauthorized Vehicle Entry"
                        value="346"
                        titleColor="text-gray-700"
                        valueColor="text-gray-900"
                        iconBg="bg-yellow-100"
                    />

                    <DashboardCard
                        icon={<CameraOff size={22} className="text-blue-600" />}
                        title="Critical Camera Down"
                        value="0"
                        titleColor="text-blue-900"
                        valueColor="text-gray-700"
                        iconBg="bg-blue-100"
                    />

                    <DashboardCard
                        icon={<Ban size={22} className="text-green-600" />}
                        title="Non Permitted Hours Alerts"
                        value="0"
                        titleColor="text-green-700"
                        valueColor="text-gray-900"
                        iconBg="bg-green-100"
                    />

                    <DashboardCard
                        icon={<Truck size={22} className="text-blue-600" />}
                        title="Vehicle Tracked at Loading Zone"
                        value="0"
                        titleColor="text-blue-700"
                        valueColor="text-gray-900"
                        iconBg="bg-blue-100"
                    />

                    <DashboardCard
                        icon={<Truck size={22} className="text-red-500" />}
                        title="Unauthorized Vehicle Exit"
                        value="444"
                        titleColor="text-red-700"
                        valueColor="text-gray-900"
                        iconBg="bg-red-100"
                    />

                    <DashboardCard
                        icon={<Truck size={22} className="text-pink-600" />}
                        title="Vehicle Delayed"
                        value="64"
                        titleColor="text-pink-700"
                        valueColor="text-gray-900"
                        iconBg="bg-pink-100"
                    />

                    <DashboardCard
                        icon={<ShieldAlert size={22} className="text-yellow-600" />}
                        title="Vehicle Unreached Destination"
                        value="49"
                        titleColor="text-yellow-700"
                        valueColor="text-gray-900"
                        iconBg="bg-yellow-100"
                    />

                    <DashboardCard
                        icon={<CameraOff size={22} className="text-blue-600" />}
                        title="Vehicle Route Deviated"
                        value="81"
                        titleColor="text-blue-700"
                        valueColor="text-gray-900"
                        iconBg="bg-blue-100"
                    />

                    <DashboardCard
                        icon={<Truck size={22} className="text-green-600" />}
                        title="Vehicle Exit Without TP Pass"
                        value="0"
                        titleColor="text-green-700"
                        valueColor="text-gray-900"
                        iconBg="bg-green-100"
                    />

                    <DashboardCard
                        icon={<Truck size={22} className="text-pink-600" />}
                        title="Vehicle Type-Purpose Mismatch"
                        value="0"
                        titleColor="text-pink-700"
                        valueColor="text-gray-900"
                        iconBg="bg-pink-100"
                    />

                    <DashboardCard
                        icon={<Lock size={22} className="text-red-600" />}
                        title="E-Lock Tampering"
                        value="0"
                        titleColor="text-red-700"
                        valueColor="text-gray-900"
                        iconBg="bg-red-100"
                    />

                    <DashboardCard
                        icon={<BadgeCheck size={22} className="text-pink-600" />}
                        title="GPS & Elock Missing"
                        value="201"
                        titleColor="text-pink-700"
                        valueColor="text-gray-900"
                        iconBg="bg-pink-100"
                    />

                </div>
            </div>
        </div>
    );
}

export default Operator_Dashboard;