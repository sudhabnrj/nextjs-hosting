import React from "react";
import Container from "../ui/Container";
import CustomBGStyle from "../ui/CustomBGStyle";
import IconFast from "../ui/IconFast";
import CircleDotIcon from "../ui/CircleDotIcon";
import GetStartedIcon from "../ui/GetStartedIcon";
import Link from "next/link";
import ArrowRight from "../ui/ArrowRight";
import DividerLeft from "../ui/DividerLeft";
import DividerRight from "../ui/DividerRight";
import { GlobThumb } from "@/lib/constants";
import Image from "next/image";
import BlazingGrid from "../ui/BlazingGrid";
import ReviewCard from "./ReviewCard";
import Callicon from "../ui/Callicon";
import ChatIcon from "../ui/ChatIcon";

const Hero = () => {
  return (
    <div className="hero-Home w-full h-auto relative overflow-hidden">
      <CustomBGStyle />
      <Container className="min-h-[687px] p-0 relative flex items-start flex-col z-20">
        <div className="flex flex-col justify-between items-stretch w-full h-full text-center pt-28">
          <h1 className="font-medium font-beatrice text-center text-transparent bg-gradient-to-b from-[#6740E2] to-black text-xl sm:text-3xl lg:text-5xl 2xl:text-6xl bg-clip-text leading-normal 2xl:leading-[80px] relative ">
            <DividerLeft className="mr-9 hidden lg:block left-0 xl:-left-[100px] mt-5 xl:mt-0 absolute top-1/2 -translate-y-1/2" />
            <span className="flex justify-center items-center">
              Blazing Fast{" "}
              <IconFast
                className="mx-2 sm:mx-3 w-5 h-5"
                width={34}
                height={37}
              />
              Web Hosting
            </span>
            <span className="flex justify-center items-center">
              for Your{" "}
              <CircleDotIcon
                className="mx-2 sm:mx-3 fill-primary w-5 h-5"
                width={35}
                height={35}
              />{" "}
              Business
            </span>
            <DividerRight className="ml-9 hidden lg:block xl:-right-[100px] right-0 mt-5 xl:mt-0 absolute top-1/2 -translate-y-1/2" />
          </h1>
          <p className="mt-3 mb-4 text-bodyText font-beatrice text-base font-medium leading-relaxed max-w-[554px] mx-auto">
            Briefly explain the unique selling points, e.g., 99.9% uptime, 24/7
            support, and unmatched speed.
          </p>
          <div className="mt-5 flex justify-center min-[420px]:flex-row flex-col items-center gap-4 min-[420px]:gap-x-4 relative">
            <Link
              href={"#"}
              className="group btn-secondary hover:opacity-85 !py-1 !pr-1 !pl-8 flex justify-center items-center gap-x-2 font-medium shadow-custom font-beatrice"
            >
              Get started
              <span className="bg-custom-gradient rounded-full w-[36px] h-[36px] flex justify-center items-center">
                <GetStartedIcon className="" width={20} height={20} />
              </span>
            </Link>
            <Link
              href={"#"}
              className="group btn-outline border border-primary text-center text-black font-beatrice font-medium  bg-transparent flex justify-center items-center text-sm relative !pr-10"
            >
              View our Plans
              <ArrowRight
                className="ml-2 absolute right-5 top-1/2 -translate-y-1/2 group-hover:right-4 transition-all"
                width={10}
                height={10}
              />
            </Link>
          </div>
          {/* Mobile */}
          <div className="flex justify-center items-center lg:hidden text-center w-full ">
            <Image src={GlobThumb} alt="Glob" width={500} height={500} />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-7 gap-8 lg:gap-x-0 md:gap-x-8">
            <BlazingGrid
              title="Blazing Fast Performance"
              list={true}
              className={"order-1 lg:order-1"}
            />

            {/* Desktop */}
            <div className="hidden lg:block lg:order-2">
              <Image src={GlobThumb} alt="Glob" width={500} height={500} />
            </div>

            <BlazingGrid
              title="Proven Reliability"
              list={false}
              className={" order-2 lg:order-3"}
            />
          </div>
        </div>
        <div className="review-container mt-12 pb-20 w-full flex xl:flex-row flex-col xl:justify-between justify-center">
          <div className="w-full xl:w-[70%] flex justify-center items-center gap-5 flex-wrap lg:grid lg:grid-flow-col lg:gap-x-7 lg:col-span-3 ">
            {Array.from({ length: 3 }).map((_, index) => {
              return <ReviewCard key={index} />;
            })}
          </div>
          <div className="xl:w-[30%] flex justify-center xl:flex-end items-center flex-col sm:flex-row xl:flex-col xl:gap-0 gap-5 pt-5 xl:pt-0">
            <p className="flex justify-start  items-center text-left xl:mb-5">
              <Callicon className="mr-4" width={30} height={30} />
              <Link
                className="hover:text-primary text-left text-sec text-xl font-medium font-beatrice leading-loose"
                href={"mailto: +91 80695 90400"}
              >
                +91 80695 90400
              </Link>
            </p>
            <p className="flex justify-start items-center text-left">
              <ChatIcon className="mr-4" width={30} height={30} />
              <Link
                className="hover:text-primary text-left text-sec text-xl font-medium font-beatrice leading-loose"
                href="#"
              >
                Chat with us!
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
