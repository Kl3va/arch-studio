import React from "react";
import Navlinks from "./Navlinks";
import { Link } from "react-router-dom";

//Navigation Component
const Navbar = ({ logo, navigation }) => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        {/*<img src={logo} alt="logo" />*/}
      </div>
      <Navlinks navigation={navigation} link="nav__link" items="nav__items" />
    </nav>
  );
};

export default Navbar;
