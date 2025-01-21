import React from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import CustomBGStyle from "../ui/CustomBGStyle";
import IconFast from "../ui/IconFast";
import CircleDotIcon from "../ui/CircleDotIcon";
import GetStartedIcon from "../ui/GetStartedIcon";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-Home w-full h-screen relative overflow-hidden">
      <CustomBGStyle />
      <Container className="min-h-[687px] p-0 relative flex items-center z-20">
        <div className="flex flex-col justify-between items-stretch w-full h-full text-center">
          <h1 className="font-medium font-beatrice text-center text-transparent bg-gradient-to-b from-[#6740E2] to-black text-6xl bg-clip-text leading-[80px]">
            <span className="flex justify-center items-center">
              Blazing Fast <IconFast className="mx-3" width={34} height={37} />{" "}
              Web Hosting
            </span>
            <span className="flex justify-center items-center">
              for Your <CircleDotIcon className="mx-3" width={35} height={35} />{" "}
              Business
            </span>
          </h1>
          <p className="mt-3 mb-4 text-bodyText font-beatrice text-base font-medium leading-relaxed max-w-[554px] mx-auto">
            Briefly explain the unique selling points, e.g., 99.9% uptime, 24/7
            support, and unmatched speed.
          </p>
          <div className="mt-5 flex justify-center items-center gap-x-4">
            <Link href={'#'} className="group btn-secondary hover:opacity-85 !py-1 !pr-1 !pl-8 flex justify-center items-center gap-x-2 font-bold shadow-custom font-beatrice">
              Get started
              <span className="bg-custom-gradient rounded-full w-[36px] h-[36px] flex justify-center items-center"><GetStartedIcon /></span>
            </Link>
            <Link href={'#'} className="btn-outline border border-primary text-center text-black font-beatrice font-medium  bg-transparent hover:border-black hover:bg-black/85 hover:text-white block text-sm ">
              View our Plans
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
