import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Header({ currentPage, handlePageChange }) {
  const [activeButton, setActiveButton] = useState('');
  return (
    <header className="header-container">
      <h1>furbnb</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/about"
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/services"
          >
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/gallery"
          >
            Gallery
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/pricing"
          >
            Pricing
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/login"
          >
            Login
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
