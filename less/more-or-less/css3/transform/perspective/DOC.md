The perspective CSS property determines the distance between the z=0 plane and the user in order to give to the 3D-positioned element some perspective. Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.

Part of the 3D-elements that are behind the user, i.e. that their z-axis coordinate is greater than the value of the perspective CSS property are not drawn.

The vanishing point is by default placed at the center of the element, but its position can be changed using the perspective-origin property.

Using this property with a value different than 0 and none creates a new stacking context.

[Webplatform](docs.webplatform.org/wiki/css/properties/perspective "Webplatform")
[Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective "Mozilla")
[Caniuse](http://caniuse.com/#feat=transforms3d "Caniuse")