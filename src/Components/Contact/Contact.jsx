import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

import './Contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
    subject: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Display form data in console
  };

  return (
    <>

    <div className='contact-about'>
        <h1 style={{textAlign:'center'}}>REACH US OUT</h1>
        <p style={{textAlign:'center'}}>ET THE PICTURES TELL YOUR ROMANTIC WEDDING TALE.

</p>
        
    </div>

    <div className="contact-page">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Address: 2/67 Regent Colony, Tollygunge, Kolkata - 700080</p>
        <p>Email: guptaphoto.dhn@gmail.com</p>
        <p>Contact Number: +91 8981683005</p>
        <div className="social-links">
  <FaFacebook />
  <FaInstagram />
  <FaYoutube />
</div>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
          <input type="tel" name="number" value={formData.number} onChange={handleChange} placeholder="Your Phone Number" required />
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default ContactPage;
