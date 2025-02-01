import React from "react";

interface CopyrightProps {
  text: string;
}

const Copyright = ({ text }: CopyrightProps) => {
  return (
    <p className="text-base leading-5 text-[#D0D2D6] font-medium font-dmSans">
      {text}
    </p>
  );
};

export default Copyright;
