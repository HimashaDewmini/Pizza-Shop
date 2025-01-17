import React from "react";
import "./About.css"; 
import pizzaShopImage from "../assets/pizza-shop.jpeg"; 
import chef1 from "../assets/chef11.jpeg";
import chef2 from "../assets/chef9.jpg";
import chef3 from "../assets/chef7.jpeg";
import chef4 from "../assets/chef6.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* About Section */}
        <div className="about-content">
          <h1 className="about-title">About Our Pizza Shop</h1>
          <p className="about-paragraph">
            Welcome to <strong>Pizza Delicios</strong>, where passion meets flavor! We take pride in crafting the 
            finest pizzas using the freshest, highest-quality ingredients. Whether you love traditional Italian 
            recipes or modern gourmet creations, our pizzas are made with love and served with a smile. 
            <br /><br />
            Enjoy a slice of happiness with us—dine in, take out, or order for delivery. Every bite is a taste of perfection!
          </p>
        </div>

        {/* Pizza Shop Image */}
        <div className="about-image">
          <img src={pizzaShopImage} alt="Our Pizza Shop" />
        </div>
      </div>

      {/* Meet Our Chefs Section */}
      <div className="chef-section">
        <h2 className="chef-title">Meet Our Chefs</h2>
        <div className="chef-container">
          <div className="chef-card">
            <img className="chef-image" src={chef1} alt="Chef Tom Smith" />
            <h3 className="chef-name">TOM SMITH</h3>
            <p className="chef-role">Head Pizza Chef</p>
          </div>
          <div className="chef-card">
            <img className="chef-image" src={chef2} alt="Chef Mark Wilson" />
            <h3 className="chef-name">MARK WILSON</h3>
            <p className="chef-role">Dough & Crust Expert</p>
          </div>
          <div className="chef-card">
            <img className="chef-image" src={chef3} alt="Chef Patrick Jacobson" />
            <h3 className="chef-name">PATRICK JACOBSON</h3>
            <p className="chef-role">Sauce & Toppings Master</p>
          </div>
          <div className="chef-card">
            <img className="chef-image" src={chef4} alt="Chef Ivan Dorchsner" />
            <h3 className="chef-name">IVAN DORCHSNER</h3>
            <p className="chef-role">Wood-Fired Pizza Specialist</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
