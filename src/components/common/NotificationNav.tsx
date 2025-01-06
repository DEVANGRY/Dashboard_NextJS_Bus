"use client";
import { formatDate } from "@/lib/utils";
import { EPriority, IDataNotification } from "@/types/common";
import { Ellipsis, Check } from "lucide-react";
import { Inter, Recursive } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
const recursive = Recursive({ subsets: ["latin"] });

interface PropsNotification {
    dataNotification: IDataNotification;
}

const NotificationNav = (props: PropsNotification) => {
    const { dataNotification } = props;

    return (
        <div
            className={`${
                inter.className
            } relative border-2 mb-2 rounded-lg py-4 bg-slate-100 px-4 flex shadow-md ${
                dataNotification.isRead ? "text-gray-500" : ""
            }`}
        >
            <div className="content flex flex-col pl-4 basis-11/12">
                <div className="title_notification font-semibold flex justify-between items-center">
                    <div className="text_title_notification flex gap-2 justify-center items-center">
                        <span className="text-sm">
                            {dataNotification.title}
                        </span>
                        {dataNotification.isRead && <Check className="w-4" />}
                    </div>
                    <Ellipsis className="w-4 text-gray-500" />
                </div>
                <div
                    className={`detail_notification ${recursive.className} text-xs opacity-75 mt-2`}
                >
                    {dataNotification.detail}
                </div>
                <div className="meta_data flex items-center justify-between mt-2 text-xs opacity-75">
                    <span className="priority">
                        Priority:{" "}
                        <span
                            className={
                                dataNotification.priority === EPriority.LOW
                                    ? "text-green-600"
                                    : dataNotification.priority ===
                                      EPriority.MEDIUM
                                    ? "text-yellow-500"
                                    : "text-red-500"
                            }
                        >
                            {dataNotification.priority}
                        </span>
                    </span>
                    <span className="timestamp">
                        {formatDate(dataNotification.createdAt)}
                    </span>
                </div>
            </div>
            {!dataNotification.isRead && (
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-blue-400 text-white rounded-full text-xs flex items-center justify-center"></span>
            )}
        </div>
    );
};

export default NotificationNav;
