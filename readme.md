# Gradie Sign Up Page

Created to
implement [Codewell's Gradie Sign Up Page](https://www.codewell.cc/challenges/gradie-sign-up-page--608ac420650dff001599e8ec)
design and to practice with [Chakra UI](https://chakra-ui.com/)'s style system props.

## Techniques

* Uses CSS `&:before` and `linear-gradient` layering to create a four-quadrant gradient
* Uses CSS breakpoints and `flex` for responsive styling.
    * Mobile: < 480px
    * Tablet: >= 480px && < 768px
    * Web: > 768px
* Extends Chakra UI theme to set Roboto as header/body `font-family`
* Uses `calc()` to dynamically set width/height to maintain the hero background image aspect ratio
* Creates reusable form input and form label components to minimize styling duplication. (If it was more than one page, I would have extended the Chakra UI theme.)


