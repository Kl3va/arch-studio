import React, { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Button from "../button";

const Header = ({ btnText, btnGroupText, mainContents }) => {
  const [value, setValue] = useState(0);

  const { heading, desktopImg, tabletImg, mobileImg, paragraph } =
    mainContents[value];

  return (
    <header className="header">
      <div className="main-header packed">
        <picture className="header-picture">
          <source media="(min-width: 573px)" srcSet={desktopImg} />
          <source media="(min-width: 375px)" srcSet={tabletImg} />
          <img
            loading="lazy"
            src={mobileImg}
            alt="project"
            className="header-img"
          />
        </picture>
        <div className="heading-contents">
          <h1 className="heading-medium">{heading}</h1>
          <p className="text-secondary">{paragraph}</p>
          <Button className="btn-large" text={btnText}>
            <BsArrowRightShort className="icon-arrow" />
          </Button>
        </div>
        <div className="tab-btns">
          {btnGroupText.map((btn, index) => {
            return (
              /* <Button
                key={index}
                className="btn-small"
                text={btn}
                onClick={() => setValue(index)}
              /> */
              <button
                key={index}
                className={`btn-small ${
                  index === value && "btn-small--active"
                }`}
                onClick={() => setValue(index)}
              >
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
