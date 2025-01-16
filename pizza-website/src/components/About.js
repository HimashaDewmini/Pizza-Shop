import React from "react";
import "./About.css"; 
import pizzaShopImage from "../assets/pizza-shop.jpeg"; 
import chef1 from "../assets/chef1.jpeg";
import chef2 from "../assets/chef1.jpeg";
import chef3 from "../assets/chef1.jpeg";
import chef4 from "../assets/chef1.jpeg";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
    
        <div className="about-content">
          <h1 className="about-title">About Our Pizza Shop</h1>
          <p className="about-paragraph">
            Welcome to Pizza Delicios, where passion meets flavor! We take pride in crafting the finest pizzas
            with fresh, high-quality ingredients, delivering a taste that brings joy to every bite. From our
            traditional Italian recipes to modern gourmet creations, our pizzas are made with love and served
            with a smile. Join us on a journey of mouthwatering flavors and unforgettable dining experiences.
            Whether you're dining in, taking out, or ordering for delivery, we promise a slice of happiness every
            time!
          </p>
        </div>

        
        <div className="about-image">
          <img src={pizzaShopImage} alt="Our Pizza Shop" />
        </div>
      </div>

      
      <div className="chef-section">
        <h2 className="chef-title">Meet Our Chefs</h2>
        <div className="chef-container">
          <div className="chef-card">
            <img src={chef1} alt="Chef Tom Smith" />
            <h3>TOM SMITH</h3>
            <p>Pizza Specialist</p>
          </div>
          <div className="chef-card">
            <img src={chef2} alt="Chef Mark Wilson" />
            <h3>MARK WILSON</h3>
            <p>Beard Specialist</p>
          </div>
          <div className="chef-card">
            <img src={chef3} alt="Chef Patrick Jacobson" />
            <h3>PATRICK JACOBSON</h3>
            <p>Hair Stylist</p>
          </div>
          <div className="chef-card">
            <img src={chef4} alt="Chef Ivan Dorchsner" />
            <h3>IVAN DORCHSNER</h3>
            <p>Beard Specialist</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
