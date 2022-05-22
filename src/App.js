import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Portfolio from "./pages/portfolio/Portfolio";
import Navbar from "./pages/home/Navbar";
import Footer from "./pages/home/Footer";
import Sidebar from "./pages/Sidebar";

import { navbar, footer } from "./data/homeData/homeData";

function App() {
  return (
    <Router>
      <Navbar {...navbar} />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer {...footer} />
    </Router>
  );
}

export default App;
