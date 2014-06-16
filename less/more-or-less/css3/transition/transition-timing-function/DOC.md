The CSS transition-timing-function property is used to describe how the intermediate values of the CSS properties being affected by a transition effect are calculated. This in essence lets you establish an acceleration curve, so that the speed of the transition can vary over its duration.

This acceleration curve is defined using one <timing-function> for each property to be transitioned.

You may specify multiple timing functions; each one will be applied to the corresponding property as specified by the transition-property property, which acts as a master list. If there are fewer functions specified than in the master list, missing values are set to the initial value (ease). If there are more timing functions, the list is simply truncated to the right size. In both case the CSS declaration stays valid.

[Webplatform](http://docs.webplatform.org/wiki/css/properties/transition-timing-function "Webplatform")
[Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function "Mozilla")
[Caniuse](http://caniuse.com/#feat=css-transition "Caniuse")