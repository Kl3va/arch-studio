import React from "react";
import Button from "../button";
import { BsArrowRightShort } from "react-icons/bs";
import Navlinks from "./Navlinks";
import { navbar } from "../../data/homeData/homeData";

const Footer = ({ btnText, logo }) => {
  const { page } = navbar.navigation[0];
  return (
    <footer className="footer-main">
      <div className="footer">
        <div className="footer__logo">
          <img src={logo} alt="footer" />
        </div>
        <div className="footer__content">
          <Navlinks
            navigation={navbar.navigation}
            link="footer__link"
            items="footer__items"
          />

          <Button className="btn-large" text={btnText} page={page}>
            <BsArrowRightShort className="icon-arrow" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
