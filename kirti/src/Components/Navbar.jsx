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


const Navbar = () => {
    return (
        <nav className="
    fixed
    top-[78px]
    left-0
    w-full
    z-40
    bg-red-800
    text-white
    px-4
    py-2.5
    sm:px-6
">
            <div className="flex items-center gap-4 overflow-x-auto pb-1 text-sm font-medium whitespace-nowrap sm:gap-5 lg:justify-center lg:overflow-visible lg:pb-0">

                <a href="/" className="flex shrink-0 items-center gap-1 text-white hover:text-gray-200">
                    <LayoutDashboard size={18} className="shrink-0" />
                    Dashboard
                    <ChevronDown size={16} className="shrink-0" />
                </a>

                <a href="/" className="flex shrink-0 items-center gap-1 hover:text-gray-200">
                    <BarChart3 size={18} className="shrink-0" />
                    Analysis
                    <ChevronDown size={16} className="shrink-0" />
                </a>

                <a href="/" className="flex shrink-0 items-center gap-1 hover:text-gray-200">
                    <Factory size={18} className="shrink-0" />
                    Manufacturing
                    <ChevronDown size={16} className="shrink-0" />
                </a>

                <a href="/" className="flex shrink-0 items-center gap-1 hover:text-gray-200">
                    <Warehouse size={18} className="shrink-0" />
                    Warehouse
                    <ChevronDown size={16} className="shrink-0" />
                </a>

                <a href="/" className="flex shrink-0 items-center gap-1 hover:text-gray-200">
                    <Truck size={18} className="shrink-0" />
                    VTS
                    <ChevronDown size={16} className="shrink-0" />
                </a>

                <a href="/" className="flex shrink-0 items-center gap-1 hover:text-gray-200">
                    <Camera size={18} className="shrink-0" />
                    Camera Summary
                    <ChevronDown size={16} className="shrink-0" />
                </a>

                <a href="/" className="flex shrink-0 items-center gap-1 hover:text-gray-200">
                    <Settings size={18} className="shrink-0" />
                    Master
                    <ChevronDown size={16} className="shrink-0" />
                </a>

                <a href="/" className="flex shrink-0 items-center gap-1 hover:text-gray-200">
                    <Users size={18} className="shrink-0" />
                    User Mngt
                    <ChevronDown size={16} className="shrink-0" />
                </a>

                <a href="/" className="flex shrink-0 items-center gap-1 hover:text-gray-200">
                    <FileText size={18} className="shrink-0" />
                    Document Mngt
                    <ChevronDown size={16} className="shrink-0" />
                </a>

            </div>
        </nav>
    )
}

export default Navbar;
