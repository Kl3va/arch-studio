import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ logo, navigation }) => {
  return (
    <nav>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-links">
        {navigation.map((nav, index) => {
          const { link, page } = nav;
          return (
            <Link key={index} to={page}>
              {link}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
