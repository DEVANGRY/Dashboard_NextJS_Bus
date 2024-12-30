import React from "react";
import { Bell, CalendarDays, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Inter } from "next/font/google";
interface Props {
    classHeading: string;
}
const inter = Inter({ subsets: ["latin"] });
const Heading = (props: Props) => {
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
                    <Button className="w-10 h-10 ml-1" aria-label="Calendar">
                        <CalendarDays />
                    </Button>
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
