import React from "react";
import CommonTitle from "./CommonTitle";
import Container from "../ui/Container";
import FeaturesList from "./FeaturesList";
import {
  CloudHosting,
  DedicatedHosting,
  EmailHosting,
  ResellerHosting,
  VPSHosting,
  WebHosting,
} from "@/lib/constants";

export default function FeaturesContainer() {
  return (
    <section className="mt-20">
      <Container className="w-full relative">
        <CommonTitle
          className="px-12"
          title="Our Features"
          subHeading="Get started in complete confidence. Our 30-day money-back guarantee means it's risk-free."
        />
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 mt-10 feature-container">
          <FeaturesList
            isFeatured={true}
            className="bg-custom-gradient"
            title={"Web Hosting"}
            description={
              "Web Hosting Involves Renting Server From A Hosting Provider."
            }
            icon={WebHosting}
            url="/"
          />
          <FeaturesList
            title={"VPS Hosting"}
            description={
              "WordPress Hosting gives you speed performance with full of features."
            }
            icon={VPSHosting}
            url="/"
          />
          <FeaturesList
            title={"Dedicated Hosting"}
            description={
              "WordPress Hosting gives you speed performance with full of features."
            }
            icon={DedicatedHosting}
            url="/"
          />
          <FeaturesList
            title={"Email Hosting"}
            description={
              "WordPress Hosting gives you speed performance with full of features."
            }
            icon={EmailHosting}
            url="/"
          />
          <FeaturesList
            title={"Cloud Hosting"}
            description={
              "WordPress Hosting gives you speed performance with full of features."
            }
            icon={CloudHosting}
            url="/"
          />
          <FeaturesList
            title={"Reseller Hosting"}
            description={
              "WordPress Hosting gives you speed performance with full of features."
            }
            icon={ResellerHosting}
            url="/"
          />
          <FeaturesList
            title={"VPS Hosting"}
            description={
              "WordPress Hosting gives you speed performance with full of features."
            }
            icon={VPSHosting}
            url="/"
          />
        </div>
      </Container>
    </section>
  );
}
