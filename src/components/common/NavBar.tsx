"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface Props {
    classNavBar: string;
}
interface itemNavBar {
    icon: string;
    nameItem: string;
    navigationIcon: string;
    src: string;
}
const dataItemNav: itemNavBar[] = [
    {
        icon: "layout-dashboard",
        nameItem: "Dashboard",
        navigationIcon: "/layout-dashboard.svg",
        src: "/",
    },
    {
        icon: "wallet",
        nameItem: "Revenue Management",
        navigationIcon: "/wallet.svg",
        src: "/revenueManagement",
    },
    {
        icon: "ticket",
        nameItem: "Ticket Booking Management",
        navigationIcon: "/ticket.svg",
        src: "",
    },
    {
        icon: "contact",
        nameItem: "Customer Management",
        navigationIcon: "/contact.svg",
        src: "/customerManagement",
    },
    {
        icon: "help",
        nameItem: "Help",
        navigationIcon: "/badge-help.svg",
        src: "",
    },
    {
        icon: "setting",
        nameItem: "Setting",
        navigationIcon: "/settings.svg",
        src: "",
    },
];
const inter = Inter({ subsets: ["latin"] });
const NavBar = (props: Props) => {
    return (
        <div
            className={`${props.classNavBar} text-gray-50 rounded-r-md static mt-8`}
        >
            <div
                className={`avatar w-full flex justify-center flex-col items-center ${inter.className} -mt-7 text-emerald-600`}
            >
                <Avatar className="h-16 w-16">
                    <AvatarImage
                        src="/Avatar.jpg"
                        alt="Avatar User"
                    ></AvatarImage>
                    <AvatarFallback className="text-black">
                        Avatar
                    </AvatarFallback>
                </Avatar>
                <h3 className="name_user font-medium">Admin</h3>
                <p className="email_user text-xs">QuocTuan@gmail.com</p>
            </div>
            <nav>
                {dataItemNav &&
                    dataItemNav?.map((item: itemNavBar) => {
                        return (
                            <div
                                className="item_navigationIcon my-5 flex items-center justify-center"
                                key={item.nameItem}
                            >
                                <Link href={item.src} className="w-full">
                                    <Button
                                        className="btn_item w-10/12 border-0 text-black flex justify-start py-6 items-center ml-6"
                                        variant={"outline"}
                                    >
                                        <Image
                                            src={item.navigationIcon}
                                            alt={item.nameItem}
                                            width={15}
                                            height={15}
                                        ></Image>
                                        <span className="name_item ml-2 break-words whitespace-normal">
                                            {item.nameItem}
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        );
                    })}
            </nav>
        </div>
    );
};
export default NavBar;
