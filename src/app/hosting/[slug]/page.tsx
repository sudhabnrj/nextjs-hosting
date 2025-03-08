import AlternateBlock from "@/components/main/AlternateBlock";
import CommonTitle from "@/components/main/CommonTitle";
import CTA from "@/components/main/CTA";
import HeroCommon from "@/components/main/HeroCommon";
import PricingContainer from "@/components/main/PricingContainer";
import TestimonialContainer from "@/components/main/TestimonialContainer";
import TitleSecondary from "@/components/main/TitleSecondary";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { fetchPageData } from "@/lib/fetchPageData";
import {
  getCommonSectionData,
  getSectionData,
  renderErrorMessage,
} from "@/lib/utility";
import { FeaturedBlockListProps, PageComponent } from "@/types/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import { fetchPost } from "@/lib/fetchPost";

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

export default async function HostingPages({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const page = await fetchPageData(slug);

  if (!page) {
    console.error("Error: Page data not found");
    return notFound();
  }

  const testimonialPost = await fetchPost("testimonials");

  if (!testimonialPost) {
    console.error("Error: Testimonial Post not found");
    return notFound();
  }

  const heroSection =
    getCommonSectionData(page, "common_hero_bnner") ?? ({} as PageComponent);

  const featuredSection =
    getSectionData(page, "featured_list_section") ?? ({} as PageComponent);

  const alternetBlockSection =
    getSectionData(page, "alternet_block") ?? ({} as PageComponent);

  const whyChooseSection =
    getSectionData(page, "why_choose_section") ?? ({} as PageComponent);

  const pricingSection =
    getCommonSectionData(page, "pricing_section") ?? ({} as PageComponent);
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

        <section className="pricing-section relative pb-20 pt-28">
          <Container className="relative w-full">
            {pricingSection && Object.keys(pricingSection).length > 0 ? (
              <>
                <CommonTitle
                  className="md:px-10"
                  section_title={pricingSection?.section_title}
                  description={pricingSection?.description}
                />
                <div className="pricing-container mt-10 flex flex-col items-center justify-center gap-8 lg:col-span-3 lg:grid lg:grid-flow-col lg:items-stretch lg:gap-x-4 xl:justify-between xl:px-14">
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
      </section>

      <section className="featured-list mt-20 bg-[#F4F9FF] py-20">
        <Container>
          {featuredSection && Object.keys(featuredSection).length > 0 ? (
            <>
              <div className="flex flex-col items-start justify-between md:flex-row">
                <div className="w-full md:w-1/2">
                  <TitleSecondary
                    className="px-0 text-left"
                    subTitle={featuredSection?.section_sub_title}
                    section_title={featuredSection?.section_title}
                    description={featuredSection?.description}
                    button_url={featuredSection?.button_url}
                    button_title={featuredSection?.button_title}
                  />
                </div>
                <div className="flex w-full justify-start md:w-1/2 md:justify-end">
                  <Image
                    className="h-[376px] w-full"
                    src={featuredSection?.section_image?.url as string}
                    alt={featuredSection?.section_image?.alt as string}
                    width={540}
                    height={450}
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
                          "flex flex-col gap-4 rounded-lg bg-white p-8"
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

      <section className="alternet-block bg-white py-20">
        <Container>
          {alternetBlockSection &&
          Object.keys(alternetBlockSection).length > 0 ? (
            <>
              {alternetBlockSection?.section &&
                alternetBlockSection?.section.map((item) => (
                  <AlternateBlock
                    key={item.id}
                    className={"mb-10"}
                    imagePosition={item?.banner_position?.value || "left"}
                    src={item?.banner_image?.url}
                    alt={item?.banner_image?.alt}
                    subTitle={item?.sub_title}
                    section_title={item?.title}
                    description={item?.description}
                    buttonSectionTitle={item?.button_title}
                    buttonSectionUrl={item?.button_url}
                  />
                ))}
            </>
          ) : (
            renderErrorMessage({
              isError: "alternet_block",
              message: "Alternate Block data not found",
            })
          )}
        </Container>
      </section>

      <section className="featured-list bg-white py-20">
        <Container>
          {whyChooseSection && Object.keys(whyChooseSection).length > 0 ? (
            <>
              <CommonTitle
                section_title={whyChooseSection.section_title}
                description={whyChooseSection.description}
                className="md:px-10"
              />
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {whyChooseSection.section_block &&
                whyChooseSection.section_block.length > 0
                  ? whyChooseSection?.section_block.map((item) => (
                      <Card
                        key={item.id}
                        className={
                          "flex flex-col gap-4 rounded-lg bg-[#F4F9FF] px-8 pb-5 pt-8 shadow-none"
                        }
                        icon={item.icon?.url}
                        alt={item.icon?.alt}
                        cardTitle={item?.title}
                        cardDes={item?.description}
                      />
                    ))
                  : renderErrorMessage({
                      isError: "section_block",
                      message: "Block data not found",
                    })}
              </div>
            </>
          ) : (
            renderErrorMessage({
              isError: "alternet_block",
              message: "whyChoose Section data not found",
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
