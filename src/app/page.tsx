"use client";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { Inter, Recursive } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { convertFormatMoney } from "@/lib/utils";
import {
    EArea,
    EAreaProperties,
    EColor,
    ETitleTableHotBooking,
    ETypeFormat,
    IArea,
    ICharHotBookingData,
    IChartData,
    IDataStatistical,
    IDataTableHotBooking,
    IDataUser,
    IListDataArea,
    ITotalMoneyInMonth,
    IViewBowTooltipContent,
    TChartAllMoneyConfig,
    TChartConfig,
} from "@/types/common";

const dataListMoneyInMonth: ITotalMoneyInMonth[] = [
    { month: "October", money: 100000000 },
    { month: "November", money: 200000000 },
    { month: "December", money: 350000000 },
];
const totalListDataBookingInArea: IListDataArea[] = [
    {
        month: "9/2024",
        hoChiMinh: 119,
        daNang: 129,
        haNoi: 130,
    },
    {
        month: "10/2024",
        daNang: 99,
        hoChiMinh: 150,
        haNoi: 178,
    },
    {
        month: "11/2024",
        daNang: 144,
        hoChiMinh: 190,
        haNoi: 210,
    },
    {
        month: "12/2024",
        daNang: 99,
        hoChiMinh: 160,
        haNoi: 199,
    },
];
const dataListUser: IDataUser[] = [{ src: "asdasdasd", nameUser: "Dev" }];

const listIDataStatistical: IDataStatistical[] = [
    {
        icon: "/chart-area.svg",
        nameIcon: "amount",
        name: "Total Amount",
        numberData: 12345678,
        compareData: 10,
    },
    {
        icon: "/bus-front.svg",
        nameIcon: "bus",
        name: "Total of partner",
        numberData: 110,
        compareData: 5,
    },
    {
        icon: "/user-plus.svg",
        nameIcon: "customer",
        name: "New Customer",
        numberData: 66,
        compareData: 15,
    },
    {
        icon: "/ticket-x.svg",
        nameIcon: "cancel",
        name: "Cancel booking",
        numberData: 2,
        compareData: 5,
    },
];
const chartConfig = {
    Contact: {
        label: "Contact",
        color: "#60a5fa ",
    },
    Booking: {
        label: "Booking",
        color: "#2563eb",
    },
} satisfies TChartConfig;

const chartAllMoneyConfig = {
    money: {
        label: "Money",
        color: "#60a5fa ",
    },
} satisfies TChartAllMoneyConfig;

const chartData: IChartData[] = [
    { month: "October", Contact: 305, Booking: 200 },
    { month: "November", Contact: 237, Booking: 120 },
    { month: "December", Contact: 190, Booking: 170 },
];

const listDataHotBooking: IDataTableHotBooking[] = [
    {
        name: "Thiên Trường",
        quantityOrder: 150,
        quantityCancel: 10,
        averageResponseTime: 35,
        totalAmount: 15000000,
    },
    {
        name: "Ứng liêm",
        quantityOrder: 100,
        quantityCancel: 15,
        averageResponseTime: 30,
        totalAmount: 12000000,
    },
    {
        name: "Chương Mỹ",
        quantityOrder: 79,
        quantityCancel: 5,
        averageResponseTime: 28,
        totalAmount: 8000000,
    },
    {
        name: "Phú Định",
        quantityOrder: 68,
        quantityCancel: 20,
        averageResponseTime: 21,
        totalAmount: 6000000,
    },
];

const areas = Object.entries(EAreaProperties).map(([area, properties]) => ({
    name: area,
    color: properties.color,
}));

const inter = Inter({ subsets: ["latin"] });
const recursive = Recursive({ subsets: ["latin"] });

const titleTableHotBooking = Object.values(ETitleTableHotBooking);
const colorPieChart = Object.values(EColor);

const Home = () => {
    const [dataChartHotBooking, setDataChartHotBooking] = useState<
        ICharHotBookingData[]
    >([]);

    const getDataChartHotBooking = (): ICharHotBookingData[] => {
        return listDataHotBooking.map((data: IDataTableHotBooking) => ({
            name: data.name,
            value: data.quantityOrder,
        }));
    };
    useEffect(() => {
        setDataChartHotBooking(getDataChartHotBooking());
    }, [listDataHotBooking]);

    const totalAmount = useMemo(() => {
        return listDataHotBooking.reduce(
            (totalMoney: number, data: IDataTableHotBooking) => {
                return data.totalAmount + totalMoney;
            },
            0
        );
    }, [listDataHotBooking]);

    const toPercent = (decimal: number) => `${(decimal * 100).toFixed(1)}%`;
    const getPercent = (value: number, total: number) => {
        const ratio = total > 0 ? value / total : 0;

        return toPercent(ratio);
    };
    const renderTooltipContent = (o: IViewBowTooltipContent) => {
        const { payload, label } = o;
        const total = payload?.reduce(
            (result, entry) => result + entry.value,
            0
        );

        return (
            <div className="customized-tooltip-content">
                <p className="total">{`${label} (Total Booking: ${total})`}</p>
                <ul className="list">
                    {payload?.map((entry, index) => (
                        <li
                            key={`item-${index}`}
                            style={{ color: entry.color }}
                        >
                            {`${
                                entry.name == EArea.DANANG
                                    ? "Đà Nẵng"
                                    : entry.name == EArea.HANOI
                                    ? "Hà Nội"
                                    : "Hồ Chí Minh"
                            } : ${entry.value}(${getPercent(
                                entry.value,
                                total
                            )})`}
                        </li>
                    ))}
                </ul>
            </div>
        );
    };
    return (
        <>
            <header className="sub_header mt-5 mx-6 flex justify-between">
                <h1
                    className={`notification flex ${inter.className} font-semibold text-2xl items-center tracking-wider`}
                >
                    Welcome back, <p className="text-cyan-600">Admin</p>
                    <Image
                        src="/hello.png"
                        alt="Icon Hello"
                        width={30}
                        height={30}
                        className="ml-5"
                    ></Image>
                </h1>
                <div className="group_user flex">
                    {dataListUser &&
                        dataListUser?.map((user: IDataUser, index: number) => {
                            if (index <= 3) {
                                return (
                                    <div key={index} className="relative">
                                        <Image
                                            src="/globe.svg"
                                            key={index}
                                            alt="user"
                                            width={35}
                                            height={35}
                                            className={`mx-1 rounded-md ${
                                                index == 3 && " opacity-30 "
                                            }`}
                                        ></Image>
                                        {index == 3 && (
                                            <span className="number_user absolute inset-0 flex justify-center items-center">
                                                +{dataListUser.length - 3}
                                            </span>
                                        )}
                                    </div>
                                );
                            }
                        })}
                    <Button
                        className="add_friend ml-1 "
                        variant={"destructive"}
                    >
                        <UserPlus />
                        <span>Logout</span>
                    </Button>
                </div>
            </header>
            <div className="hots_notification mx-10 flex mt-5 ">
                <div className="key_data border-2 bg-gray-100 rounded-md w-2/3 h-56 px-4 pt-3 ">
                    <div className="hots_notification">
                        <h3
                            className={`title_data ${inter.className} font-semibold`}
                        >
                            Car booking sales today
                        </h3>
                        <p
                            className={`sub_title_data ${inter.className} text-sm`}
                        >
                            Booking summary
                        </p>
                    </div>
                    <div className="btn_statistical flex pt-3">
                        {listIDataStatistical &&
                            listIDataStatistical.map(
                                (data: IDataStatistical, index: number) => {
                                    return (
                                        <div
                                            key={index}
                                            className={`flex flex-col  basis-1/4 border-2 px-3 py-3 mr-5 rounded-lg ${inter.className} bg-white`}
                                        >
                                            <Image
                                                src={data.icon}
                                                alt={data.icon}
                                                width={25}
                                                height={25}
                                            ></Image>
                                            <div className="data_main_static pt-1 text-lg">
                                                {convertFormatMoney(
                                                    data.numberData,
                                                    ETypeFormat.Comma
                                                )}
                                                {data.nameIcon == "amount"
                                                    ? "VND"
                                                    : ""}
                                            </div>
                                            <p
                                                className={`name_data_static text-sm ${recursive.className}`}
                                            >
                                                {data.name}
                                            </p>
                                            <div className="compare_detail_static text-xs pt-1">
                                                +
                                                <span
                                                    className={`text-cyan-600 pl-1 ${recursive.className}`}
                                                >
                                                    {data.compareData}%
                                                </span>{" "}
                                                from yesterday
                                            </div>
                                        </div>
                                    );
                                }
                            )}
                    </div>
                </div>
                <div className="chart_bookingTickets border-2 bg-gray-100 rounded-md w-1/4 ml-10 h-56 pt-3 px-4">
                    <h3
                        className={`title_data ${inter.className} font-semibold`}
                    >
                        Booking completion rate
                    </h3>
                    <ChartContainer config={chartConfig} className="px-2 mt-5">
                        <BarChart data={chartData}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Bar
                                dataKey="Contact"
                                fill="var(--color-Contact)"
                                radius={4}
                            />
                            <Bar
                                dataKey="Booking"
                                fill="var(--color-Booking)"
                                radius={4}
                            />
                        </BarChart>
                    </ChartContainer>
                </div>
            </div>
            <div className="hots_booking mx-10 flex mt-5">
                <div className="key_data border-2 bg-gray-100 rounded-md w-2/3 h-72 px-4 pt-3 ">
                    <div className="top_booking">
                        <h3
                            className={`title_data ${inter.className} font-semibold`}
                        >
                            Top trending bus companies
                        </h3>
                        <Table className="mt-4">
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[20px]">
                                        #
                                    </TableHead>
                                    {titleTableHotBooking &&
                                        titleTableHotBooking.map(
                                            (item: string, index: number) => {
                                                return (
                                                    <TableHead key={index}>
                                                        {item}
                                                    </TableHead>
                                                );
                                            }
                                        )}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {listDataHotBooking &&
                                    listDataHotBooking.map(
                                        (
                                            item: IDataTableHotBooking,
                                            index: number
                                        ) => {
                                            return (
                                                <TableRow key={index}>
                                                    <TableCell className="font-medium">
                                                        {index + 1}
                                                    </TableCell>
                                                    <TableCell>
                                                        {item.name}
                                                    </TableCell>
                                                    <TableCell className="text-left">
                                                        {item.quantityOrder}
                                                    </TableCell>
                                                    <TableCell className="text-left">
                                                        {item.quantityCancel}
                                                    </TableCell>
                                                    <TableCell className="text-left">
                                                        {
                                                            item.averageResponseTime
                                                        }
                                                        (Min)
                                                    </TableCell>
                                                    <TableCell className="text-right">
                                                        {convertFormatMoney(
                                                            item.totalAmount,
                                                            ETypeFormat.Comma
                                                        )}{" "}
                                                        VNĐ
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        }
                                    )}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={5}>
                                        Total Money
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {convertFormatMoney(
                                            +totalAmount,
                                            ETypeFormat.Comma
                                        )}{" "}
                                        VNĐ
                                    </TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>
                </div>
                <div className="chart_bookingTickets flex flex-col border-2 bg-gray-100 rounded-md w-1/4 ml-10 h-72 pt-3 px-4">
                    <h3
                        className={`title_data ${inter.className} font-semibold`}
                    >
                        Book tickets between bus operators
                    </h3>
                    <ChartContainer
                        config={chartConfig}
                        className="px-1 mt-2 basis-3/4"
                    >
                        <PieChart>
                            <Pie
                                data={dataChartHotBooking}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                label
                            >
                                {dataChartHotBooking.map(
                                    (
                                        data: ICharHotBookingData,
                                        index: number
                                    ) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={colorPieChart[index]}
                                        />
                                    )
                                )}
                            </Pie>
                            <ChartTooltip content={<ChartTooltipContent />} />
                        </PieChart>
                    </ChartContainer>
                </div>
            </div>
            <div className="total_money_month mx-10 flex mt-5 mb-20">
                <div className="chart_money_month flex flex-col border-2 bg-gray-100 rounded-md w-1/4 mr-10 h-80 pt-3 px-4">
                    <h3
                        className={`title_data ${inter.className} font-semibold`}
                    >
                        Earnings
                    </h3>
                    <div className={`sub_title ${recursive.className} text-sm`}>
                        Total Expense
                    </div>
                    <h2 className="total_money_data mt-1 pt-1 text-2xl text-green-500">
                        +{convertFormatMoney(123456789, ETypeFormat.Comma)}{" "}
                        <span className="text-black text-lg">VND</span>
                    </h2>
                    <p className="detail_profit mt-1">
                        Profit is{" "}
                        <span className="sub_detail text-blue-700">12%</span>{" "}
                        More than last Month
                    </p>
                    <ChartContainer
                        config={chartAllMoneyConfig}
                        className="px-2 mt-5"
                    >
                        <BarChart data={dataListMoneyInMonth}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Bar
                                dataKey="money"
                                fill="var(--color-money)"
                                radius={4}
                            />
                        </BarChart>
                    </ChartContainer>
                </div>
                <div className="key_data border-2 bg-gray-100 rounded-md w-2/3 h-80 px-4 pt-3 ">
                    <h3
                        className={`title_area ${inter.className} font-semibold`}
                    >
                        Areas
                    </h3>
                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                        className={`pb-5 px-1`}
                    >
                        <AreaChart
                            width={500}
                            height={400}
                            data={totalListDataBookingInArea}
                            stackOffset="expand"
                            margin={{
                                top: 10,
                                right: 20,
                                left: 10,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <Tooltip content={renderTooltipContent} />
                            <YAxis tickFormatter={toPercent} />
                            {areas &&
                                areas.map((item: IArea, index: number) => {
                                    return (
                                        <Area
                                            type="monotone"
                                            dataKey={item.name}
                                            stackId="1"
                                            stroke={item.color}
                                            fill={item.color}
                                            key={index}
                                        />
                                    );
                                })}
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    );
};

export default Home;
