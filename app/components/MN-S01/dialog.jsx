"use client";

const Dialog = ({ notifycation, onClose }) => {
    const actionAccept = "はい";
    const actionCancel = "いいえ";
    const message = notifycation || "入力された内容で書類を追加アップロードします。よろしいですか？";

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute z-50 flex items-center justify-center">
                <div className="relative bg-gray-300 rounded-lg shadow-lg px-14 py-12 w-full max-w-xl flex flex-col justify-center items-center text-center">
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
                    >
                        &times;
                    </button>

                    {/* Message */}
                    <p className="text-sm mb-6">{message}</p>

                    {/* Buttons */}
                    <div className="flex flex-row items-center gap-4 justify-center">
                        <button
                            onClick={onClose}
                            className="bg-blue-500 text-white px-6 py-1 rounded-md hover:bg-blue-600 text-sm"
                        >
                            {actionAccept}
                        </button>
                        <button
                            onClick={onClose}
                            className="bg-white text-blue-500 border border-blue-500 px-6 py-1 rounded-md hover:bg-gray-50 text-sm"
                        >
                            {actionCancel}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialog;
