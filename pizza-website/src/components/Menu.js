import React from "react";
import "./Menu.css";
import italianPizza from "../assets/Italian-pizza.jpeg";
import greekPizza from "../assets/greek-pizza.jpeg";
import caucasianPizza from "../assets/caucasian-pizza.jpeg";
import americanPizza from "../assets/american-pizza.jpeg";
import tomatoPie from "../assets/tomato-pie.jpeg";
import margherita from "../assets/margherita.jpeg";


const Menu = () => {
  const pizzas = [
    { name: "Italian Pizza", price: "$2.90", description: "Far far away, behind the word mountains.", image: italianPizza },
    { name: "Greek Pizza", price: "$2.90", description: "Far far away, behind the word mountains.", image: greekPizza },
    { name: "Caucasian Pizza", price: "$2.90", description: "Far far away, behind the word mountains.", image: caucasianPizza },
    { name: "American Pizza", price: "$2.90", description: "Far far away, behind the word mountains.", image: americanPizza },
    { name: "Tomato Pie", price: "$2.90", description: "Far far away, behind the word mountains.", image: tomatoPie },
    { name: "Margherita", price: "$2.90", description: "Far far away, behind the word mountains.", image: margherita },
  ];

  return (
    <section className="menu">
      <h1 className="menu-title">Our Menu</h1>
      <div className="menu-grid">
        {pizzas.map((pizza, index) => (
          <div className="menu-card" key={index}>
            <img src={pizza.image} alt={pizza.name} className="menu-card-img" />
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <div className="menu-card-footer">
              <span>{pizza.price}</span>
              <button>Order</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
