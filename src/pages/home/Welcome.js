import React from "react";

const Welcome = ({ headingLarge, headingSmall, texts, img }) => {
  return (
    <section className="welcome">
      <h1 className="heading-large">{headingLarge}</h1>
      <div>
        <h2 className="heading-small">{headingSmall}</h2>
        <div className="text-group">
          {texts.map((text, index) => {
            return (
              <p key={index} className="text-primary">
                {text}
              </p>
            );
          })}
        </div>
      </div>
      <div>
        <img loading="lazy" src={img} alt="welcome-img" />
      </div>
    </section>
  );
};

export default Welcome;
