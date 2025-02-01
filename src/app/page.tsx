import {
  DatacenterProps,
  featureListProps,
  hostingSolutionProps,
  MoneyBackProps,
  PageComponent,
} from "@/types/types";
import Hero from "@/components/main/Hero";
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

import {
  getCommonSectionData,
  getSectionData,
  renderErrorMessage,
} from "@/lib/utility";
import CommonTitle from "@/components/main/CommonTitle";
import PricingContainer from "@/components/main/PricingContainer";
import FeaturesList from "@/components/main/FeaturesList";
import HostingSolutionList from "@/components/main/HostingSolutionList";
import ShildCheckmark from "@/components/ui/ShildCheckmarkIcon";
import MoneybackCard from "@/components/main/MoneybackCard";
import TestimonialContainer from "@/components/main/TestimonialContainer";
import FaqContainer from "@/components/main/FaqContainer";
import TabComponent from "@/components/main/TabComponent";
import DataCenterCard from "@/components/main/DataCenterCard";

export default async function Home() {
  const page = await fetchPageData("home");

  if (!page || Object.keys(page).length === 0) {
    console.error("Error: Page data not found or is empty");
    return <p>Error: Page data not found</p>;
  }
  console.log("page", page);

  //Find Hero Section Data
  const heroSection =
    getSectionData(page, "hero_banner_home_page") ?? ({} as PageComponent);
  const pricingSection =
    getSectionData(page, "pricing_section") ?? ({} as PageComponent);

  const featuredSection =
    getSectionData(page, "features_section") ?? ({} as PageComponent);
  const { features_list } = featuredSection;

  const hostingSolutionSection =
    getSectionData(page, "hosting_solutions_section") ?? ({} as PageComponent);

  const moneyBackSection =
    getSectionData(page, "moneyback_guarantee_section") ??
    ({} as PageComponent);

  const faqSection =
    getSectionData(page, "faq_section") ?? ({} as PageComponent);
  const dataCenter =
    getSectionData(page, "data_centers") ?? ({} as PageComponent);
  const testimonial =
    getCommonSectionData(page, "testimonial_section") ?? ({} as PageComponent);

  return (
    <>
      {/* Hero Banner */}
      <section className="hero-Home w-full h-auto relative overflow-hidden">
        <CustomBGStyle />
        <Container className="min-h-[687px] p-0 relative flex items-start flex-col z-20">
          {heroSection ? (
            <div className="flex flex-col justify-between items-stretch w-full h-full text-center pt-28">
              <Hero
                banner_title={heroSection?.banner_title}
                banner_description={heroSection?.banner_description}
                button_1={
                  heroSection?.button_1 ?? { button_title: "", button_url: "" }
                }
                button_2={heroSection?.button_2}
              />
              {/* Mobile */}
              <div className="flex justify-center items-center lg:hidden text-center w-full ">
                <Image
                  src={GlobThumb}
                  alt="Glob"
                  width={500}
                  height={500}
                  priority
                />
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center mt-7 gap-8 lg:gap-x-0 md:gap-x-8">
                <BlazingGrid
                  banner_left_block={heroSection.banner_left_block}
                  className={"order-1 lg:order-1"}
                />

                {/* Desktop */}
                <div className="hidden lg:block lg:order-2">
                  <Image
                    src={GlobThumb}
                    alt="Glob"
                    width={500}
                    height={500}
                    priority
                  />
                </div>

                <BlazingGrid
                  banner_right_block={heroSection.banner_right_block}
                  className={" order-2 lg:order-3"}
                />
              </div>
            </div>
          ) : (
            renderErrorMessage({
              isError: "hero_section",
              message: "Hero section data not found",
            })
          )}

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
                  href={"tel: +91 80695 90400"}
                >
                  +91 80695 90400
                </Link>
              </p>
              <p className="flex justify-start items-center text-left">
                <ChatIcon className="mr-4" width={30} height={30} />
                <Link
                  className="hover:text-primary text-left text-sec text-xl font-medium font-beatrice leading-loose"
                  href={"mailto: info@support.com"}
                >
                  Chat with us!
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="sm:pt-20 pricing-section">
        <Container className="w-full relative">
          {pricingSection ? (
            <>
              <CommonTitle
                className="md:px-10"
                section_title={pricingSection?.section_title}
                description={pricingSection?.description}
              />
              <div className="pricing-container flex flex-col items-center lg:grid lg:grid-flow-col lg:col-span-3 gap-8 lg:gap-x-4 mt-10 xl:px-14 xl:justify-between justify-center lg:items-stretch">
                <PricingContainer />
              </div>
            </>
          ) : (
            renderErrorMessage({
              isError: "pricing_section",
              message: "Pricing data not found",
            })
          )}
        </Container>
      </section>

      <section className="mt-20 fatures-section">
        <Container className="w-full relative">
          {featuredSection ? (
            <>
              <CommonTitle
                className="md:px-10"
                section_title={featuredSection?.section_title}
                description={featuredSection?.description}
              />
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 mt-10 feature-container">
                {features_list.map((feature: featureListProps) => (
                  <FeaturesList
                    key={feature.id}
                    isFeatured={feature?.is_featured}
                    className={`${
                      feature?.is_featured
                        ? "bg-custom-gradient"
                        : "bg-[#d4dcff]/10"
                    }`}
                    title={feature?.title}
                    description={feature?.description}
                    icon={feature?.icon}
                    pageUrl={feature?.page_url}
                  />
                ))}
              </div>
            </>
          ) : (
            renderErrorMessage({
              isError: "features_section",
              message: "Features section data not found",
            })
          )}
        </Container>
      </section>

      <section className="mt-20 hosting-solution">
        <Container>
          {hostingSolutionSection ? (
            <>
              <CommonTitle
                className="md:px-10"
                section_title={hostingSolutionSection?.section_title}
                description={hostingSolutionSection?.description}
              />
              <div className="flex justify-between md:flex-row flex-col items-center mt-10">
                <div className="lg:w-1/2 w-full flex flex-col gap-8 border-l-2 border-[#DEDFE4] relative">
                  <div className="absolute w-[2px] h-[172px] inset-0 rounded-lg custom-border -left-[2px]"></div>
                  {hostingSolutionSection?.list_item.map(
                    (featureItem: hostingSolutionProps) => (
                      <HostingSolutionList
                        key={featureItem.id}
                        icon={<ShildCheckmark width={24} height={24} />}
                        title={featureItem?.title}
                        description={featureItem?.description}
                      />
                    )
                  )}
                </div>
                <div className="w-full lg:w-1/2 mt-10 md:mt-0 text-center flex justify-center items-center">
                  <Image
                    src={hostingSolutionSection?.section_image?.url as string}
                    alt={hostingSolutionSection?.section_image?.alt as string}
                    width={532}
                    height={532}
                    priority
                  />
                </div>
              </div>
            </>
          ) : (
            renderErrorMessage({
              isError: "hosting_solutions_section",
              message: "Hosting solution data not found",
            })
          )}
        </Container>
      </section>

      <section className="py-20 mt-20 data-center-section">
        <Container>
          {dataCenter ? (
            <>
              <div className="flex justify-between lg:flex-row flex-col items-center">
                <div className="w-full lg:order-1 order-2 lg:w-1/2 flex justify-center mt-10 lg:mt-0">
                  <Image
                    src={dataCenter?.left_image?.url as string}
                    width={530}
                    height={308}
                    alt={dataCenter?.left_image?.alt || "Data Center Map"}
                    priority
                  />
                </div>
                <div className="w-full lg:order-2 order-1 lg:w-1/2">
                  <h2 className="text-white text-3xl lg:text-[34px] font-semibold font-beatrice leading-normal mb-4">
                    {dataCenter.section_title}
                  </h2>
                  <p className="text-white text-base font-medium font-dmSans leading-normal">
                    {dataCenter.description}
                  </p>

                  <div className="flex justify-between mt-9 flex-col">
                    <TabComponent tab={dataCenter.tab ?? []} />
                  </div>
                </div>
              </div>
              <div className="flex justify-center max-[576px]:flex-col flex-wrap gap-5 md:gap-10 xl:gap-x-28 items-center mt-20 border-t border-white/40 pt-10">
                {dataCenter?.bottom_section_bock &&
                  dataCenter?.bottom_section_bock.map(
                    (block: DatacenterProps) => (
                      <DataCenterCard
                        key={block.id}
                        title={block?.title}
                        description={block?.content}
                      />
                    )
                  )}
              </div>
            </>
          ) : (
            renderErrorMessage({
              isError: "data_centers",
              message: "Data Center data not found",
            })
          )}
        </Container>
      </section>

      <section className="py-20 moneyback-section bg-gradient-to-r from-[#085adf]/5 to-[#5d38d3]/5">
        <Container>
          {moneyBackSection ? (
            <>
              <CommonTitle
                className="md:px-10"
                section_title={moneyBackSection?.section_title}
                description={moneyBackSection?.description}
              />
              <div className="grid grid-flow-row md:grid-flow-col gap-7 md:gap-x-7 col-span-1 md:col-span-3 mt-14">
                {moneyBackSection?.block.map((item: MoneyBackProps) => (
                  <MoneybackCard
                    key={item.id}
                    title={item?.title}
                    description={item?.description}
                    src={item?.block_image?.url}
                    alt={item?.block_image?.alt}
                  />
                ))}
              </div>
            </>
          ) : (
            renderErrorMessage({
              isError: "moneyback_guarantee_section",
              message: "Moneyback section data not found",
            })
          )}
        </Container>
      </section>

      <section className="pt-20 pb-10 testimonial-section">
        <Container>
          {testimonial ? (
            <>
              <CommonTitle
                className="md:mx-10"
                section_title={testimonial?.section_title}
                description={testimonial?.description}
              />
              <div className="w-full mt-10 testimonial-container">
                <TestimonialContainer
                  testimonial_block={testimonial?.testimonial_block ?? []}
                />
              </div>
            </>
          ) : (
            renderErrorMessage({
              isError: "testimonial_section",
              message: "Customer Feedback data not found",
            })
          )}
        </Container>
      </section>

      <section className="py-20 faq-section">
        <Container>
          {faqSection ? (
            <>
              <CommonTitle
                className="md:mx-10"
                section_title={faqSection?.section_title}
                description={faqSection?.description}
              />
              <FaqContainer faq_list_item={faqSection?.faq_list_item ?? []} />
            </>
          ) : (
            renderErrorMessage({
              isError: "faq_section",
              message: "FAQ data not found",
            })
          )}
        </Container>
      </section>
    </>
  );
}
