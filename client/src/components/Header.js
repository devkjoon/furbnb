import React, { useState } from 'react';

function Header({ currentPage, handlePageChange }) {
  const [activeButton, setActiveButton] = useState('');
  return (
    <header className="header-container">
      <h1>TrentonKirchner</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => {
              handlePageChange('Home');
              setActiveButton('home');
            }}
            className={currentPage === 'Home' ? 'nav-link active' : `nav-link ${activeButton === 'home' ? 'active-white' : ''}`}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => {
              handlePageChange('About');
              setActiveButton('about');
            }}
            className={currentPage === 'About' ? 'nav-link active' : `nav-link ${activeButton === 'about' ? 'active-white' : ''}`}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#services"
            onClick={() => {
              handlePageChange('Services');
              setActiveButton('services');
            }}
            className={currentPage === 'Services' ? 'nav-link active' : `nav-link ${activeButton === 'services' ? 'active-white' : ''}`}
          >
            Services
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#gallery"
            onClick={() => {
              handlePageChange('Gallery');
              setActiveButton('gallery');
            }}
            className={currentPage === 'Gallery' ? 'nav-link active' : `nav-link ${activeButton === 'gallery' ? 'active-white' : ''}`}
          >
            Gallery
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#pricing"
            onClick={() => {
              handlePageChange('Pricing');
              setActiveButton('pricing');
            }}
            className={currentPage === 'Pricing' ? 'nav-link active' : `nav-link ${activeButton === 'pricing' ? 'active-white' : ''}`}
          >
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => {
              handlePageChange('Contact');
              setActiveButton('contact');
            }}
            className={currentPage === 'Contact' ? 'nav-link active' : `nav-link ${activeButton === 'contact' ? 'active-white' : ''}`}
          >
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
