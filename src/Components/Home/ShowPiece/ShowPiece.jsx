import React, { useState } from 'react';
import './ShowPiece.css'; // Import CSS for styling

// Import the JSON data
import showdata from './Showdata';

const ShowPiece = () => {
  const [viewMore, setViewMore] = useState(false);

  // Toggle View More state
  const handleViewMore = () => {
    setViewMore(!viewMore);
  };

  // Determine items to display
  const itemsToShow = viewMore ? showdata : showdata.slice(0, 3);

  return (
    <>
    <h1 style={{textAlign:'center', fontSize:'2.5rem',paddingTop:'40px'}}>Best Photographer In Dhanbad To Create Timeless Moments</h1>
    <p style={{textAlign:'center'}}>A wedding brings two hearts closer to each other. Guptafoto captures the beauty of your fairy tale wedding through its romantic wedding photography style.</p>
    <div className="showpiece-container">
      
      {itemsToShow.map((item, index) => (
        <div key={index} className="showpiece-item"> 
          <img src={item.image} alt={item.title} className="showpiece-image" />
          <h2 className="showpiece-title">{item.title}</h2>
          <div className="showpiece-details">
            <p className="showpiece-couple">{item.coupleName}</p>
            <p className="showpiece-function">{item.function}</p>
          </div>
          <p className="showpiece-description">{item.description}</p>
        </div>
      ))}
      <button onClick={handleViewMore} className="showpiece-button">
        {viewMore ? 'View Less' : 'View More'}
      </button>
    </div>
    </>
  );
};

export default ShowPiece;
