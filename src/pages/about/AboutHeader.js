import React from "react";

const AboutHeader = ({
  desktopImg,
  tabletImg,
  mobileImg,
  headingLarge,
  headingSmall,
  text,
}) => {
  return (
    <header>
      <div className="about-hero">
        <div className="about-hero__image-box">
          <picture className="about-hero__picture">
            <source media="(min-width: 800px)" srcSet={desktopImg} />
            <source media="(min-width: 500px)" srcSet={tabletImg} />
            <img loading="lazy" src={mobileImg} alt="hero" />
          </picture>
        </div>
        <div className="about-content">
          <h1 className="heading-large about-content__heading">
            {headingLarge}
          </h1>
          <div className="about-minicontent">
            <div className="dash"></div>
            <h2 className="about-minicontent__heading-small">{headingSmall}</h2>
            <p className="about-minicontent__text">{text}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
