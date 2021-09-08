
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](https://github.com/Seun-works/Clothing-brand-email-page/blob/main/solution/solution-screenshot%20(desktop-view).png)

This is a screenshot of the project in it's desktop state.


### Links

- Solution URL: [https://www.frontendmentor.io/solutions/responsive-email-page-using-bootstrap-javascript-sass-and-html-FvxAIxLMu]
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Bootstrap-5
-Javascript
-sass


### What I learned

I tried to make use of bootstrap to help me style the page accordingly, but i ended up using some custom css in order to make the page resopnsive.

In my script file, figuring out a way to validate the email was the main challenge. I could've defined a variable with the regular expression of characters to check the email validation, but i went along with something simpler.

```js
const validateEmail = () => {
    if (!email.value.includes('@')) {
     }
```
All this block did was to check the contents of the input value for the @ sign in order to validate or invalidate it. I could've made use of the in-built validation system in bootstrap, but i decided to code a custom one so that i can learn the process of validation.

### Continued development

The site still has some responsive issues i wish to iron out in the near future, such as padding and the placeement of certain elements when changing screen sizes. I also want to be more comfortable in using a css framework like bootstrap in order to make my styling process much simpler.
In summary, doing projects is the best way for me 


### Useful resources

- [Example resource 1](hhttps://getbootstrap.com/docs/5.1/getting-started/introduction/) - The bootstrap documentation helped me in figuring out the layout of my site.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.


## Author

- Frontend Mentor - [@Seun-works](https://www.frontendmentor.io/profile/Seun-works)
- LinkedIn - [@SeunOgundipe](https://www.linkedin.com/in/seun-ogundipe)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
