---
title: 🎨 Colors
description: Set up default colors for your stylesheet
index: 1
---

There are three color choices to make.

1. Primary: Think of this as the main brand color.

1. Accent: This color is meant to compliment the primary color. Use in fewer places like indicating a secondary option. Be creative!

1. Secondary: This color is used for secondary texts or actions.

Note that these are just suggestions on how to think about these colors. You're free to use them in any manner you want. When you select a color, shades from `100-800` are generated for that color.

- [ ] TODO: Insert screenshot of shades

These shades are added as [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) which you can use in your project. This is how it looks for color selected for primary:

```css
:root {
  --primary-100: #ede0d4;
  --primary-200: #dbc1a9;
  --primary-300: #c8a37f;
  --primary-400: #b68454;
  --primary-500: #835121;
  --primary-600: #623d19;
  --primary-700: #422810;
  --primary-800: #211408;
}
```

You can set the color for `<div />` background in your project with:

```html
<div style="background-color: var(--primary-100);">
  Hello world, look at me!
</div>
```



### Light & Dark Mode Variants

You can override color selections for dark mode. See [Light and dark color schemes](/docs/color-schemes) for details.
