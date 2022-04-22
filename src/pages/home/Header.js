import React, { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Button from "../button";

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
          <img loading="lazy" src={desktopImg} alt="project image" />
        </picture>
        <div>
          <h1 className="heading-medium">{heading}</h1>
          <p className="text-secondary">{paragraph}</p>
          <Button className="btn-large" text={btnText}>
            <BsArrowRightShort />
          </Button>
        </div>
        <div className="tab-btns">
          {btnGroupText.map((btn, index) => {
            return <Button key={index} className="btn-small" text={btn} />;
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
