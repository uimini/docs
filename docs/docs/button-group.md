---
pageClass: ui-body
---

# Button Group

Group a series of buttons together on a single line or stack them in a vertical or horizontal column.

Recommended to use for:

- [Button](/docs/button.html)
- [Tag](/docs/tag.html)

## Default group

By default all button inside group will be in horizontal column.

<section class="ui-section">
  <div class="ui-button-group">
    <button class="ui-button isDefault">Default</button>
    <button class="ui-button isPrimary">Primary</button>
    <button class="ui-button isDangerous">Dangerous</button>
  </div>
</section>

```html
<div class="ui-button-group">
  <button class="ui-button isDefault">Default</button>
  <button class="ui-button isPrimary">Primary</button>
  <button class="ui-button isSuccess">Success</button>
  <button class="ui-button isWarning">Warning</button>
  <button class="ui-button isDangerous">Dangerous</button>
</div>
```

## Inline group

Default horizontal column with no space between buttons

<section class="ui-section">
  <div class="ui-button-group isInline">
    <button class="ui-button isPrimary">1</button>
    <button class="ui-button isPrimary">2</button>
    <button class="ui-button isPrimary">3</button>
    <button class="ui-button isPrimary">4</button>
    <button class="ui-button isPrimary">5</button>
  </div>
</section>

```html
<div class="ui-button-group isInline">
  <button class="ui-button isPrimary">1</button>
  <button class="ui-button isPrimary">2</button>
  <button class="ui-button isPrimary">3</button>
  <button class="ui-button isPrimary">4</button>
  <button class="ui-button isPrimary">5</button>
</div>
```

## Vertical group

Vertical group of buttons.

<section class="ui-section">
  <div class="ui-button-group isVertical">
    <button class="ui-button isPrimary">Top</button>
    <button class="ui-button isPrimary">Center</button>
    <button class="ui-button isPrimary">Bottom</button>
  </div>
</section>

```html
<div class="ui-button-group isVertical">
  <button class="ui-button isPrimary">Top</button>
  <button class="ui-button isPrimary">Center</button>
  <button class="ui-button isPrimary">Bottom</button>
</div>
```

## Vertical inline group

Vertical group of buttons with `isInline` class.

<section class="ui-section">
  <div class="ui-button-group isVertical isInline">
    <button class="ui-button isPrimary">Button</button>
    <button class="ui-button isPrimary">Button</button>
    <button class="ui-button isPrimary">Button</button>
    <button class="ui-button isPrimary">Button</button>
    <button class="ui-button isPrimary">Button</button>
  </div>
</section>

```html
<div class="ui-button-group isVertical isInline">
  <button class="ui-button isPrimary">Button</button>
  <button class="ui-button isPrimary">Button</button>
  <button class="ui-button isPrimary">Button</button>
  <button class="ui-button isPrimary">Button</button>
  <button class="ui-button isPrimary">Button</button>
</div>
```
