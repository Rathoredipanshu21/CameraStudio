import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainHome from './Components/Home/MainHome';
import AboutPage from './Components/About/MainAbout';
import Navbar from './Components/Navbar/Navbar';
import Servicemain from './Components/Service/Servicemain';
import GalleryMain from './Components/Gallery/GalleryMain';
import ReviewMain from './Components/Review/ReviewMain';
import Footer from './Components/Footer/Footer';
import ContactPage from './Components/Contact/Contact';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import Banner from './Components/Admin/HomePage/Banner';

const AppContent = () => {
  const location = useLocation();
  const isDashboardPage = location.pathname.toLowerCase() === '/dashboard';

  return (
    <>
      {!isDashboardPage && <Navbar />}
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Servicemain />} />
        <Route path="/gallery" element={<GalleryMain />} />
        <Route path="/review" element={<ReviewMain />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/banner" element={<Banner />} /> 
      </Routes>
      {!isDashboardPage && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
