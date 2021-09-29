---
pageClass: ui-body
---

# Typography

The rem unit is relative to the font-size of the root element html . That means that we can define a single font size on the root element, and define all rem units to be a percentage of that.

## Font size:

Use class `.ui-html` for apply main sizes. For example: `<html class="ui-html"></html>`

> This approach makes it easy to change or combine different frameworks in an application or a website.

```css
.ui-html {
  font-size: 18px; /* px only */
  line-height: 1.6;
}
```

## Font:

Use class `.ui-body` for apply colors; smoothing fonts, etc. For example: `<body class="ui-body"></body>`

```css
.ui-body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol';
}
```

## Titles

Size of title depends of size in `ui-html`. By default it's scale from `18px`.

<div class="title-table">
  <div class="title__item">
    <p class="ui-title-1">Heading 1</p> <div><span>2.2rem</span><span>40px</span></div>
  </div>
  <div class="title__item">
    <p class="ui-title-2">Heading 2</p> <div><span>1.7rem</span><span>32px</span></div>
  </div>
  <div class="title__item">
    <p class="ui-title-3">Heading 3</p> <div><span>1.4rem</span><span>26px</span></div>
  </div>
  <div class="title__item">
    <p class="ui-title-4">Heading 4</p> <div><span>1.2rem</span><span>22px</span></div>
  </div>
  <div class="title__item">
    <p class="ui-title-5">Heading 5</p> <div><span>1rem</span><span>18px</span></div>
  </div>
</div>

```html
<p class="ui-title-1">Heading 1</p>
<p class="ui-title-2">Heading 2</p>
<p class="ui-title-3">Heading 3</p>
<p class="ui-title-4">Heading 4</p>
<p class="ui-title-5">Heading 5</p>
```
