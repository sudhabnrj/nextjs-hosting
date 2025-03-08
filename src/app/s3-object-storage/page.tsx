import type { Metadata, ResolvingMetadata } from "next";
import { fetchPageData } from "@/lib/fetchPageData";
import CommonTitle from "@/components/main/CommonTitle";
import HeroCommon from "@/components/main/HeroCommon";
import Container from "@/components/ui/Container";
import { getCommonSectionData, renderErrorMessage } from "@/lib/utility";
import React from "react";
import { PageComponent } from "@/types/types";
import { notFound } from "next/navigation";
import CTA from "@/components/main/CTA";
import TestimonialContainer from "@/components/main/TestimonialContainer";
import { fetchPost } from "@/lib/fetchPost";
import ThreeColumnCard from "@/components/main/ThreeColumnCard";
import PayperSectionCard from "@/components/main/PayperSectionCard";
import ObjectStorageCard from "@/components/main/ObjectStorageCard";

// Generate metadata dynamically
export async function generateMetadata(): Promise<Metadata> {
  const page = await fetchPageData("collocation");

  if (!page) {
    return {
      title: "s3 object storage - Default",
      description: "",
      openGraph: {
        images: ["/default-image.jpg"],
      },
    };
  }

  return {
    title: page.yoast_head_json?.title || page.title.rendered,
    description:
      page.yoast_head_json?.description || "s3 object page description.",
    openGraph: {
      images: [
        page.yoast_head_json?.og_image?.[0]?.url || "/default-image.jpg",
      ],
    },
  };
}

export default async function S3ObjectStorage() {
  const page = await fetchPageData("s3-object-storage");

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
  const testimonial =
    getCommonSectionData(page, "testimonial_section") ?? ({} as PageComponent);
  const CTASection = getCommonSectionData(page, "cta") ?? ({} as PageComponent);

  return (
    <>
      {/* Hero Banner */}

      <section className="common-hero-bg relative h-auto min-h-[1176px] w-full overflow-hidden">
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
            <>
              <CommonTitle
                className="md:px-10"
                section_title={"Scalable, fast, and reliable storage"}
                description={
                  "Spaces Object Storage complements local storage to help your business scale. Globally available starting at $5 per month for 250GiB with 1TiB of outbound transfer —inbound bandwidth to Spaces is always free."
                }
              />
              <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:px-14">
                <ObjectStorageCard
                  src={
                    "http://localhost/nextadmin/wp-content/uploads/2025/03/performance.svg"
                  }
                  title={"Excellent performance and simple to use"}
                  description={
                    "Designed for applications requiring high requests per second (RPS), Spaces ensures high read and write operations performance, maxing out at 1500 RPS per client IP address, and is simple to use."
                  }
                />
                <ObjectStorageCard
                  src={
                    "http://localhost/nextadmin/wp-content/uploads/2025/03/performance.svg"
                  }
                  title={"Excellent performance and simple to use"}
                  description={
                    "Designed for applications requiring high requests per second (RPS), Spaces ensures high read and write operations performance, maxing out at 1500 RPS per client IP address, and is simple to use."
                  }
                />
                <ObjectStorageCard
                  src={
                    "http://localhost/nextadmin/wp-content/uploads/2025/03/performance.svg"
                  }
                  title={"Excellent performance and simple to use"}
                  description={
                    "Designed for applications requiring high requests per second (RPS), Spaces ensures high read and write operations performance, maxing out at 1500 RPS per client IP address, and is simple to use."
                  }
                />
              </div>
            </>
          </Container>
        </div>
      </section>

      <section className="fatures-section-three-column mt-20">
        <Container className="relative w-full">
          <>
            <CommonTitle
              className="md:px-10"
              section_title={
                "Easily migrate your data to Webflow Object Storage"
              }
              description={
                "Move data from other cloud providers to Spaces buckets using our preferred migration partner, Flexify.IO, with no downtimes whatsoever. Flexify.IO provides a data transfer platform to easily migrate data between different cloud storage accounts to webflow. You have two options:"
              }
            />
            <div className="feature-container-three-column mt-10 grid grid-cols-1 gap-4 sm:grid-cols-12">
              <ThreeColumnCard
                className={"bg-[#d4dcff]/10 sm:col-span-6 lg:col-span-6"}
                title={"Option 1: 'Do it Yourself' (DIY)"}
                description={
                  "Use the free version of Flexify.IO from the DigitalOcean marketplace and spin up a Droplet to facilitate the data transfer."
                }
                icon={
                  "http://localhost/nextadmin/wp-content/uploads/2025/01/vps-hosting.svg"
                }
                pageUrl={"page_url"}
              />
              <ThreeColumnCard
                className={"bg-[#d4dcff]/10 sm:col-span-6 lg:col-span-6"}
                title={"Option 2: Paid Approach"}
                description={
                  "Visit Flexify.IO and choose between paid self-service and managed services options to transfer data from other cloud providers."
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

      <section className="payper-section-three-column pt-20">
        <Container className="relative w-full">
          <CommonTitle
            className="md:px-10"
            section_title={"How hostflow can help you"}
          />
          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            <PayperSectionCard
              title={
                "Deploy a big data and analytics platform in less than an hour."
              }
              description={
                "Get started with our pre-configured, ready-to-use Apache solution."
              }
              buttonTitle={"Find out more "}
              url={"/"}
            />
            <PayperSectionCard
              title={"Deploy instances with guaranteed resources"}
              description={
                "Our Public Cloud solutions are perfect if you need a highly scalable solution with 100% dedicated resources, 100% of the time."
              }
              buttonTitle={"Find out more "}
              url={"/"}
            />
            <PayperSectionCard
              title={"Build a website in 5 steps"}
              description={
                "Find out how to build a website easily with our hosting solutions, and the 1- click modules included with them: (WordPress, PrestaShop, Joomla!, Drupal)"
              }
              buttonTitle={"Find out more "}
              url={"/"}
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
