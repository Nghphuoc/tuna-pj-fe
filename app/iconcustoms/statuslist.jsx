"use client";
import StatusListIcon from "../../public/status-list-icon.png";
import Image from "next/image";

const StatusListIconComponent = () => {
    return (
        <Image className="text-white" src={StatusListIcon} alt="Status List" width={44} height={44} />
    );
};

export default StatusListIconComponent;
