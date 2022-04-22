import React from "react";
//Components
import Header from "./Header";
import Welcome from "./Welcome";
import HomeAbout from "./HomeAbout";

//data
import { header, subHeader, about } from "../../data/homeData/homeData";

const Home = () => {
  return (
    <>
      <Header {...header} />
      <main>
        <Welcome {...subHeader} />
        <HomeAbout {...about} />
      </main>
    </>
  );
};

export default Home;
