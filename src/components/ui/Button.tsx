import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={`${className} font-secondary text-sm bg-custom-gradient hover:bg-custom-gradient-hover text-white rounded-full py-3 px-7 transition-all min-w-[124px]`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
