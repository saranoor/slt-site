import React from "react";
import "./Services.css";

const services = [
  "Speech Delay",
  "Stammering",
  "Autism Support",
  "Adult Speech Therapy"
];

const Services = () => (
  <section className="services">
    <h2>Our Services</h2>
    <div className="service-cards">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <h3>{service}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
