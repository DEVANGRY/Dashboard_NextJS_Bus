import { Circle, Ellipsis, MoveUp } from "lucide-react";
import { Inter, Recursive } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
const recursive = Recursive({ subsets: ["latin"] });

const Notification = () => {
    return (
        <div
            className={`${inter.className} border-2 mb-2 rounded-lg py-2 bg-gray-100 px-2 flex`}
        >
            <div className="col basis-1/12">
                <Circle className="status w-4" fill="#00f385" />
            </div>
            <div className="col flex flex-col pl-2">
                <div
                    className={`title_notification font-semibold flex justify-between pr-4`}
                >
                    <span>Yesterday's earnings</span>
                    <Ellipsis className="w-4" />
                </div>
                <div
                    className={`detail_notification ${recursive.className} text-xs opacity-45 mt-1 w-11/12 indent-4`}
                >
                    The amount of money earned is 150,456,789 VNĐ . Billion
                    accounts for 20% of total revenue
                </div>
                <div className="status_report flex text-xs pt-2">
                    <p className="priority_status">
                        Priority:{" "}
                        <span className="text-blue-500">Moderate</span>
                    </p>
                    <p className="status_content pl-2">
                        Status:{" "}
                        <span className="text-green-600">In Progress</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Notification;
