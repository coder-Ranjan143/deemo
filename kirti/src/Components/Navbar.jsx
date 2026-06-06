import { useEffect, useRef, useState } from "react";

import {
    ChevronDown,
    LayoutDashboard,
    BarChart3,
    Factory,
    Warehouse,
    Truck,
    Camera,
    Settings,
    Users,
    FileText,
} from "lucide-react";
import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate();
    const [openMenu, setOpenMenu] = useState(null);
    const navbarRef = useRef(null);

    const menus = [
        {
            title: "Dashboard",
            icon: <LayoutDashboard size={18} />,
            items: ["Executive", "Operator", "Administrator"],
        },
        {
            title: "Analysis",
            icon: <BarChart3 size={18} />,
            items: ["SOP Report", "Alert Escalation Mngt", "Call Center", "Analysis Summary"],
        },
        {
            title: "Manufacturing",
            icon: <Factory size={18} />,
            items: ["In Premises", "In Transit"],
        },
        {
            title: "Warehouse",
            icon: <Warehouse size={18} />,
            items: ["In Premise", "In Transit"],
        },
        {
            title: "VTS",
            icon: <Truck size={18} />,
            items: ["Vehicle Trip Elock", "Vehicle Trip-GPS", "Tp Pass Summary"],
        },
        {
            title: "Camera Summary",
            icon: <Camera size={18} />,
            items: ["Manufacturing Unit"],
        },
        {
            title: "Master",
            icon: <Settings size={18} />,
            items: ["Master Dashboard"],
        },
        {
            title: "User Mngt",
            icon: <Users size={18} />,
            items: ["Roles", "Users"],
        },
        {
            title: "Document Mngt",
            icon: <FileText size={18} />,
            items: ["Document List"],
        },
    ];

    const handleMenuClick = (index) => {
        setOpenMenu(openMenu === index ? null : index);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setOpenMenu(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleItemClick = (menuTitle, item) => {
        console.log("Clicked:", item);
        setOpenMenu(null);

        if (menuTitle === "Manufacturing") {
            switch (item) {
                case "In Premises":
                    navigate("/manufacturing/in-premises");
                    break;

                case "In Transit":
                    navigate("/manufacturing/in-transit");
                    break;


                case "Document Mngt":
                    navigate("/Document-Mngt");
                    break;


                default:
                    console.log("Clicked:", item);
            }

            return;
        }

        if (menuTitle === "Warehouse") {
            switch (item) {
                case "In Premise":
                    navigate("/warehouse/in-premises");
                    break;

                case "In Transit":
                    navigate("/warehouse/in-transit");
                    break;

                default:
                    console.log("Clicked:", item);
            }

            return;
        }

        switch (item) {
            case "Executive":
                navigate("/executive/dashboard");
                break;

            case "Operator":
                navigate("/operator/dashboard");
                break;

            case "Administrator":
                navigate("/administrator/dashboard");
                break;

            case "SOP Report":
                navigate("/sopreport");
                break;

            case "Alert Escalation Mngt":
                navigate("/alert-escalation");
                break;

            case "Call Center":
                navigate("/call-center");
                break;

            case "Analysis Summary":
                navigate("/analysis-summary");
                break;

            case "Vehicle Trip Elock":
                navigate("/vts/elock-trip");
                break;


            case "Vehicle Trip-GPS":
                navigate("/vts/trip-gps");
                break;

            case "Tp Pass Summary":
                navigate("/vts/Tp-pass");
                break;


            case "Tp Pass Summary":
                navigate("/vts/Tp-pass");
                break;

            case "Master Dashboard":
                navigate("/master");
                break;

            case "Document List":
                navigate("/documents");
                break;

            case "Manufacturing Unit":
                navigate("/mfgunit");
                break;

            case "Roles":
                navigate("/User-Mngt/roles");
                break;

            case "Users":
                navigate("/User-Mngt/users");
                break;


            default:


                console.log("Clicked:", item);
        }
    };

    return (
        <nav
            ref={navbarRef}
            className="fixed top-[78px] left-0 w-full z-40 bg-red-800 text-white px-4 py-2.5 sm:px-6"
        >
            <div className="flex items-center gap-4 overflow-x-auto pb-1 text-sm font-medium whitespace-nowrap sm:gap-5 lg:justify-center lg:overflow-visible lg:pb-0">
                {menus.map((menu, index) => (
                    <div key={index} className="relative">
                        <button
                            onClick={() => handleMenuClick(index)}
                            className="flex shrink-0 items-center gap-1 hover:text-gray-200"
                        >
                            {menu.icon}
                            <span>{menu.title}</span>

                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-300 ${openMenu === index ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {openMenu === index && (
                            <div className="absolute top-full left-0 mt-2 min-w-[180px] bg-red-900 border border-red-700 shadow-xl rounded-md overflow-hidden">
                                {menu.items.map((item, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleItemClick(menu.title, item)}
                                        className="block w-full text-left px-4 py-3 text-sm hover:bg-red-700 border-b border-red-800 last:border-b-0"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
