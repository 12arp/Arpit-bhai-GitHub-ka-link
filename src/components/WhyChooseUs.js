import React from "react";
import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  return (
    <section className="why-choose-section">
      <h2>Why Choose Us?</h2>
      <div className="features-list">
        <div className="feature-card">
          <div className="feature-title">Made in India</div>
          <div className="feature-desc">Proudly manufactured in India, supporting local innovation and growth.</div>
        </div>
        <div className="feature-card">
          <div className="feature-title">Government Subsidy</div>
          <div className="feature-desc">Our products are eligible for government subsidy, so you save more whenever you buy from us.</div>
        </div>
        <div className="feature-card">
          <div className="feature-title">ISI Marked</div>
          <div className="feature-desc">Highest quality, tested and ISI marked for reliability and peace of mind.</div>
        </div>
      </div>
      <div className="benefits-list">
        <div className="benefit-card">
          <div className="benefit-title">Increased Efficiency</div>
          <div className="benefit-desc">Our equipment helps you get more done in less time, with less effort.</div>
        </div>
        <div className="benefit-card">
          <div className="benefit-title">Improved Productivity</div>
          <div className="benefit-desc">Boost your agricultural output and maximize your harvest with our advanced solutions.</div>
        </div>
      </div>
    </section>
  );
} 