//All data for about page
//IMAGES
//Hero Section
import heroDesktop from "../../starter-code/assets/about/desktop/image-hero.jpg";
import heroTablet from "../../starter-code/assets/about/tablet/image-hero.jpg";
import heroMobile from "../../starter-code/assets/about/mobile/image-hero.jpg";

//Partners
import avatarJackson from "../../starter-code/assets/about/desktop/avatar-jackson.jpg";
import avatarJake from "../../starter-code/assets/about/desktop/avatar-jake.jpg";
import avatarMaria from "../../starter-code/assets/about/desktop/avatar-maria.jpg";
import avatarThompson from "../../starter-code/assets/about/desktop/avatar-thompson.jpg";

//Heritage
import heritageImg from "../../starter-code/assets/about/desktop/image-heritage.jpg";

//HERO SECTION
export const aboutHeroSection = {
  desktopImg: heroDesktop,
  tabletImg: heroTablet,
  mobileImg: heroMobile,
  headingLarge: "About",
  headingSmall: "Your team of professionals",
  text: "Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.",
};

//HERITAGE SECTION
export const heritage = {
  heading: "Our  Heritage",
  imgHeritage: heritageImg,
  texts: [
    "Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.",
    "Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs.",
    "Our small team of world-class professionals provides input on every project.",
  ],
};

//LEADERSHIP SECTION
export const leaders = {
  heading: "The  Leaders",
  mainContent: [
    {
      imgContent: avatarJake,
      alternate: "Jake Richards",
      names: "Jake Richards",
      job: "Chief Architect",
    },
    {
      imgContent: avatarThompson,
      alternate: "Thompson Smith",
      names: "Thompson Smith",
      job: "Head of Finance",
    },
    {
      imgContent: avatarJackson,
      alternate: "Jackson Rourke",
      names: "Jackson Rourke",
      job: "Lead Designer",
    },
    {
      imgContent: avatarMaria,
      alternate: "Maria Simpson",
      names: "Maria Simpson",
      job: "Senior Architect",
    },
  ],
};
