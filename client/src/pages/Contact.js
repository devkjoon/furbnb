import React from "react";
import FBIcon from "../assets/images/5296500_fb_social media_facebook_facebook logo_social network_icon.png";
import TwitterIcon from "../assets/images/5296514_bird_tweet_twitter_twitter logo_icon.png";
import InstaIcon from "../assets/images/5296765_camera_instagram_instagram logo_icon.png";
import YelpIcon from "../assets/images/1298777_yelp_icon.png";
import RoverIcon from "../assets/images/Rover2.png";
// import DogPhone from "../assets/images/dog-on-phone.jpg";
// import DogPeek from "../assets/images/dog-peeking-in-camera.jpg";
// import '../assets/css/index.css';

export default function ContactPage() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact <span className="blue-span">Us</span></h1>
      <p>Stay in touch with us on social media:</p>
      <ul className="contact-social">
        <li>
          <img src={FBIcon} alt="Facebook Icon"/>
          <a href="https://www.facebook.com/yourpetdaycare/">Facebook</a>
        </li>
        <li>
          <img src={InstaIcon} alt="Instagram Icon"/>
          <a href="https://www.instagram.com/furbnb_pets/">Instagram</a>
        </li>
        <li>
          <img src={TwitterIcon} alt="Twitter Icon"/>
          <a href="https://twitter.com/furbnb">Twitter</a>
        </li>
        <li>
          <img src={YelpIcon} alt="Yelp Icon"/>
          <a href="https://www.yelp.com/biz/your-pet-daycare">Yelp</a>
        </li>
        <li>
          <img src={RoverIcon}  alt="Rover Icon"/>
          <a href="https://www.rover.com/sit/yourpetdaycare">Rover.com</a>
        </li>
      </ul>
      <p>Or contact us directly:</p>
      <div className="contact-info">
      <ul>
        <li>Phone: 555-555-5555</li>
        <li>Email: <a href="mailto:furbnbcare@gmail.com">furbnbcare@gmail.com</a></li>
        <li>Address: 123 Main St, Anytown USA</li>
      </ul>
      </div>
      <div className="disclaimer">
        <h5>We would love to hear from you!</h5>
        <p>Please allow for up to 3 business days to receive a reply.</p>
        <p>Reply times will vary based on contact method.</p>
        <p>We will do our very best to respond same day, your message is very important to us.</p>
      </div>
    </div>
  );
}
