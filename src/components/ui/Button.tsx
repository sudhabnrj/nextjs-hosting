import React from "react";

interface ButtonProps {
  props: string;
  children: React.ReactNode;
  className: string;
}

const Button = ({ children, className='', ...props }: ButtonProps) => {
  return <button className={`${className} font-secondary text-sm bg-primary text-white rounded-full py-2 px-5`} {...props}>{children}</button>;
};

export default Button;
