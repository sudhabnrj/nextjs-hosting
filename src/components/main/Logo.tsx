import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Logoprops {
  src: string;
  alt: string;
  props: string;
}

const Logo = ({ src, alt, ...props }: Logoprops) => {
  return <Image width={200} height={100} {...props} src={src} alt={alt} />;
};

export default Logo;
