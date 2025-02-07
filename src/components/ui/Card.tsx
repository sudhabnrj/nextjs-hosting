import Image from "next/image";
import React from "react";
export interface CardProps {
  icon?: string;
  alt?: string;
  cardTitle?: string;
  cardDes?: string;
  className?: string;
  block?: string;
}

export default function Card({
  icon,
  alt,
  cardTitle,
  cardDes,
  className,
}: CardProps) {
  return (
    <div className={`${className} shadow-md`}>
      <Image
        src={icon as string}
        alt={alt || ""}
        width={40}
        height={40}
        className="w-16 h-16"
      />
      <h3 className="text-secondary text-xl font-semibold font-beatrice">
        {cardTitle}
      </h3>
      <p className="text-bodyText font-base font-medium font-dmSans">
        {cardDes}
      </p>
    </div>
  );
}
