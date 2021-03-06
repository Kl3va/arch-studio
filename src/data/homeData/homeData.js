//Images(desktop) for header section
import paramourDesktop from "../../starter-code/assets/home/desktop/image-hero-paramour.jpg";
import federalDesktop from "../../starter-code/assets/home/desktop/image-hero-federal.jpg";
import seraphDesktop from "../../starter-code/assets/home/desktop/image-hero-seraph.jpg";
import trinityDesktop from "../../starter-code/assets/home/desktop/image-hero-trinity.jpg";

//Images for tablet
import paramourTablet from "../../starter-code/assets/home/tablet/image-hero-paramour.jpg";
import federalTablet from "../../starter-code/assets/home/tablet/image-hero-federal.jpg";
import seraphTablet from "../../starter-code/assets/home/tablet/image-hero-seraph.jpg";
import trinityTablet from "../../starter-code/assets/home/tablet/image-hero-trinity.jpg";

//Images for mobile
import paramourMobile from "../../starter-code/assets/home/mobile/image-hero-paramour.jpg";
import federalMobile from "../../starter-code/assets/home/mobile/image-hero-federal.jpg";
import seraphMobile from "../../starter-code/assets/home/mobile/image-hero-seraph.jpg";
import trinityMobile from "../../starter-code/assets/home/mobile/image-hero-trinity.jpg";

//Image for welcome
import welcomeImg from "../../starter-code/assets/home/desktop/image-welcome.jpg";

//Image for about section
import teamDesktop from "../../starter-code/assets/home/desktop/image-small-team.jpg";
import teamTablet from "../../starter-code/assets/home/tablet/image-small-team.jpg";
import teamMobile from "../../starter-code/assets/home/mobile/image-small-team.jpg";

//Images for featured section
import imgDesolDesktop from "../../starter-code/assets/portfolio/desktop/image-del-sol.jpg";
import imgDesolTablet from "../../starter-code/assets/portfolio/tablet/image-del-sol.jpg";
import imgDesolMobile from "../../starter-code/assets/portfolio/mobile/image-del-sol.jpg";

import imgTowerDesktop from "../../starter-code/assets/portfolio/desktop/image-228b.jpg";
import imgTowerTablet from "../../starter-code/assets/portfolio/tablet/image-228b.jpg";
import imgTowerMobile from "../../starter-code/assets/portfolio/mobile/image-228b.jpg";

import imgPrototypeDesktop from "../../starter-code/assets/portfolio/desktop/image-prototype.jpg";
import imgProrotypeTablet from "../../starter-code/assets/portfolio/tablet/image-prototype.jpg";
import imgPrototypeMobile from "../../starter-code/assets/portfolio/mobile/image-prototype.jpg";

//Navbar logo
import navLogo from "../../starter-code/assets/logo.svg";

//Footer Logo
import footerLogo from "../../starter-code/assets/logo-footer.svg";

//ICONS for navbar(mobile)
import iconClose from "../../starter-code/assets/icons/icon-close.svg";
import iconOpen from "../../starter-code/assets/icons/icon-hamburger.svg";

//HEADER DATA
export const header = {
  btnText: "See Our Portfolio",
  btnGroupText: ["01", "02", "03", "04"],
  mainContents: [
    {
      heading: "Project Paramour",
      desktopImg: paramourDesktop,
      tabletImg: paramourTablet,
      mobileImg: paramourMobile,
      paragraph:
        "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
    },
    {
      heading: "Seraph Station",
      desktopImg: seraphDesktop,
      tabletImg: seraphTablet,
      mobileImg: seraphMobile,
      paragraph:
        "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
    },
    {
      heading: "Federal II Tower",
      desktopImg: federalDesktop,
      tabletImg: federalTablet,
      mobileImg: federalMobile,
      paragraph:
        "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
    },
    {
      heading: "Trinity Bank Tower",
      desktopImg: trinityDesktop,
      tabletImg: trinityTablet,
      mobileImg: trinityMobile,
      paragraph:
        "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
    },
  ],
};

//Sub header section
export const subHeader = {
  headingLarge: "Welcome",
  headingSmall: " Welcome to  Arch Studio",
  texts: [
    "We have a unique network and skillset to help bring your projects to life. Our smallteam of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.",
    "Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight",
    "We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.",
  ],
  img: welcomeImg,
};

//About section data
export const about = {
  heading: "Small team, big ideas",
  btnText: "About Us",
  desktopImg: teamDesktop,
  tabletImg: teamTablet,
  mobileImg: teamMobile,
};

//Featured section data
export const featured = {
  heading: "Featured",
  btnText: "See all",
  subContents: [
    {
      imgDesktop: imgDesolDesktop,
      imgTablet: imgDesolTablet,
      imgMobile: imgDesolMobile,
      headingLarge: "1",
      headingSmall: "Project Del Sol",
      paragraph: "View All Projects",
    },
    {
      imgDesktop: imgTowerDesktop,
      imgTablet: imgTowerTablet,
      imgMobile: imgTowerMobile,
      headingLarge: "2",
      headingSmall: "228B Tower",
      paragraph: "View All Projects",
    },
    {
      imgDesktop: imgPrototypeDesktop,
      imgTablet: imgProrotypeTablet,
      imgMobile: imgPrototypeMobile,
      headingLarge: "3",
      headingSmall: "Le Prototype",
      paragraph: "View All Projects",
    },
  ],
};

//Data for navigation bar
export const navbar = {
  logo: navLogo,
  iconClose,
  iconOpen,
  navigation: [
    {
      link: "Portfolio",
      page: "portfolio",
    },
    {
      link: "About Us",
      page: "about",
    },
    {
      link: "Contact",
      page: "contact",
    },
  ],
};

//Footer Data
export const footer = {
  btnText: "See Our Portfolio",
  logo: footerLogo,
};
