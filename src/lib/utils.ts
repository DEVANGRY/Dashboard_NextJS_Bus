import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const convertFormatMoney = (money: number, type: ETypeFormat) => {
    const moneyConvert = money.toString();
    const regex = /\B(?=(\d{3})+(?!\d))/g;
    return moneyConvert.replace(regex, type);
};

export const formatDate = (date: string | Date) => {
    const d = new Date(date);
    return d.toLocaleString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
};
