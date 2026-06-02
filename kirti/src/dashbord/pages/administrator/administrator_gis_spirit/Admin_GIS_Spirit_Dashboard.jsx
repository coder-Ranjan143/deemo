import React from "react";
import Administrator_GIS_Spirit_Nav from "./Administrator_GIS_Spirit_Nav";
import Admin_GIS_Spirit_LeftBox from "./Admin_GIS_Spirit_LeftBox";
import Admin_GIS_Spirit_RightBox from "./Admin_GIS_Spirit_RightBox";

const Admin_GIS_Spirit_Dashboard = () => {
    return (
        <div className="h-screen overflow-hidden bg-slate-100 p-3 flex flex-col">

            <Administrator_GIS_Spirit_Nav />

            <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-3 flex-1 items-stretch overflow-hidden">

                <Admin_GIS_Spirit_LeftBox />
                <Admin_GIS_Spirit_RightBox />

            </div>

        </div>
    );
};

export default Admin_GIS_Spirit_Dashboard;