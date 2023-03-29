import React from "react";
import { Link } from "react-router-dom";
import PhoneIcon from "../assets/images/352510_local_phone_icon.png";
import EmailIcon from "../assets/images/1564528_fly_messager_send_communication_email_icon.png";
import FacebookIcon from "../assets/images/5296500_fb_social media_facebook_facebook logo_social network_icon.png";
import TwitterIcon from "../assets/images/5296514_bird_tweet_twitter_twitter logo_icon.png";
import InstaIcon from "../assets/images/5296765_camera_instagram_instagram logo_icon.png";
import YTIcon from "../assets/images/5305164_play_video_youtube_youtube logo_icon.png";
import Logo from "../assets/images/big-boner.png";
import "../assets/css/index.css";
import Auth from "../utils/auth";

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="header-container">
      <div id="gradient-bar">
        <div id="contact-div">
          <div id="phone-info">
            <img src={PhoneIcon} alt="phone icon" />
            <p>+1-615-420-6969</p>
          </div>
          <div id="email-info">
            <img src={EmailIcon} alt="email icon" />
            <p>furbnbcare@gmail.com</p>
          </div>
        </div>
        <div id="social-bar">
          <a href="https://www.facebook.com/profile.php?id=100090071724908" target="_blank">
            <img src={FacebookIcon} alt="facebook icon" />
          </a>
          <a href="https://twitter.com/furbnb" target="_blank">
            <img src={TwitterIcon} alt="twitter icon" />
          </a>
          <a href="https://www.instagram.com/furbnb_pets/" target="_blank">
            <img src={InstaIcon} alt="instagram icon" />
          </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="test">
            <img src={YTIcon} alt="youtube icon" />
          </a>
        </div>
      </div>
      <div id="pages-bar">
        <div id="logo-div">
          <img className="bone-logo" src={Logo} alt="logo" />
          <h2>furbnb</h2>
        </div>
        <div id="pages-list">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  currentPage === "Home" ? "nav-link active" : "nav-link"
                }
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className={
                  currentPage === "Services" ? "nav-link active" : "nav-link"
                }
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/gallery"
                className={
                  currentPage === "Gallery" ? "nav-link active" : "nav-link"
                }
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/pricing"
                className={
                  currentPage === "Pricing" ? "nav-link active" : "nav-link"
                }
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signInPage"
                className={
                  currentPage === "CreateUserform" ? "nav-link active" : "nav-link"
                }
              >
                Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/petlist"
                className={
                  currentPage === "PetList" ? "nav-link active" : "nav-link"
                }
                onClick={() => handlePageChange("Pet List")}
              >
                PetList
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile"
                className={
                  currentPage === "Profile" ? "nav-link active" : "nav-link"
                }
              >
                Profile
              </Link>
            </li>
            <li className="nav-item" onClick={Auth.logout}>
              <Link>
              Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
