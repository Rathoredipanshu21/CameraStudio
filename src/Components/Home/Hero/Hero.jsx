import React from 'react';
import './Hero.css';

const Hero = ({ title, tagline, imageUrl }) => {
  return (
    <div className="hero-section">
      <img src="https://images.prismic.io/guptafoto/393f2331-7312-40bf-ad7a-5bac7507ecb3_56608eb6-4742-4f7a-a382-872f3a5d7405_Komal%2BX%2BHarsh%2BPre%2BWedding%2B7.jpeg?auto=format%2Ccompress&rect=0%2C1840%2C6000%2C2160&w=2500&h=900" alt="" />
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{tagline}</p>
      </div>
    </div>
  );
}

export default Hero;

