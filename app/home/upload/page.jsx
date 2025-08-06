"use client";

import FromImportExcel from "../../components/MN-S01/fromimportexcel";

const Page = () => {
    const title = "Excelデータ取込";
    return (
        <>
            <FromImportExcel title={title} />
        </>
    );
};

export default Page;