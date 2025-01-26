import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = "w-full" }: ContainerProps) => {
  return (
    <div className={`container mx-auto px-4 ${className}`}>{children}</div>
  );
};

export default Container;
