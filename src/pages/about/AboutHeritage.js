import React from "react";

const AboutHeritage = ({ heading, texts, imgHeritage, alternate }) => {
  return (
    <section className="section--heritage">
      <div className="heritage">
        <div className="heritage__box">
          <div className="dash"></div>
          <h2 className="heritage__heading">{heading}</h2>
          <div className="heritage__text-group">
            {texts.map((text, index) => {
              return (
                <p key={index} className="heritage__text">
                  {text}
                </p>
              );
            })}
          </div>
        </div>
        <div className="heritage__img">
          <img src={imgHeritage} alt={alternate} />
        </div>
      </div>
    </section>
  );
};

export default AboutHeritage;
