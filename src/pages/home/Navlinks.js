import React from "react";
import { Link } from "react-router-dom";

const Navlinks = ({ navigation, link, items }) => {
  return (
    <ul className={link}>
      {navigation.map((nav, index) => {
        const { link, page } = nav;
        return (
          <li key={index} className={items}>
            <Link to={page}>{link}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navlinks;
