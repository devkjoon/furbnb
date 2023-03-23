import React from 'react';
import dog1 from '../../assets/images/about-1.jpg';
import cat from '../../assets/images/pexels-fabricio-trujillo-62640.jpg';
import corgi from '../../assets/images/corgi-bath.jpg';
// import '../assets/css/index.css';



function Home() {
  return (
    <div id="main-cont">
      <div id="splash-text-cont">
        <div>
          <h1>The Highest Grade Of Care For Your Loyal Friend</h1>
          <button>Learn More</button>
        </div>
      </div>
      <div id="cards-div">
        <div className="card">
          <div className="card-icon-div">
            <div id="card-icon1"></div>
          </div>
          <h4>Luxury Rooms</h4>
          <p>Leave them in luxury with our top of the line suites. Featuring music, A/C, memory foam beds, and optional exterior views. No we don't offer rooms for humans.</p>
          <button className="card-button"><span className="material-symbols-outlined card-button-span">
            chevron_right
          </span></button>
        </div>
        <div className="card">
          <div className="card-icon-div">
            <div id="card-icon2"></div>
          </div>
          <h4>Dog Walking</h4>
          <p>Forget the step master, if your dog is an absolute cardio freak, we've got you! We offer twice daily walks for your energetic gremlin. (Usain Bolt not available on Sundays) </p>
          <button className="card-button"><span className="material-symbols-outlined card-button-span">
            chevron_right
          </span></button>
        </div>
        <div className="card">
          <div className="card-icon-div">
            <div id="card-icon3"></div>
          </div>
          <h4>Quality Care</h4>
          <p>No childhood traumas here! Your furry friends will be treated like a member of the Royal Family at FurBnB. (Due to legal reasons we do not provide armed guards.)</p>
            <button className="card-button"><span className="material-symbols-outlined card-button-span">
              chevron_right
              </span></button>
          </div>
        </div>
        <div id="landing-info-div">
          <div className="landing-info" id="landing-info1">
            <div className="landing-info-image-div">
              <img src={dog1} alt="dog1"/>
            </div>
            <div className="landing-info-text-div">
              <h3>Living In Luxury</h3>
              <p>We make your best friend feel like they never left home. Whether it's extra treats, cuddle time, or even watching cartoons. Your loved one is in great hands.
                We pride ourselves in the best of animal husbandry practices, and personal care to suit every unique being's needs. 
              </p>
            </div>
          </div>
          <div className="landing-info" id="landing-info2">
            <div className="landing-info-text-div">
              <h3>Flexible Pace</h3>
              <p>We understand that not all animals are made the same. At furbnb, we take every precaution to make sure no one feels stressed, or overwhelmed. We never force a pet to do anything. No matter if you have an energetic, working dog, or a slow senior citizen. You have our word, they will be cared for in the way that suits them best.</p>
            </div>
            <div className="landing-info-image-div">
              <img src={cat} alt="cat"/>
            </div>
          </div>
          <div className="landing-info" id="landing-info3">
            <div className="landing-info-image-div">
              <img src={corgi} alt="corgi"/>
            </div>
            <div className="landing-info-text-div">
              <h3>Grooming Service</h3>
              <p>Hey, sometimes things get messy! We offer bathing, and grooming services for your pet. If a mess occurs on our watch, we'll clean it up, and have your fur baby coming home shiny, and new. Or you can purchase our grooming package for the full spa experience. Haircut, bath, nail trimming, fresh scent, and a spiffy little bandana to top it off.</p>
            </div>
          </div>
        </div>
      </div>
  );
}
      export default Home;