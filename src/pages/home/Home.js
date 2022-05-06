import React from "react";
//Components
import Header from "./Header";
import Welcome from "./Welcome";
import HomeAbout from "./HomeAbout";
import Featured from "./Featured";
import AsideInfo from "./AsideInfo";

//data
import {
  header,
  subHeader,
  about,
  featured,
} from "../../data/homeData/homeData";

const Home = () => {
  return (
    <>
      <AsideInfo text="home" />
      <Header {...header} />
      <main className="main">
        <Welcome {...subHeader} />
        <HomeAbout {...about} />
        <Featured {...featured} />
      </main>
    </>
  );
};

export default Home;
