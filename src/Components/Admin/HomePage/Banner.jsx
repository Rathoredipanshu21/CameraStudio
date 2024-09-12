import React, { useState } from 'react';
import axios from 'axios';
import './Banner.css'

const Banner = () => {
  const [bannerText, setBannerText] = useState('');
  const [bannerImage, setBannerImage] = useState(null);

  const handleTextChange = (e) => {
    setBannerText(e.target.value);
  };

  const handleImageChange = (e) => {
    setBannerImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('bannerText', bannerText);
    formData.append('bannerImage', bannerImage);

    try {
      const response = await axios.post('http://localhost:5000/api/updateBanner', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      // Optionally, reset the form or show a success message
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="banner">
      <h2>Update Banner</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="bannerText">Banner Text:</label>
          <input
            type="text"
            id="bannerText"
            value={bannerText}
            onChange={handleTextChange}
          />
        </div>
        <div>
          <label htmlFor="bannerImage">Banner Image:</label>
          <input
            type="file"
            id="bannerImage"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Update Banner</button>
      </form>
    </div>
  );
};

export default Banner;

