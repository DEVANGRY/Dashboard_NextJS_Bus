import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Bell,
    Globe,
    Languages,
    Mail,
    Moon,
    Shield,
    SwitchCamera,
} from "lucide-react";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
const page = () => {
    return (
        <div className={`p-6 space-y-6 ${inter.className} `}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-slate-200">
                    <CardHeader>
                        <CardTitle>Account Settings</CardTitle>
                        <CardDescription>
                            Manage your account preferences
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Bell className="w-4 h-4" />
                                <span>Push Notifications</span>
                            </div>
                            <SwitchCamera />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <span>Email Notifications</span>
                            </div>
                            <SwitchCamera />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Moon className="w-4 h-4" />
                                <span>Dark Mode</span>
                            </div>
                            <SwitchCamera />
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-slate-200">
                    <CardHeader>
                        <CardTitle>System Settings</CardTitle>
                        <CardDescription>
                            Configure system preferences
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center gap-32">
                            <div className="flex items-center gap-2 basis-1/2">
                                <Languages className="w-4 h-4" />
                                <span>Language</span>
                            </div>
                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="English"></SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="English">
                                            English
                                        </SelectItem>
                                        <SelectItem value="Vietnamese">
                                            Vietnamese
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex items-center justify-between gap-32">
                            <div className="flex items-center gap-2 basis-1/2">
                                <Globe className="w-4 h-4" />
                                <span>Time Zone</span>
                            </div>
                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="GMT+7"></SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="English">
                                            GMT+7
                                        </SelectItem>
                                        <SelectItem value="Vietnamese">
                                            GMT+8
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-slate-200">
                    <CardHeader>
                        <CardTitle>Security</CardTitle>
                        <CardDescription>
                            Manage your security preferences
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Button
                            variant="outline"
                            className="w-full justify-start"
                        >
                            <Shield className="mr-2 h-4 w-4" />
                            Change Password
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full justify-start"
                        >
                            <Shield className="mr-2 h-4 w-4" />
                            Two-Factor Authentication
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default page;
