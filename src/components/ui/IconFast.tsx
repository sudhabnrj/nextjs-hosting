import React from "react";

interface IconProps {
  width: string | number;
  height: string | number;
  className: string;
}

const IconFast = ({
  width = "20",
  height = "20",
  className = "",
}: IconProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 35 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector 917 (Stroke)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.9991 0.227051H27.5277L19.4129 10.9956H34.6144L7.67191 37.912L15.8879 19.7623H0.774902L14.9991 0.227051Z"
        fill="#6740E2"
      />
    </svg>
  );
};

export default IconFast;
