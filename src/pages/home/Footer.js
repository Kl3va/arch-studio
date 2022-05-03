import React from "react";
import Button from "../button";
import { BsArrowRightShort } from "react-icons/bs";
import Navlinks from "./Navlinks";
import { navbar } from "../../data/homeData/homeData";
//import { useNavigate } from "react-router-dom";
import useNavigation from "./hooks";

const Footer = ({ btnText, logo }) => {
  const { navigate } = useNavigation();
  return (
    <footer>
      <div className="footer">
        <div className="footer__logo">
          <img src={logo} alt="footer" />
        </div>
        <div className="footer__content packed">
          <Navlinks
            navigation={navbar.navigation}
            link="footer__link"
            items="footer__items"
          />

          <Button
            className="btn-large"
            text={btnText}
            onClick={() => {
              navigate("/portfolio");
            }}
          >
            <BsArrowRightShort className="icon-arrow" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
