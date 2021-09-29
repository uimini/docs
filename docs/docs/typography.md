---
pageClass: ui-body
---

# Typography

The rem unit is relative to the font-size of the root element html. That means that we can define a single font size on the root element, and define all rem units to be a percentage of that.

For use it add class `ui-html` and `ui-body` for parents, see more in [font size](#font-size) and [font](#font) sections bellow.

## Font size

Use class `.ui-html` for apply main sizes.

For example: `<html class="ui-html"></html>`.

> This approach makes it easy to change or combine different frameworks in an application or a website.

```css
.ui-html {
  font-size: 18px; /* px only */
  line-height: 1.6;
}
```

## Font

Use class `.ui-body` for apply colors, smoothing fonts, etc.

For example: `<body class="ui-body"></body>`.

```css
.ui-body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol';
}
```

## Text and Link

Provides multiple types of text and link.

<section class="ui-section">
  <p class="ui-text">Uimini (default)</p>
  <p class="ui-text isSecondary">Uimini (secondary)</p>
  <p class="ui-text isPrimary">Uimini (primary)</p>
  <mark class="ui-text isMark">Uimini (mark)</mark>
  <p class="ui-text isSuccess">Uimini (success)</p>
  <p class="ui-text isDangerous">Uimini (dangerous)</p>
  <p class="ui-text isWarning">Uimini (warning)</p>
  <p class="ui-text isDisabled">Uimini (disabled)</p>
  <span class="ui-link">Uimini (link)</span>
</section>

```html
<p class="ui-text">Uimini (default)</p>
<p class="ui-text isSecondary">Uimini (secondary)</p>
<p class="ui-text isPrimary">Uimini (primary)</p>
<mark class="ui-text isMark">Uimini (mark)</mark>
<p class="ui-text isSuccess">Uimini (success)</p>
<p class="ui-text isDangerous">Uimini (dangerous)</p>
<p class="ui-text isWarning">Uimini (warning)</p>
<p class="ui-text isDisabled">Uimini (disabled)</p>
<a class="ui-link" href="#" target="_blank">Uimini (link)</a>
```

## Titles

Size of title depends of size in `ui-html`. By default it's scale from `18px`.

<section class="ui-section">
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
</section>

```html
<p class="ui-title-1">Heading 1</p>
<p class="ui-title-2">Heading 2</p>
<p class="ui-title-3">Heading 3</p>
<p class="ui-title-4">Heading 4</p>
<p class="ui-title-5">Heading 5</p>
```
