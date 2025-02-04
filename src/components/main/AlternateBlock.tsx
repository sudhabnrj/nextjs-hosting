import React from "react";
import TitleSecondary from "./TitleSecondary";
import Image from "next/image";

interface AlternateBlockProps {
  className?: string;
  src?: string;
  alt?: string;
  subTitle?: string;
  section_title?: string;
  description?: string;
  imagePosition: string;
}

export default function AlternateBlock({
  className = "",
  src,
  alt,
  subTitle,
  section_title,
  description,
  imagePosition,
}: AlternateBlockProps) {
  return (
    <div className={`${className} grid grid-cols-1 md:grid-cols-2 gap-6`}>
      <div
        className={`thumb-img flex ${
          imagePosition === "left"
            ? "md:order-1 justify-start"
            : "md:order-2 justify-end"
        }`}
      >
        <Image
          src={src as string}
          alt={alt || "Alternate Block Thumb"}
          width={400}
          height={400}
        />
      </div>
      <TitleSecondary
        className={`text-left px-0 ${
          imagePosition === "left" ? "md:order-2" : "md:order-1"
        }`}
        subTitle={subTitle}
        section_title={section_title}
        description={description}
      />
    </div>
  );
}
