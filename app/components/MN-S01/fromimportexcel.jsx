"use client";
import { useState } from "react";
import ErrorNotification from "@/app/Components/MN-S01/errornotifycation";
import Dialog from "./dialog";

const FromImportExcel = () => {
  const [showError, setShowError] = useState(false);
  const [fileName, setFileName] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const title = "Excelデータ取込";
  const titleFile = "ここにファイルをドロップまたは";
  const buttonSubmit = "アップロード";
  const buttonSubmitFile = "ファイルを選択";
  const messageError = "処理に失敗しました。お手数ですが再度お試しください。解消しない場合はサポートまでお問い合わせください。";

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      const allowedTypes = [
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "text/csv",
      ];
      if (!allowedTypes.includes(file.type)) {
        // show error if not same type
        setShowError(true);
        setFileName("");
        return;
      }
      setShowError(false);
      setFileName(file.name);
    } else {
      // No file selected
      setShowError(false);
      setFileName("");
    }
  };

  const handleSubmit = (fileName) => {
    if (!fileName) {
      // check if fileName is empty return;
      return;
    }
    setShowDialog(true);
  };

  const onAcceptDialog = () => {
    alert("Submitting file: " + fileName);
    setShowDialog(false);
    setFileName("");
  };

  const onCloseDialog = () => {
    setShowDialog(false);
    setShowError(true);
    setFileName("");
  };

  return (
    <>
      {showDialog && <Dialog onClose={onCloseDialog} onAccept={onAcceptDialog}></Dialog>}

      <div className="w-full h-full flex-col justify-center items-center p-5">
        <div className="w-full border border-black p-4">
          <h2 className="text-md font-semibold mb-2">{title}</h2>
          <hr className="-mx-4 w-[calc(100%+2rem)] border-t border-black" />
          <div className="pt-2 pb-1 w-full">
            {showError && (
              <ErrorNotification message={messageError} />
            )}
          </div>
          <div className="bg-[#dee1ec] border border-dashed border-gray-500 rounded-xl flex flex-col items-center justify-center text-center px-4 h-[355px]">
            {/* hidden title if have file */}
            <label className={`${fileName ? "hidden" : "block"} text-gray-600 mb-2 font-semibold`}>
              {titleFile}
            </label>
            {/* File input */}
            <div className="flex flex-col items-center space-y-4">
              <label
                htmlFor="customFileInput"
                className={`${fileName ? "text-lg text-gray-700" : "opacity-100 border-gray-300 px-6 py-2 cursor-pointer text-gray-700 hover:bg-gray-100 bg-white border rounded-md font-semibold text-sm"}`}
              >
                {fileName ? fileName : buttonSubmitFile}
              </label>
              <input
                id="customFileInput"
                type="file"
                accept=".xlsx, .xls, .csv"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="text-end items-end mt-4">
          <button className={`${fileName ? "bg-blue-500" : "bg-blue-300"} text-white px-4 py-1 rounded`} disabled={!fileName}
            onClick={() => handleSubmit(fileName)}
          >
            {buttonSubmit}
          </button>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default FromImportExcel;
