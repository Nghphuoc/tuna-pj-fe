"use client";
import { BsFillExclamationCircleFill } from "react-icons/bs";

const ErrorNotification = ({ message }) => {

    return (
        <div className="w-full h-full flex-col justify-center items-center">
            <div className="rounded-md shadow-lg w-full mb-2 mt-2 bg-red-200 border border-red-500">
                <p className="text-sm text-red-500 m-2 ml-6 flex items-center">
                    <BsFillExclamationCircleFill className="inline-block mr-2 mb-1 w-[20px] h-[20px]" />
                    {message}
                </p>
            </div>
        </div>
    );
};

export default ErrorNotification;
