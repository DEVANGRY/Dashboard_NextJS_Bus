"use client";
import React, { useEffect, useRef, useState } from "react";
import { Bell, CalendarDays, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Inter } from "next/font/google";
import { Calendar } from "../ui/calendar";

interface Props {
    classHeading: string;
}

const inter = Inter({ subsets: ["latin"] });

const Heading = (props: Props) => {
    const [date, setDate] = useState<Date>(new Date());
    const [unHideCalendar, setUnHideCalendar] = useState<boolean>(false);
    const calendarRef = useRef<HTMLDivElement | null>(null);
    const calendarButtonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            console.log("123");
            if (
                calendarRef.current &&
                !calendarRef.current.contains(event.target as Node) &&
                !calendarButtonRef.current?.contains(event.target as Node)
            ) {
                setUnHideCalendar(false);
            }
        };
        if (unHideCalendar) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [unHideCalendar]);

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
                    ></Input>
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
                    <Button className="w-10 h-10" aria-label="Notification">
                        <Bell />
                    </Button>
                    <Button
                        className="w-10 h-10 ml-1 relative"
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
