import React from "react";
import Header from "../../../Components/Header";
import Navbar from "../../../Components/Navbar";
import { useNavigate } from "react-router-dom";

const usersList = [
    {
        id: 1,
        name: "Abhijeet Agarwal",
        role: "operator",
        designation: "L3",
        username: "eccommissioner",
        mobile: "8103499383",
        email: "ec.ecogwl@mp.gov.in",
    },
    {
        id: 2,
        name: "Agrawal Distilleries Private Limited",
        role: "guard",
        designation: "Guard",
        username: "Agrawal Distilleries Private Limited",
        mobile: "2222222222",
        email: "agrawal@mpexciseicc.in",
    },
    {
        id: 3,
        name: "Ajay Sharma",
        role: "operator",
        designation: "L2",
        username: "dcobpl",
        mobile: "9893600100",
        email: "dc.dcobpl@mp.gov.in",
    },
    {
        id: 4,
        name: "Ajay Sharma",
        role: "operator",
        designation: "L2",
        username: "dcobpl",
        mobile: "9893600100",
        email: "dc.dcobpl@mp.gov.in",
    },
];

const Users = () => {

    const navigate = useNavigate();

    return (
        <>
            <Header />
            <Navbar />

            <div className="pt-30 mt-4 px-2 sm:px-3 md:px-4 bg-gray-100  overflow-x-hidden">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">

                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 mb-4">

                        <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
                            Users List
                        </h1>

                        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 w-full lg:w-auto">

                            <button className="px-3 py-1.5 text-sm border rounded-md text-indigo-600 border-indigo-300 hover:bg-indigo-50 transition">
                                Export
                            </button>

                            <button onClick={() =>
                                            navigate("/users/Add_Users")
                                        }
                            className="px-3 py-1.5 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 transition">
                                + Add User
                            </button>

                            <select className="border rounded-md px-3 py-1.5 text-sm">
                                <option>25</option>
                                <option>50</option>
                                <option>100</option>
                            </select>

                            <button className="px-3 py-1.5 text-sm border rounded-md bg-gray-50 hover:bg-gray-100 transition">
                                ← BACK
                            </button>

                        </div>
                    </div>

                    {/* Filters */}
                    <div className="border rounded-md p-2 bg-gray-50 mb-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap items-center gap-2">

                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full lg:w-48 h-8 border rounded px-2 text-xs focus:outline-none focus:ring-1"
                            />

                            <select className="w-full lg:w-28 h-8 border rounded px-2 text-xs">
                                <option>All Roles</option>
                            </select>

                            <select className="w-full lg:w-32 h-8 border rounded px-2 text-xs">
                                <option>All Designations</option>
                            </select>

                            <button className="w-full lg:w-20 h-8 bg-red-600 text-white text-xs rounded hover:bg-red-700 transition">
                                Apply
                            </button>

                            <button className="w-full lg:w-20 h-8 border border-red-500 text-red-500 text-xs rounded hover:bg-red-50 transition">
                                Reset
                            </button>

                        </div>
                    </div>

                    {/* Table */}
                    {/* Table */}
                    <div className="overflow-x-auto rounded-lg border border-gray-200">

                        <table className="w-full text-xs table-auto">

                            <thead>
                                <tr className="bg-[#7b143c] text-white">
                                    <th className="px-2 py-2 text-left text-[11px] font-medium">#</th>
                                    <th className="px-2 py-2 text-left text-[11px] font-medium">NAME</th>
                                    <th className="px-2 py-2 text-left text-[11px] font-medium">ROLE</th>
                                    <th className="px-2 py-2 text-left text-[11px] font-medium">DESIGNATION</th>
                                    <th className="px-2 py-2 text-left text-[11px] font-medium">USER NAME</th>
                                    <th className="px-2 py-2 text-left text-[11px] font-medium">USER MOBILE</th>
                                    <th className="px-2 py-2 text-left text-[11px] font-medium">EMAIL</th>
                                    <th className="px-2 py-2 text-left text-[11px] font-medium">DEVICE INFO</th>
                                    <th className="px-2 py-2 text-center text-[11px] font-medium">ACTIONS</th>
                                </tr>
                            </thead>

                            <tbody>
                                {usersList.map((user) => (
                                    <tr
                                        key={user.id}
                                        className="border-b hover:bg-gray-50 transition"
                                    >
                                        <td className="px-2 py-2">{user.id}</td>

                                        <td className="px-2 py-2 truncate">
                                            {user.name}
                                        </td>

                                        <td className="px-2 py-2 capitalize">
                                            {user.role}
                                        </td>

                                        <td className="px-2 py-2">
                                            {user.designation}
                                        </td>

                                        <td className="px-2 py-2 truncate">
                                            {user.username}
                                        </td>

                                        <td className="px-2 py-2">
                                            {user.mobile}
                                        </td>

                                        <td className="px-2 py-2 truncate">
                                            {user.email}
                                        </td>

                                        <td className="px-2 py-2 text-center">
                                            -
                                        </td>

                                        <td className="px-2 py-2 text-center">
                                            <button className="border border-purple-500 text-purple-600 px-2 py-1 text-[11px] rounded-md hover:bg-purple-50 transition" onClick={() =>
                                            navigate("/manage-user") }>
                                                Manage
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>

                    </div>

                </div>
            </div>
        </>
    );
};

export default Users;