import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className='Hero-section'>
      <div className="left-hero-section">
        <h1>The Most Recognized Wedding Photographer In Dhanbad</h1>
        <p>Important moments like a wedding must be live and experienced through creative wedding photography. Gupta Foto feels happy to capture wedding photos that provide you with a reason to be happy. Our wedding photography pictures are cherished by the couple for a lifetime. Guptafoto has become known as one of the best wedding photographers in Dhanbad for several years.

We are known for creating candid wedding moments and emotionally honest wedding pictures that tell the core meaning of your beautiful wedding. Are you interested to tell your love story through pictures? Contact us.</p>
      </div>   

      <div className="right-hero-section">
        <img src="https://images.prismic.io/guptafoto/9ab03bd9-2644-4c24-ab52-cc4c3c43d22d_Bhupesh+%26+Sunaina+3.jpg?auto=compress,format&rect=253,0,5497,4000&w=738&h=537" alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
