import React from "react";

const Products = ({ portfolioContents }) => {
  return (
    <section className="section-portfolio">
      <div className="portfolio-grid">
        {portfolioContents.map(
          (
            { imgDesktop, imgTablet, imgMobile, headingSmall, paragraph },
            index
          ) => {
            return (
              <div key={index} className="portfolio-projects packed">
                <picture className="portfolio-projects__picture">
                  <source media="(min-width: 801px)" srcSet={imgDesktop} />
                  <source media="(min-width: 400px)" srcSet={imgTablet} />
                  <img loading="lazy" src={imgMobile} alt="portfolio" />
                </picture>
                <div className="portfolio-projects__minicontent">
                  <h4>{headingSmall}</h4>
                  <p className="portfolio-projects__text">{paragraph}</p>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Products;
