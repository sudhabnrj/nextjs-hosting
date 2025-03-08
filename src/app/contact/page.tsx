import HeroCommon from "@/components/main/HeroCommon";
import Container from "@/components/ui/Container";
import { fetchPageData } from "@/lib/fetchPageData";
import {
  getCommonSectionData,
  getSectionData,
  renderErrorMessage,
} from "@/lib/utility";
import { PageComponent } from "@/types/types";
import { notFound } from "next/navigation";
import React from "react";
import { Metadata } from "next";
import ContactForm from "@/components/main/ContactForm";
import CTA from "@/components/main/CTA";
import AddressCard from "@/components/main/AddressCard";
import StreetMapIcon from "@/components/ui/StreetMapIcon";
import EmailIcon from "@/components/ui/EmailIcon";
import PhoneIcon from "@/components/ui/PhoneIcon";
import TimerIcon from "@/components/ui/TimerIcon";
import TitleSecondary from "@/components/main/TitleSecondary";
import Image from "next/image";
import { EmailCloud } from "@/lib/constants";
import AskArrow from "@/components/ui/AskArrow";

// Generate metadata dynamically
export async function generateMetadata(): Promise<Metadata> {
  const page = await fetchPageData("contact");

  if (!page) {
    return {
      title: "Contact Us - Default",
      description: "",
      openGraph: {
        images: ["/default-image.jpg"],
      },
    };
  }

  return {
    title: page.yoast_head_json?.title || page.title.rendered,
    description:
      page.yoast_head_json?.description || "Contact us page description.",
    openGraph: {
      images: [
        page.yoast_head_json?.og_image?.[0]?.url || "/default-image.jpg",
      ],
    },
  };
}
export default async function ContactPage() {
  const page = await fetchPageData("contact");

  if (!page) {
    console.error("Error: Page data not found");
    return notFound();
  }

  const heroSection =
    getCommonSectionData(page, "common_hero_bnner") ?? ({} as PageComponent);

  const addressSection =
    getSectionData(page, "address_section") ?? ({} as PageComponent);

  const CTASection = getCommonSectionData(page, "cta") ?? ({} as PageComponent);

  return (
    <>
      <section className="common-hero-bg relative min-h-[931px] w-full overflow-hidden">
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
        <div className="address-card-container mt-28 pb-10">
          <Container>
            {addressSection && Object.keys(addressSection).length > 0 ? (
              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-4">
                <AddressCard
                  content={
                    addressSection?.address_card?.content ??
                    "No Address Available"
                  }
                  moreContent={""}
                  icon={<StreetMapIcon width={42} height={38} />}
                />
                <AddressCard
                  content={
                    addressSection?.email_card?.content ?? "No Email Available"
                  }
                  moreContent={addressSection?.email_card?.more_content}
                  icon={<EmailIcon width={42} height={38} />}
                />
                <AddressCard
                  content={
                    addressSection?.phone_card?.content ?? "No Phone Available"
                  }
                  moreContent={addressSection?.phone_card?.more_content}
                  icon={<PhoneIcon width={42} height={38} />}
                />
                <AddressCard
                  content={
                    addressSection?.timing_card?.content ??
                    "No Timing Available"
                  }
                  moreContent={addressSection?.timing_card?.more_content}
                  icon={<TimerIcon width={42} height={38} />}
                />
              </div>
            ) : (
              renderErrorMessage({
                isError: "address_section",
                message: "Address not found",
              })
            )}
          </Container>
        </div>
      </section>

      <div className="contact-form pb-10 lg:py-10">
        <Container>
          <div className="mt-7 flex w-full flex-col justify-between bg-white lg:flex-row">
            <div className="w-full max-w-[433px] lg:w-1/2">
              {EmailCloud && (
                <div className="flex justify-end">
                  <Image
                    src={EmailCloud}
                    width={240}
                    height={172}
                    alt="email Vector"
                    priority
                  />
                </div>
              )}
              <h2 className="relative font-beatrice text-[42px] font-bold leading-[57px] text-primary sm:text-[56px] xl:text-[78px] xl:leading-[97px]">
                Ask a Question
                <span className="absolute -top-4 right-0 h-36 w-36">
                  <AskArrow width={144} height={144} />
                </span>
              </h2>
              <p className="mt-6 text-lg font-medium text-bodyText">
                Schedule a call today and one of our experts to help you decide
                which service is ideal for your business and budget.
              </p>
            </div>
            <div className="mt-10 w-full text-left lg:mt-0 lg:w-1/2">
              <TitleSecondary
                section_title={"Send US a Message"}
                description={
                  "Your email address will not be published Required fields are marked *"
                }
              />
              <ContactForm />
            </div>
          </div>
        </Container>
      </div>

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
