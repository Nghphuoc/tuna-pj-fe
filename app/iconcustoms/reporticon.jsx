"use client";
import ReportIcon from "../../public/report-icon.png";
import Image from "next/image";

const ReportIconComponent = () => {
    return (
        <Image className="text-white" src={ReportIcon} alt="Report" width={44} height={44} />
    );
};

export default ReportIconComponent;

