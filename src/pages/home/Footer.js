import React from "react";
import Button from "../button";
import { BsArrowRightShort } from "react-icons/bs";
import Navlinks from "./Navlinks";
import { navbar } from "../../data/homeData/homeData";

const Footer = ({ btnText, logo }) => {
  return (
    <footer>
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
        </div>
        <Button className="btn-large" text={btnText}>
          <BsArrowRightShort className="icon-arrow" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
