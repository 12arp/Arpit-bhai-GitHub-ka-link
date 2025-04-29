import React from "react";
import "./Hero.css";
import { FaWhatsapp } from 'react-icons/fa';
export default function Hero() {
  const whatsappNumber = "9276542211";
  const whatsappMessage = encodeURIComponent("I want to connect to you for some query");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const callLink = `tel:${whatsappNumber}`;

  return (
    <section id="home" className="hero">
      <div className="hero-content">
    <h1>
  <span style={{ background: 'linear-gradient(to right, #5a3ff6, #7b5ffb)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
    Empowering
  </span><br />
  <span style={{ color: '#222' }}>
    Farmers, 
  </span> 
  <span style={{ background: 'linear-gradient(to right, #5a3ff6, #7b5ffb)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
    Enhancing
  </span><br />
  <span style={{ color: '#222' }}>Harvests</span>
</h1>
<p style={{ 
  fontSize: '1.1rem', 
  color: '#444', 
  lineHeight: '1.6', 
  fontWeight: '500',
  maxWidth: '600px',
  marginTop: '1rem'
}}>
  Get the best farm equipment for a bountiful harvest! Our machines
  are designed to make farming easier, faster, and more efficient.<br />
  From plowing to harvesting, we've got you covered.
</p>
        <div className="hero-buttons">
          <a href={callLink} className="call-btn">
            <span role="img" aria-label="call">📞</span> Call Us
          </a>
          <a href={whatsappLink} className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp style={{ marginRight: '0.5rem' }} /> WhatsApp
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img 
          src={process.env.PUBLIC_URL + "/e1746ce1-3775-4413-9a33-c1e020abfa92.png"} 
          alt="Farm Equipment"
        />
      </div>
    </section>
  );
} 