import React from "react";

interface IconProps {
  width: string | number;
  height: string | number;
  className: string;
}

const CircleDotIcon = ({
  width = "20",
  height = "20",
  className = "",
}: IconProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 34 38"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 20">
        <circle
          id="Ellipse 4"
          cx="16.9259"
          cy="4.51772"
          r="3.61468"
          strokeWidth="0.76908"
        />
        <circle
          id="Ellipse 9"
          cx="16.9259"
          cy="33.1275"
          r="3.61468"
          strokeWidth="0.76908"
        />
        <circle
          id="Ellipse 5"
          cx="29.8459"
          cy="11.901"
          r="3.61468"
          strokeWidth="0.76908"
        />
        <circle
          id="Ellipse 6"
          cx="4.00504"
          cy="11.9009"
          r="3.61468"
          strokeWidth="0.76908"
        />
        <circle
          id="Ellipse 7"
          cx="29.8459"
          cy="26.6671"
          r="3.61468"
          strokeWidth="0.76908"
        />
        <circle
          id="Ellipse 8"
          cx="4.00504"
          cy="26.6672"
          r="3.61468"
          strokeWidth="0.76908"
        />
      </g>
    </svg>
  );
};

export default CircleDotIcon;
