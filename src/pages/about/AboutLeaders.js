import React from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";

const AboutLeaders = ({ heading, mainContent }) => {
  return (
    <section className="section--leadership">
      <div className="leadership">
        <h2 className="leadership__heading">{heading}</h2>
        <div className="leaders">
          {mainContent.map(({ imgContent, alternate, names, job }, index) => {
            return (
              <div key={index} className="person__id">
                <img src={imgContent} alt={alternate} />
                <div className="person__socials">
                  <BsLinkedin />
                  <BsTwitter />
                </div>
                <div className="person__info">
                  <h3 className="person__name">{names}</h3>
                  <p className="person__job">{job}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutLeaders;
