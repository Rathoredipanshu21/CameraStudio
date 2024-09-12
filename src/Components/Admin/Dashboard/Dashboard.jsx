import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AddProducts from '../AddProducts/AddProducts';
import AdminUpload from '../BannerUpload/AdminUpload';
import VideoUpload from '../VideoUpload/VideoUpload';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Allproduct from './Allproduct';
import './Dashboard.css';
import Banner from '../HomePage/Banner';

const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState('dashboard');
  const [trendingProducts, setTrendingProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/get');
      console.log('Response data:', response.data);

      let dataArray = response.data;

      if (!Array.isArray(dataArray)) {
        if (Array.isArray(response.data.data)) {
          dataArray = response.data.data;
        } else {
          throw new Error('Data is not in expected format');
        }
      }

      setTrendingProducts(dataArray);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderSection = () => {
    switch (selectedSection) {
      case 'add-products':
        return <AddProducts />;
      case 'banner-upload':
        return <AdminUpload />;
      case 'video-upload':
        return <VideoUpload />;
      case 'All-products':
        return <Allproduct />;
      case 'banner':
        return <Banner />;
   
      
      case 'homepage-banner-change':
        return <div>Home Page Banner Change Component</div>;
      case 'text-correction':
        return <div>Text Correction Component</div>;
      case 'moments':
        return <div>Moments Component</div>;
      case 'services':
        return <div>Services Component</div>;
      case 'contact':
        return <div>Contact Component</div>;
      case 'latest-works':
        return <div>Latest Works Component</div>;
      default:
        return (
          <div className="dashboard-overview">
            <div className="dashboard-header">
              <span style={{ color: '#fff' }}>DASHBOARD</span>
            </div>
            <div className="dashboard-boxes">
              <Link to="/all" className="dashboard-box blue">
                <i className="fas fa-box"></i>
                <div className="box-content">
                  <h3>Products</h3>
                  <p>{trendingProducts.length}</p>
                </div>
              </Link>
              <div className="dashboard-box orange">
                <i className="fas fa-list"></i>
                <div className="box-content">
                  <h3>Categories</h3>
                  <p>15</p>
                </div>
              </div>
              <div className="dashboard-box green">
                <i className="fas fa-users"></i>
                <div className="box-content">
                  <h3>Customers</h3>
                  <p>300</p>
                </div>
              </div>
              <div className="dashboard-box red">
                <i className="fas fa-shopping-cart"></i>
                <div className="box-content">
                  <h3>Orders</h3>
                  <p>200</p>
                </div>
              </div>
            </div>
            <div className="dashboard-graph">
              <h3>Sales Overview</h3>
              <div className="graph-placeholder">Graph goes here</div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="dashboard">
      <Sidebar onSelectSection={setSelectedSection} />
      <div className="dashboard-content">{renderSection()}</div>
    </div>
  );
};

export default Dashboard;
