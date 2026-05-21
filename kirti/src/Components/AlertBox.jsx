import Footer from "./Footer";

const alerts = [
    {
        message: "Camera gate 'exit' detected a vehicle at Oasis Distilleries — Vehicle No: MP09MG8116.",
        location: "Oasis Distilleries | 03:05 PM",
    },
    {
        message: "Camera gate 'entry' detected a vehicle at Associate Alcohols Khargone — Vehicle No: MP09ZX.",
        location: "Associate Alcohols Khargone | 03:05 PM",
    },
    {
        message: "Camera gate 'exit' detected a vehicle at Bapuna Alcobrew — Vehicle No: MP07MT022.",
        location: "Bapuna Alcobrew | 03:04 PM",
    },
    {
        message: "Camera gate 'entry' detected a vehicle at Gulshan Polyols — Vehicle No: MP28BB1299.",
        location: "Gulshan Polyols | 03:04 PM",
    },
    {
        message: "Camera gate 'exit' detected a vehicle at DCR Distillery — Vehicle No: MP15ME7297.",
        location: "DCR Distillery | 03:03 PM",
    },
    {
        message: "Camera gate 'exit' detected a vehicle at Gulshan Polyols — Vehicle No: M0MP4.",
        location: "Gulshan Polyols | 03:03 PM",
    },
    {
        message: "Camera gate 'exit' detected a vehicle at Vindhyachal Distilleries — Vehicle No: MP04YL3694.",
        location: "Vindhyachal Distilleries | 03:02 PM",
    },
];

const AlertBox = ({heading}) => {
    return (
        <div className="
            w-full
            h-full
            bg-white
            rounded-xl
            border
            border-gray-200
            shadow-sm
            p-4
            flex
            flex-col
            max-h-[520px]
            lg:max-h-none
        ">

            {/* Heading */}
            <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <h3 className="text-lg font-semibold text-gray-800 sm:text-xl">
                    {heading}
                </h3>
            </div>

            {/* Alerts */}
            <div className="flex-1 overflow-y-auto space-y-2 pr-1">

                {alerts.map((alert, index) => (
                    <div
                        key={index}
                        className="
                            border
                            border-gray-200
                            rounded-lg
                            bg-red-50
                            p-3
                            hover:bg-red-100
                            transition-all
                            duration-300
                        "
                    >
                        <p className="break-words text-xs font-medium text-gray-800 leading-5 sm:text-sm">
                            {alert.message}
                        </p>

                        <p className="break-words text-[11px] text-gray-500 mt-1 sm:text-xs">
                            Location: {alert.location}
                        </p>
                    </div>
                ))}

            </div>

            <div className="mt-2">
                <Footer />
            </div>

        </div>
    );
};

export default AlertBox;
