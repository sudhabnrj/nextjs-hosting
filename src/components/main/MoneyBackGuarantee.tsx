import React from "react";
import CommonTitle from "./CommonTitle";
import Container from "../ui/Container";
import MoneybackCard from "./MoneybackCard";
import {
  CpanelLogin,
  GlobaldataCenter,
  WordpressSstagging,
} from "@/lib/constants";

export default function MoneyBackGuarantee() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#085adf]/5 to-[#5d38d3]/5">
      <Container>
        <CommonTitle
          className="px-10"
          title="Faster way to communicate across the browser"
          subHeading="Get started in complete confidence. Our 30-day money-back guarantee means it's risk-free."
        />
        <div className="grid grid-flow-col gap-x-7 col-span-3 mt-14">
          <MoneybackCard
            title={"Complete Control!"}
            description={
              "With Hostflow as your web host, you get full control over your WordPress site."
            }
            image={CpanelLogin}
          />
          <MoneybackCard
            title={"Global Data Centers"}
            description={
              "With Hostflow as your web host, you get full control over your WordPress site."
            }
            image={GlobaldataCenter}
          />
          <MoneybackCard
            title={"WordPress Staging"}
            description={
              "With Hostflow as your web host, you get full control over your WordPress site."
            }
            image={WordpressSstagging}
          />
        </div>
      </Container>
    </section>
  );
}
