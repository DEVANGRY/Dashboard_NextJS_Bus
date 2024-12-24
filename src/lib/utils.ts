import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
export enum ETypeFormat {
    Comma = ",",
    Dot = ".",
}
export enum EColor {
    BLUE = "#0088FE",
    GREEN = "#00C49F",
    ORANGE = "#FFBB28",
    YELLOW = "#FF8042",
}
export const convertFormatMoney = (money: number, type: ETypeFormat) => {
    const moneyConvert = money.toString();
    const regex = /\B(?=(\d{3})+(?!\d))/g;
    return moneyConvert.replace(regex, type);
};
