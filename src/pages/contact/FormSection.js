import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormSection = ({
  primaryHeading,
  namePlaceholder,
  emailPlaceholder,
  messagePlaceholder,
}) => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Can't be empty"),
      email: Yup.string().email("Invalid email").required("Can't be empty"),
      message: Yup.string().required("Can't be empty"),
    }),
    onSubmit: (values, { resetForm }) => {
      resetForm();
    },
  });

  return (
    <section className="section--form">
      <div className="form-validation">
        <h2 className="form-validation__heading">{primaryHeading}</h2>
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="wrapper">
            <input
              type="text"
              value={formik.values.fullName}
              name="fullName"
              id="fullName"
              className={`${
                formik.touched.fullName && formik.errors.fullName
                  ? "field invalid"
                  : "field"
              }`}
              placeholder={namePlaceholder}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <p className="error">{formik.errors.fullName}</p>
            ) : null}
          </div>

          <div className="wrapper">
            <input
              type="email"
              value={formik.values.email}
              name="email"
              id="email"
              className={`${
                formik.touched.email && formik.errors.email
                  ? "field invalid"
                  : "field"
              }`}
              placeholder={emailPlaceholder}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="error">{formik.errors.email}</p>
            ) : null}
          </div>

          <div className="wrapper">
            <textarea
              name="message"
              value={formik.values.message}
              id="message"
              className={`${
                formik.touched.message && formik.errors.message
                  ? "text-area invalid"
                  : "text-area"
              }`}
              cols="20"
              rows="4"
              placeholder={messagePlaceholder}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <p className="error">{formik.errors.message}</p>
            ) : null}
          </div>

          <button className="btn-large" type="submit">
            <BsArrowRightShort className="icon-arrow" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
