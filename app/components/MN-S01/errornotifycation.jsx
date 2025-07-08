"use client";

const ErrorNotification = ({ message, onClose }) => {
    const notifycation = message || "処理に失敗しました。お手数ですが再度お試しください。解消しない場合はサポートまでお問い合わせください。";
    return (
        <div className=" w-full">
            <div className="rounded-md shadow-lg w-full mb-2 mt-2 bg-red-200 border border-red-500">
                <p className="text-sm text-red-500 m-2 ml-6">{notifycation}</p>
            </div>
        </div>
    );
};

export default ErrorNotification;
