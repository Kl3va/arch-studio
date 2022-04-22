import React from "react";
//Components
import Header from "./Header";
import Welcome from "./Welcome";

//data
import { header, subHeader } from "../../data/homeData/homeHeader";

const Home = () => {
  return (
    <>
      <Header {...header} />
      <main>
        <Welcome {...subHeader} />
      </main>
    </>
  );
};

export default Home;
