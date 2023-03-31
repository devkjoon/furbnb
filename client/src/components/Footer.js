import React from "react";
import { Link } from 'react-router-dom';
import "../assets/css/index.css";
import "../pages/Faq"

function Footer() {
  return (
    <footer className="footer footer-gradient-bar">
      <div className="footer-cont">
        <div>
          <h3>Contact Us</h3>
          <ul>
            <li>Phone: 555-1234</li>
            <li><a target="_blank" href="mailto:furbnbcare@gmail.com">Email: furbnbcare@gmail.com</a></li>
            <li>Address: 123 Main St, Anytown USA</li>
          </ul>
        </div>
        <div>
          <h3>Social Sites</h3>
          <ul>
            <li> <a target="_blank" href="https://www.facebook.com/profile.php?id=100090071724908">Facebook</a></li>
            <li> <a target="_blank" href="https://twitter.com/furbnb">Twitter</a></li>
            <li> <a target="_blank" href="https://www.instagram.com/furbnb_pets/">Instagram</a></li>
            <li> <a target="_blank" href="">LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <h3>FAQs and Policies</h3>
          <ul>
            <li><Link to="/Faq">FAQ</Link></li> 
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div>
          <h3>Locations</h3>
          <ul>
            <li>Main Store: 123 Main St, Anytown USA</li>
            <li>Branch Store: 456 Second St, Othertown USA</li>
          </ul>
        </div>
        <div>
          <h3>About Us</h3>
          <ul>
            <li>
              Available Jobs: <a href="/jobs">Click Here</a>
            </li>
            <li>
              Meet Our Staff: <a href="/about">Click Here</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;