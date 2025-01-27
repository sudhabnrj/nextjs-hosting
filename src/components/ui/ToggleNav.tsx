"use client";
import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import Button from "./Button";

interface ToggleNavProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  props?: string;
}

const ToggleNav = ({ onClick, ...props }: ToggleNavProps) => {
  return (
    <Button
      {...props}
      onClick={onClick}
      className="!p-0 !min-w-max lg:hidden block"
    >
      <CgMenuGridO className="w-8 h-8 text-secondary hover:text-lightBlue" />
    </Button>
  );
};

export default ToggleNav;
