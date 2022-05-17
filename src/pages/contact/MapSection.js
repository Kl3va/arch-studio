import React from "react";

const MapSection = ({ mapImgDesktop, mapImgTablet, mapImgMobile }) => {
  return (
    <section className="section--map">
      <div className="mapping">
        <picture className="">
          <source media="(min-width: 800px)" srcSet={mapImgDesktop} />
          <source media="(min-width: 500px)" srcSet={mapImgTablet} />
          <img
            loading="lazy"
            src={mapImgMobile}
            alt="hero"
            className="mapping__picture"
          />
        </picture>
      </div>
    </section>
  );
};

export default MapSection;
