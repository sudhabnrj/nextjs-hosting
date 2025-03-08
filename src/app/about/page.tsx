import CommonTitle from "@/components/main/CommonTitle";
import HeroCommon from "@/components/main/HeroCommon";
import Container from "@/components/ui/Container";
import { fetchPageData } from "@/lib/fetchPageData";
import {
  getCommonSectionData,
  getSectionData,
  renderErrorMessage,
} from "@/lib/utility";
import { CounterCTAProps, PageComponent } from "@/types/types";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import TitleSecondary from "@/components/main/TitleSecondary";
import HistoryContainer from "@/components/main/HistoryContainer";
import CounterCard from "@/components/main/CounterCard";
import TestimonialContainer from "@/components/main/TestimonialContainer";
import CTA from "@/components/main/CTA";
import AboutUsContent from "@/components/main/AboutUsContent";
import EmpHapinessImageGroup from "@/components/main/EmpHapinessImageGroup";
import { fetchPost } from "@/lib/fetchPost";

// Generate metadata dynamically
export async function generateMetadata(): Promise<Metadata> {
  const page = await fetchPageData("about");

  if (!page) {
    return {
      title: "About Us - Default",
      description: "Learn more about our company.",
      openGraph: {
        images: ["/default-image.jpg"],
      },
    };
  }

  return {
    title: page.yoast_head_json?.title || page.title.rendered,
    description:
      page.yoast_head_json?.description || "About us page description.",
    openGraph: {
      images: [
        page.yoast_head_json?.og_image?.[0]?.url || "/default-image.jpg",
      ],
    },
  };
}

export default async function AboutPage() {
  const page = await fetchPageData("about");

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

  const aboutSection =
    getSectionData(page, "about_section") ?? ({} as PageComponent);
  const empHapiness =
    getSectionData(page, "employees_happiness_section") ??
    ({} as PageComponent);
  const historySec =
    getSectionData(page, "our_history") ?? ({} as PageComponent);
  const dataCenterMap =
    getSectionData(page, "data_centers_with_map") ?? ({} as PageComponent);
  const counterCTA =
    getSectionData(page, "counter_cta") ?? ({} as PageComponent);

  const testimonial =
    getCommonSectionData(page, "testimonial_section") ?? ({} as PageComponent);
  const CTASection = getCommonSectionData(page, "cta") ?? ({} as PageComponent);

  return (
    <>
      <section className="common-hero-bg relative min-h-[1368px] w-full overflow-hidden">
        <Container className="relative z-20 flex flex-col items-start p-0">
          <div className="flex w-full flex-col items-stretch justify-between pt-40 text-left">
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
                alt={heroSection?.banner_image?.alt}
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
        <section className="pricing-section about-section relative z-10 my-20 lg:my-36">
          <Container>
            {aboutSection && Object.keys(aboutSection).length > 0 ? (
              <>
                <CommonTitle
                  className="md:px-10"
                  section_title={aboutSection?.section_title}
                  description={aboutSection?.description}
                />
                <div className="mt-20 flex flex-col items-start justify-between gap-20 lg:flex-row">
                  <AboutUsContent
                    AboutBanner={aboutSection?.about_sec_image_group}
                    AboutContent={aboutSection?.about_section_block}
                  />
                </div>
              </>
            ) : (
              renderErrorMessage({
                isError: "about_section",
                message: "About Section Content not found",
              })
            )}
          </Container>
        </section>
      </section>

      <section className="employees-happiness-section min-h-[580px] bg-[#F4F9FF] pb-28 pt-20">
        <Container>
          {empHapiness && Object.keys(empHapiness).length > 0 ? (
            <div className="flex flex-col items-center justify-between gap-20 lg:flex-row">
              <div className="flex w-full flex-col gap-3 lg:w-1/2">
                <TitleSecondary
                  section_title={empHapiness?.section_title}
                  description={empHapiness?.description}
                  listItemData={empHapiness?.list_item_block}
                />
              </div>
              <div className="relative z-10 flex w-full flex-row items-stretch gap-4 lg:w-1/2">
                <EmpHapinessImageGroup ImageGroup={empHapiness?.image} />
              </div>
            </div>
          ) : (
            renderErrorMessage({
              isError: "employees_happiness_section",
              message: "Hapiness Section data not found",
            })
          )}
        </Container>
      </section>

      <section className="history-section relative bg-custom-gradient pb-5 pt-20 md:pb-2">
        <Container className="relative z-50">
          {historySec && Object.keys(historySec).length > 0 ? (
            <>
              <TitleSecondary
                section_title={historySec?.section_title}
                description={historySec?.description}
              />
              <HistoryContainer historyData={historySec?.history ?? []} />
            </>
          ) : (
            renderErrorMessage({
              isError: "our_history",
              message: "Our History Section not found",
            })
          )}
        </Container>
      </section>

      <section className="visitor-map relative z-10 bg-white py-20">
        <Container>
          {dataCenterMap && Object.keys(dataCenterMap).length > 0 ? (
            <>
              <div className="mx-auto max-w-[700px]">
                <CommonTitle
                  className="md:px-10"
                  section_title={dataCenterMap?.section_title}
                  description={dataCenterMap?.description}
                />
              </div>
              <Image
                src={dataCenterMap?.map_image?.url as string}
                alt={dataCenterMap?.map_image?.alt}
                className="mx-auto mt-20 h-auto w-full md:h-[500px]"
                width={1000}
                height={500}
                priority
              />
            </>
          ) : (
            renderErrorMessage({
              isError: "data_centers_with_map",
              message: "DataCenter Content not found",
            })
          )}
        </Container>
      </section>

      <section className="counter-section mb-20 mt-10 md:my-20">
        <Container>
          <div className="counter-section-bg relative min-h-[168px] rounded-lg bg-custom-gradient px-8 py-8 md:px-20">
            {counterCTA && Object.keys(counterCTA).length > 0 ? (
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
                {counterCTA.add_block &&
                  counterCTA?.add_block.map((counter: CounterCTAProps) => (
                    <CounterCard
                      key={counter?.id}
                      src={counter?.icon?.url}
                      alt={counter?.icon?.alt}
                      title={counter?.title}
                      description={counter?.description}
                    />
                  ))}
              </div>
            ) : (
              renderErrorMessage({
                isError: "counter_cta",
                message: "Counter data not found",
              })
            )}
          </div>
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
        <Container className="relative z-50">
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
