import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Button from "../button";

const FormSection = ({
  primaryHeading,
  namePlaceholder,
  emailPlaceholder,
  messagePlaceholder,
  errorMessage,
}) => {
  return (
    <section>
      <div className="form-validation">
        <h2 className="form-validation__heading">{primaryHeading}</h2>
        <form>
          <input
            type="text"
            name="person"
            id="person"
            placeholder={namePlaceholder}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder={emailPlaceholder}
          />
          <textarea
            name="message"
            id="message"
            cols="20"
            rows="5"
            placeholder={messagePlaceholder}
          ></textarea>
          <Button className="btn-large">
            <BsArrowRightShort className="icon-arrow" />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
