import React from 'react';
import { Link } from "react-router-dom";
import '../assets/css/index.css';

function Header({ currentPage, handlePageChange }) {

  return (
    <header className="header-container">
      <div id="gradient-bar">
        <div id="contact-div">
          <div id="phone-info">
            <img src="../src/assets/images/352510_local_phone_icon.png" alt="phone icon" />
            <p>+1-615-420-6969</p>
          </div>
          <div id="email-info">
            <img src="../src/assets/images/1564528_fly_messager_send_communication_email_icon.png" alt="email icon" />
            <p>furbnbcare@gmail.com</p>
          </div>
        </div>
        <div id="social-bar">
          <a href="placeholder"><img src="../src/assets/images/5296500_fb_social media_facebook_facebook logo_social network_icon.png" alt="facebook icon" /></a>
          <a href="placeholder"><img src="../src/assets/images/5296514_bird_tweet_twitter_twitter logo_icon.png" alt="twitter icon" /></a>
          <a href="placeholder"><img src="../src/assets/images/5296765_camera_instagram_instagram logo_icon.png" alt="instagram icon" /></a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="test"><img src="../src/assets/images/5305164_play_video_youtube_youtube logo_icon.png" alt="youtube icon" /></a>
        </div>
      </div>
      <div id="pages-bar">
        <div id="logo-div">
          <img className="bone-logo" src="../assets/images/paw.png" alt="logo" />
          <h2>furbnb</h2>
        </div>
        <div id="pages-list">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link to="/" className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className={currentPage === 'Services' ? 'nav-link active' : 'nav-link'}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className={currentPage === 'Gallery' ? 'nav-link active' : 'nav-link'}>
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing" className={currentPage === 'Pricing' ? 'nav-link active' : 'nav-link'}>
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
