"use client";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { Inter, Recursive } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Pie,
    PieChart,
    XAxis,
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
import { EColor, ETypeFormat, convertFormatMoney } from "@/lib/utils";
interface IDataUser {
    src: string;
    nameUser: string;
}
interface IDataStatistical {
    name: string;
    numberData: number;
    icon: string;
    nameIcon: string;
    compareData: number;
}

type TChartConfig = {
    Contact: {
        label: string;
        color: string;
    };
    Booking: {
        label: string;
        color: string;
    };
};
interface IChartData {
    month: string;
    Contact: number;
    Booking: number;
}

interface IDataTableHotBooking {
    name: string;
    quantityOrder: number;
    quantityCancel: number;
    averageResponseTime: number;
    totalAmount: number;
}

interface ICharHotBookingData {
    name: string;
    value: number;
}
enum ETitleTableHotBooking {
    Name = "Name of the company",
    QuantityOrder = "Quantity ordered",
    QuantityCancel = "Number of Cancellations",
    AverageResponseTime = "Average Response Time",
    TotalAmount = "Revenue from the car station",
}

const dataListUser: IDataUser[] = [
    { src: "asdasdasd", nameUser: "Dev" },
    { src: "asdasdasd", nameUser: "Dev" },
    { src: "asdasdasd", nameUser: "Dev" },
    { src: "asdasdasd", nameUser: "Dev" },
    { src: "asdasdasd", nameUser: "Dev" },
    { src: "asdasdasd", nameUser: "Dev" },
];

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
const TChartConfig: TChartConfig = {
    Contact: {
        label: "Contact",
        color: "#60a5fa ",
    },
    Booking: {
        label: "Booking",
        color: "#2563eb",
    },
} satisfies TChartConfig;

const IChartData: IChartData[] = [
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
                    <Button className="add_friend ml-1" variant={"destructive"}>
                        <UserPlus />
                        <span>Invite</span>
                    </Button>
                </div>
            </header>
            <div className="hots_notification mx-10 flex mt-5">
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
                    <ChartContainer config={TChartConfig} className="px-2 mt-5">
                        <BarChart data={IChartData}>
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
            {/* Top booking  */}
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
                                        )}
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
                        config={TChartConfig}
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
            {/* All Money Month*/}
            <div className="hots_booking mx-10 flex mt-5 mb-20">
                <div className="chart_bookingTickets flex flex-col border-2 bg-gray-100 rounded-md w-1/4 mr-10 h-72 pt-3 px-4">
                    <h3
                        className={`title_data ${inter.className} font-semibold`}
                    >
                        Book tickets between bus operators
                    </h3>
                    <ChartContainer
                        config={TChartConfig}
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
                                        )}
                                    </TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
