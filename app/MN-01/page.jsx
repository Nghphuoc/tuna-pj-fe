"use client";

import { useState } from "react";
import Dialog from "@/app/Components/MN-S01/dialog";
import NavigationFullItems from "@/app/Components/navigationfullitems";

const Page = () => {
    const [showDialog, setShowDialog] = useState(true);
    const message = "入力された内容で書類を追加アップロードします。よろしいですか？";

    return (
        <>
            <NavigationFullItems />
            <div className="items-center justify-center flex flex-col h-screen">
                {showDialog && (
                <Dialog notifycation={message} onClose={() => setShowDialog(false)} />
            )}
            </div>
        </>
    );
};

export default Page;
