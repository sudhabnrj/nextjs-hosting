import React from "react";
import PricingCard from "./PricingCard";
import { SharedHosting, GlobeWhite, Wordpress } from "@/lib/constants";

const PricingContainer = () => {
  return (
    <>
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
      <PricingCard
        icon={Wordpress}
        title="WordPress Hosting"
        price={"20"}
        features={["5 GB SSD Storage", "50k Visitors/month", "Free SSL"]}
        heghlighted={false}
        extrainfo={true}
      />
    </>
  );
};

export default PricingContainer;
