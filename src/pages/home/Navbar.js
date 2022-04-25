import React from "react";
import Navlinks from "./Navlinks";

//Navigation Component
const Navbar = ({ logo, navigation }) => {
  return (
    <nav>
      <div className="nav__logo">
        <img src={logo} alt="logo" />
      </div>
      <Navlinks navigation={navigation} link="nav__link" items="nav__items" />
    </nav>
  );
};

export default Navbar;
