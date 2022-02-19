import React from "react";
import { useMediaQuery } from "react-responsive";
import Compare from "./Compare";
import PriceCardGroup from "../../PriceCard/PriceCardGroup";

export default function PricingPage() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <>
      <PriceCardGroup />
      <Compare desktop={isDesktop} />
    </>
  );
}
