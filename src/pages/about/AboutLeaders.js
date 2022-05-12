import React from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";

const AboutLeaders = ({ heading, mainContent }) => {
  return (
    <section className="section--leadership">
      <div className="content-box">
        <div className="leadership">
          <h2 className="leadership__heading">{heading}</h2>
          <div className="leaders">
            {mainContent.map(({ imgContent, alternate, names, job }, index) => {
              return (
                <div key={index} className="person">
                  <img
                    src={imgContent}
                    alt={alternate}
                    className="person__img"
                  />
                  <div className="person__info">
                    <h3 className="person__name">{names}</h3>
                    <p className="person__job">{job}</p>
                  </div>
                  <div className="person__socials">
                    <BsLinkedin />
                    <BsTwitter />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLeaders;
