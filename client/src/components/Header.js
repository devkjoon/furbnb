import React, { useState } from 'react';

function Header({ currentPage, handlePageChange }) {
  const [activeButton, setActiveButton] = useState('');
  return (
    <header className="header-container">
      <h1>TrentonKirchner</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => {
              handlePageChange('Portfolio');
              setActiveButton('portfolio');
            }}
            className={currentPage === 'Portfolio' ? 'nav-link active' : `nav-link ${activeButton === 'portfolio' ? 'active-white' : ''}`}
          >
            Portfolio
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
            href="#resume"
            onClick={() => {
              handlePageChange('Resume');
              setActiveButton('resume');
            }}
            className={currentPage === 'Resume' ? 'nav-link active' : `nav-link ${activeButton === 'resume' ? 'active-white' : ''}`}
          >
            Resume
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
