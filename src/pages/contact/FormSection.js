import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
//import Button from "../button";

const FormSection = ({
  primaryHeading,
  namePlaceholder,
  emailPlaceholder,
  messagePlaceholder,
  errorMessage,
}) => {
  return (
    <section className="section--form">
      <div className="form-validation">
        <h2 className="form-validation__heading">{primaryHeading}</h2>
        <form className="form">
          <div className="wrapper">
            <input
              type="text"
              name="person"
              id="person"
              className="field"
              placeholder={namePlaceholder}
            />
            <p className="error">{errorMessage}</p>
          </div>

          <div className="wrapper">
            <input
              type="email"
              name="email"
              id="email"
              className="field"
              placeholder={emailPlaceholder}
            />
            <p className="error">{errorMessage}</p>
          </div>

          <div className="wrapper">
            <textarea
              name="message"
              id="message"
              className="text-area"
              cols="20"
              rows="4"
              placeholder={messagePlaceholder}
            ></textarea>
            <p className="error">{errorMessage}</p>
          </div>

          <button className="btn-large">
            <BsArrowRightShort className="icon-arrow" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
