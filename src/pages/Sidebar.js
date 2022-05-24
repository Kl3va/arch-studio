import React from "react";
import { useGlobalContext } from "../pages/context";
import { navbar } from "../data/homeData/homeData";
import Navlinks from "../pages/home/Navlinks";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  const { navigation } = navbar;

  return (
    <aside>
      <div
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
        onClick={closeSidebar}
      >
        <Navlinks
          navigation={navigation}
          link="sidebar__link"
          items="sidebar__items"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
