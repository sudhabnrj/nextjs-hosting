import React from "react";
import Container from "../ui/Container";
import PricingCard from "./PricingCard";
import { SharedHosting, GlobeWhite, Wordpress } from "@/lib/constants";
import CommonTitle from "./CommonTitle";

const PricingContainer = () => {
  return (
    <section className="sm:pt-20">
      <Container className="w-full relative">
        <CommonTitle
          title="Our Current Deals, Free Domains & $0.99 Webhosting"
          subHeading="Get started in complete confidence. Our 30-day money-back guarantee means it's risk-free."
        />
        <div className="pricing-container flex flex-col items-center lg:grid lg:grid-flow-col lg:col-span-3 gap-8 lg:gap-x-4 mt-10 xl:px-14 xl:justify-between justify-center lg:items-stretch">
          <PricingCard
            icon={SharedHosting}
            title="Shared Hosting"
            price={"20"}
            features={[
              "600 GB Premium Bandwidth",
              "75 GB RAID 10 Storage",
              "30 Hosted Domains",
            ]}
            heghlighted={false}
            extrainfo={true}
          />
          <PricingCard
            icon={GlobeWhite}
            title=".COM Domain"
            price={"120"}
            features={[
              "Domain privacy Protection",
              "DNSSEC Security for your website",
              "Free professional email trial",
            ]}
            heghlighted={true}
            extrainfo={false}
          />
          <PricingCard
            icon={Wordpress}
            title="WordPress Hosting"
            price={"20"}
            features={["5 GB SSD Storage", "50k Visitors/month", "Free SSL"]}
            heghlighted={false}
            extrainfo={true}
          />
        </div>
      </Container>
    </section>
  );
};

export default PricingContainer;
