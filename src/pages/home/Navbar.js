import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ logo, navigation }) => {
  return (
    <nav>
      <div className="nav__logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="nav__links">
        {navigation.map((nav, index) => {
          const { link, page } = nav;
          return (
            <li className="nav__items">
              <Link key={index} to={page}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
