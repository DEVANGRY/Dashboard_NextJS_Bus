"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    EColor,
    EReportDate,
    ICarrierPerformance,
    IPopularRouter,
    IPriceRangeData,
    IReginData,
} from "@/types/common";
import { Inter } from "next/font/google";
import React from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Legend,
    Pie,
    PieChart,
    Tooltip,
    XAxis,
    YAxis,
    ResponsiveContainer,
} from "recharts";

const inter = Inter({ subsets: ["latin"] });

const TicketBookingManagement = () => {
    const colorChart = Object.values(EColor);

    const priceRangeData: IPriceRangeData[] = [
        { range: "0-500k", count: 150 },
        { range: "500k-1M", count: 280 },
        { range: "1M-1.5M", count: 200 },
        { range: "1.5M+", count: 100 },
    ];

    const regionData: IReginData[] = [
        { name: "Miền Bắc", value: 400 },
        { name: "Miền Trung", value: 300 },
        { name: "Miền Nam", value: 500 },
    ];

    const carrierPerformance: ICarrierPerformance[] = [
        {
            name: "Phương Trang",
            tickets: 1200,
            revenue: 1500000000,
            satisfaction: 4.5,
        },
        {
            name: "Hoàng Long",
            tickets: 800,
            revenue: 1000000000,
            satisfaction: 4.3,
        },
        {
            name: "Mai Linh",
            tickets: 600,
            revenue: 750000000,
            satisfaction: 4.2,
        },
        {
            name: "Sao Việt",
            tickets: 400,
            revenue: 500000000,
            satisfaction: 4.0,
        },
    ];

    const popularRouter: IPopularRouter[] = [
        {
            namePopular: "Hà Nội - Sài Gòn",
            ticket: 2500,
        },
        {
            namePopular: "Hà Nội - Đà Nẵng",
            ticket: 1800,
        },
        {
            namePopular: "Sài Gòn - Đà Lạt",
            ticket: 1500,
        },
    ];
    return (
        <div
            className={`p-2 md:p-4 lg:p-6 space-y-4 md:space-y-6 ${inter.className}`}
        >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h1 className="text-xl md:text-2xl font-bold">
                    Ticket Analysis
                </h1>
                <Select>
                    <SelectTrigger className="w-full md:w-40 border rounded-lg px-4 py-2">
                        <SelectValue placeholder="This Month"></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="month">
                                {EReportDate.MONTH}
                            </SelectItem>
                            <SelectItem value="quarter">
                                {EReportDate.QUARTER}
                            </SelectItem>
                            <SelectItem value="year">
                                {EReportDate.YEAR}
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg md:text-xl">
                            Ticket Price Distribution
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="w-full h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={priceRangeData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="range" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="count" fill="#8884d8" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg md:text-xl">
                            Ticket Distribution By Area
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="w-full h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={regionData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        outerRadius={100}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {regionData.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={
                                                    colorChart[
                                                        index %
                                                            colorChart.length
                                                    ]
                                                }
                                            />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="text-lg md:text-xl">
                        Garage Performance
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[600px]">
                            <thead>
                                <tr className="border-b">
                                    <th className="px-2 md:px-4 py-3 text-left text-sm md:text-base">
                                        Bus
                                    </th>
                                    <th className="px-2 md:px-4 py-3 text-left text-sm md:text-base">
                                        Ticket Number
                                    </th>
                                    <th className="px-2 md:px-4 py-3 text-left text-sm md:text-base">
                                        Revenue
                                    </th>
                                    <th className="px-2 md:px-4 py-3 text-left text-sm md:text-base">
                                        Assessment
                                    </th>
                                    <th className="px-2 md:px-4 py-3 text-left text-sm md:text-base">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {carrierPerformance.map((carrier, index) => (
                                    <tr
                                        key={index}
                                        className="border-b hover:bg-gray-50"
                                    >
                                        <td className="px-2 md:px-4 py-3 text-sm md:text-base">
                                            {carrier.name}
                                        </td>
                                        <td className="px-2 md:px-4 py-3 text-sm md:text-base">
                                            {carrier.tickets.toLocaleString()}
                                        </td>
                                        <td className="px-2 md:px-4 py-3 text-sm md:text-base">
                                            {(
                                                carrier.revenue / 1000000
                                            ).toLocaleString()}{" "}
                                            VNĐ
                                        </td>
                                        <td className="px-2 md:px-4 py-3">
                                            <div className="flex items-center text-sm md:text-base">
                                                <span className="text-yellow-500">
                                                    ★
                                                </span>
                                                <span className="ml-1">
                                                    {carrier.satisfaction}/5.0
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-2 md:px-4 py-3">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs md:text-sm ${
                                                    carrier.tickets > 1000
                                                        ? "bg-green-100 text-green-600"
                                                        : "bg-yellow-100 text-yellow-600"
                                                }`}
                                            >
                                                {carrier.tickets > 1000
                                                    ? "Works great"
                                                    : "Needs improvement"}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg md:text-xl">
                            Popular Routes
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {popularRouter &&
                            popularRouter.map(
                                (item: IPopularRouter, index: number) => {
                                    return (
                                        <div
                                            className="flex flex-col md:flex-row justify-between items-start md:items-center p-3 bg-gray-50 rounded-lg"
                                            key={index}
                                        >
                                            <span className="text-sm md:text-base">
                                                {item.namePopular}
                                            </span>
                                            <span className="font-bold text-sm md:text-base">
                                                {item.ticket} Tickets
                                            </span>
                                        </div>
                                    );
                                }
                            )}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg md:text-xl">
                            Fare Management
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                <div>
                                    <h3 className="font-semibold text-sm md:text-base">
                                        Average Price
                                    </h3>
                                    <p className="text-gray-500 text-sm">
                                        By route
                                    </p>
                                </div>
                                <button className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm md:text-base">
                                    Update price
                                </button>
                            </div>
                            <div className="space-y-2">
                                {[
                                    ["Hà Nội - Sài Gòn", "1,200,000 VNĐ"],
                                    ["Hà Nội - Đà Nẵng", "800,000 VNĐ"],
                                    ["Sài Gòn - Đà Lạt", "450,000 VNĐ"],
                                ].map(([route, price], index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col md:flex-row justify-between items-start md:items-center p-2"
                                    >
                                        <span className="text-sm md:text-base">
                                            {route}
                                        </span>
                                        <span className="font-bold text-sm md:text-base">
                                            {price}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default TicketBookingManagement;
