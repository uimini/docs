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

## Box

For categorizing, buttons, etc.

<section class="ui-section">
  <div class="ui-button-group">
    <span class="ui-tag isBox">vue</span>
    <span class="ui-tag isBox">react</span>
    <span class="ui-tag isBox">angular</span>
  </div>
</section>

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
