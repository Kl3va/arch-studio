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
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 2 } }}
    >
      <AsideInfo text="about" />
      <AboutHeader {...aboutHeroSection} />
      <main>
        <AboutHeritage {...heritage} />
        <AboutLeaders {...leaders} />
      </main>
    </motion.div>
  );
};

export default About;
