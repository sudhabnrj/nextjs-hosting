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
import FeaturesList from "@/components/main/FeaturesList";
import HostingSolutionList from "@/components/main/HostingSolutionList";
import ShildCheckmark from "@/components/ui/ShildCheckmarkIcon";
import MoneybackCard from "@/components/main/MoneybackCard";
import TestimonialContainer from "@/components/main/TestimonialContainer";
import FaqContainer from "@/components/main/FaqContainer";
import TabComponent from "@/components/main/TabComponent";
import DataCenterCard from "@/components/main/DataCenterCard";
import { fetchPost } from "@/lib/fetchPost";
import { notFound } from "next/navigation";
import { fetchProducts } from "@/lib/api";
import PricingCard from "@/components/main/PricingCard";

export default async function Home() {
  const page = await fetchPageData("home");
  const productData = await fetchProducts();

  if (!productData.length) {
    return <div>No products available.</div>;
  }

  if (!page || Object.keys(page).length === 0) {
    console.error("Error: Page data not found or is empty");
    return notFound();
  }
  const testimonialPost = await fetchPost("testimonials");

  if (!testimonialPost) {
    console.error("Error: Testimonial Post not found");
    return notFound();
  }

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
      <section className="hero-Home relative h-auto w-full overflow-hidden">
        <CustomBGStyle />
        <Container className="relative z-20 flex min-h-[687px] flex-col items-start p-0">
          {heroSection ? (
            <div className="flex h-full w-full flex-col items-stretch justify-between pt-28 text-center">
              <Hero
                banner_title={heroSection?.banner_title}
                banner_description={heroSection?.banner_description}
                button_1={
                  heroSection?.button_1 ?? { button_title: "", button_url: "" }
                }
                button_2={heroSection?.button_2}
              />
              {/* Mobile */}
              <div className="flex w-full items-center justify-center text-center lg:hidden">
                <Image
                  src={GlobThumb}
                  alt="Glob"
                  width={500}
                  height={500}
                  priority
                />
              </div>

              <div className="mt-7 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-x-8 lg:gap-x-0">
                <BlazingGrid
                  banner_left_block={heroSection.banner_left_block}
                  className={"order-1 lg:order-1"}
                />

                {/* Desktop */}
                <div className="hidden lg:order-2 lg:block">
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
                  className={"order-2 lg:order-3"}
                />
              </div>
            </div>
          ) : (
            renderErrorMessage({
              isError: "hero_section",
              message: "Hero section data not found",
            })
          )}

          <div className="review-container mt-12 flex w-full flex-col justify-center pb-20 xl:flex-row xl:justify-between">
            <div className="flex w-full flex-wrap items-center justify-center gap-5 lg:col-span-3 lg:grid lg:grid-flow-col lg:gap-x-7 xl:w-[70%]">
              {Array.from({ length: 3 }).map((_, index) => {
                return <ReviewCard key={index} />;
              })}
            </div>
            <div className="xl:flex-end flex flex-col items-center justify-center gap-5 pt-5 sm:flex-row xl:w-[30%] xl:flex-col xl:gap-0 xl:pt-0">
              <p className="flex items-center justify-start text-left xl:mb-5">
                <Callicon className="mr-4" width={30} height={30} />
                <Link
                  className="text-sec text-left font-beatrice text-xl font-medium leading-loose hover:text-primary"
                  href={"tel: +91 80695 90400"}
                >
                  +91 80695 90400
                </Link>
              </p>
              <p className="flex items-center justify-start text-left">
                <ChatIcon className="mr-4" width={30} height={30} />
                <Link
                  className="text-sec text-left font-beatrice text-xl font-medium leading-loose hover:text-primary"
                  href={"mailto: info@support.com"}
                >
                  Chat with us!
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="pricing-section sm:pt-20">
        <Container className="relative w-full">
          {pricingSection ? (
            <>
              <CommonTitle
                className="md:px-10"
                section_title={pricingSection?.section_title}
                description={pricingSection?.description}
              />
              <div className="pricing-container mt-10 flex flex-col items-center justify-center gap-8 lg:col-span-3 lg:grid lg:grid-flow-col lg:items-stretch lg:gap-x-4 xl:justify-between xl:px-14">
              {productData[0]?.map((product, index)=> (
                <PricingCard
                  key={product?.pid}
                  icon={index === 0 ? "/images/shared-hosting.svg" 
                    : index === 1 ? "/images/globe-white.svg"
                    : "/images/wordpress.svg"}
                  title={product?.name}
                  price={product?.pricing?.INR?.monthly}
                  url={product?.product_url}
                  features={<div dangerouslySetInnerHTML={{ __html: product?.description }} />}
                />
              ))}
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

      <section className="fatures-section mt-20">
        <Container className="relative w-full">
          {featuredSection ? (
            <>
              <CommonTitle
                className="md:px-10"
                section_title={featuredSection?.section_title}
                description={featuredSection?.description}
              />
              <div className="feature-container mt-10 grid grid-cols-1 gap-4 sm:grid-cols-12">
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

      <section className="hosting-solution mt-20">
        <Container>
          {hostingSolutionSection ? (
            <>
              <div className="mx-auto max-w-[700px]">
                <CommonTitle
                  className=""
                  section_title={hostingSolutionSection?.section_title}
                  description={hostingSolutionSection?.description}
                />
              </div>

              <div className="mt-10 flex flex-col items-center justify-between md:flex-row">
                <div className="relative flex w-full flex-col gap-8 border-l-2 border-[#DEDFE4] lg:w-1/2">
                  <div className="custom-border absolute inset-0 -left-[2px] h-[172px] w-[2px] rounded-lg"></div>
                  {hostingSolutionSection?.list_item.map(
                    (featureItem: hostingSolutionProps) => (
                      <HostingSolutionList
                        key={featureItem.id}
                        icon={<ShildCheckmark width={24} height={24} />}
                        title={featureItem?.title}
                        description={featureItem?.description}
                      />
                    ),
                  )}
                </div>
                <div className="mt-10 flex w-full items-center justify-center text-center md:mt-0 lg:w-1/2">
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

      <section className="data-center-section mt-20 py-20">
        <Container>
          {dataCenter ? (
            <>
              <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="order-2 mt-10 flex w-full justify-center lg:order-1 lg:mt-0 lg:w-1/2">
                  <Image
                    src={dataCenter?.left_image?.url as string}
                    width={530}
                    height={308}
                    alt={dataCenter?.left_image?.alt || "Data Center Map"}
                    priority
                  />
                </div>
                <div className="order-1 w-full lg:order-2 lg:w-1/2">
                  <h2 className="mb-4 font-beatrice text-3xl font-semibold leading-normal text-white lg:text-[34px]">
                    {dataCenter.section_title}
                  </h2>
                  <p className="font-dmSans text-base font-medium leading-normal text-white">
                    {dataCenter.description}
                  </p>

                  <div className="mt-9 flex flex-col justify-between">
                    <TabComponent tab={dataCenter.tab ?? []} />
                  </div>
                </div>
              </div>
              <div className="mt-20 flex flex-wrap items-center justify-center gap-5 border-t border-white/40 pt-10 max-[576px]:flex-col md:gap-10 xl:gap-x-28">
                {dataCenter?.bottom_section_bock &&
                  dataCenter?.bottom_section_bock.map(
                    (block: DatacenterProps) => (
                      <DataCenterCard
                        key={block.id}
                        title={block?.title}
                        description={block?.content}
                      />
                    ),
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

      <section className="moneyback-section bg-gradient-to-r from-[#085adf]/5 to-[#5d38d3]/5 py-20">
        <Container>
          {moneyBackSection ? (
            <>
              <div className="mx-auto max-w-[700px]">
                <CommonTitle
                  className=""
                  section_title={moneyBackSection?.section_title}
                  description={moneyBackSection?.description}
                />
              </div>
              <div className="col-span-1 mt-14 grid grid-flow-row gap-7 md:col-span-3 md:grid-flow-col md:gap-x-7">
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

      <section className="testimonial-section pb-10 pt-20">
        <Container>
          {testimonial ? (
            <>
              <CommonTitle
                className="md:mx-10"
                section_title={testimonial?.section_title}
                description={testimonial?.description}
              />
              <div className="testimonial-container mt-10 w-full">
                <TestimonialContainer
                  testimonial_block={testimonialPost ?? []}
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

      <section className="faq-section py-20">
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
