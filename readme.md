# Quick JS slider

Take a look at https://ddandev.github.io/simple-js-slider/

## Optionals!

In the js file there are a couple of comments indicating which lines to comment out to enable or disable the following features:

- Looping around: when going back from the first or forward from the last, do nothing with line enabled or allow to go around with the line commented (back from first to last, forward from last to first).

- Gray-out the arrows: At first slide the back arrow, at the last slide the forward arrow. 


## Transition:

Slides are "slided" from the sides when navigating.

Clicking the navigation fast will cause some weird but fun transitions! To change the color of the columns that appear in this case, use background-color or background-image properties in css at the .slidesContainer selector.

To disable animation, comment the transition properties (inside and outsedia the @media) for the .slide selector in css.

## Responsiveness

I made this page to look the same at any browser zoom level and automatically adapt to any screen ratio.