import React from "react";
import "./Dealer.css";

export default function Dealer() {
  return (
    <section id="Dealer" className="dealer-section">
      <h2>Join Our Network: Become a Dealer Today!</h2>
      <ul className="dealer-benefits">
        <li>Competitive Margins</li>
        <li>Marketing Support</li>
        <li>High-Quality Products</li>
        <li>Exclusive Territory Rights</li>
      </ul>
      <div className="dealer-cta-image">
        <img src={process.env.PUBLIC_URL + "/929db075-eef2-45be-b11a-12416933e488 (1).png"} alt="Become Our Dealer" />
      </div>
    </section>
  );
} 