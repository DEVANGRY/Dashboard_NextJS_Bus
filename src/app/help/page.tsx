import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Book,
    FileText,
    Mail,
    MessageCircle,
    PhoneCall,
    Video,
} from "lucide-react";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
const HelpPage = () => {
    return (
        <div
            className={`p-6 space-y-6 ${inter.className} h-full flex items-center pt-32`}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
                <Card className="h-3/4 w-11/12 bg-slate-200">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Book className="w-5 h-5" />
                            Quick Start Guide
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    How to book a tour?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Step by step guide for booking a tour,
                                    including selecting destinations, dates, and
                                    payment options.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>
                                    Managing bookings
                                </AccordionTrigger>
                                <AccordionContent>
                                    Learn how to view, modify, or cancel your
                                    bookings through the dashboard.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>

                <Card className="h-3/4 w-11/12 bg-slate-200">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <MessageCircle className="w-5 h-5" />
                            Contact Support
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center gap-2">
                            <PhoneCall className="w-4 h-4" />
                            <span>Hotline: 0838150880</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <span>Email: QuocTuan@tourbooking.com</span>
                        </div>
                    </CardContent>
                </Card>

                <Card className="h-3/4 w-11/12 bg-slate-200">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Video className="w-5 h-5" />
                            Video Tutorials
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <Button
                                variant="outline"
                                className="w-full justify-start"
                            >
                                <FileText className="mr-2 h-4 w-4" />
                                Dashboard Overview
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full justify-start"
                            >
                                <FileText className="mr-2 h-4 w-4" />
                                Booking Process
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default HelpPage;
