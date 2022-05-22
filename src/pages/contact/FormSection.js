import React, { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
//import { useFormik } from "formik";
//import Button from "../button";

const FormSection = ({
  primaryHeading,
  namePlaceholder,
  emailPlaceholder,
  messagePlaceholder,
}) => {
  const [person, setPerson] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (person.fullName && person.email && person.message) {
    // console.log(person);

    // return setPerson({ fullName: "", email: "", message: "" });
    // }
    // else {
    // setErrors(validate(person));
    // }
  };

  return (
    <section className="section--form">
      <div className="form-validation">
        <h2 className="form-validation__heading">{primaryHeading}</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="wrapper">
            <input
              type="text"
              value={person.fullName}
              name="fullName"
              id="fullName"
              className="field"
              placeholder={namePlaceholder}
              onChange={handleChange}
            />
            {/**errors.fullName && <p className="error">{errors.fullName}</p>**/}
          </div>

          <div className="wrapper">
            <input
              type="email"
              value={person.email}
              name="email"
              id="email"
              className="field"
              placeholder={emailPlaceholder}
              onChange={handleChange}
            />
            {/**!person.email ? null : <p className="error">{errorMessage}</p>**/}
          </div>

          <div className="wrapper">
            <textarea
              name="message"
              value={person.message}
              id="message"
              className="text-area"
              cols="20"
              rows="4"
              placeholder={messagePlaceholder}
              onChange={handleChange}
            ></textarea>
            {/**!person.message ? null : <p className="error">{errorMessage}</p>**/}
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
