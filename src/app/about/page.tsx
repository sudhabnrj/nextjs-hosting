import HeroCommon from "@/components/main/HeroCommon";
import Container from "@/components/ui/Container";
import CustomBGStyle from "@/components/ui/CustomBGStyle";
import { fetchPageData } from "@/lib/fetchPageData";
import { getCommonSectionData, renderErrorMessage } from "@/lib/utility";
import { PageComponent } from "@/types/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

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
  console.log("About page", page);

  if (!page) {
    console.error("Error: Page data not found");
    return notFound();
  }

  const heroSection =
    getCommonSectionData(page, "common_hero_bnner") ?? ({} as PageComponent);

  return (
    <section className="hero-Home w-full h-auto relative overflow-hidden">
      <CustomBGStyle />
      <Container className="min-h-[687px] p-0 relative flex items-start flex-col z-20">
        <div className="flex flex-col justify-between items-stretch w-full h-full text-center pt-28">
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
            />
          ) : (
            renderErrorMessage({
              isError: "common_hero_bnner",
              message: "Common Hero data not found",
            })
          )}
        </div>
      </Container>
    </section>
  );
}
