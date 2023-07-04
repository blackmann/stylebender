---
title: Light and dark color schemes
description: Colors schemes supported by stylebender
index: 2
---

You can configure styles for both light and dark color schemes. But stylebender treats light theme as the base theme and only adds CSS style for dark theme when you change/set values in dark mode. For example, say you change the color for `h1` texts in the light mode to `blue` and font weight to `medium`. And then switch to dark mode and set the color to `red`, the dark mode retains the `medium` font weight. In code this looks like

```css
h1 {
    font-weight: medium;
    color: blue;
}

@media (prefers-color-scheme: dark) {
    h1 {
        color: red; /* only font-weight is set here */
    }
}
```

With this knowledge, it's unnecessary to set same values in both light and dark modes — just set in light mode.

## Exceptions

For some configurations, the values are only set in the base (light) theme. For example, when you change the font family for `h1` in dark mode, it sets the value on the base theme.

In other words, some configurations cannot be distinct between themes.

## Set up

You don't need to add any Javascript to your project to make dark/light scheme changes to work. Stylebender uses the `prefers-color-scheme` media query. So styles are matched with the system's color scheme
