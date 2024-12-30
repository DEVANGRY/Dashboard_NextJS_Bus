import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
    return (
        <div className={`content_search_bar flex gap-3`}>
            <Input
                placeholder="Search name customer..."
                className="basis-1/3"
            ></Input>
            <Select>
                <SelectTrigger className="basis-1/5">
                    <SelectValue placeholder="Area"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="MienBac">Miền Bắc</SelectItem>
                        <SelectItem value="MienTrung">Miền Trung</SelectItem>
                        <SelectItem value="MienNam">Miền Nam</SelectItem>
                        <SelectItem value="MienTay">Miền Tây</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="basis-1/5">
                    <SelectValue placeholder="Distance"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="20">0-20Km</SelectItem>
                        <SelectItem value="50">20-50Km</SelectItem>
                        <SelectItem value="100">50-100Km</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Button
                className="btn_search w-10 h-10 ml-1"
                // variant={"destructive"}
                aria-label="Search task"
            >
                <span className="sr-only">Search Task</span>
                <Search />
            </Button>
        </div>
    );
};

export default SearchBar;
//     <div className="w-full min-h-screen p-4">
//         {/* Header Section */}
//         <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
//             <h1
//                 className={`${inter.className} font-semibold text-xl md:text-2xl flex items-center gap-2`}
//             >
//                 Welcome back, <span className="text-cyan-600">Admin</span>
//                 <Image
//                     src="/hello.png"
//                     alt="Icon Hello"
//                     width={30}
//                     height={30}
//                     className="ml-2"
//                 />
//             </h1>

//             <div className="flex items-center gap-2">
//                 <div className="flex -space-x-2">
//                     {dataListUser?.slice(0, 4).map((user, index) => (
//                         <div key={index} className="relative">
//                             <Image
//                                 src="/globe.svg"
//                                 alt="user"
//                                 width={35}
//                                 height={35}
//                                 className={`rounded-md ${
//                                     index === 3 ? "opacity-30" : ""
//                                 }`}
//                             />
//                             {index === 3 && dataListUser.length > 4 && (
//                                 <span className="absolute inset-0 flex items-center justify-center text-sm">
//                                     +{dataListUser.length - 3}
//                                 </span>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//                 <Button
//                     variant="destructive"
//                     className="flex items-center gap-2"
//                 >
//                     <UserPlus className="h-4 w-4" />
//                     <span className="hidden sm:inline">Logout</span>
//                 </Button>
//             </div>
//         </header>

//         {/* Statistics Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
//             {listIDataStatistical.map((data, index) => (
//                 <div
//                     key={index}
//                     className="bg-white p-4 rounded-lg border shadow-sm"
//                 >
//                     <div className="flex items-start gap-3">
//                         <Image
//                             src={data.icon}
//                             alt={data.nameIcon}
//                             width={25}
//                             height={25}
//                         />
//                         <div>
//                             <div className="text-lg font-medium">
//                                 {convertFormatMoney(
//                                     data.numberData,
//                                     ETypeFormat.Comma
//                                 )}
//                                 {data.nameIcon === "amount" ? " VND" : ""}
//                             </div>
//                             <p
//                                 className={`text-sm text-gray-600 ${recursive.className}`}
//                             >
//                                 {data.name}
//                             </p>
//                             <div className="text-xs mt-1">
//                                 +
//                                 <span className="text-cyan-600">
//                                     {data.compareData}%
//                                 </span>{" "}
//                                 from yesterday
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>

//         {/* Charts Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
//             {/* Booking Completion Rate */}
//             <div className="bg-white p-4 rounded-lg border shadow-sm">
//                 <h3 className={`${inter.className} font-semibold mb-4`}>
//                     Booking Completion Rate
//                 </h3>
//                 <div className="h-[200px]">
//                     <ResponsiveContainer width="100%" height="100%">
//                         <BarChart data={chartData}>
//                             <CartesianGrid vertical={false} />
//                             <XAxis
//                                 dataKey="month"
//                                 tickLine={false}
//                                 tickMargin={10}
//                                 axisLine={false}
//                                 tickFormatter={(value) => value.slice(0, 3)}
//                             />
//                             <ChartTooltip
//                                 content={<ChartTooltipContent />}
//                             />
//                             <Bar
//                                 dataKey="Contact"
//                                 fill="var(--color-Contact)"
//                                 radius={4}
//                             />
//                             <Bar
//                                 dataKey="Booking"
//                                 fill="var(--color-Booking)"
//                                 radius={4}
//                             />
//                         </BarChart>
//                     </ResponsiveContainer>
//                 </div>
//             </div>

//             {/* Pie Chart */}
//             <div className="bg-white p-4 rounded-lg border shadow-sm">
//                 <h3 className={`${inter.className} font-semibold mb-4`}>
//                     Book Tickets Distribution
//                 </h3>
//                 <div className="h-[200px]">
//                     <ResponsiveContainer width="100%" height="100%">
//                         <PieChart>
//                             <Pie
//                                 data={dataChartHotBooking}
//                                 dataKey="value"
//                                 nameKey="name"
//                                 cx="50%"
//                                 cy="50%"
//                                 outerRadius={80}
//                                 fill="#8884d8"
//                                 label
//                             >
//                                 {dataChartHotBooking.map((entry, index) => (
//                                     <Cell
//                                         key={`cell-${index}`}
//                                         fill={colorPieChart[index]}
//                                     />
//                                 ))}
//                             </Pie>
//                             <ChartTooltip
//                                 content={<ChartTooltipContent />}
//                             />
//                         </PieChart>
//                     </ResponsiveContainer>
//                 </div>
//             </div>

//             {/* Area Chart */}
//             <div className="bg-white p-4 rounded-lg border shadow-sm">
//                 <h3 className={`${inter.className} font-semibold mb-4`}>
//                     Areas Distribution
//                 </h3>
//                 <div className="h-[200px]">
//                     <ResponsiveContainer width="100%" height="100%">
//                         <AreaChart
//                             data={totalListDataBookingInArea}
//                             stackOffset="expand"
//                             margin={{
//                                 top: 10,
//                                 right: 20,
//                                 left: 10,
//                                 bottom: 0,
//                             }}
//                         >
//                             <CartesianGrid strokeDasharray="3 3" />
//                             <XAxis dataKey="month" />
//                             <YAxis tickFormatter={toPercent} />
//                             <Tooltip content={renderTooltipContent} />
//                             {areas.map((item, index) => (
//                                 <Area
//                                     key={index}
//                                     type="monotone"
//                                     dataKey={item.name}
//                                     stackId="1"
//                                     stroke={item.color}
//                                     fill={item.color}
//                                 />
//                             ))}
//                         </AreaChart>
//                     </ResponsiveContainer>
//                 </div>
//             </div>
//         </div>

//         {/* Table Section */}
//         <div className="bg-white p-4 rounded-lg border shadow-sm overflow-x-auto">
//             <h3 className={`${inter.className} font-semibold mb-4`}>
//                 Top Trending Bus Companies
//             </h3>
//             <div className="min-w-[800px]">
//                 <Table>
//                     <TableHeader>
//                         <TableRow>
//                             <TableHead className="w-[50px]">#</TableHead>
//                             {titleTableHotBooking.map((title, index) => (
//                                 <TableHead key={index}>{title}</TableHead>
//                             ))}
//                         </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                         {listDataHotBooking.map((item, index) => (
//                             <TableRow key={index}>
//                                 <TableCell>{index + 1}</TableCell>
//                                 <TableCell>{item.name}</TableCell>
//                                 <TableCell>{item.quantityOrder}</TableCell>
//                                 <TableCell>{item.quantityCancel}</TableCell>
//                                 <TableCell>
//                                     {item.averageResponseTime} (Min)
//                                 </TableCell>
//                                 <TableCell className="text-right">
//                                     {convertFormatMoney(
//                                         item.totalAmount,
//                                         ETypeFormat.Comma
//                                     )}{" "}
//                                     VNĐ
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                     <TableFooter>
//                         <TableRow>
//                             <TableCell colSpan={5}>Total Money</TableCell>
//                             <TableCell className="text-right">
//                                 {convertFormatMoney(
//                                     totalAmount,
//                                     ETypeFormat.Comma
//                                 )}{" "}
//                                 VNĐ
//                             </TableCell>
//                         </TableRow>
//                     </TableFooter>
//                 </Table>
//             </div>
//         </div>
//     </div>
// );
