"use client";
import { LuUpload } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { BsListCheck } from "react-icons/bs";
import { LiaChartPieSolid } from "react-icons/lia";
import { GoDatabase } from "react-icons/go";
import { GiAutoRepair } from "react-icons/gi";
import DataSearchIconComponent from "../iconcustoms/datasearchicon";
import ReportIconComponent from "../iconcustoms/reporticon";
import StatusListIconComponent from "../iconcustoms/statuslist";
import MaintanceIconComponent from "../iconcustoms/maintance";
import Link from "next/link";

const Navigation = () => {
    const foreignFishVessel = "外国漁船漁獲情報システム";
    const logout = "ログアウト";
    const navItems = [
        { icon: <LuUpload className="w-[44px] h-[44px]" />, label: "新規アップロード", action: "/#" },
        { icon: <BsListCheck className="w-[44px] h-[44px]" />, label: "ステータス一覧", action: "/#" },
        { icon: <LiaChartPieSolid className="w-[44px] h-[44px]" />, label: "報告処理", action: "/#" },
        { icon: <GoDatabase className="w-[44px] h-[44px]" />, label: "データ検索", action: "/#" },
        { icon: <GiAutoRepair className="w-[44px] h-[44px]" />, label: "メンテナンス", action: "/#" },
        { icon: <FaRegUser className="w-[44px] h-[44px]" />, label: "ユーザー設定", action: "/#" },
    ];
    return (
        <div className="w-full bg-[#15384C] h-[190px] px-6 py-4 flex flex-row items-end justify-between">
            {/* Title */}
            <div className="flex flex-col items-start mb-6">
                <Link href={"/#"} className="text-white hover:text-amber-600">
                    <span className="text-2xl text-amber-200 font-medium">{foreignFishVessel}</span>
                </Link>
            </div>
            {/* Navigation icons */}
            <nav className="flex-1 flex justify-center items-end mb-0">
                <ul className="flex flex-row space-x-10 items-end">
                    {navItems.map((item, index) => (
                        <li key={index} className="flex flex-col items-center">
                            <Link href={item.action} className="flex flex-col items-center text-white hover:text-amber-600">
                                <span className="mb-1">{item.icon}</span>
                                <span className="text-xs">{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            {/* Logout */}
            <div className="flex flex-col items-end mb-1">
                <button className="text-white text-xs hover:text-amber-600">{logout}</button>
            </div>
        </div>
    );
}

export default Navigation;