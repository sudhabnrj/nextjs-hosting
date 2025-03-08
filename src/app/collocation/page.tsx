import type { Metadata, ResolvingMetadata } from "next";
import { fetchPageData } from "@/lib/fetchPageData";
import CommonTitle from "@/components/main/CommonTitle";
import HeroCommon from "@/components/main/HeroCommon";
import PricingContainer from "@/components/main/PricingContainer";
import Container from "@/components/ui/Container";
import { getCommonSectionData, renderErrorMessage } from "@/lib/utility";
import React from "react";
import { PageComponent } from "@/types/types";
import { notFound } from "next/navigation";
import CTA from "@/components/main/CTA";
import TestimonialContainer from "@/components/main/TestimonialContainer";
import { fetchPost } from "@/lib/fetchPost";
import FeaturesList from "@/components/main/FeaturesList";
import ThreeColumnCard from "@/components/main/ThreeColumnCard";
import Image from "next/image";
import Link from "next/link";
import ArrowLight from "@/components/ui/ArrowLight";
import PayperSectionCard from "@/components/main/PayperSectionCard";
import ColocationServiceCard from "@/components/main/ColocationServiceCard";
import PricingWithTable from "@/components/main/PricingWithTable";

// Generate metadata dynamically
export async function generateMetadata(): Promise<Metadata> {
  const page = await fetchPageData("collocation");

  if (!page) {
    return {
      title: "Collocation - Default",
      description: "",
      openGraph: {
        images: ["/default-image.jpg"],
      },
    };
  }

  return {
    title: page.yoast_head_json?.title || page.title.rendered,
    description:
      page.yoast_head_json?.description || "collocation page description.",
    openGraph: {
      images: [
        page.yoast_head_json?.og_image?.[0]?.url || "/default-image.jpg",
      ],
    },
  };
}

export default async function Collocation() {
  const page = await fetchPageData("collocation");

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
        <div className="pricing-section relative pb-20 pt-28">
          <Container className="relative w-full">
            {pricingSection && Object.keys(pricingSection).length > 0 ? (
              <>
                <CommonTitle
                  className="md:px-10"
                  section_title={pricingSection?.section_title}
                  description={pricingSection?.description}
                />
                <div className="pricing-container mt-10 flex flex-col items-center justify-center gap-8 xl:px-14">
                  <PricingWithTable />
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

      <section className="payper-section bg-gradient-to-r from-[#085BDF]/5 to-[#5D39D3]/5 py-20">
        <Container className="relative w-full">
          <CommonTitle
            className="md:px-10"
            section_title={"Pay-per-kWh Colocation Model"}
          />
          <div className="payper-section-container mt-14 flex flex-col items-start justify-between md:flex-row">
            <div className="order-2 w-full md:order-1 md:w-1/2 md:max-w-[490px]">
              <h3 className="mb-4 bg-custom-gradient bg-clip-text font-dmSans text-lg font-semibold text-transparent">
                24/7 Technical Support
              </h3>
              <p className="block font-dmSans text-lg leading-normal text-bodyText">
                Many businesses overpay for data center server colocation
                pricing power due to mismatched capacity needs. MilesWeb offers
                a pay-per-kWh colocation server model that helps businesses by
                optimizing power infrastructure design to lower upfront costs.
                You pay for what you use and save money in the long run.
              </p>

              <Link
                href="/"
                className="btn-primary mt-7 inline-block !px-10 !font-beatrice"
              >
                Get Started Now
              </Link>
            </div>
            <div className="order-1 mb-5 w-full md:order-2 md:mb-0 md:w-1/2">
              <Image
                className="w-full"
                width="534"
                height="309"
                alt={"pay"}
                src={
                  "http://localhost/nextadmin/wp-content/uploads/2025/03/pay-per-thumb.jpg"
                }
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="payper-section-three-column pt-20">
        <Container className="relative w-full">
          <CommonTitle
            className="md:px-10"
            section_title={"What pay-per-kWh colocation server model offers?"}
          />
          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            <PayperSectionCard
              title={"Pay only for what you use"}
              description={
                "No overpayment with us; you're billed based on your actual power consumption."
              }
              buttonTitle={"Find out more "}
              url={"/"}
            />
            <PayperSectionCard
              title={"Pay only for what you use"}
              description={
                "No overpayment with us; you're billed based on your actual power consumption."
              }
              buttonTitle={"Find out more "}
              url={"/"}
            />
            <PayperSectionCard
              title={"Pay only for what you use"}
              description={
                "No overpayment with us; you're billed based on your actual power consumption."
              }
              buttonTitle={"Find out more "}
              url={"/"}
            />
          </div>
        </Container>
      </section>

      <section className="fatures-section-three-column mt-20">
        <Container className="relative w-full">
          <>
            <CommonTitle
              className="md:px-10"
              section_title={
                "Setting the Standard For Server Colocation Excellence"
              }
              description={
                "Host your critical IT infrastructure with Hostflow hyper-connected environment and dedicated server colocation services."
              }
            />
            <div className="feature-container-three-column mt-10 grid grid-cols-1 gap-4 sm:grid-cols-12">
              <ThreeColumnCard
                className={"bg-[#d4dcff]/10"}
                title={"Individual Server Rack Environment"}
                description={
                  "We, as your server colocation service provider in India, offer multiple server rack options to fit your needs. You can choose from various rack sizes and have the flexibility to rent individual units within the rack. "
                }
                icon={
                  "http://localhost/nextadmin/wp-content/uploads/2025/01/vps-hosting.svg"
                }
                pageUrl={"page_url"}
              />
              <ThreeColumnCard
                className={"bg-[#d4dcff]/10"}
                title={"Individual Server Rack Environment"}
                description={
                  "We, as your server colocation service provider in India, offer multiple server rack options to fit your needs. You can choose from various rack sizes and have the flexibility to rent individual units within the rack. "
                }
                icon={
                  "http://localhost/nextadmin/wp-content/uploads/2025/01/vps-hosting.svg"
                }
                pageUrl={"page_url"}
              />
              <ThreeColumnCard
                className={"bg-[#d4dcff]/10"}
                title={"Individual Server Rack Environment"}
                description={
                  "We, as your server colocation service provider in India, offer multiple server rack options to fit your needs. You can choose from various rack sizes and have the flexibility to rent individual units within the rack. "
                }
                icon={
                  "http://localhost/nextadmin/wp-content/uploads/2025/01/vps-hosting.svg"
                }
                pageUrl={"page_url"}
              />
              <ThreeColumnCard
                className={"bg-[#d4dcff]/10"}
                title={"Individual Server Rack Environment"}
                description={
                  "We, as your server colocation service provider in India, offer multiple server rack options to fit your needs. You can choose from various rack sizes and have the flexibility to rent individual units within the rack. "
                }
                icon={
                  "http://localhost/nextadmin/wp-content/uploads/2025/01/vps-hosting.svg"
                }
                pageUrl={"page_url"}
              />
              <ThreeColumnCard
                className={"bg-[#d4dcff]/10"}
                title={"Individual Server Rack Environment"}
                description={
                  "We, as your server colocation service provider in India, offer multiple server rack options to fit your needs. You can choose from various rack sizes and have the flexibility to rent individual units within the rack. "
                }
                icon={
                  "http://localhost/nextadmin/wp-content/uploads/2025/01/vps-hosting.svg"
                }
                pageUrl={"page_url"}
              />
              <ThreeColumnCard
                className={"bg-[#d4dcff]/10"}
                title={"Individual Server Rack Environment"}
                description={
                  "We, as your server colocation service provider in India, offer multiple server rack options to fit your needs. You can choose from various rack sizes and have the flexibility to rent individual units within the rack. "
                }
                icon={
                  "http://localhost/nextadmin/wp-content/uploads/2025/01/vps-hosting.svg"
                }
                pageUrl={"page_url"}
              />
            </div>
          </>
        </Container>
      </section>

      <section className="top-colocation-service pt-20">
        <Container className="relative w-full">
          <CommonTitle
            className="md:px-10"
            section_title={"Top Colocation Services"}
          />
          <div className="mt-20 grid grid-cols-3 gap-8">
            <ColocationServiceCard
              index={"1"}
              title={"Colo+"}
              description={
                "Hostflow offers Colo+, a server colocation service that provides businesses with a variety of options to meet their server colocation needs in India. We offer multiple rack sizes to optimize space, bundled power options, and the flexibility to choose between fiber or copper connections. Additionally, Colo+ includes 24/7 support, remote hands, and eye services, contemporary workspaces with fast internet, and secure storage for equipment."
              }
            />
            <ColocationServiceCard
              index={"2"}
              title={"Colo+"}
              description={
                "Hostflow offers Colo+, a server colocation service that provides businesses with a variety of options to meet their server colocation needs in India. We offer multiple rack sizes to optimize space, bundled power options, and the flexibility to choose between fiber or copper connections. Additionally, Colo+ includes 24/7 support, remote hands, and eye services, contemporary workspaces with fast internet, and secure storage for equipment."
              }
            />
            <ColocationServiceCard
              index={"3"}
              title={"Colo+"}
              description={
                "Hostflow offers Colo+, a server colocation service that provides businesses with a variety of options to meet their server colocation needs in India. We offer multiple rack sizes to optimize space, bundled power options, and the flexibility to choose between fiber or copper connections. Additionally, Colo+ includes 24/7 support, remote hands, and eye services, contemporary workspaces with fast internet, and secure storage for equipment."
              }
            />
          </div>
        </Container>
      </section>

      <section className="data-center-section mt-20 py-20">
        <Container>
          <CommonTitle
            className="text-white md:px-10"
            section_title={
              "Advancing India’s Digital Revolution With State-Of-The-Art Data Centers"
            }
            description={
              "Across various domains, including software development, business strateg manufacturing, and service delivery. Here’s a comprehensive look at what adaptability large-scale operations."
            }
          />
          <div>
            <Image
              className="mt-14 w-full"
              width={918}
              height={432}
              src={
                "http://localhost/nextadmin/wp-content/uploads/2025/03/single-transparent-map.svg"
              }
              alt="map"
            />
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
