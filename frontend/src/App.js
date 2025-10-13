// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import BlogPage from './pages/BlogPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import RefundPage from './pages/RefundPage';
import TermConditionsPage from './pages/TermConditionsPage';
import ScrollToTop from './components/ScrollToTop';
import GoToTop from './components/GoToTop/GoToTop'; // ✅ Import your new GoToTop component
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar /> 

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/:serviceSlug" element={<ServicePage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogdetails/:id" element={<BlogDetailsPage />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/refund" element={<RefundPage />} />
        <Route path="/termconditions" element={<TermConditionsPage />} />
      </Routes>

      {/* ✅ Add GoToTop button so it appears on every page */}
      <GoToTop />
    </Router>
  );
}

export default App;
