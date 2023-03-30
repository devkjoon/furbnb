import React from "react";
import service1 from "../assets/images/service_icon1.png";
import service2 from "../assets/images/service_icon2.png";
import service3 from "../assets/images/service_icon3.png";
import service4 from "../assets/images/service_icon4.png";

// import '../assets/css/index.css';

export default function PetDayCareServices() {
  const services = [
    {
      name: "Grooming",
      description:
        "We offer a variety of grooming services to help your pet look and feel their best. From baths to haircuts, we have everything your furry friend needs to stay clean and healthy.",
      images: service1,
      float: "service-left",
    },
    {
      name: "Boarding",
      description:
        "When you need to be away from home, you can trust us to take care of your pet. Our comfortable and safe boarding facilities are the perfect place for your pet to stay while you are away.",
      images: service2,
      float: "service-right",
    },
    {
      name: "Training",
      description:
        "Every pet can benefit from training. We offer a variety of classes to help your pet learn new skills and behaviors. From obedience training to agility classes, we have something for every pet.",
      images: service3,
      float: "service-left",
    },
    {
      name: "Veterinary Services",
      description:
        "We know how important it is to keep your pet healthy, which is why we offer a range of veterinary services. From routine check-ups to emergency care, our experienced veterinarians are here to help.",
      images: service4,
      float: "service-right",
    },
  ];

  return (
    <div className="services">
      <h1 className="services-title">Pet Day Care Services</h1>
      <ul className="services-list">
        {services.map((service) => (
          <li className={"service-item " + service.float} key={service.name}>
            <h2 className="service-name">{service.name}</h2>
            <img src={service.images} alt="" />
            <p className="service-description">{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
