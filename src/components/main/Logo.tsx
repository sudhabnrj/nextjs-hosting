import { SITE_LOGO } from "@/lib/constants";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface Logoprops {
  className?: string;
  src?: string | StaticImageData;
  alt?: string;
}

const Logo = ({ className, src = SITE_LOGO, alt = "Logo" }: Logoprops) => {
  return (
    <Image width={200} height={100} className={className} src={src} alt={alt} />
  );
};

export default Logo;
