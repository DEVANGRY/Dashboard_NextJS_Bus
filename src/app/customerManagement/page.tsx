import { Inter } from "next/font/google";
import React from "react";
import SearchBar from "@/app/customerManagement/_components/SearchBar";
import { Button } from "@/components/ui/button";
const inter = Inter({ subsets: ["latin"] });
const CustomerManager = () => {
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
        </div>
    );
};

export default CustomerManager;
