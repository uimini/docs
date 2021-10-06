---
pageClass: ui-body isDark
---

# Dark mode

Dark mode is a theme where all UI elements are darkened. Recommended when you are in a dark environment as it prevents eye strain.

## Demo

Check demo with dark-mode switcher [https://github.com/uimini/example-dark-mode](https://github.com/uimini/example-dark-mode)

## Usage

For change colors use helper class: `isDark` with `ui-body`.

For example:

```html
<!-- Required class `ui-body` -->
<body class="ui-body isDark">
  <div class="ui-switch">
    <input type="checkbox" id="switch-dark-mode" checked />
    <label for="switch-dark-mode">Switch dark-mode</label>
  </div>
</body>
```

And pure JavaScript for handle switcher:

```js
var theme_toggler = document.querySelector('#switch-dark-mode')

theme_toggler.addEventListener('click', function() {
  document.body.classList.toggle('isDark')
})
```

Check [this demo](https://github.com/uimini/example-dark-mode) to show all components with dark-mode.

## Main colors

Main colors for buttons; alerts etc

<section class="ui-section">
  <div class="color-list">
    <div class="color__item" style="background-color: var(--ui-primary-color);">
      <p>Primary</p>
      <p>#1469b9</p>
    </div>
    <div class="color__item" style="background-color: var(--ui-success-color);">
      <p>Success</p>
      <p>#419c13</p>
    </div>
    <div class="color__item" style="background-color: var(--ui-warning-color);">
      <p>Warning</p>
      <p>#af7b12</p>
    </div>
    <div class="color__item" style="background-color: var(--ui-danger-color);">
      <p>Danger</p>
      <p>#b21820</p>
    </div>
  </div>
</section>

## Neutral Color

Neutral colors are for text, background and border colors. You can use different neutral colors to represent the hierarchical structure.

<section class="ui-section">
  <div class="color-list">
    <div class="color__item" style="background-color: var(--ui-g-950); color: var(--ui-g-0);">
      <p>Primary</p>
      <p>#efefef</p>
    </div>
    <div class="color__item" style="background-color: var(--ui-g-900); color: var(--ui-g-0);">
      <p>Regular</p>
      <p>#c6c6c6</p>
    </div>
    <div class="color__item" style="background-color: var(--ui-g-500);">
      <p>Secondary</p>
      <p>#7a7979</p>
    </div>
    <div class="color__item" style="background-color: var(--ui-g-400);">
      <p>Placeholder</p>
      <p>#5d5d5d</p>
    </div>
    <div class="color__item" style="background-color: var(--ui-g-200);">
      <p>Base Border</p>
      <p>#484848</p>
    </div>
    <div class="color__item" style="background-color: var(--ui-g-100);">
      <p>Light Border</p>
      <p>#363636</p>
    </div>
  </div>
</section>

## Scss

Default theme palette from `/src/theme/dark-theme.scss`.

```css
.ui-body {
  &.isDark {
    /* Main Colors */
    --ui-primary-color: #1469b9;
    --ui-success-color: #419c13;
    --ui-warning-color: #af7b12;
    --ui-mark-color: #ffe58f;
    --ui-danger-color: #b21820;

    --ui-inverse-color: white;

    /* Neutral Colors */
    --ui-g-0: #141414;
    --ui-g-10: #1e2844;
    --ui-g-100: #363636;
    --ui-g-200: #484848;
    --ui-g-400: #5d5d5d;
    --ui-g-500: #7a7979;
    --ui-g-900: #c6c6c6;
    --ui-g-950: #efefef;
    --ui-g-999: #fdfdfd;
  }
}
```
