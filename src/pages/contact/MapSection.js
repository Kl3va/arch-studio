import React from "react";

const MapSection = ({ mapImgDesktop, mapImgTablet, mapImgMobile }) => {
  return (
    <section>
      <div className="mapping">
        <picture className="mapping__picture">
          <source media="(min-width: 800px)" srcSet={mapImgDesktop} />
          <source media="(min-width: 500px)" srcSet={mapImgTablet} />
          <img loading="lazy" src={mapImgMobile} alt="hero" />
        </picture>
      </div>
    </section>
  );
};

export default MapSection;
