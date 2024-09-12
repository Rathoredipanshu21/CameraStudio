import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scroll ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src="https://guptafoto.com/assets/img/logo-GF-white.png" alt="Logo" />
      </div>

      <ul className="nav-list">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/services">SERVICES</Link></li>
        <li><Link to="/gallery">GALLERY</Link></li>
        <li><Link to="/review">REVIEWS</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>

      <ul className="social-icons">
        <li><FaInstagram /></li>
        <li><FaYoutube /></li>
        <li><FaFacebook /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
