import React from "react";
// import '../assets/css/index.css';

export default function ContactPage() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p>Stay in touch with us on social media:</p>
      <ul className="contact-social">
        <li>
          <a href="https://www.facebook.com/yourpetdaycare/">Facebook</a>
        </li>
        <li>
          <a href="https://www.instagram.com/furbnb_pets/">Instagram</a>
        </li>
        <li>
          <a href="https://twitter.com/furbnb">Twitter</a>
        </li>
        <li>
          <a href="https://www.yelp.com/biz/your-pet-daycare">Yelp</a>
        </li>
        <li>
          <a href="https://www.rover.com/sit/yourpetdaycare">Rover.com</a>
        </li>
      </ul>
      <p>Or contact us directly:</p>
      <div className="contact-info">
      <ul>
        <li>Phone: 555-555-5555</li>
        <li>Email: <a href="mailto:info@yourpetdaycare.com">info@yourpetdaycare.com</a></li>
        <li>Address: 123 Main St, Anytown USA</li>
      </ul>
      </div>
    </div>
  );
}
