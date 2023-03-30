import React from "react";
import petBoarding1 from "../assets/images/pet-boarding1.jpg"
import petBoarding2 from "../assets/images/pet-boarding2.jpg"
import petBoarding3 from "../assets/images/pet-boarding3.jpg"
// import '../assets/css/index.css';

export default function PetDayCarePricing() {
  const tiers = [
    {
      name: "Basic",
      price: {
        monthly: 50,
        annually: 500,
      },
      checkout: {
        monthly: "https://buy.stripe.com/test_aEU9AOdLh8zpdX2cMM",
        annually: "https://buy.stripe.com/test_7sI28mdLh4j98CI001",
      },
      services: ["Grooming", "Boarding"],
      images: petBoarding1,
      float: "service-left",
    },
    {
      name: "Standard",
      price: {
        monthly: 75,
        annually: 800,
      },
      checkout: {
        monthly: "https://buy.stripe.com/test_14k14i36D8zp1ag146",
        annually: "https://buy.stripe.com/test_dR628mdLhaHxbOU4gj",
      },
      services: ["Grooming", "Boarding", "Training"],
      images: petBoarding2,
      float: "service-center",
    },
    {
      name: "Premium",
      price: {
        monthly: 100,
        annually: 1100,
      },
      checkout: {
        monthly: "https://buy.stripe.com/test_9AQfZc5eL5ndf16eUY",
        annually: "https://buy.stripe.com/test_8wM3cqePlbLB6uA7sx",
      },
      services: ["Grooming", "Boarding", "Training", "Veterinary Services"],
      images: petBoarding3,
      float: "service-right",
    },
  ];

  return (
    <div className="pricing-container">
      <h1 className="pricing-title">Pet Day Care Pricing</h1>
      <ul className="pricing-list">
        {tiers.map((tier) => (
          <li className={"pricing-tier " + tier.float} key={tier.name}>
            <div className="pricing-section">
              <div>
                <h2 className="tier-title">{tier.name}</h2>
                <ul className="tier-services">
                  {tier.services.map((service) => (
                    <li className="tier-service" key={service}>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
                <img src={tier.images} alt="" />
            </div>
            <p className="tier-pricing">
              Monthly: ${tier.price.monthly}{" "}
              <a href={tier.checkout.monthly}>Start Now</a> | Annually: $
              {tier.price.annually}{" "}
              <a href={tier.checkout.annually}>Start Now</a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
