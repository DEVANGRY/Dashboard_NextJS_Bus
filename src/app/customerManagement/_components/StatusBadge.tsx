import { Badge } from "lucide-react";
import React from "react";

interface propsStatusBadge {
    status: string;
}

const StatusBadge = (props: propsStatusBadge) => {
    const styles: Record<string, string> = {
        Wait: "text-yellow-900 bg-yellow-200",
        Done: "text-white bg-green-500",
        Going: "text-white bg-blue-500",
    };

    return (
        <Badge
            className={`${
                styles[props.status] || ""
            } px-3 py-1 rounded-full text-sm font-medium`}
        >
            {props.status}
        </Badge>
    );
};

export default StatusBadge;
