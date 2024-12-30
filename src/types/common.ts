export enum EArea {
    HANOI = "haNoi",
    HOCHIMINH = "hoChiMinh",
    DANANG = "daNang",
}

export const EAreaProperties = {
    [EArea.DANANG]: { color: "#ffc658" },
    [EArea.HOCHIMINH]: { color: "#82ca9d" },
    [EArea.HANOI]: { color: "#8884d8" },
};
export interface IArea {
    name: string;
    color: string;
}
export interface IViewBowTooltipContent {
    payload?: ITooltipPayload[];
    label?: string;
}
export interface ITooltipPayload {
    value: number;
    [key: string]: any;
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
export interface IDataUser {
    src: string;
    nameUser: string;
}
export interface IDataStatistical {
    name: string;
    numberData: number;
    icon: string;
    nameIcon: string;
    compareData: number;
}

export type TChartConfig = {
    Contact: {
        label: string;
        color: string;
    };
    Booking: {
        label: string;
        color: string;
    };
};
export type TChartAllMoneyConfig = {
    money: {
        label: string;
        color: string;
    };
};
export interface IChartData {
    month: string;
    Contact: number;
    Booking: number;
}

export interface IDataTableHotBooking {
    name: string;
    quantityOrder: number;
    quantityCancel: number;
    averageResponseTime: number;
    totalAmount: number;
}

export interface ICharHotBookingData {
    name: string;
    value: number;
}
export interface IAreaBooking {
    haNoi: number;
    hoChiMinh: number;
    daNang: number;
}
export interface IListDataArea extends IAreaBooking {
    month: string;
}

export interface ITotalMoneyInMonth {
    month: string;
    money: number;
}

export enum ETitleTableHotBooking {
    Name = "Name of the company",
    QuantityOrder = "Quantity ordered",
    QuantityCancel = "Number of Cancellations",
    AverageResponseTime = "Average Response Time",
    TotalAmount = "Revenue from the car station",
}

export interface IDataMoneyMonthMain {
    month: string;
    moneyInMonth: number;
}
export interface IChartRateMoneyDay {
    name: string;
    money: number;
}

export interface ITopMoneyBooking {
    name: string;
    srcImage: string;
    money: number;
}
