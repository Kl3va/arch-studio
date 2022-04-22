import React from "react";
import Button from "../button";
import { BsArrowRightShort } from "react-icons/bs";

const HomeAbout = ({ heading, btnText, desktopImg, tabletImg, mobileImg }) => {
  return (
    <section className="section">
      <div className="home-about">
        <picture className="home-about__image">
          <source media="(max-width: 573px)" srcSet={tabletImg} />
          <source media="(max-width: 375px)" srcSet={mobileImg} />
          <img loading="lazy" src={desktopImg} alt="small ideas image" />
        </picture>
        <div className="home-about__content">
          <h2 className="heading-small">{heading}</h2>
          <Button className="btn-small" text={btnText}>
            <BsArrowRightShort />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
