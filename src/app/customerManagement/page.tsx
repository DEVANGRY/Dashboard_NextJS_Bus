"use client";
import { Inter } from "next/font/google";
import React, { useEffect, useState } from "react";
import SearchBar from "@/app/customerManagement/_components/SearchBar";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { ArrowUpDown } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { EStatusBooking, IUserCustomer } from "@/types/common";
import { dataUseManager } from "../data/data";
import { useRouter } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });
const CustomerManager = () => {
    const router = useRouter();
    const [listDataUser, setListDataUser] = useState<IUserCustomer[]>([]);

    useEffect(() => {
        setListDataUser(dataUseManager);
    }, []);

    const openDetailCustomer = (idUser: string | null) => {
        router.push(`/customerManagement/${idUser}`);
    };
    return (
        <div className={`mt-5 mx-6 ${inter.className}`}>
            <header className="header  flex justify-between">
                <h1
                    className={`title flex font-semibold text-xl items-center tracking-wider`}
                >
                    Customer Management
                </h1>
            </header>
            <div className="sub_header flex mt-5">
                <div className="search_bar basis-1/2 ml-4">
                    <SearchBar></SearchBar>
                </div>
                <div className="export basis-1/2 flex gap-2 justify-end pr-10">
                    <Button variant={"outline"}>Export</Button>
                    <Button variant={"destructive"}>New User</Button>
                </div>
            </div>
            <div className="table_list_user border rounded-md mt-5">
                <Table>
                    {!listDataUser && (
                        <TableCaption className="mb-5">
                            <span>A list of customers booking cars.</span>
                            <span className="block">
                                Enter to search customer
                            </span>
                        </TableCaption>
                    )}
                    <TableHeader>
                        <TableRow className="text-center">
                            <TableHead className="w-[50px] flex justify-center">
                                <div className="flex items-center cursor-pointer">
                                    <span>ID</span>
                                    <ArrowUpDown className="w-3 h-3 ml-1" />
                                </div>
                            </TableHead>
                            <TableHead>Full Name</TableHead>
                            <TableHead>Pick up location</TableHead>
                            <TableHead>Pick up time</TableHead>
                            <TableHead>Vehicle request</TableHead>
                            <TableHead className="">
                                <div
                                    className="flex items-center justify-center cursor-pointer
                                "
                                >
                                    Trip status
                                    <ArrowUpDown className="w-3 ml-2" />
                                </div>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {listDataUser &&
                            listDataUser.map(
                                (user: IUserCustomer, index: number) => {
                                    return (
                                        <TableRow
                                            className="cursor-pointer"
                                            key={index}
                                            onClick={() =>
                                                openDetailCustomer(
                                                    user.id || null
                                                )
                                            }
                                        >
                                            <TableCell className="font-medium">
                                                {user.id}
                                            </TableCell>
                                            <TableCell>
                                                {user.fullname}
                                            </TableCell>
                                            <TableCell className="pl-6">
                                                {user.pickUpLocation}
                                            </TableCell>
                                            <TableCell>
                                                {user.pickUpTime.toLocaleString()}
                                            </TableCell>
                                            <TableCell>
                                                {user.vehicleRequest}
                                            </TableCell>
                                            <TableCell className="flex justify-center">
                                                <div
                                                    className={` pt-1 text-center 
                                                        w-1/2 h-7 rounded-md
                                                        ${
                                                            user.status ===
                                                            EStatusBooking.WAIT
                                                                ? "text-yellow-900 bg-yellow-200"
                                                                : user.status ===
                                                                  EStatusBooking.GOING
                                                                ? "text-white bg-green-500"
                                                                : "text-white bg-blue-500"
                                                        }`}
                                                >
                                                    {user.status}
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    );
                                }
                            )}
                    </TableBody>
                </Table>
            </div>
            <div className="pagination flex mt-5 w-full mb-7">
                <div className="pagination_show_number_item flex justify-start items-center basis-10/12 ml-5">
                    <span className="mr-3">Show:</span>
                    <Select>
                        <SelectTrigger className="w-25">
                            <SelectValue placeholder="10 rows"></SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="MienBac">10 rows</SelectItem>
                                <SelectItem value="MienTrung">
                                    20 rows
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="pagintation basis-2/12">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#"></PaginationPrevious>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#"></PaginationNext>
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </div>
    );
};

export default CustomerManager;
