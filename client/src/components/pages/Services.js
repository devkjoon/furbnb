import React from 'react';
// import '../assets/css/index.css';


export default function PetDayCareServices() {
  const services = [
    {
      name: 'Grooming',
      description: 'We offer a variety of grooming services to help your pet look and feel their best. From baths to haircuts, we have everything your furry friend needs to stay clean and healthy.',
    },
    {
      name: 'Boarding',
      description: 'When you need to be away from home, you can trust us to take care of your pet. Our comfortable and safe boarding facilities are the perfect place for your pet to stay while you are away.',
    },
    {
      name: 'Training',
      description: 'We believe that every pet can benefit from training, and we offer a variety of classes to help your pet learn new skills and behaviors. From obedience training to agility classes, we have something for every pet.',
    },
    {
      name: 'Veterinary Services',
      description: 'We know how important it is to keep your pet healthy, which is why we offer a range of veterinary services. From routine check-ups to emergency care, our experienced veterinarians are here to help.',
    },
  ];

  return (
    <div className="services">
      <h1 className='services-title'>Pet Day Care Services</h1>
      <ul className='services-list'>
        {services.map((service) => (
          <li className='service-item' key={service.name}>
            <h2 className='service-name'>{service.name}</h2>
            <p className='service-description'>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
