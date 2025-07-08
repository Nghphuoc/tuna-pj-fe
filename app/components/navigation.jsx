"use client";
import { LuUpload } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { BsListCheck } from "react-icons/bs";
import { LiaChartPieSolid } from "react-icons/lia";
import { GoDatabase } from "react-icons/go";
import { GiAutoRepair } from "react-icons/gi";
import Link from "next/link";

const Navigation = () => {
    const foreignFishVessel = "外国漁船漁獲情報システム";
    const logout = "ログアウト";

    const navItems = [
        { icon: <LuUpload className="w-[44px] h-[44px]"/>, label: "新規アップロード", action: "/#" },
        { icon: <BsListCheck className="w-[44px] h-[44px]" />, label: "ステータス一覧", action: "/#" },
        { icon: <LiaChartPieSolid className="w-[44px] h-[44px]"/>, label: "報告処理", action: "/#" },
        { icon: <GoDatabase className="w-[44px] h-[44px]"/>, label: "データ検索", action: "/#" },
        { icon: <GiAutoRepair className="w-[44px] h-[44px]"/>, label: "メンテナンス", action: "/#" },
        { icon: <FaRegUser className="w-[44px] h-[44px]"/>, label: "ユーザー設定", action: "/#" },
    ];

    return (
        <div className="w-full bg-[#15384C] px-6 py-4 flex items-start justify-between h-[130px]">
            <div className="flex flex-col items-start">
                {/* Title */}
                <Link href="/#" className="mb-2">
                    <span className="text-2xl text-amber-500 hover:text-amber-600 font-medium">
                        {foreignFishVessel}
                    </span>
                </Link>

                {/* Menu */}
                <ul className="flex flex-row space-x-8">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.action} className="text-white hover:text-amber-600">
                                <div className="flex flex-col items-center">
                                    <div>{item.icon}</div>
                                    <span className="text-xs mt-1">{item.label}</span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Logout button */}
            <div className="mt-20">
                <button className="text-white text-xs hover:text-amber-600">{logout}</button>
            </div>
        </div>
    );
};

export default Navigation;
