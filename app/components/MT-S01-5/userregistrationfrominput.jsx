"use client";
import { useState } from "react";
import ErrorNotification from "../errornotifycation";
import DropdownSelected from "../dropdownselected";

const UserRegistrationFromInput = () => {
    const title = "チェック条件";
    const notifycation = "入力内容に誤りがあります。";
    const valueOption = [{ value: "一般ユーザー", label: "一般ユーザー" },]
    const [selectedValue, setSelectedValue] = useState("");

    const [form, setForm] = useState({
        loginId: "",
        username: "",
        email: "",
        password: "",
        competence: "",
    });

    const [errors, setErrors] = useState({
        loginId: false,
        username: false,
        email: false,
        password: false,
        competence: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: false }));
    };

    const validate = () => {
        const newErrors = {
            loginId: form.loginId.length < 1 || form.loginId.length > 20,
            username: form.username.length < 1,
            email: form.email.length < 1,
            password: form.password.length < 1 || form.password.length > 20,
            competence: form.competence.length < 1,
        };
        setErrors(newErrors);
        return !Object.values(newErrors).includes(true);
    };

    const handleSubmit = () => {
        if (!validate()) return;
        // Submit logic here
        console.log("Form submitted:", form);
    };

    return (
        <div className="w-full h-full flex flex-col justify-center items-center p-5">
            {(errors.loginId || errors.username || errors.email) && (
                <ErrorNotification message={notifycation} />
            )}

            <div className="w-full border border-black p-4">
                <h2 className="text-md font-semibold mb-2">{title}</h2>
                <hr className="-mx-4 w-[calc(100%+2rem)] border-t border-black" />
                <div className="pt-2 pb-1 w-full">
                    <div className="flex flex-col gap-1 pt-3">

                        {/* ID */}
                        <label className="text-sm font-medium">ログインID</label>
                        <input
                            name="loginId"
                            type="text"
                            value={form.loginId}
                            onChange={handleChange}
                            className={`w-1/4 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 ${errors.loginId ? "border-red-500 focus:ring-red-300" : "border-gray-400 focus:ring-blue-300"
                                }`}
                        />
                        {errors.loginId && (
                            <span className="text-red-500 text-sm">
                                1文字以上 20文字以下で入力してください。
                            </span>
                        )}

                        {/* username */}
                        <label className="text-sm font-medium">ユーザー名</label>
                        <input
                            name="username"
                            type="text"
                            value={form.username}
                            onChange={handleChange}
                            className={`w-1/4 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 ${errors.username ? "border-red-500 focus:ring-red-300" : "border-gray-400 focus:ring-blue-300"
                                }`}
                        />
                        {errors.username && (
                            <span className="text-red-500 text-sm">
                                1文字以上 20文字以下で入力してください。
                            </span>
                        )}

                        {/* email */}
                        <label className="text-sm font-medium">メールアドレス</label>
                        <input
                            name="email"
                            type="text"
                            value={form.email}
                            onChange={handleChange}
                            className={`w-1/4 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-300" : "border-gray-400 focus:ring-blue-300"
                                }`}
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm">
                                1文字以上 20文字以下で入力してください。
                            </span>
                        )}

                        {/* curent password */}
                        <label className="text-sm font-medium">初期パスワード</label>
                        <input
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                            className={`w-1/4 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-300" : "border-gray-400 focus:ring-blue-300"
                                }`}
                        />
                        {errors.password && (
                            <span className="text-red-500 text-sm">
                                1文字以上 20文字以下で入力してください。
                            </span>
                        )}

                        <label className="text-sm font-medium">権限</label>
                        <DropdownSelected options={valueOption} value={selectedValue} onChange={(value) => setSelectedValue(value)} width="w-1/4" />

                        <label className="text-sm font-medium">権限</label>
                        <input
                            name="competence"
                            type="text"
                            value={form.competence}
                            onChange={handleChange}
                            className={`w-1/4 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-300" : "border-gray-400 focus:ring-blue-300"
                                }`}
                        />
                        {errors.competence && (
                            <span className="text-red-500 text-sm">
                                1文字以上 20文字以下で入力してください。
                            </span>
                        )}

                        <div className="flex-row gap-2">
                            <button
                                onClick={handleSubmit}
                                className="mt-4 w-1/12 ml-8 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-md"
                            >
                                戻る
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="mt-4 ml-10 w-1/12 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-md"
                            >
                                登録
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserRegistrationFromInput;