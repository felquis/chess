The transition-delay CSS property specifies the amount of time to wait between a change being requested to a property that is to be transitioned and the start of the transition effect.

A value of 0s, or 0ms, indicates that the property will begin to animate its transition immediately when the value changes; positive values will delay the start of the transition effect for the corresponding number of seconds. Negative values cause the transition to begin immediately, but to cause the transition to seem to begin partway through the animation effect.

You may specify multiple delays; each delay will be applied to the corresponding property as specified by the transition-property property, which acts as a master list. If there are fewer delays specified than in the master list, missing values are set to the initial value (0s). If there are more delays, the list is simply truncated to the right size. In both case the CSS declaration stays valid.

[Webplatform](http://docs.webplatform.org/wiki/css/properties/transition-delay "Webplatform")
[Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay "Mozilla")
[Caniuse](http://caniuse.com/#feat=css-transition "Caniuse")