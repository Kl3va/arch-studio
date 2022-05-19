import React from "react";
import AsideInfo from "../home/AsideInfo";
import AboutHeader from "../about/AboutHeader";
import ContactDetailsSection from "./ContactDetailsSection";
import MapSection from "./MapSection";
import FormSection from "./FormSection";
import {
  contactHeroSection,
  contactDetailsSection,
  formSection,
} from "../../data/contactData/contactData";

const Contact = () => {
  return (
    <>
      <AsideInfo text="contact" />
      <AboutHeader {...contactHeroSection} />
      <main>
        <ContactDetailsSection {...contactDetailsSection} />
        <MapSection />
        <FormSection {...formSection} />
      </main>
    </>
  );
};

export default Contact;
