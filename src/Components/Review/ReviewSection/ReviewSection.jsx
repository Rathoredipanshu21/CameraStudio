import React from 'react';
// import reviewData from './reviewData.json'; // Import JSON data
import './ReviewSection.css';
const reviewData =[
    {
      "name": "John Doe",
      "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ex nec lorem viverra fringilla.",
      "image": "path/to/image1.jpg"
    },
    {
      "name": "Jane Smith",
      "review": "Ut fermentum tellus sed libero laoreet, non efficitur justo vestibulum. Nulla facilisi.",
      "image": "path/to/image2.jpg"
    },
    {
      "name": "Alice Johnson",
      "review": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      "image": "path/to/image3.jpg"
    },
    {
      "name": "Bob Williams",
      "review": "Fusce vitae est justo. Proin lacinia nibh eu nulla mattis, eget placerat tortor luctus.",
      "image": "path/to/image4.jpg"
    }, {
        "name": "John Doe",
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ex nec lorem viverra fringilla.",
        "image": "path/to/image1.jpg"
      },
      {
        "name": "Jane Smith",
        "review": "Ut fermentum tellus sed libero laoreet, non efficitur justo vestibulum. Nulla facilisi.",
        "image": "path/to/image2.jpg"
      },
      {
        "name": "Alice Johnson",
        "review": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        "image": "path/to/image3.jpg"
      },
      {
        "name": "Bob Williams",
        "review": "Fusce vitae est justo. Proin lacinia nibh eu nulla mattis, eget placerat tortor luctus.",
        "image": "path/to/image4.jpg"
      }
  ]
  

const ReviewSection = () => {
  return (
    <div className="review-section">
      <h2 style={{textAlign:'center'}}>Photography Reviews</h2>
      <div className="review-container">
        {reviewData.map((review, index) => (
          <div key={index} className="review-item">
            <img src={review.image} alt={`Review ${index + 1}`} />
            <div className="review-details">
              <h3>{review.name}</h3>
              <p>{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewSection;
