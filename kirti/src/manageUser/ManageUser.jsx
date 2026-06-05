import React from "react";
import {
  History,
  UserPen,
  Factory,
  Layers3,
  Trash2,
  ArrowLeft,
} from "lucide-react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";

const cards = [
  {
    title: "Activity Log",
    desc: "View user's login & action history",
    icon: History,
    border: "border-indigo-200",
    bg: "bg-indigo-50",
   iconColor: "text-indigo-600 font-medium"
  },
  {
    title: "Edit User",
    desc: "Update user details",
    icon: UserPen,
    border: "border-blue-200",
    bg: "bg-blue-50",
    iconColor: "text-blue-600 fill-blue-600 ",
  },
  {
    title: "Assign Distillery Group",
    desc: "Manage user's assigned group",
    icon: Factory,
    border: "border-green-200",
    bg: "bg-green-50",
    iconColor: "text-green-600 fill-green-600",
  },
  {
    title: "Assigned Groups",
    desc: "View all distillery groups currently linked to this user.",
    icon: Layers3,
    border: "border-teal-200",
    bg: "bg-teal-50",
    iconColor: "text-teal-600  fill-teal-600",
  },
  {
    title: "Delete User",
    desc: "Permanently remove this user",
    icon: Trash2,
    border: "border-red-200",
    bg: "bg-red-50",
    iconColor: "text-red-700 fill-red-700",
  },
];



const ManageUser = () => {
   return (
    
    
    <>
    <Header/>
    <Navbar/>
    <div className="min-h-screen bg-slate-100 p-8 mt-35">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Manage User
        </h1>

        <p className="text-gray-500 mb-8">
          Quick actions for{" "}
          <span className="font-semibold text-indigo-600">
            Abhijeet Agarwal
          </span>
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className={`bg-white border ${card.border} rounded-2xl p-6 shadow-sm hover:shadow-md transition cursor-pointer`}
              >
                <div className="flex items-center gap-4">

                  <div
                    className={`w-14 h-14 rounded-full ${card.bg} flex items-center justify-center`}
                  >
                    <Icon
                      size={26}
                      className={card.iconColor}
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-slate-800">
                      {card.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      {card.desc}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Back Button */}
        <button className="mt-8 flex items-center gap-2 border border-gray-300 px-5 py-2 rounded-lg bg-white hover:bg-gray-50">
          <ArrowLeft size={16} />
          BACK
        </button>

      </div>
    </div>
    </>
  );

}

export default ManageUser