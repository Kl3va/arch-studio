# Frontend Mentor - Arch Studio multi-page website solution

![Design preview for the Arch Studio multi-page website challenge](./preview.jpg)

This is a solution to the [Arch Studio multi-page website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/arch-studio-multipage-website-wNIbOFYR6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

- My Users should be able to view the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Receive an error message when the contact form is submitted if:
- The `Name`, `Email` or `Message` fields are empty should show "Can't be empty"
- The `Email` is not formatted correctly should show "Invalid email"
- View actual locations on the contact page map.
- Navigate across several pages.

### Screenshot

![](./Screenshot%202022-05-24%20at%2002-58-13%20Arch-studio.png)

### Link

https://www.frontendmentor.io/profile/Kl3va/solutions

- Semantic HTML5 markup
- CSS/SCSS
- Flexbox
- CSS Grid
- Desktop First and Mobile First across different pages
- [React](https://reactjs.org/) - JS library
- [Framer-motion] - Animation Library
- [React-Leaflet] - Map Library
- [formik] - For Forms
- [Yup] - For Validation

### What I learned

- I got acquainted some modern css techniques, like having grid-contents in the same column and row.
- I'm really happy with how my final solution turned out. Looks close to the design as possible.
- Became a bit more confident with the Mobile first workflow after shying away from it for a long time. I did start with desktop first workflow for the home page but completed the other pages using the Mobile first approach thanks to the power of max-width and css functons like the min(), max(), clamp().
- Having to reuse certain components gave me joy and just how poerful react can be for such cases.

### Continued development

- In retrospect, I believe I delayed to finish up this project. Moving on, I shall be timing myself effectively. I wish there is a better way to use certain libraries without having them mess up your accessibility.
- I struggled to set the view for the map, when a user clicks on a specific link. I've a hang on how to implement it, but I just couldn't understand the docs of react-leaflet. I did ask around, no help came forth, so I resorted to only taking the user/viewer to the map's location...Though the marker are placed in the right location. I was able to get the coordinates using latlong.net. A very helpful tool. Thnaks to the creators.
- I will be looking out for the best way to arrange my files. Not entirely happy... surfing for resources.

### Author

https://www.frontendmentor.io/profile/Kl3va

## Acknowledgments

Massive credit to Kevin Powell, without him, I wouldn't have known the best way to approach using the Mobile first workflow. Also, to Folarin @folathecoder, being a huge source of inspiration with his amazing projects.
Huge thank you to the frontendmentor community and founders for providing such an impactful platform to showcase skills. Respect!!!!
