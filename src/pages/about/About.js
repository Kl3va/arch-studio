import React from "react";
import AsideInfo from "../home/AsideInfo";
import AboutHeader from "./AboutHeader";
import AboutHeritage from "./AboutHeritage";
import { aboutHeroSection, heritage } from "../../data/aboutData/aboutData";

const About = () => {
  return (
    <>
      <AsideInfo text="about" />
      <AboutHeader {...aboutHeroSection} />
      <main>
        <AboutHeritage {...heritage} />
      </main>
    </>
  );
};

export default About;
