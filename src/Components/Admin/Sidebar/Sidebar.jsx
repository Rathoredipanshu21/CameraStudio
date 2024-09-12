import React, { useState } from 'react';
import { FaShoppingCart, FaBox, FaPlus, FaTags, FaUsers, FaImage, FaVideo, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { FaEnvelope, FaBell, FaUser } from 'react-icons/fa';

import './Sidebar.css';

const Sidebar = ({ onSelectSection }) => {
  const [isAdminControlOpen, setIsAdminControlOpen] = useState(false);

  const toggleAdminControl = () => {
    setIsAdminControlOpen(!isAdminControlOpen);
  };
 
  return (
    <>
      <div className="sidebar">
        <h2 className="sidebar-heading">STORE</h2>
        <ul className="sidebar-list">
          <li onClick={() => onSelectSection('dashboard')}><FaShoppingCart /> Dashboard</li>
          <li onClick={toggleAdminControl}>
            <FaBox /> Home  {isAdminControlOpen ? <FaCaretUp /> : <FaCaretDown />}
          </li>
          {isAdminControlOpen && (
            <ul className="admin-control-dropdown">
              <li onClick={() => onSelectSection('banner')}>Banner </li>
              <li onClick={() => onSelectSection('text-correction')}>Text Correction</li>
              <li onClick={() => onSelectSection('moments')}>Moments</li>
              <li onClick={() => onSelectSection('services')}>Services</li>
              <li onClick={() => onSelectSection('contact')}>Contact</li>
              <li onClick={() => onSelectSection('latest-works')}>Latest Works</li>
            </ul>
          )}
          <li onClick={() => onSelectSection('add-products')}><FaPlus /> Add Products</li>
          <li onClick={() => onSelectSection('categories')}><FaTags /> Categories</li>
          <li onClick={() => onSelectSection('customers')}><FaUsers /> Customers</li>
          <li onClick={() => onSelectSection('banner-upload')}><FaImage /> Banner Upload</li>
          <li onClick={() => onSelectSection('video-upload')}><FaVideo /> Video Upload</li>
        </ul>
      </div>

      <div className="navbar-icons">
        <FaEnvelope className="navbar-icon" />
        <FaBell className="navbar-icon" />
        <FaUser className="navbar-icon" />
      </div>
    </>
  );
};

export default Sidebar;
