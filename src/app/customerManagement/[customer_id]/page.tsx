"use client";
import { dataUseManager } from "@/app/data/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IUserCustomer } from "@/types/common";
import {
    ArrowLeft,
    Badge,
    Car,
    Clock,
    CreditCard,
    FileText,
    Mail,
    MapPin,
    Phone,
    User,
    Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import StatusBadge from "../_components/StatusBadge";
const inter = Inter({ subsets: ["latin"] });
const DetailUser = ({ params }: { params: { customer_id: string } }) => {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const [dataUser, setDataUser] = useState<IUserCustomer | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
            if (!params.customer_id) return;

            try {
                setIsLoading(true);
                const user = dataUseManager.find(
                    (user: IUserCustomer) => user.id === params.customer_id
                );

                if (user) {
                    setDataUser(user);
                } else {
                    console.error("User not found");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        if (mounted) {
            fetchUserData();
        }
    }, [params.customer_id, mounted]);

    const formatDate = (date: Date) => {
        return new Date(date).toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const handleBack = () => {
        router.back();
    };

    return (
        <div className={`p-6 max-w-7xl mx-auto ${inter.className}`}>
            {isLoading && (
                <div className="flex items-center justify-center min-h-screen">
                    <div role="status">
                        <svg
                            aria-hidden="true"
                            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                            />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )}
            {!isLoading && (
                <div className="content">
                    <div className="header_detail flex justify-between mb-8">
                        <div
                            className="flex items-center cursor-pointer"
                            onClick={handleBack}
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            <h1 className="text-2xl font-bold ml-2">
                                Booking Details #{dataUser?.id}
                            </h1>
                        </div>
                        <div className="flex items-center gap-4">
                            {dataUser?.status && (
                                <StatusBadge
                                    status={dataUser?.status}
                                ></StatusBadge>
                            )}
                            <Button variant="outline">Cancel Booking</Button>
                            <Button>Edit Booking</Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-6">
                            <Card>
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center gap-2 text-lg">
                                        <User className="w-5 h-5" />
                                        Customer Information
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="grid gap-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <div className="text-sm text-gray-500">
                                                Full Name
                                            </div>
                                            <div className="font-medium text-lg">
                                                {dataUser?.fullname}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-500">
                                                Customer ID
                                            </div>
                                            <div className="font-medium text-lg">
                                                {dataUser?.id}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <div className="text-sm text-gray-500 flex items-center gap-1">
                                                <Mail className="w-4 h-4" />
                                                Email
                                            </div>
                                            <div className="font-medium">
                                                {dataUser?.email}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-500 flex items-center gap-1">
                                                <Phone className="w-4 h-4" />
                                                Phone Number
                                            </div>
                                            <div className="font-medium">
                                                {dataUser?.phone}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {dataUser?.carBooking && (
                                <Card>
                                    <CardHeader className="pb-4">
                                        <CardTitle className="flex items-center gap-2 text-lg">
                                            <Car className="w-5 h-5" />
                                            Vehicle Information
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="grid gap-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <div className="text-sm text-gray-500">
                                                    Vehicle
                                                </div>
                                                <div className="font-medium">
                                                    {
                                                        dataUser?.carBooking
                                                            .nameCar
                                                    }
                                                </div>
                                                <div className="text-sm text-gray-500 mt-1">
                                                    {
                                                        dataUser?.carBooking
                                                            .carCompany
                                                    }
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-sm text-gray-500">
                                                    License Plate
                                                </div>
                                                <div className="font-medium">
                                                    {
                                                        dataUser?.carBooking
                                                            .licensePlate
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <div className="text-sm text-gray-500">
                                                    Color
                                                </div>
                                                <div className="font-medium">
                                                    {
                                                        dataUser?.carBooking
                                                            .colorCar
                                                    }
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-sm text-gray-500">
                                                    Driver Phone
                                                </div>
                                                <div className="font-medium">
                                                    {
                                                        dataUser?.carBooking
                                                            .carPhoneNumber
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            )}
                        </div>

                        <div className="space-y-6">
                            <Card>
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center gap-2 text-lg">
                                        <Clock className="w-5 h-5" />
                                        Booking Summary
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <div className="text-sm text-gray-500 flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            Pick-up Location
                                        </div>
                                        <div className="font-medium">
                                            {dataUser?.pickUpLocation}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-sm text-gray-500">
                                            Pick-up Time
                                        </div>
                                        <div className="font-medium">
                                            {formatDate(dataUser?.pickUpTime)}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-sm text-gray-500 flex items-center gap-1">
                                                <Users className="w-4 h-4" />
                                                Number of Passengers
                                            </div>
                                            <div className="font-medium">
                                                {dataUser?.numberCustomer}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-500">
                                                Vehicle Type
                                            </div>
                                            <div className="font-medium">
                                                {dataUser?.vehicleRequest}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center gap-2 text-lg">
                                        <CreditCard className="w-5 h-5" />
                                        Payment Information
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <div className="text-sm text-gray-500">
                                            Amount Paid
                                        </div>
                                        <div className="font-medium text-lg">
                                            {dataUser?.amountPaid.toFixed(2)}VNĐ
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-sm text-gray-500">
                                            Payment Status
                                        </div>
                                        <Badge
                                            className={`${
                                                dataUser?.paymentStatus ===
                                                "Paid"
                                                    ? "text-yellow-900 bg-yellow-200"
                                                    : "text-white bg-green-500"
                                            } px-3 py-1 rounded-full text-sm font-medium mt-1`}
                                        >
                                            {dataUser?.paymentStatus}
                                        </Badge>
                                    </div>

                                    {dataUser?.note && (
                                        <div>
                                            <div className="text-sm text-gray-500 flex items-center gap-1">
                                                <FileText className="w-4 h-4" />
                                                Notes
                                            </div>
                                            <div className="font-medium mt-1">
                                                {dataUser?.note}
                                            </div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailUser;
