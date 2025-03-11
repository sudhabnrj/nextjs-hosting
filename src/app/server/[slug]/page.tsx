import { fetchPageData } from "@/lib/fetchPageData";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import {
  getCommonSectionData,
  getSectionData,
  renderErrorMessage,
} from "@/lib/utility";
import { FeaturedBlockListProps, PageComponent } from "@/types/types";
import Container from "@/components/ui/Container";
import HeroCommon from "@/components/main/HeroCommon";
import CommonTitle from "@/components/main/CommonTitle";
import CTA from "@/components/main/CTA";
import TestimonialContainer from "@/components/main/TestimonialContainer";
import { fetchPost } from "@/lib/fetchPost";
import Card from "@/components/ui/Card";
import StepTabSection from "@/components/main/StepTabSection";
import CompareHostingAlternateBlock from "@/components/main/CompareHostingAlternateBlock";
import PricingCard from "@/components/main/PricingCard";
import { fetchProducts } from "@/lib/api";

type Props = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = (await params).slug;
  const page = await fetchPageData(slug);
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage =
    page.yoast_head_json?.og_image?.length > 0
      ? page.yoast_head_json.og_image[0]?.url
      : ""; // Provide a default fallback image

  return {
    title: page.yoast_head_json?.title,
    description: page.yoast_head_json?.description,
    openGraph: {
      images: [ogImage, ...previousImages],
    },
  };
}

export default async function ServerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const page = await fetchPageData(slug);
  const productData = await fetchProducts();
  
    if (!productData.length) {
      return <div>No products available.</div>;
    }

  if (!page) {
    console.error("Error: Page data not found");
    return notFound(); // ✅ Return Next.js 404 page if no data
  }

  const testimonialPost = await fetchPost("testimonials");

  if (!testimonialPost) {
    console.error("Error: Testimonial Post not found");
    return notFound();
  }

  const heroSection =
    getCommonSectionData(page, "common_hero_bnner") ?? ({} as PageComponent);
  const pricingSection =
    getCommonSectionData(page, "pricing_section") ?? ({} as PageComponent);

  const featuredSection =
    getSectionData(page, "featured_list_section") ?? ({} as PageComponent);
  const transferTab =
    getSectionData(page, "transfer_tab_section") ?? ({} as PageComponent);
  const compareHostingPlan =
    getSectionData(page, "compare_hosting_plan") ?? ({} as PageComponent);

  const testimonial =
    getCommonSectionData(page, "testimonial_section") ?? ({} as PageComponent);
  const CTASection = getCommonSectionData(page, "cta") ?? ({} as PageComponent);

  return (
    <>
      {/* Hero Banner */}
      <section className="common-hero-bg relative h-auto min-h-[1368px] w-full overflow-hidden">
        {/* <CustomBGStyle /> */}
        <Container className="relative z-20 flex flex-col items-start p-0">
          <div className="flex h-full w-full flex-col items-stretch justify-between pt-28 text-center">
            {heroSection && Object.keys(heroSection).length > 0 ? (
              <HeroCommon
                sub_title={heroSection?.sub_title}
                title={heroSection?.title}
                description={heroSection?.description}
                offerText={heroSection?.offer_text}
                primaryBtnTitle={heroSection?.primary_button_title}
                primaryBtnUrl={heroSection?.primary_button_url}
                secondaryBtnTitle={heroSection?.secondary_button_title}
                secondaryBtnurl={heroSection?.secondary_button_url}
                bannerImg={heroSection?.banner_image?.url}
                animatedBanner={heroSection?.banner_full}
              />
            ) : (
              renderErrorMessage({
                isError: "common_hero_bnner",
                message: "Common Hero data not found",
              })
            )}
          </div>
        </Container>
        <div className="pricing-section relative pb-20 pt-28">
          <Container className="relative w-full">
            {pricingSection && Object.keys(pricingSection).length > 0 ? (
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
        </div>
      </section>

      <section className="featured-list mt-20 bg-white">
        <Container>
          {featuredSection && Object.keys(featuredSection).length > 0 ? (
            <>
              <div className="flex flex-col items-start justify-between md:flex-row">
                <div className="w-full">
                  <CommonTitle
                    section_title={featuredSection?.section_title}
                    description={featuredSection?.description}
                    className="md:px-10"
                  />
                </div>
              </div>
              <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featuredSection?.featured_block &&
                  featuredSection?.featured_block.map(
                    (item: FeaturedBlockListProps) => (
                      <Card
                        key={item?.id}
                        className={
                          "flex flex-col gap-4 rounded-lg bg-[#F4F9FF] p-8"
                        }
                        icon={item?.icon?.url}
                        alt={item?.icon?.alt || ""}
                        cardTitle={item?.title}
                        cardDes={item?.description}
                      />
                    ),
                  )}
              </div>
            </>
          ) : (
            renderErrorMessage({
              isError: "featured_list_section",
              message: "Featured List data not found",
            })
          )}
        </Container>
      </section>

      <section className="transfer-tab-section py-20">
        <Container>
          {transferTab && Object.keys(transferTab).length > 0 ? (
            <div className="flex flex-col items-start justify-between">
              <div className="w-full">
                <CommonTitle
                  section_title={transferTab?.section_title}
                  description={transferTab?.description}
                  className="md:px-10"
                />
              </div>
              <div className="mx-auto mt-10 w-full rounded-md border border-gray-200 p-5">
                <StepTabSection tabData={transferTab?.tab ?? []} />
              </div>
            </div>
          ) : (
            renderErrorMessage({
              isError: "transfer_tab_section",
              message: "Transfer Tab data not found",
            })
          )}
        </Container>
      </section>

      <section className="compare-hosting-plan bg-[#F4F9FF] py-20 md:mt-10">
        <Container>
          {compareHostingPlan && Object.keys(compareHostingPlan).length > 0 ? (
            <div className="flex flex-col items-start justify-between">
              <div className="w-full">
                <CommonTitle
                  section_title={compareHostingPlan?.section_title}
                  description={compareHostingPlan?.description}
                  className="md:px-10"
                />
              </div>
              <div className="mt-12 w-full">
                {compareHostingPlan?.alternate_block &&
                  compareHostingPlan?.alternate_block.map((alternateBlock) => (
                    <CompareHostingAlternateBlock
                      key={alternateBlock.id}
                      alternateBlock={alternateBlock}
                    />
                  ))}
              </div>
            </div>
          ) : (
            renderErrorMessage({
              isError: "compare_hosting_plan",
              message: "Hosting data not found",
            })
          )}
        </Container>
      </section>

      <section className="testimonial-section pb-10 pt-20">
        <Container>
          {testimonial && Object.keys(testimonial).length > 0 ? (
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
      <section className="cTA-section my-10 text-center">
        <Container>
          {CTASection && Object.keys(CTASection).length > 0 ? (
            <CTA
              section_title={CTASection?.section_title}
              description={CTASection?.description}
              button_title={CTASection?.button_title}
              button_url={CTASection?.button_url}
            />
          ) : (
            renderErrorMessage({
              isError: "cta",
              message: "CAT data not found",
            })
          )}
        </Container>
      </section>
    </>
  );
}
