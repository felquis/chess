The @keyframes CSS at-rule lets authors control the intermediate steps in a CSS animation sequence by establishing keyframes (or waypoints) along the animation sequence that must be reached by certain points during the animation. This gives you more specific control over the intermediate steps of the animation sequence than you get when letting the browser handle everything automatically.

The @keyframes at-rule can be accessed via the CSS object model interface CSSKeyframesRule.

To use keyframes, you create a @keyframes rule with a name that is then used by the animation-name property to match an animation to its keyframe list. Each @keyframes rule contains a style list of keyframe selectors, each of which is comprised of a percentage along the animation at which the keyframe occurs as well as a block containing the style information for that keyframe.

You can list the keyframes in any order; they will be handled in the order in which their specified percentages indicate they should occur.

**Valid keyframe lists**

In order for a keyframe list to be valid, it must include rules for at least the times 0% (or from) and 100% (or to) (that is, the starting and ending states of the animation). If both of these time offsets aren't specified, the keyframe declaration is invalid and can't be used for animation.

If you include properties that can't be animated in your keyframe rules, they get ignored, but the supported properties will still be animated.

**Duplicate resolution**

If multiple keyframe sets exist for a given name, the last one encountered is used. @keyframes rules don't cascade, so animations never drive keyframes from more than one rule set.

If a given animation time offset is duplicated, the last keyframe in the @keyframes rule for that percentage is used for that frame. There's no cascading within a @keyframes rule if multiple keyframes specify the same percentage values.

[Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes "Mozilla")
[Caniuse](http://caniuse.com/#feat=css-animation "Caniuse")