"use client";
import React, { useState } from "react";

interface CheckboxProps {
  id: string;
  label: string;
}

const Checkbox = ({ id, label }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="inline-flex items-center">
      <label className="relative flex cursor-pointer items-center">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="peer h-5 w-5 cursor-pointer appearance-none rounded border-[2px] border-[#313131] shadow transition-all checked:border-slate-800 checked:bg-slate-800 hover:shadow-md"
        />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white opacity-0 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
      <label
        htmlFor={id}
        className="font-sm ml-2 cursor-pointer font-dmSans text-sm text-secondary"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
