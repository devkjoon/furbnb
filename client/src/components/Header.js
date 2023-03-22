import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header({ currentPage, handlePageChange }) {
  const [activeButton, setActiveButton] = useState('');

  return (
    <header className="header-container">
      <Link to="/" className="logo-button">
        <img src="/logo.png" alt="Logo" />
      </Link>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            onClick={() => {
              handlePageChange('Home');
              setActiveButton('home');
            }}
            className={currentPage === 'Home' ? 'nav-link active' : `nav-link ${activeButton === 'home' ? 'active-white' : ''}`}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/about"
            onClick={() => {
              handlePageChange('About');
              setActiveButton('about');
            }}
            className={currentPage === 'About' ? 'nav-link active' : `nav-link ${activeButton === 'about' ? 'active-white' : ''}`}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/services"
            onClick={() => {
              handlePageChange('Services');
              setActiveButton('services');
            }}
            className={currentPage === 'Services' ? 'nav-link active' : `nav-link ${activeButton === 'services' ? 'active-white' : ''}`}
          >
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/gallery"
            onClick={() => {
              handlePageChange('Gallery');
              setActiveButton('gallery');
            }}
            className={currentPage === 'Gallery' ? 'nav-link active' : `nav-link ${activeButton === 'gallery' ? 'active-white' : ''}`}
          >
            Gallery
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/pricing"
            onClick={() => {
              handlePageChange('Pricing');
              setActiveButton('pricing');
            }}
            className={currentPage === 'Pricing' ? 'nav-link active' : `nav-link ${activeButton === 'pricing' ? 'active-white' : ''}`}
          >
            Pricing
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            onClick={() => {
              handlePageChange('Contact');
              setActiveButton('contact');
            }}
            className={currentPage === 'Contact' ? 'nav-link active' : `nav-link ${activeButton === 'contact' ? 'active-white' : ''}`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
