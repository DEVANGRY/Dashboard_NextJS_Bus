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
