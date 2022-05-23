import React from "react";
import Navlinks from "./Navlinks";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

//Navigation Component
const Navbar = ({ logo, navigation, iconClose, iconOpen }) => {
  const { isSidebarOpen, closeSidebar, openSidebar } = useGlobalContext();

  return (
    <aside className="aside-nav">
      <nav className="nav">
        <div className="nav__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <Navlinks navigation={navigation} link="nav__link" items="nav__items" />
        <div className="nav__icon">
          {isSidebarOpen ? (
            <img src={iconClose} alt="icon close" onClick={closeSidebar} />
          ) : (
            <img src={iconOpen} alt="open icon" onClick={openSidebar} />
          )}
        </div>
      </nav>
    </aside>
  );
};

export default Navbar;
