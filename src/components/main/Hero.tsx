import React from "react";
import GetStartedIcon from "../ui/GetStartedIcon";
import Link from "next/link";
import ArrowRight from "../ui/ArrowRight";
import DividerLeft from "../ui/DividerLeft";
import DividerRight from "../ui/DividerRight";

interface HeroProps {
  title: string;
  description?: string;
  button_1: {
    button_title: string;
    button_url: string;
  };
  button_2: {
    button_title: string;
    button_url: string;
  };
  leftCard?: {
    list_item: Array<{ title: string; icon: string }>;
  };
}

const Hero = ({ title, description, button_1, button_2 }: HeroProps) => {
  return (
    <>
      <h1 className="font-medium font-beatrice text-center text-transparent bg-gradient-to-b from-[#6740E2] to-black text-xl sm:text-3xl lg:text-5xl 2xl:text-6xl bg-clip-text leading-normal 2xl:leading-[80px] relative ">
        <DividerLeft className="mr-9 hidden lg:block left-0 xl:-left-[100px] mt-5 xl:mt-0 absolute top-1/2 -translate-y-1/2" />
        <span className="flex justify-center items-center 2xl:px-[160px] lg:px-[200px]">
          {/* Blazing Fast{" "}
              <IconFast
                className="mx-2 sm:mx-3 w-5 h-5"
                width={34}
                height={37}
              />
              Web Hosting */}
          {title}
        </span>
        {/* <span className="flex justify-center items-center">
              for Your{" "}
              <CircleDotIcon
                className="mx-2 sm:mx-3 fill-primary w-5 h-5"
                width={35}
                height={35}
              />{" "}
              Business
            </span> */}
        <DividerRight className="ml-9 hidden lg:block xl:-right-[100px] right-0 mt-5 xl:mt-0 absolute top-1/2 -translate-y-1/2" />
      </h1>
      <p className="mt-3 mb-4 text-bodyText font-beatrice text-base font-medium leading-relaxed max-w-[554px] mx-auto">
        {description}
      </p>

      <div className="mt-5 flex justify-center min-[420px]:flex-row flex-col items-center gap-4 min-[420px]:gap-x-4 relative">
        {button_1?.button_title && (
          <Link
            href={button_1?.button_url}
            className="group btn-secondary hover:opacity-85 !py-1 !pr-1 !pl-8 flex justify-center items-center gap-x-2 font-medium shadow-custom font-beatrice"
          >
            {button_1?.button_title}
            <span className="bg-custom-gradient rounded-full w-[36px] h-[36px] flex justify-center items-center">
              <GetStartedIcon className="" width={20} height={20} />
            </span>
          </Link>
        )}
        {button_2?.button_title && (
          <Link
            href={button_2?.button_url}
            className="group btn-outline border border-primary text-center text-black font-beatrice font-medium  bg-transparent flex justify-center items-center text-sm relative !pr-10"
          >
            {button_2?.button_title}
            <ArrowRight
              className="ml-2 absolute right-5 top-1/2 -translate-y-1/2 group-hover:right-4 transition-all"
              width={10}
              height={10}
            />
          </Link>
        )}
      </div>
    </>
  );
};

export default Hero;
