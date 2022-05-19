///////All data for contact page
//IMAGES
//Hero Section
import heroDesktop from "../../starter-code/assets/contact/desktop/image-hero.jpg";
import heroTablet from "../../starter-code/assets/contact/tablet/image-hero.jpg";
import heroMobile from "../../starter-code/assets/contact/mobile/image-hero.jpg";

////SECTIONS
//HERO section
export const contactHeroSection = {
  desktopImg: heroDesktop,
  tabletImg: heroTablet,
  mobileImg: heroMobile,
  headingLarge: "Contact",
  headingSmall: "Tell us about your project",
  text: "We'd love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!",
};

//Contact Details Section
export const contactDetailsSection = {
  primaryHeading: "Contact Details",
  locations: [
    {
      mainOffice: "Main Office",
      mailBox: "Mail: archone@mail.com",
      address: "Address: 1892 Chenoweth Drive TN",
      phoneNumber: "Phone: 123-456-3451",
      mapView: "View on Map",
      coord: [35.95246, -83.97153],
    },
    {
      mainOffice: "Office II",
      mailBox: "Mail: archtwo@mail.com",
      address: "Address: 3399 Wines Lane TX",
      phoneNumber: "Phone: 832-123-4321",
      mapView: "View on Map",
      coord: [29.89743, -97.827507],
    },
  ],
};

//Form Validation section
export const formSection = {
  primaryHeading: "Connect with us",
  namePlaceholder: "Name",
  emailPlaceholder: "Email",
  messagePlaceholder: "Message",
  errorMessage: "Can't be empty",
};
