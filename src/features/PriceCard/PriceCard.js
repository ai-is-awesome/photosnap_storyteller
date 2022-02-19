import React from "react";
import classNames from "classnames";
import "./pricecard.scss";

export default function PriceCard({
  theme,
  title,
  description,
  price,
  timePeriod,
  ctaText,
}) {
  const containerClasses = classNames(
    "prc__container",
    theme === "light" ? "light" : "dark"
  );
  return (
    <div className={containerClasses}>
      <div className="prc__title">{title}</div>
      <div className="prc__description">{description}</div>
      <div className="prc__price">${price}</div>
      <div className="prc__time_period">{timePeriod}</div>
      <button className="prc__cta">{ctaText}</button>
    </div>
  );
}
