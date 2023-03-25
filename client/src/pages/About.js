import React from 'react';
import Cat from "../assets/images/cat-g686bd19ff_1920.jpg"
import Corgi from "../assets/images/corgi-g140dd511d_1920.jpg"
import LiamPic from "../assets/images/liam-pfp.jpg"
import AlexandriaPic from "../assets/images/Alexandria-pfp.PNG"
import JoonPic from "../assets/images/Joon-pfp.PNG"
import TrentPic from "../assets/images/Trent-pfp.PNG"
import CoulsonPic from "../assets/images/liam-pfp.jpg"
import '../assets/css/index.css';


export default function AboutPage() {
  return (
    <div>
      <div className="about-cont">
        <div className="about-us-div">
          <div>
            <h2>About Us</h2>
            <h3>Boarding<span className="black-span">&</span><span className="blue-span">Daycare</span></h3>
            <h5>Specialty boarding/daycare service offering unique care, and services for your furry friend.</h5>
            <p>Established in March 2023, our pet daycare is dedicated to providing high-quality care and services for pets of all kinds. We are a team of passionate animal lovers who are committed to ensuring that every pet in our care is happy, healthy, and well-cared for.</p>
          </div>
          <div>
            <img src={Cat} alt="Forest Cat"/>
          </div>
        </div>
        <div className="why-choose-div">
          <div>
            <img src={Corgi} alt="Happy Corgi"/>
          </div>
          <div>
            <h2>Why Choose Us</h2>
            <h3>Expertise<span className="black-span">&</span><span className="blue-span">Care</span></h3>
            <h5>Expert staff ready to cater to your pet's every need.</h5>
            <p>At our pet daycare, we offer a range of services including grooming, boarding, training, vet care, and more. Our facilities are designed to be safe, comfortable, and fun for pets of all kinds, with plenty of space to run, play, and relax. We believe that every pet deserves the best possible care, and we strive to provide that care every day.</p>
          </div>
        </div>
        </div>
        <div className="team-div">
          <div>
            <h2>Team Members</h2>
            <h3>Meet Our <span className="blue-span">Team Members</span></h3>
          </div>
          <div className="team-cards-cont">
            <div className="team-card">
              <img src={LiamPic} alt="Liam Profile"/>
              <div className="team-card-info">
                <h5>Liam Allen</h5>
                <p>Retard</p>
              </div>
            </div>
            <div className="team-card">
              <img src={AlexandriaPic}  alt="Alexandria Profile"/>
              <div className="team-card-info">
                <h5>Alexandria White</h5>
                <p>Ex Cheerleader</p>
              </div>
            </div>
            <div className="team-card">
              <img src={JoonPic} alt="Joon Profile"/>
              <div className="team-card-info">
                <h5>Joon Kim</h5>
                <p>Yellow Man</p>
              </div>
            </div>
            <div className="team-card">
              <img src={TrentPic} alt="Trent Profile"/>
              <div className="team-card-info">
                <h5>Trenton Kirchner</h5>
                <p>Mirror Head</p>
              </div>
            </div>
            <div className="team-card">
              <img src={CoulsonPic} alt="Coulson Profile"/>
              <div className="team-card-info">
                <h5>Coulson Porter</h5>
                <p>Lifted Truckless</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
