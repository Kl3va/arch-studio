import React from "react";
import { Link } from "react-router-dom";

const Navlinks = () => {
  return (
    <ul className="nav__links">
      {navigation.map((nav, index) => {
        const { link, page } = nav;
        return (
          <li key={index} className="nav__items">
            <Link to={page}>{link}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navlinks;
