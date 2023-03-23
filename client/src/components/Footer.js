import React from 'react';
import '../assets/css/index.css';


function Footer() {
  return (
    <footer className='footer-gradient-bar footer'>
      {/* Contact Us section */}
      <h3>Contact Us</h3>
      <ul>
        <li>Phone: 555-1234</li>
        <li>Email: info@example.com</li>
        <li>Address: 123 Main St, Anytown USA</li>
      </ul>

      {/* Social Sites section */}
      <h3>Social Sites</h3>
      <ul>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li>
        <li>LinkedIn</li>
      </ul>

      {/* FAQs and Policies section */}
      <h3>FAQs and Policies</h3>
      <ul>
        <li>FAQ</li>
        <li>Privacy Policy</li>
        <li>Terms and Conditions</li>
      </ul>

      {/* Locations section */}
      <h3>Locations</h3>
      <ul>
        <li>Main Store: 123 Main St, Anytown USA</li>
        <li>Branch Store: 456 Second St, Othertown USA</li>
      </ul>

      {/* About Us section */}
      <h3>About Us</h3>
      <ul>
        <li>Available Jobs: <a href="/jobs">Click Here</a></li>
        <li>Meet Our Staff: <a href="/staff">Click Here</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
