"use client";
import React, { useEffect, useRef, useState } from "react";
import { Bell, CalendarDays, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Inter } from "next/font/google";
import { Calendar } from "@/components/ui/calendar";
import NotificationNav from "./NotificationNav";
import { IDataNotification } from "@/types/common";
import { listNotifications } from "@/app/data/data";

interface Props {
    classHeading: string;
}

const inter = Inter({ subsets: ["latin"] });

const Heading = (props: Props) => {
    const [date, setDate] = useState<Date>(new Date());
    const [unHideCalendar, setUnHideCalendar] = useState<boolean>(false);
    const [showNotifications, setShowNotifications] = useState<boolean>(false); // Trạng thái hiển thị thông báo
    const [notifications, setNotifications] =
        useState<IDataNotification[]>(listNotifications);

    const calendarRef = useRef<HTMLDivElement | null>(null);
    const calendarButtonRef = useRef<HTMLButtonElement | null>(null);
    const notificationButtonRef = useRef<HTMLButtonElement | null>(null);
    const notificationRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                calendarRef.current &&
                !calendarRef.current.contains(event.target as Node) &&
                !calendarButtonRef.current?.contains(event.target as Node)
            ) {
                setUnHideCalendar(false);
            }
        };
        const handleClickOutsideNotifications = (event: MouseEvent) => {
            if (
                notificationRef.current &&
                !notificationRef.current.contains(event.target as Node) &&
                !notificationButtonRef.current?.contains(event.target as Node)
            ) {
                setShowNotifications(false);
            }
        };

        if (unHideCalendar) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        if (showNotifications) {
            document.addEventListener(
                "mousedown",
                handleClickOutsideNotifications
            );
        } else {
            document.removeEventListener(
                "mousedown",
                handleClickOutsideNotifications
            );
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener(
                "mousedown",
                handleClickOutsideNotifications
            );
        };
    }, [unHideCalendar, showNotifications]);

    return (
        <div
            className={`${props.classHeading} Heading flex pt-5 mx-2 ${inter.className} bg-slate-50 drop-shadow-md`}
        >
            <div className="solution_page basis-2/12 ml-10 mt-2 text-2xl font-medium">
                <span className="text-emerald-600">Dash</span>board
            </div>
            <div className="search_toDo basis-8/12 mt-1">
                <div className="search_bar flex">
                    <Input
                        className="input_search w-8/12 h-10 ml-20 drop-shadow-lg"
                        placeholder="Search any where here ..."
                        tabIndex={0}
                    />
                    <Button
                        className="btn_search w-10 h-10 ml-1"
                        aria-label="Search task"
                    >
                        <span className="sr-only">Search Task</span>
                        <Search />
                    </Button>
                </div>
            </div>
            <div className="calendar flex basis-2/12 mr-10">
                <div className="btn_calendar flex mt-1 ml-1">
                    <Button
                        className="w-10 h-10 relative"
                        aria-label="Notification"
                        onClick={() => setShowNotifications(!showNotifications)}
                        ref={notificationButtonRef}
                    >
                        <Bell />
                        {notifications.length > 0 && (
                            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
                                {notifications.length}
                            </span>
                        )}
                    </Button>

                    {showNotifications && (
                        <div
                            className="absolute top-full right-4 w-96 bg-slate-300 shadow-2xl rounded-lg p-2 -mt-7 px-5 overflow-auto h-96"
                            ref={notificationRef}
                        >
                            <div className="text-gray-700 font-semibold mb-2">
                                Notifications
                            </div>
                            <ul>
                                {notifications.length > 0 ? (
                                    notifications.map(
                                        (
                                            item: IDataNotification,
                                            index: number
                                        ) => {
                                            return (
                                                <NotificationNav
                                                    dataNotification={item}
                                                    key={index}
                                                ></NotificationNav>
                                            );
                                        }
                                    )
                                ) : (
                                    <li className="py-1 px-2 text-gray-500">
                                        No notifications
                                    </li>
                                )}
                            </ul>
                        </div>
                    )}

                    <Button
                        className="w-10 h-10 ml-2 relative"
                        aria-label="Calendar"
                        onClick={() => setUnHideCalendar(!unHideCalendar)}
                        ref={calendarButtonRef}
                    >
                        <CalendarDays />
                    </Button>
                    {unHideCalendar && (
                        <div
                            className="absolute top-full -mt-7 right-24 z-10"
                            ref={calendarRef}
                        >
                            <Calendar
                                mode="single"
                                selected={date}
                                className="shadow-lg rounded-lg border border-gray-200 bg-slate-300"
                            />
                        </div>
                    )}
                </div>
                <div className="calendar_detail ml-10 w-7 h-8">
                    <p className="day">Monday</p>
                    <p className="calendar_subDetail text-emerald-600 text-sm">
                        19/12/2024
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Heading;
