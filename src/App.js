import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
/*import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Portfolio from "./pages/portfolio/Portfolio"; */
import Navbar from "./pages/home/Navbar";
import Footer from "./pages/home/Footer";
import Sidebar from "./pages/Sidebar";
import Background from "./pages/Background";

import { navbar, footer } from "./data/homeData/homeData";
import AnimatedRoutes from "./pages/AnimatedRoutes";

function App() {
  return (
    <Router>
      <Navbar {...navbar} />
      <Sidebar />
      <Background />
      <AnimatedRoutes />
      <Footer {...footer} />
    </Router>
  );
}

export default App;
