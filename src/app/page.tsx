import DataCenter from "@/components/main/DataCenter";
import FeaturesContainer from "@/components/main/FeaturesContainer";
import Hero from "@/components/main/Hero";
import HostingSolution from "@/components/main/HostingSolution";
import PricingContainer from "@/components/main/PricingContainer";

export default function Home() {
  return(
    <>
      <Hero />
      <PricingContainer/>
      <FeaturesContainer />
      <HostingSolution/>
      <DataCenter/>
    </>
  );
}
