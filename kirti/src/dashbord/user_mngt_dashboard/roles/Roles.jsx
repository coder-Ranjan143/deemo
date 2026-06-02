import React from "react";
import { Edit, Trash2, Download, Plus } from "lucide-react";
import Header from "../../../Components/Header";
import Navbar from "../../../Components/Navbar";


const rolesData = [
    {
        id: 1,
        role: "executive",
        groups: [
            "Dashboard",
            "Manufacturer Unit",
            "Warehouse",
            "Analysis",
            "Vts Mngt",
            "Camera Summary",
        ],
        permissions: [
            "executive-dashboard",
            "Manufacturer-in-premise",
            "Manufacturer-in-transit",
            "Warehouse-in-premise",
            "Warehouse-in-transit",
            "sop-reports",
            "Alert Escalation Mngt",
            "Call Center",
            "Analysis Summary Overview",
            "Vehicle Tracking",
            "Vehicle Trip-Gps",
            "Tp Pass Summary Overview",
            "cameras mfg-unit",
        ],
    },
    {
        id: 2,
        role: "operator",
        groups: [
            "Dashboard",
            "Role Management",
            "Manufacturer Unit",
            "Analysis",
            "Vts Mngt",
            "Camera Summary",
        ],
        permissions: [
            "operator-dashboard",
            "create roles",
            "edit roles",
            "delete roles",
            "Manufacturer-in-premise",
            "Manufacturer-in-transit",
            "sop-reports",
            "Alert Escalation Mngt",
            "Call Center",
            "Analysis Summary Overview",
            "Vehicle Tracking",
            "Vehicle Trip-Gps",
            "Tp Pass Summary Overview",
            "cameras mfg-unit",
        ],
    },
    {
        id: 3,
        role: "guard",
        groups: [],
        permissions: [],
    },
    {
        id: 4,
        role: "Super Admin",
        groups: [
            "Dashboard",
            "User Management",
            "Role Management",
            "Manufacturer Unit",
            "Warehouse",
            "Analysis",
            "Vts Mngt",
            "Camera Summary",
            "Masters",
        ],
        permissions: [
            "executive-dashboard",
            "operator-dashboard",
            "view users",
            "create user",
            "edit users",
            "delete users",
            "view roles",
            "create roles",
            "edit roles",
            "delete roles",
            "Manufacturer-in-premise",
            "Manufacturer-in-transit",
            "Warehouse-in-premise",
            "Warehouse-in-transit",
            "sop-reports",
            "Alert Escalation Mngt",
            "Call Center",
            "Analysis Summary Overview",
            "Vehicle Tracking",
            "Vehicle Trip-Gps",
            "Tp Pass Summary Overview",
            "cameras mfg-unit",
            "All Distillery Units",
            "All Warehouses",
            "Distillery Groups",
        ],
    },
];

const Roles = () => {
    return (
        <>
            <Header />
            <Navbar />

            <div className="w-full flex justify-center">
                <div className="w-full px-2 sm:px-4">

                    {/* Roles Section */}
                    <div className="mt-36 pb-6">
                        <div className="w-full">

                            <div className="rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 md:p-5 shadow-md">

                                {/* Heading */}
                                <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                                        Roles List
                                    </h2>

                                    <div className="flex flex-wrap gap-2">
                                        <button className="flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-[10px] sm:text-xs font-medium hover:bg-gray-50">
                                            <Download size={14} />
                                            Export
                                        </button>

                                        <button className="flex items-center gap-1 rounded-md bg-green-600 px-3 py-2 text-[10px] sm:text-xs font-medium text-white hover:bg-green-700">
                                            <Plus size={14} />
                                            Add Role
                                        </button>
                                    </div>
                                </div>

                                {/* Table */}
                                <div className="overflow-hidden rounded-xl border border-gray-200">
                                    <div className="w-full overflow-x-auto">

                                        <table className="w-full border-collapse text-[10px] sm:text-xs">

                                            <thead>
                                                <tr className="bg-gradient-to-r from-[#6d0f20] to-[#4b0011] text-white">
                                                    <th className="px-2 sm:px-3 py-2 text-left">
                                                        #
                                                    </th>

                                                    <th className="px-2 sm:px-3 py-2 text-left">
                                                        ROLE NAME
                                                    </th>

                                                    <th className="px-2 sm:px-3 py-2 text-left">
                                                        GROUP NAME
                                                    </th>

                                                    <th className="px-2 sm:px-3 py-2 text-left">
                                                        PERMISSIONS
                                                    </th>

                                                    <th className="px-2 sm:px-3 py-2 text-center">
                                                        ACTIONS
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {rolesData.map((item) => (
                                                    <tr
                                                        key={item.id}
                                                        className="border-b border-gray-200 align-top hover:bg-gray-50"
                                                    >
                                                        <td className="px-2 sm:px-3 py-2 text-gray-700">
                                                            {item.id}
                                                        </td>

                                                        <td className="px-2 sm:px-3 py-2 font-medium text-gray-700">
                                                            {item.role}
                                                        </td>

                                                        <td className="px-2 sm:px-3 py-2">
                                                            <div className="flex flex-wrap gap-1">
                                                                {item.groups.length > 0 ? (
                                                                    item.groups.map(
                                                                        (group, index) => (
                                                                            <span
                                                                                key={index}
                                                                                className="rounded bg-yellow-100 px-1 py-0.5 text-[9px] sm:text-[10px] text-gray-700"
                                                                            >
                                                                                {group}
                                                                            </span>
                                                                        )
                                                                    )
                                                                ) : (
                                                                    <span className="text-[9px] sm:text-[10px] text-gray-400">
                                                                        No Groups
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </td>

                                                        <td className="px-2 sm:px-3 py-2">
                                                            <div className="flex flex-wrap gap-1">
                                                                {item.permissions.length >
                                                                    0 ? (
                                                                    item.permissions.map(
                                                                        (
                                                                            permission,
                                                                            index
                                                                        ) => (
                                                                            <span
                                                                                key={index}
                                                                                className="rounded bg-orange-100 px-1 py-0.5 text-[9px] sm:text-[10px] text-gray-700"
                                                                            >
                                                                                {
                                                                                    permission
                                                                                }
                                                                            </span>
                                                                        )
                                                                    )
                                                                ) : (
                                                                    <span className="text-[9px] sm:text-[10px] text-gray-400">
                                                                        No
                                                                        Permissions
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </td>

                                                        <td className="px-2 sm:px-3 py-2">
                                                            <div className="flex flex-col items-center gap-1">
                                                                <button className="flex items-center gap-1 rounded-md border px-2 py-1 text-[9px] sm:text-[10px] hover:bg-gray-50">
                                                                    <Edit size={12} />
                                                                    Edit
                                                                </button>

                                                                <button className="flex items-center gap-1 rounded-md border border-red-300 px-2 py-1 text-[9px] sm:text-[10px] text-red-600 hover:bg-red-50">
                                                                    <Trash2 size={12} />
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>

                                        </table>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Roles;