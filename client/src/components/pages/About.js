import React from 'react';
import Trent from "../assets/IMG_0722.JPEG"

export default function About() {
  return (
    <div>
      <div className='about'>
        <p className='bio'>
          I am a full-stack developer proficient in MYSQL, Node, Javascript, React, etc. I transplanted to Nashville from Indiana. Id love to help with whatever you are working on. 
          <br/>
          <img className="head" src={Trent} alt='Trent' />
          <br/> 
        </p>
        <p className='quote'>Code is like a national park. Leave it better than you found it.<br/><br/>-Trenton Kirchner</p>
      </div>
    </div>
  );
}
