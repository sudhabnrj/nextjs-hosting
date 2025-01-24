import Image from "next/image";
import React from "react";

interface Logoprops {
  src: string;
  alt: string;
  className: string;
}

const Logo = ({ src, alt, className }: Logoprops) => {
  return <Image width={200} height={100} className={className} src={src} alt={alt} />;
};

export default Logo;
