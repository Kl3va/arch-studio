import React, { useState, useEffect } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Button from "../button";
import { navbar } from "../../data/homeData/homeData";

const Header = ({ btnText, btnGroupText, mainContents }) => {
  //Tab switching
  const [value, setValue] = useState(0);

  const checkIndex = (number) => {
    if (number > mainContents.length - 1) {
      return 0;
    }
    return number;
  };

  useEffect(() => {
    let index = setInterval(() => {
      setValue(checkIndex(value + 1));
    }, 3000);

    return () => {
      clearInterval(index);
    };
  });

  //Navigating to the portfolio page
  const { page } = navbar.navigation[0];

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
          <Button className="btn-large" text={btnText} page={page}>
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
