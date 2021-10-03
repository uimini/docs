---
pageClass: ui-body
---

# Tag

Use tag for markup or categorizing.

## Basic

For articles, cards, etc.

<section class="ui-section">
  <div class="ui-button-group">
    <span class="ui-tag">vue</span>
    <span class="ui-tag">react</span>
    <span class="ui-tag">angular</span>
  </div>
</section>

```html
<div class="ui-button-group">
  <span class="ui-tag">vue</span>
  <span class="ui-tag">react</span>
  <span class="ui-tag">angular</span>
</div>
```

## Box

For categorizing, buttons, etc.

<section class="ui-section">
  <div class="ui-button-group">
    <span class="ui-tag isBox">vue</span>
    <span class="ui-tag isBox">react</span>
    <span class="ui-tag isBox">angular</span>
  </div>
</section>

```html
<div class="ui-button-group">
  <span class="ui-tag isBox">vue</span>
  <span class="ui-tag isBox">react</span>
  <span class="ui-tag isBox">angular</span>
</div>
```

## Custom:

Preset a series of colorful tag styles for use in different situations.

<section class="ui-section">
  <div class="ui-button-group">
    <span class="ui-tag isBox" style="background-color: #ccfbe5;">#ccfbe5</span>
    <span class="ui-tag isBox" style="background-color: #ffdd9a;">#ffdd9a</span>
    <span class="ui-tag isBox" style="background-color: #ffd3ce;">#ffd3ce</span>
    <span class="ui-tag isBox" style="background-color: #ded6ff;">#ded6ff</span>
  </div>
</section>

```html
<div class="ui-button-group">
  <span class="ui-tag isBox" style="background-color: #ccfbe5;">#ccfbe5</span>
  <span class="ui-tag isBox" style="background-color: #ffdd9a;">#ffdd9a</span>
  <span class="ui-tag isBox" style="background-color: #ffd3ce;">#ffd3ce</span>
  <span class="ui-tag isBox" style="background-color: #ded6ff;">#ded6ff</span>
</div>
```

## With icons:

Add `<svg>` or `<img>` inside tag.

<section class="ui-section">
  <div class="ui-button-group">
    <span class="ui-tag isBox" style="background-color: #55acee; color: white;">
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" style="margin-right: 6px;" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
      Twitter
    </span>
    <span class="ui-tag isBox" style="background-color: #cd201f; color: white;">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" style="margin-right: 6px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
      YouTube
    </span>
    <span class="ui-tag isBox" style="background-color: #3b5999; color: white;">
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" style="margin-right: 6px;" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
      Facebook
    </span>
  </div>
</section>

```html
<div class="ui-button-group">
  <span class="ui-tag isBox" style="background-color: #55acee; color: white;">
    <!-- <svg> or <img> is here -->
    Twitter
  </span>
  <span class="ui-tag isBox" style="background-color: #cd201f; color: white;">
    <!-- <svg> or <img> is here -->
    YouTube
  </span>
  <span class="ui-tag isBox" style="background-color: #3b5999; color: white;">
    <!-- <svg> or <img> is here -->
    Facebook
  </span>
</div>
```

## Active status

For display active tag.

### For default tag:

Active tag for default view combine with vertical `ui-button-group`.

<section class="ui-section">
  <div class="ui-button-group isVertical" style="margin-bottom: 0.8rem;">
    <span class="ui-tag">vue</span>
    <span class="ui-tag isActive">react (active)</span>
    <span class="ui-tag">angular</span>
  </div>
</section>

### For box tag:

Active tag for box view combine with vertical and inline `ui-button-group`.

Use `isActive` class for apply it.

<section class="ui-section">
  <div class="ui-button-group isVertical isInline">
    <span class="ui-tag isBox">vue</span>
    <span class="ui-tag isBox isActive">react</span>
    <span class="ui-tag isBox">angular</span>
  </div>
</section>

```html
<div class="ui-button-group isVertical" style="margin-bottom: 0.8rem;">
  <span class="ui-tag">vue</span>
  <span class="ui-tag isActive">react (active)</span>
  <span class="ui-tag">angular</span>
</div>
<div class="ui-button-group isVertical isInline">
  <span class="ui-tag isBox">vue</span>
  <span class="ui-tag isBox isActive">react</span>
  <span class="ui-tag isBox">angular</span>
</div>
```

## Disabled status

Disable status for tag. Also can combine with `isActive` tag.

Use `isDisabled` class for apply it.

<section class="ui-section">
  <div class="ui-button-group">
    <span class="ui-tag isBox isDisabled">Disabled</span>
    <span class="ui-tag isBox isDisabled">Disabled</span>
    <span class="ui-tag isBox isDisabled isActive">Disabled and active</span>
    <span class="ui-tag isBox">Default</span>
    <span class="ui-tag isBox">Default</span>
  </div>
</section>

```html
<div class="ui-button-group">
  <span class="ui-tag isBox isDisabled">Disabled</span>
  <span class="ui-tag isBox isDisabled">Disabled</span>
  <span class="ui-tag isBox isDisabled isActive">Disabled and active</span>
  <span class="ui-tag isBox">Default</span>
  <span class="ui-tag isBox">Default</span>
</div>
```
