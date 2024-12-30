"use client";
import { Button } from "@/components/ui/button";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import {
    EColor,
    ETypeFormat,
    IChartRateMoneyDay,
    IDataMoneyMonthMain,
    ITopMoneyBooking,
} from "@/types/common";
import { MoveUp } from "lucide-react";
import { Inter, Recursive } from "next/font/google";
import React from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Label,
    Legend,
    Pie,
    PieChart,
    XAxis,
} from "recharts";
import Notification from "./_components/Notification";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { convertFormatMoney } from "@/lib/utils";

const chartDataMonth: IDataMoneyMonthMain[] = [
    { month: "January", moneyInMonth: 124153643 },
    { month: "February", moneyInMonth: 121532643 },
    { month: "March", moneyInMonth: 241532643 },
    { month: "April", moneyInMonth: 141532643 },
    { month: "May", moneyInMonth: 41532643 },
    { month: "June", moneyInMonth: 53252346 },
    { month: "July", moneyInMonth: 63461313 },
    { month: "August", moneyInMonth: 12312354 },
    { month: "September", moneyInMonth: 124123123 },
    { month: "October", moneyInMonth: 191231241 },
    { month: "November", moneyInMonth: 90234234 },
    { month: "December", moneyInMonth: 123456789 },
];
const chartDataDay: IChartRateMoneyDay[] = [
    { name: "today", money: 45000000 },
    { name: "month", money: 123456789 },
];
const chartDataMonthConfig = {
    moneyInMonth: {
        label: "Money",
        color: "#2332ff",
    },
} satisfies ChartConfig;

const chartDataDayConfig = {
    money: {
        label: "Money",
        color: "#18123",
    },
} satisfies ChartConfig;

const topMoneyBooking: ITopMoneyBooking[] = [
    {
        name: "Thiên trường",
        money: 15000000,
        srcImage: "/anh1.svg",
    },
    {
        name: "Thiên Mỹ",
        money: 10000000,
        srcImage: "/anh2.jpg",
    },
    {
        name: "Hà Nam",
        money: 5000000,
        srcImage: "/anh3.jpg",
    },
    {
        name: "Việt Nam",
        money: 1000000,
        srcImage: "/anh3.jpg",
    },
];

const inter = Inter({ subsets: ["latin"] });
const recursive = Recursive({ subsets: ["latin"] });

const colorPieChart = Object.values(EColor);
const RevenueManagement = () => {
    return (
        <div>
            <div className="row_manager_money w-11/12 flex mt-6 ml-7 border-b-2">
                <div className="left-manager_money_month w-2/3 border-r-2">
                    <div
                        className={`data_money flex justify-between px-6 ${inter.className}`}
                    >
                        <div className="left-data_money flex flex-col">
                            <h2 className={`title text-lg`}>
                                Revenue in month
                            </h2>
                            <span className="money_month pt-2 text-2xl text-indigo-600">
                                123,456,789 VNĐ
                            </span>
                            <div className="rate flex items-center text-green-500 text-sm pt-1">
                                <MoveUp className="w-4 h-4" />
                                <span className="rate_number flex">2.1% </span>
                                <span className="sub_title text-black ml-1">
                                    vs last week
                                </span>
                            </div>
                            <div className="day_limt pt-1 text-sm opacity-35">
                                Booking from 1-26 Dec,2024
                            </div>
                        </div>
                        <div className="export_data">
                            <Button variant={"outline"}>View Report</Button>
                        </div>
                    </div>
                    <div className="chart_data_money_in_month px-7 pt-3 flex justify-center">
                        <ChartContainer
                            aspect-auto
                            config={chartDataMonthConfig}
                            className="h-60 w-11/12"
                        >
                            <BarChart data={chartDataMonth} accessibilityLayer>
                                <CartesianGrid vertical={false}></CartesianGrid>
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Bar
                                    dataKey="moneyInMonth"
                                    fill="var(--color-moneyInMonth)"
                                    radius={8}
                                    barSize={40}
                                />
                            </BarChart>
                        </ChartContainer>
                    </div>
                </div>
                <div className="right-manager_money_day w-1/3 pl-8">
                    <div
                        className={`data_money flex justify-between ${inter.className}`}
                    >
                        <div className="left-data_money flex flex-col">
                            <h2 className={`title text-lg`}>Today</h2>
                            <div className="day_limt pt-1 text-sm opacity-35">
                                26/12/2024
                            </div>
                        </div>
                        <div className="export_data">
                            <Button variant={"outline"}>View Report</Button>
                        </div>
                    </div>
                    <div className="chart_data_day">
                        <ChartContainer
                            config={chartDataDayConfig}
                            className="mt-3"
                        >
                            <PieChart>
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Pie
                                    data={chartDataDay}
                                    dataKey="money"
                                    nameKey="name"
                                    innerRadius={50}
                                    strokeWidth={10}
                                >
                                    <Label
                                        content={({ viewBox: viewBox }) => {
                                            return (
                                                <text
                                                    x={viewBox?.cx}
                                                    y={viewBox?.cy}
                                                    textAnchor="middle"
                                                    dominantBaseline="middle"
                                                >
                                                    <tspan
                                                        x={viewBox?.cx}
                                                        y={viewBox?.cy || 0}
                                                        className="fill-foreground text-3xl font-bold text-red"
                                                    >
                                                        15%
                                                    </tspan>
                                                    <tspan
                                                        x={viewBox?.cx}
                                                        y={viewBox?.cy + 24}
                                                        className={`${inter.className} bg-lime-300`}
                                                    >
                                                        in month
                                                    </tspan>
                                                </text>
                                            );
                                        }}
                                    />
                                    {chartDataDay.map(
                                        (
                                            data: IChartRateMoneyDay,
                                            index: number
                                        ) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={colorPieChart[index]}
                                            />
                                        )
                                    )}
                                </Pie>
                                <Legend
                                    formatter={(value: string) => {
                                        return value == "today"
                                            ? "To Day"
                                            : "Month";
                                    }}
                                    // wrapperStyle={{ marginLeft: "10px" }}
                                ></Legend>
                            </PieChart>
                        </ChartContainer>
                        <p
                            className={`sub_title_data ${recursive.className} text-md mt-10 text-center`}
                        >
                            Today's revenue is{" "}
                            {convertFormatMoney(45000000, ETypeFormat.Comma)}{" "}
                            VNĐ
                            <span className="text-blue-500">(15%)</span> of the
                            month.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row_manager_topic w-11/12 flex ml-7">
                <div className="col_notification w-1/3 border-r-2 px-6">
                    <div
                        className={`content_notification pt-7 ${inter.className}`}
                    >
                        <h1 className="title_notification text-lg">
                            Notification
                        </h1>
                        <p className="sub_title_notification pt-1 text-sm opacity-35 mb-2">
                            Report on financial reform needs attention
                        </p>
                        <Notification></Notification>
                        <Notification></Notification>
                    </div>
                </div>
                <div className="col w-1/3 border-r-2 pl-5">
                    <div
                        className={`content_top_booking pt-7 ${inter.className}`}
                    >
                        <div className="header_top_booking flex justify-between mr-7">
                            <div className="content_title">
                                <h1 className="title_notification text-lg">
                                    Most booked car
                                </h1>
                                <p className="sub_title_notification pt-1 text-sm opacity-35 mb-2">
                                    Billing Information
                                </p>
                            </div>
                            <div className="export_data">
                                <Button variant={"outline"}>View Report</Button>
                            </div>
                        </div>
                        <div className="list_booking overflow-y-hidden">
                            {topMoneyBooking &&
                                topMoneyBooking.map(
                                    (item: ITopMoneyBooking, index: number) => {
                                        return (
                                            <div
                                                className="row_booking flex items-center gap-5 border-b-2 pb-3 w-11/12 mt-2"
                                                key={index}
                                            >
                                                <Avatar className="w-8 h-8">
                                                    <AvatarImage
                                                        src={item.srcImage}
                                                    />
                                                    <AvatarFallback>
                                                        Car
                                                    </AvatarFallback>
                                                </Avatar>
                                                <p className="name_home_car w-1/3">
                                                    {item.name}
                                                </p>
                                                <span className="total_money opacity-35">
                                                    {convertFormatMoney(
                                                        item.money,
                                                        ETypeFormat.Comma
                                                    )}{" "}
                                                    VNĐ
                                                </span>
                                            </div>
                                        );
                                    }
                                )}
                        </div>
                    </div>
                </div>
                <div className="col_use_cost w-1/3 pl-8">
                    <div
                        className={`header_use_cost flex justify-between pt-7  ${inter.className}`}
                    >
                        <div className="content_use_cost">
                            <h1 className="title_use_cost text-lg">
                                Usage costs
                            </h1>
                            <p
                                className={`money_use_cost text-2xl mt-2 text-red-500`}
                            >
                                {convertFormatMoney(9123422, ETypeFormat.Comma)}{" "}
                                VNĐ
                            </p>
                            <p className="sub_title_use_cost pt-1 text-sm opacity-35 mb-2">
                                Sales from 1-26 Dec, 2024
                            </p>
                        </div>
                        <div className="export_data">
                            <Button variant={"outline"}>View Report</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RevenueManagement;
