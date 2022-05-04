import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Button from "../button";
import { navbar } from "../../data/homeData/homeData";

const Featured = ({ heading, btnText, subContents }) => {
  //Navigating to the portfolio page
  const { page } = navbar.navigation[0];

  return (
    <section className="section section--featured">
      <div className="featured">
        <h2 className="heading-small featured__heading">{heading}</h2>
        <Button className="btn-large" text={btnText} page={page}>
          <BsArrowRightShort className="icon-arrow" />
        </Button>
        <div className="featured__contents">
          {subContents.map(
            (
              {
                imgDesktop,
                imgTablet,
                imgMobile,
                headingSmall,
                headingLarge,
                paragraph,
              },
              index
            ) => {
              return (
                <div key={index} className="featured-subcontent packed">
                  <picture className="featured-subcontent__picture">
                    <source media="(min-width: 573px)" srcSet={imgDesktop} />
                    <source media="(min-width: 375px)" srcSet={imgTablet} />
                    <img loading="lazy" src={imgMobile} alt="portfolio" />
                  </picture>
                  <h3 className="featured-subcontent__heading">
                    {headingLarge}
                  </h3>
                  <div className="featured-minicontent">
                    <h4 className="heading-smallest">{headingSmall}</h4>
                    <p className="featured-minicontent__text">{paragraph}</p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Featured;
