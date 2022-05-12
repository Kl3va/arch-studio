import React from "react";
import AsideInfo from "../home/AsideInfo";
import AboutHeader from "./AboutHeader";
import AboutHeritage from "./AboutHeritage";
import AboutLeaders from "./AboutLeaders";
import {
  aboutHeroSection,
  heritage,
  leaders,
} from "../../data/aboutData/aboutData";

const About = () => {
  return (
    <>
      <AsideInfo text="about" />
      <AboutHeader {...aboutHeroSection} />
      <main>
        <AboutHeritage {...heritage} />
        <AboutLeaders {...leaders} />
      </main>
    </>
  );
};

export default About;
