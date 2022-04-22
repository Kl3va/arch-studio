import React, { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Header = ({ btnText, btnGroupText, mainContents }) => {
  const [value, setValue] = useState(0);

  const { heading, desktopImg, tabletImg, mobileImg, paragraph } =
    mainContents[value];

  return (
    <header className="header">
      <div className="main-header">
        <picture className="header-image">
          <source media="(max-width: 573px)" srcSet={tabletImg} />
          <source media="(max-width: 375px)" srcSet={mobileImg} />
          <img loading="lazy" src={desktopImg} alt="project-img" />
        </picture>
        <div>
          <h1 className="heading-small">{heading}</h1>
          <p className="text-secondary">{paragraph}</p>
          <button className="btn-large">
            {btnText} <BsArrowRightShort />
          </button>
        </div>
        <div className="tab-btns">
          {btnGroupText.map((btn, index) => {
            return (
              <button key={index} className="btn-small">
                {btn}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
