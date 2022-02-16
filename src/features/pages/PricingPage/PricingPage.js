import React from "react";
import { useMediaQuery } from "react-responsive";
import Compare from "./Compare";
import PriceCard from "../../PriceCard/PriceCard";

export default function PricingPage() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <>
      <PriceCard />
      <Compare desktop={isDesktop} />
    </>
  );
}
