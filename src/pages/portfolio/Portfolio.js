import React from "react";
import Products from "./Products";
import { portfolioContents } from "../../data/portfolioData/portfolioData";
import AsideInfo from "../home/AsideInfo";

const Portfolio = () => {
  return (
    <>
      <AsideInfo text="portfolio" />
      <main>
        <Products portfolioContents={portfolioContents} />
      </main>
    </>
  );
};

export default Portfolio;
