import React from 'react';
import './Latest.css';
import sadi from '../ShowPiece/Showdata';

const Latest = () => {
  return (
    <div className='latest'>
      <h1>Latest Wedding Blogs</h1>
      <p>Go through our latest blogs to discover the ideas and trends in wedding photography. Our goal is to make sure that your couple can plan their wedding in the most beautiful way possible!</p>

      <div className="blog-container">
        {sadi.slice().map((item, index) => (
          <div key={index} className="blog-item">
            <img src={item.image} alt={item.title} />
            <div className="blog-details">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Latest;
