import React from "react";
import Button from "../button";
import { BsArrowRightShort } from "react-icons/bs";
import { navbar } from "../../data/homeData/homeData";

const HomeAbout = ({ heading, btnText, desktopImg, tabletImg, mobileImg }) => {
  //Navigating to the about page
  const { page } = navbar.navigation[1];

  return (
    <section className="section section--about">
      <div className="home-about packed">
        <picture className="home-about__picture">
          <source media="(min-width: 573px)" srcSet={desktopImg} />
          <source media="(min-width: 375px)" srcSet={tabletImg} />
          <img
            loading="lazy"
            src={mobileImg}
            alt="small ideas"
            className="home-about__img"
          />
        </picture>
        <div className="home-about__content">
          <h2 className="home-about__heading">{heading}</h2>
          <Button className="btn-large" text={btnText} page={page}>
            <BsArrowRightShort className="icon-arrow" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
