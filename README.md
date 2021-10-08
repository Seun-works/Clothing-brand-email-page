
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

- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](https://github.com/Seun-works/Clothing-brand-email-page/blob/main/solution/solution-screenshot%20(desktop-view).png)

This is a screenshot of the project in it's desktop state.


### Links

- Solution URL: [Frontend Mentor Solution](https://www.frontendmentor.io/solutions/responsive-email-page-using-bootstrap-javascript-sass-and-html-FvxAIxLMu)
- Live Site URL: [Live Site](https://seun-works.github.io/Clothing-brand-email-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Bootstrap-5
- Javascript
- Sass


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



### Useful resources

- [Bootstrap docs](hhttps://getbootstrap.com/docs/5.1/getting-started/introduction/) - The bootstrap documentation helped me in figuring out the layout of my site.



## Author

- Frontend Mentor - [@Seun-works](https://www.frontendmentor.io/profile/Seun-works)
- LinkedIn - [@SeunOgundipe](https://www.linkedin.com/in/seun-ogundipe)


## Acknowledgments

I would like to thank teslaAmbassador, who gave me a way to style my site as i had to override bootstraps in-built properties. In summary, doing projects is the best way for me to learn and truly work towards being a better developer.

