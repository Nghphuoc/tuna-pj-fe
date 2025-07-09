"use client";
import { BsFillExclamationCircleFill } from "react-icons/bs";

const ErrorNotification = ({ message }) => {
    const notifycation = message || "処理に失敗しました。お手数ですが再度お試しください。解消しない場合はサポートまでお問い合わせください。";

    return (
        <div className="w-full h-full flex-col justify-center items-center">
            <div className="rounded-md shadow-lg w-full mb-2 mt-2 bg-red-200 border border-red-500">
                <p className="text-sm text-red-500 m-2 ml-6">
                    <BsFillExclamationCircleFill className="inline-block mr-2" />
                    {notifycation}
                </p>
            </div>
        </div>
    );
};

export default ErrorNotification;
