import React from 'react';
import { FaCamera, FaVideo, FaPen } from 'react-icons/fa';
import './Feature.css';

const Feature = () => {
  return (
    <>
      <div className='Feature'>
        <h1>Features Of A Creative Wedding Photography Service</h1>
        <p>Guptafoto can perform the most amazing wedding photography in the most exotic locations. Our photos have a unique story to tell. With a strong experience in background candid wedding photography, we provide the perfect wedding photography experience to the couples of Dhanbad.</p>
      </div>

      <div className="feature-list">
        <div className="photography">
          <FaCamera id='icon' />
          <h1>Photography</h1>
          <p>We clicked the elegance and uniqueness of an Indian wedding using our creative photography skills. We love to keep every picture in its natural form.</p>
        </div>
        <div className="cinematography">
          <FaVideo id='icon'/> 
          <h1>Cinematography</h1>
          <p>We focus on capturing the timeless treasures of an Indian wedding by adding drama and romance in every wedding film.</p>
        </div>
        <div className="editing">
          <FaPen id='icon'/>
          <h1>Editing</h1>
          <p>Guptafoto has been the trusted first choice for professional photo editing services in Dhanbad & Deoghar. We deliver wedding photo edits that are unique in style.</p>
        </div>
      </div>
    </>
  );
}

export default Feature;
