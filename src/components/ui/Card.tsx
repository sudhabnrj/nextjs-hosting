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
    <div className={`${className} `}>
      <Image src={icon as string} alt={alt || ""} width={40} height={40} />
      <h3>{cardTitle}</h3>
      <p>{cardDes}</p>
    </div>
  );
}
