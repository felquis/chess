The CSS linear-gradient() function creates an <image> which represents a linear gradient of colors. The result of this function is an object of the CSS <gradient> data type. Like any other gradient, a CSS linear gradient is not a CSS <color> but an image with no intrinsic dimensions; that is, it has neither natural or preferred size, nor ratio. Its concrete size will match the one of the element it applies to.

Linear gradients are defined by an axis, the gradient line, with each point on it being of a different color. Perpendicular lines to the gradient-line have one single color, the one of the point on the gradient line.

The gradient line is defined by the center of the box containing the gradient image and by an angle. The color of the gradient is defined by different points, the starting point, the ending point and, in between, optional stop-color points.

The starting point is the point on the gradient line where the color starts. It is defined by the intersection between the gradient line and a perpendicular passing by the box corner which is in the same quadrant.

Similarly the ending point is the point on the gradient line where the final color is reached. It can also be defined by an intersection between the gradient line and a perpendicular line issued by the nearby corner, but is more easily defined as the symmetric of the starting point, when a point reflection with an origin confounded with the center of the box.

These somewhat complex definitions of the starting and ending points lead to an interesting property sometimes called magic corners : the nearby corners of the starting and ending points also have the same color as the respective starting and ending points.

More than just the starting-point and ending-point colors can be specified.  By defining additional color-stop points on the gradient line, the web developer can create a more customized transition between the starting and ending colors, or provide for a multi-color gradient.

The linear-gradient syntax does not allow for repeating gradients, but by using color-stop points, a similar effect can be achieved.  For true repeating gradients, use the repeating-linear-gradient CSS property.

When the position of a color-stop point is implicitly defined, it is placed half-way between the point that precedes it and the one that follows it.  The position can also be explicitly defined by using a <length> or a <percentage> CSS data type.

[Webplatform](http://docs.webplatform.org/wiki/css/functions/linear-gradient "Webplatform")
[Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient "Mozilla")
[Caniuse](http://caniuse.com/#feat=css-gradients "Caniuse")