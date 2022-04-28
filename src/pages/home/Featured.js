import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Button from "../button";

const Featured = ({ heading, btnText, subContents }) => {
  return (
    <section className="section">
      <div className="featured">
        <div className="featured__heading">
          <h2 className="heading-small">{heading}</h2>
          <Button className="btn-small" text={btnText}>
            <BsArrowRightShort />
          </Button>
        </div>
        <div>
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
                <div key={index} className="featured-content">
                  <picture className="featured-content__img">
                    <source media="(min-width: 573px)" srcSet={imgDesktop} />
                    <source media="(min-width: 375px)" srcSet={imgTablet} />
                    <img loading="lazy" src={imgMobile} alt="portfolio" />
                  </picture>
                  <p className="featured-content__text">{headingLarge}</p>
                  <div className="featured-subcontent">
                    <h3 className="heading-smallest">{headingSmall}</h3>
                    <p className="featured-subcontent__text">{paragraph}</p>
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
