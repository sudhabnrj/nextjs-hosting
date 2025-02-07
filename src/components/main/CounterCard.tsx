import Image from "next/image";
import React from "react";

interface CounterCard {
  title?: string;
  description?: string;
  src?: string;
  alt?: string;
  url?: string;
}

export default function CounterCard({
  src,
  alt,
  title,
  description,
}: CounterCard) {
  return (
    <div className="flex flex-col">
      <Image src={src as string} alt={alt as string} width={36} height={37} />
      <p className="text-white font-beatrice font-semibold text-2xl my-2">
        {title}
      </p>
      <p className="text-white text-sm font-dmSans">{description}</p>
    </div>
  );
}
