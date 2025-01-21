import React from "react";
import { HERO_BG2 } from "@/lib/constants";
import Button from "../ui/Button";
import Container from "../ui/Container";

const Hero = () => {
  return (
    <div className="hero-Home w-full bg-[#eef3ff] dark:bg-slate-900">
      <Container className="min-h-[687px] p-0 relative flex items-center">
        <div className="flex justify-between items-stretch w-full py-20 h-full">
          <div className="hero-home--left w-1/2 h-full">
            <h1 className="text-black text-5xl leading-[4rem] font-medium">
              <p className="font-normal text-lg block px-4 py-1 bg-yellow-300 text-black max-w-max">
                New Year Sale
              </p>
              <span className="font-bold text-primary">Up to 80% Off </span>
              <span className=" ">Web Hosting</span>
            </h1>
            <p className="text-xl mt-3 mb-4">
              <i className="cib-next-js"></i>
              High-performance hosting designed specifically for eCommerce and
              high-traffic websites. Proudly Australian.
            </p>
            <ul className="flex flex-col gap-y-3">
              <li>Free Domain, SSL and website builder</li>
              <li>24/7 Support in English and Hindi</li>
              <li>Free website migration</li>
            </ul>
            <div className=" block">
              <p className="text-6xl font-bold my-5">
                ₹ 000.00 /<small className="text-xl">mo</small>
              </p>
              <p>+3 months free</p>
            </div>
            <div className="mt-5 flex justify-start items-center gap-x-4">
              <Button className="bg-primary btn btn-primary text-white block text-base h-10 font-normal">
                Get Started
              </Button>
              <Button className="btn btn-outline text-primary bg-transparent hover:border-black hover:bg-black/85 hover:text-white block text-base h-10 font-normal">
                Read more
              </Button>
            </div>
          </div>
          <div className="hero-home--right absolute bottom-0 right-0">
            {/* <Image
              className="max-w-full w-[700px]"
              sourd={HERO_BG2}
              alt="Hero Bg"
            /> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
