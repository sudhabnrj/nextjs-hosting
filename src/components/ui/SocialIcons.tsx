import React from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { RxInstagramLogo } from "react-icons/rx";
import { LiaFacebookSquare } from "react-icons/lia";
import Link from "next/link";

const SocialIcons = () => {
  return (
    <>
      <Link href={"/"}>
        <AiOutlineYoutube className="text-white w-6 h-6" />
      </Link>
      <Link href={"/"}>
        <FiTwitter className="text-white w-6 h-6" />
      </Link>
      <Link href={"/"}>
        <RxInstagramLogo className="text-white w-6 h-6" />
      </Link>
      <Link href={"/"}>
        <LiaFacebookSquare className="text-white w-7 h-7" />
      </Link>
    </>
  );
};

export default SocialIcons;
