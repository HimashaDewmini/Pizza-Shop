import React from "react";
import "./Service.css"; 

const Service = () => {
  const services = [
    {
      icon: "fas fa-utensils", 
      title: "Healthy Foods",
      description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    },
    {
      icon: "fas fa-motorcycle",
      title: "Fastest Delivery",
      description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    },
    {
      icon: "fas fa-pizza-slice",
      title: "Original Recipes",
      description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    },
  ];

  return (
    <section className="services">
      <div className="container">
        <h1 className="services-title">Our Services</h1>
        <p className="services-description">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
