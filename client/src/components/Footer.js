import React from "react";
import { Link } from 'react-router-dom';
import "../assets/css/index.css";
import "../pages/Faq";
import "../pages/OpenJobs";
import "../pages/Privacy";

function Footer() {
  return (
    <footer className="footer footer-gradient-bar">
      <div className="footer-cont">
        <div>
          <h3>Contact Us</h3>
          <ul>
            <li>Phone: 615-123-4567</li>
            <li><a target="_blank" href="mailto:furbnbcare@gmail.com">Email: furbnbcare@gmail.com</a></li>
            <li>Hours: Weekdays:	7 AM–6 PM</li>
              <li>Weekends:	8 AM–5 PM</li>
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
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div>
          <h3>Locations</h3>
          <ul>
            <li>Address: 1234 Furbnb Rd</li>
            <li>Nashville, TN 37205</li>
          </ul>
        </div>
        <div>
          <h3>About Us</h3>
          <ul>
            <li>
              Available Jobs: <a href="/OpenJobs">Click Here</a>
              {/* <li><Link to="/openJobs">Available Jobs</Link></li> */}
            </li>
            <li>
            Meet Our Staff: <a href="/about#team-members">Click Here</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;