import React from "react"
import PHUserImage from "../assets/images/Alexandria-pfp.PNG"
import PHPetImage from "../assets/images/Ruby.jpg"
// import User from "../../../server/seeders/userSeeds.json"
import "../assets/css/index.css"

export default function UserProfile(){


    return(
    <div className="profile-cont">
      <div className="profile-div">
      <aside>
        <img src={PHUserImage} alt="User Profile"/>
        <h5>FirstName LastName</h5>
          <p>1234 Nowheresville Rd, Somewhere USA</p>
          <p>615-420-6969</p>
        <h6>Emergency Contact</h6>
          <ul>
            <li>FirstName LastName</li>
            <li>1234 Nowheresville Rd, Somewhere USA</li>
            <li>615-420-6969</li>
          </ul>
          <a href="/petlist">Add <span className="blue-span">Pet</span></a>
      </aside>
      <div className="profile-info">
        <h1>Pet <span class="blue-span">Information</span></h1>
        <div className="profile-cards-cont">
          <div className="profile-card">
            <img src={PHPetImage} alt="Pet Profile"/>
            <h4>Pet Name</h4>
            <div className="profile-card-info">
                <p>Species</p>
                <p>Pet Breed</p>
                <p>Gender</p>
                <p>Age In Year(s)</p>
            </div>
            <div className="profile-card-extra-info">
              <ul>
                <li>Weight: in lbs</li>
                <li>Allergies: None</li>
                <li>Medications: None</li>
                <li>Feeding Schedule:</li>
                <li>Morning: 1 cup kibble, Evening: 1 cup kibble</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    )
}