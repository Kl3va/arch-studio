import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { BsArrowRightShort } from "react-icons/bs";

const ContactDetailsSection = ({ primaryHeading, locations }) => {
  return (
    <section className="section--details">
      <div className="content-box">
        <div className="details">
          <div className="dash"></div>
          <div className="main-details">
            <h2 className="details__heading">{primaryHeading}</h2>
            <div className="locations">
              {locations.map(
                (
                  { mainOffice, mailBox, address, phoneNumber, mapView, coord },
                  index
                ) => {
                  return (
                    <div key={index} className="official-contact">
                      <div className="primary-contact">
                        <h3 className="primary-contact__heading">
                          {mainOffice}
                        </h3>
                        <div className="public-info">
                          <p className="public-info__mail">{mailBox}</p>
                          <p className="public-info__address">{address}</p>
                          <p className="public-info__phone">{phoneNumber}</p>
                        </div>
                      </div>
                      <div className="map-view">
                        <Link to="#leaflet-map">
                          <p className="map-view__text">{mapView}</p>
                          <BsArrowRightShort className="icon-arrow" />
                        </Link>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetailsSection;
