The CSS background-image property sets one or several background images for an element. The images are drawn on successive stacking context layers, with the first specified being drawn as if it is the closest to the user. The borders of the element are then drawn on top of them, and the background-color is drawn beneath them.

How the images are drawn relative to the box and its borders is defined by the background-clip and background-origin CSS properties.

If a specified image cannot be drawn (for example when the file denoted by the specified URI cannot be loaded), browsers handle them as if it was the none value.

[Webplatform](docs.webplatform.org/wiki/css/properties/background-image "Webplatform")
[Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image "Mozilla")
[Caniuse](http://caniuse.com/#feat=background-img-opts "Caniuse")