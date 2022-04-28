import React from "react";

const Welcome = ({ headingLarge, headingSmall, texts, img }) => {
  return (
    <section className="section section--welcome">
      <div className="welcome">
        <h1 className="heading-large welcome__heading">{headingLarge}</h1>
        <div className="welcome__contents">
          <h2 className="heading-small welcome-subheading">{headingSmall}</h2>
          <div className="welcome-text">
            {texts.map((text, index) => {
              return (
                <p key={index} className="text-primary">
                  {text}
                </p>
              );
            })}
          </div>
        </div>
        <div className="welcome__img">
          <img loading="lazy" src={img} alt="welcome" />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
