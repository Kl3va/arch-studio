import React from "react";
//Components
import Header from "./Header";
import Welcome from "./Welcome";
import HomeAbout from "./HomeAbout";
import Featured from "./Featured";
import AsideInfo from "./AsideInfo";
import { motion } from "framer-motion";

//data
import {
  header,
  subHeader,
  about,
  featured,
} from "../../data/homeData/homeData";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 2 } }}
    >
      <AsideInfo text="home" />
      <Header {...header} />
      <main className="main">
        <Welcome {...subHeader} />
        <HomeAbout {...about} />
        <Featured {...featured} />
      </main>
    </motion.div>
  );
};

export default Home;
