import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const ContactDetailsSection = ({ primaryHeading, locations }) => {
  return (
    <section>
      <div className="content-box">
        <div className="details">
          <div className="dash"></div>
          <div className="main-details">
            <h2 className="details__heading">{primaryHeading}</h2>
            <div className="locations">
              {locations.map(
                (
                  { mainOffice, mailBox, address, phoneNumber, mapView },
                  index
                ) => {
                  return (
                    <div key={index} className="official-contact">
                      <div className="primary-contact">
                        <h3 className="primary-contact__heading">
                          {mainOffice}
                        </h3>
                        <p className="primary-contact__mail">{mailBox}</p>
                        <p className="primary-contact__address">{address}</p>
                        <p className="primary-contact__phone">{phoneNumber}</p>
                      </div>
                      <div className="map-view">
                        <p className="map-view__text">{mapView}</p>
                        <BsArrowRightShort className="icon-white" />
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
