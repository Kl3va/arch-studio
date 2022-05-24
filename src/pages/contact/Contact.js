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
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 2 } }}
    >
      <AsideInfo text="contact" />
      <AboutHeader {...contactHeroSection} />
      <main>
        <ContactDetailsSection {...contactDetailsSection} />
        <MapSection />
        <FormSection {...formSection} />
      </main>
    </motion.div>
  );
};

export default Contact;
