import React from 'react';
import './Hire.css';

const Hire = () => {
  return (
    <div className="hire-expert">
      <div className="content-expert">
        <div className="left-side">
          <h1>Looking For A Professional Wedding Photographer In Deoghar & Dhanbad? Hire Us.</h1>
          <p>Guptafoto aims to capture various aspects of a Bengali or Non-Bengali wedding. Being the best wedding photographer in Deoghar, we believe in capturing the story that would touch the heart of couples. We blend each wedding photo with special effects and bright colors to create stunning wedding photography photos.</p>
        </div>

        <div className="right-side">
          <select name="choose" aria-placeholder="Choose">
            <option value="">Wedding</option>
            <option value="Bengali">Bengali Wedding</option>
            <option value="Non-Bengali">Non-Bengali Wedding</option>
            <option value="Others">Others</option>
          </select>

          <input type="date" />

          <select name="side">
            <option value="">Single Side</option>
            <option value="Single">Single Side</option>
            <option value="Both">Both Sides</option>
          </select>

          <select name="package">
            <option value="">BRIDE SIDE PREMIUM</option>
            <option value="Bride Silver">BRIDE SIDE SILVER</option>
            <option value="Both Premium">BOTH SIDE PREMIUM</option>
          </select>

          <input type="number" placeholder="Phone number" />

          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Hire;
