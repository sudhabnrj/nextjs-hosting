import React from "react";
interface IconProps {
  width?: string | number;
  height?: string | number;
  className?: string;
}
const CheckMarkRounded = ({
  width = "20",
  height = "20",
  className = "",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 64 64"
    >
      <path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M29.081,42.748	l-10.409-9.253l2.657-2.99l7.591,6.747L44,21l3.414,3.414L29.081,42.748z"></path>
    </svg>
  );
};

export default CheckMarkRounded;
