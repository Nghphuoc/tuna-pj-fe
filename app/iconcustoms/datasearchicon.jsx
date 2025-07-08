"use client";
import DataSearchIcon from "../../public/data-search-icon.png";
import Image from "next/image";

const DataSearchIconComponent = () => {

    return (
        <Image className="text-white" src={DataSearchIcon} alt="Data Search" width={44} height={44} />
    );
};

export default DataSearchIconComponent;