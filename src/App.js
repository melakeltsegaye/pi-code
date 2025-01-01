import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Course from "./components/Course";
import Advertisement from "./components/Advertisement";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Course />
      <Advertisement />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
