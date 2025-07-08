"use client";
import MaintanceIcon from "../../public/maintance-icon.png";
import Image from "next/image";

const MaintanceIconComponent = () => {

    return (
        <Image className="text-white" src={MaintanceIcon} alt="Maintance" width={44} height={44} />
    );
};

export default MaintanceIconComponent;
