The transition-duration CSS property specifies the number of seconds or milliseconds a transition animation should take to complete. By default, the value is 0s, meaning that no animation will occur.

You may specify multiple durations; each duration will be applied to the corresponding property as specified by the transition-property property, which acts as a master list. If there are fewer durations specified than in the master list, the user agent repeat the list of durations. If there are more durations, the list is simply truncated to the right size. In both case the CSS declaration stays valid.

[Webplatform](http://docs.webplatform.org/wiki/css/properties/transition-duration "Webplatform")
[Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration "Mozilla")
[Caniuse](http://caniuse.com/#feat=css-transition "Caniuse")