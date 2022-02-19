import React, { useState } from "react";
import classNames from "classnames";
import PriceCard from "./PriceCard";
import data from "../../data";
import "./priceCardGroup.scss";

export default function PriceCardGroup() {
  const [activePrice, setActivePrice] = useState("monthly");
  const pricingData = data["pricingCardsData"];

  const priceToggleHandler = (activePriceState) => {
    setActivePrice(activePriceState);
  };

  const pricingCardsUi = pricingData.map((data) => {
    console.log("title: ", data.title);
    return (
      <PriceCard
        title={data.title}
        description={data.description}
        price={
          activePrice === "monthly" ? data.pricePerMonth : data.pricePerYear
        }
        ctaText="Pick Plan"
        theme={data.theme}
      />
    );
  });

  return (
    <div className="pcg__container">
      <div className="pcg__toggle_container">
        <button
          onClick={() => priceToggleHandler("monthly")}
          className={classNames(
            activePrice === "monthly" && "pcg__active_button",
            "pcg__button"
          )}
        >
          Monthly
        </button>
        <button
          onClick={() => priceToggleHandler("yearly")}
          className={classNames(
            activePrice === "yearly" && "pcg__active_button",
            "pcg__button"
          )}
        >
          Yearly
        </button>
      </div>
      <div className="pcg__price_container">{pricingCardsUi}</div>
    </div>

    // return (
    //   <div className="pcg__container">
    //     <div className="pcg__toggle_container">
    //       <button
    //         onClick={() => priceToggleHandler("monthly")}
    //         className={classNames(
    //           activePrice === "monthly" && "pcg__active_button",
    //           "pcg__button"
    //         )}
    //       >
    //         Monthly
    //       </button>
    //       <button
    //         onClick={() => priceToggleHandler("yearly")}
    //         className={classNames(
    //           activePrice === "yearly" && "pcg__active_button",
    //           "pcg__button"
    //         )}
    //       >
    //         Yearly
    //       </button>
    //     </div>
    //     <div className="pcg__price_container">
    //       <PriceCard theme={"light"} />
    //       <PriceCard theme={"dark"} />
    //       <PriceCard theme={"light"} />
    //     </div>
    //   </div>
  );
}
