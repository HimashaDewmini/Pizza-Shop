import React from "react";

import "./Hero.css";

const Hero = () => {
  return (
    <header className="hero" id="home">
      <div className="hero-content">
        <h1>Welcome to Pizza Hub</h1>
        <p>The best place to enjoy delicious Italian pizzas made with love!</p>
        <div className="hero-buttons">
          <button className="btn-primary">Order Now</button>
          <button className="btn-secondary">Explore Menu</button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
