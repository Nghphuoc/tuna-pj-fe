"use client";
import { useState } from "react";

type Option = {
    label: string;
    value: string;
};

interface DropdownSelectedProps {
    options: Option[];
    value?: string;
    onChange?: (value: string) => void;
    width?: string;
}

const DropdownSelected: React.FC<DropdownSelectedProps> = ({
    options,
    value,
    onChange,
    width,
}) => {
    const [officialRegistration, setOfficialRegistration] = useState(value || options[0]?.label || '');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    return (
        <div>
            <div>
                <div className={`flex items-center border rounded-lg border-gray-400 px-3 py-2 text-left cursor-pointer ${width}`}
                    onClick={() => setDropdownOpen((open) => !open)}>
                    <button
                        type="button"
                        style={{ width: 'fit-content' }}
                        className="border p-2 rounded-lg text-white text-center mx-2 bg-blue-500 justify-center size-3.5 h-5 items-center flex"
                    >
                        {officialRegistration}
                        <span
                            className="ml-2 cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                setOfficialRegistration("");
                                onChange?.("");
                            }}
                            title="クリア"
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M4.5 4.5l7 7M11.5 4.5l-7 7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </span>
                    </button>

                    {/*icon arrow down/up*/}
                    <span className="ml-auto px-2">
                        {dropdownOpen ? (
                            // Arrow up
                            <img src="/arrow-up.svg" alt="Arrow Up" width="16" height="16" />
                        ) : (
                            // Arrow down
                            <img src="/arrow-down.svg" alt="Arrow Down" width="16" height="16" />
                        )}
                    </span>
                </div>
                {dropdownOpen && (
                    <ul className="absolute z-10 bg-white border rounded-lg mt-1 shadow">
                        {options.map((option) => (
                            <li
                                key={option.value}
                                className="text-sm px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                                onClick={() => {
                                    setOfficialRegistration(option.label);
                                    onChange?.(option.value);
                                    setDropdownOpen(false);
                                }}
                            >
                                <div
                                    className={`mr-2 w-4 h-4 rounded border flex items-center justify-center ${officialRegistration === option.label
                                            ? 'bg-blue-500'
                                            : ''
                                        }`}
                                >
                                    {officialRegistration === option.label && (
                                        <img src="/icon-check.svg" alt="Selected" width="16" height="16" />
                                    )}
                                </div>
                                <p className="text-gray-700">{option.label}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default DropdownSelected;