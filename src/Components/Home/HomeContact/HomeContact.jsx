import React from 'react';
import './HomeContact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const HomeContact = () => {
  return (
    <>
      <h1 style={{textAlign:'center',paddingTop:'40px'}}>Reach To Us For An Amazing Wedding Photography Experience</h1>
      <div className='home-contact'>
        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <div className="text">STEEL GATE, SARAIDHELA, DHANBAD, JHARKHAND, 826005</div>
          </div>
          <div className="info-item">
            <FaPhone className="icon" />
            <div className="text">+919876543210</div>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <div className="text">camerawala@gmail.com</div>
          </div>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.161580529627!2d86.46243700447074!3d23.81285263710181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x22596b3e460bb567%3A0xe251798de657cda5!2sByteWave!5e0!3m2!1sen!2sin!4v1716666805846!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default HomeContact;
