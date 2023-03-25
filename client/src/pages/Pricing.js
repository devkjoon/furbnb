import React from "react";
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
    },
  ];

  return (
    <div>
      <h1>Pet Day Care Pricing</h1>
      <ul>
        {tiers.map((tier) => (
          <li key={tier.name}>
            <h2>{tier.name}</h2>
            <ul>
              {tier.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
            <p>
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
