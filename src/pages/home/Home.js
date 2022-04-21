import React from "react";
import Header from "./Header";

//data
import { header } from "../../data/homeData/homeHeader";

const Home = () => {
  return (
    <>
      <Header {...header} />
    </>
  );
};

export default Home;
