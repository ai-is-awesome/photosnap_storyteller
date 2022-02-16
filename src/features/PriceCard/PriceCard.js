import React from "react";
import "./pricecard.scss";

export default function PriceCard() {
  return (
    <div className="prc__container">
      <div className="prc__title">Pro</div>
      <div className="prc__description">
        More advanced features available. Recommended for photography veterans
        and professionals.
      </div>
      <div className="prc__price">$39.00</div>
      <div className="prc__time_period">Per Month</div>
      <button className="prc__cta">Pick Plan</button>
    </div>
  );
}
