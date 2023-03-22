import React from 'react';

export default function PetDayCarePricing() {
  const tiers = [
    {
      name: 'Basic',
      price: {
        monthly: 50,
        biannually: 275,
        annually: 500,
      },
      services: ['Grooming', 'Boarding'],
    },
    {
      name: 'Standard',
      price: {
        monthly: 75,
        biannually: 425,
        annually: 800,
      },
      services: ['Grooming', 'Boarding', 'Training'],
    },
    {
      name: 'Premium',
      price: {
        monthly: 100,
        biannually: 575,
        annually: 1100,
      },
      services: ['Grooming', 'Boarding', 'Training', 'Veterinary Services'],
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
              Monthly: ${tier.price.monthly} | Bi-annually: ${tier.price.biannually} | Annually: ${tier.price.annually}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
