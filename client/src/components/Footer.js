import React from "react";
import "../assets/css/index.css";

function Footer() {
  return (
    <footer className="footer footer-gradient-bar">
      <div className="footer-cont">
        <div>
          <h3>Contact Us</h3>
          <ul>
            <li>Phone: 555-1234</li>
            <li>Email: furbnbcare@gmail.com</li>
            <li>Address: 123 Main St, Anytown USA</li>
          </ul>
        </div>
        <div>
          <h3>Social Sites</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        <div>
          <h3>FAQs and Policies</h3>
          <ul>
            <li>FAQ</li>
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
              Meet Our Staff: <a href="/staff">Click Here</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
