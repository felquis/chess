The CSS radial-gradient() function creates an <image> which represents a gradient of colors radiating from an origin, the center of the gradient. The result of this function is an object of the CSS <gradient> data type.

Radial gradients are defined by their center, the ending shape contour and position, and color stops. The radial gradient consists, going from its center to its ending shape and potentially beyond, of successive uniformly-scaled concentric shapes, identical to the ending shape. Color stops are positioned on a virtual gradient ray going out horizontally of the center and going to the right. Percentages positioning of color stops are relative to the intersection between the ending shape and this gradient ray representing 100%. Each shape is monocolor and defined by the color on the gradient ray it intersects.

Ending shapes can only be circle or ellipse.

Like any other gradient, a CSS radial gradient is not a CSS <color> but an image with no intrinsic dimensions, i. e. it has no natural or preferred size, nor ratio. Its concrete size will match the one of the element it applies to.

The radial-gradient function does not allow repeating gradients. For such a functionality, use the CSS repeating-radial-gradient function.

[Webplatform](http://docs.webplatform.org/wiki/css/functions/radial-gradient "Webplatform")
[Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient "Mozilla")
[Caniuse](http://caniuse.com/#feat=css-gradients "Caniuse")