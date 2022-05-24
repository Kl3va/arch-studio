import React from "react";
import { useGlobalContext } from "./context";

const Background = () => {
  const { isSidebarOpen } = useGlobalContext();

  return (
    <aside
      className={`${
        isSidebarOpen
          ? "navigation-background show-background"
          : "navigation-background"
      }`}
    ></aside>
  );
};

export default Background;
