import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section about">
                <h3>About Us</h3>
                <p>We offer creative Photography/ Cinematography under professionals for every type of ceremonies or event like (Wedding, Birthday, Anniversary, Gatherings, Betrothal, Annaprasan and many more).</p>
            </div>
            <div className="footer-section contact">
                <h3>Contact</h3>
                <p>2/67 Regent Colony, Tollygunge, Kolkata - 700080</p>
                <p>Near Hindustan Medical Saraidhela, Steelgate Dhanbad - 828127</p>
                <p>Jalsar Road, Near Tower Chowk, Deoghar</p>
                <p>+91 8981683005</p>
                <p>guptaphoto.dhn@gmail.com</p>
            </div>
            <div className="footer-section links">
                <h3>Quick Links</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Portfolios</li>
                    <li>Photos</li>
                    <li>Films</li>
                    <li>Blog</li>
                    </ul>
            </div>
            
            <div className="footer-section links">
                    <h3>Company</h3>
                    <li>Contact</li>
                    <li>Services</li>
                    <li>Reviews</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
            </div>
              
        </footer>
    );
};

export default Footer;
