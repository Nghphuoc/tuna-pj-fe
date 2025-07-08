"use client";
import { LuUpload } from "react-icons/lu";
import { FaUserLarge } from "react-icons/fa6";
import { BsListCheck } from "react-icons/bs";
import { LiaChartPieSolid } from "react-icons/lia";
import { GoDatabase } from "react-icons/go";
import { GiAutoRepair } from "react-icons/gi";
import Link from "next/link";

const NavigationFullItems = () => {
    const foreignFishVessel = "外国漁船漁獲情報システム";
    const logout = "ログアウト";

    const navItems = [
        { icon: <LuUpload className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]" />, label: "新規アップロード", action: "/#" },
        { icon: <BsListCheck className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]" />, label: "ステータス一覧", action: "/#" },
        { icon: <LiaChartPieSolid className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]" />, label: "報告処理", action: "/#" },
        { icon: <GoDatabase className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]" />, label: "データ検索", action: "/#" },
        { icon: <GiAutoRepair className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]" />, label: "メンテナンス", action: "/#" },
        { icon: <FaUserLarge className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]" />, label: "ユーザー設定", action: "/#" },
    ];

    return (
        <div className="w-full bg-[#15384C] px-4 py-2 flex flex-col md:flex-row md:justify-between">
            <div className="flex flex-col items-start">
                {/* Title */}
                <Link href="/#" className="mb-3">
                    <span className="text-lg md:text-2xl text-amber-500 hover:text-amber-600 font-medium">
                        {foreignFishVessel}
                    </span>
                </Link>

                {/* Menu */}
                <ul className="flex flex-wrap gap-x-6 gap-y-4 md:space-x-8">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.action} className="text-white hover:text-amber-600">
                                <div className="flex flex-col items-center">
                                    {item.icon}
                                    <span className="text-[10px] md:text-xs mt-1 text-center">{item.label}</span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Logout */}
            <div className="mt-16 md:mt-16 self-end md:self-start">
                <button className="text-white text-xs hover:text-amber-600">{logout}</button>
            </div>
        </div>
    );
};

export default NavigationFullItems;
