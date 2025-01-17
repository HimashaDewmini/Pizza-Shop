import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";

import Service from "./components/Service";
import Blog from "./components/Blog";
import About from "./components/About";
import  Contact from "./components/Contact"
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      
      <Navbar />
      <Hero />
      <Menu />
      
      <Service/>
      <Blog/>
      <About/>
      <Contact/>
      <Footer />
    </div>
    
  );
}

export default App;
