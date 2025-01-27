import React from "react";
import Container from "../ui/Container";
import DividerLeft from "../ui/DividerLeft";
import DividerRight from "../ui/DividerRight";
import PricingCard from "./PricingCard";
import { SharedHosting, GlobeWhite, Wordpress } from "@/lib/constants";
import CommonTitle from "./CommonTitle";

const PricingContainer = () => {
  return (
    <section className="pt-20">
      <Container className="w-full relative">
        <CommonTitle
          title="Our Current Deals, Free Domains & $0.99 Webhosting"
          subHeading="Get started in complete confidence. Our 30-day money-back guarantee means it's risk-free."
        />
        <div className="pricing-container grid grid-flow-col gap-x-4 mt-10 xl:px-14 xl:justify-between justify-center">
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
