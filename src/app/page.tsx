import DataCenter from "@/components/main/DataCenter";
import FaqContainer from "@/components/main/FaqContainer";
import FeaturesContainer from "@/components/main/FeaturesContainer";
import Hero from "@/components/main/Hero";
import HostingSolution from "@/components/main/HostingSolution";
import MoneyBackGuarantee from "@/components/main/MoneyBackGuarantee";
import PricingContainer from "@/components/main/PricingContainer";
import TestimonialContainer from "@/components/main/TestimonialContainer";
import { fetchPageData } from "@/lib/fetchPageData";
import CustomBGStyle from "@/components/ui/CustomBGStyle";
import Container from "@/components/ui/Container";
import ReviewCard from "@/components/main/ReviewCard";
import Callicon from "@/components/ui/Callicon";
import Link from "next/link";
import ChatIcon from "@/components/ui/ChatIcon";
import { GlobThumb } from "@/lib/constants";
import Image from "next/image";
import BlazingGrid from "@/components/ui/BlazingGrid";

export default async function Home() {
  const page = await fetchPageData("home");
  const {
    banner_title,
    banner_description,
    button_1,
    button_2,
    banner_left_block,
    banner_right_block,
  } = page?.acf?.page_component[0];

  if (!page) {
    return <p>Error: Page data not found</p>;
  }

  return (
    <>
      <div className="hero-Home w-full h-auto relative overflow-hidden">
        <CustomBGStyle />
        <Container className="min-h-[687px] p-0 relative flex items-start flex-col z-20">
          <div className="flex flex-col justify-between items-stretch w-full h-full text-center pt-28">
            <Hero
              title={banner_title}
              description={banner_description}
              button_1={button_1}
              button_2={button_2}
            />
            {/* Mobile */}
            <div className="flex justify-center items-center lg:hidden text-center w-full ">
              <Image src={GlobThumb} alt="Glob" width={500} height={500} />
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center mt-7 gap-8 lg:gap-x-0 md:gap-x-8">
              <BlazingGrid
                banner_left_block={banner_left_block}
                className={"order-1 lg:order-1"}
              />

              {/* Desktop */}
              <div className="hidden lg:block lg:order-2">
                <Image src={GlobThumb} alt="Glob" width={500} height={500} />
              </div>

              <BlazingGrid
                banner_right_block={banner_right_block}
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
      <PricingContainer />
      <FeaturesContainer />
      <HostingSolution />
      <DataCenter />
      <MoneyBackGuarantee />
      <TestimonialContainer />
      <FaqContainer />
    </>
  );
}
