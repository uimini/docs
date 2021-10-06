---
pageClass: ui-body
---

# Colors

Minimal UI uses a specific set of palettes to specify colors.

For **colors works correct use class `ui-body` for parent** (best options use it in `<body>`) see more [in layout section](#).

## Main colors

Main colors for buttons; alerts etc

<section class="ui-section">
  <div class="color-list">
    <div class="color__item" style="background-color: var(--ui-primary-color);">
      <p>Primary</p>
      <p>#1890ff</p>
    </div>
    <div class="color__item" style="background-color: var(--ui-success-color);">
      <p>Success</p>
      <p>#52c41a</p>
    </div>
    <div class="color__item" style="background-color: var(--ui-warning-color);">
      <p>Warning</p>
      <p>#faad14</p>
    </div>
    <div class="color__item" style="background-color: var(--ui-danger-color);">
      <p>Danger</p>
      <p>#f5222d</p>
    </div>
  </div>
</section>

## Neutral Color

Neutral colors are for text, background and border colors. You can use different neutral colors to represent the hierarchical structure.

<section class="ui-section">
  <div class="color-list">
    <div class="color__item" style="background-color: var(--ui-g-950);">
      <p>Primary</p>
      <p>#0e0e0e</p>
    </div>
    <div class="color__item" style="background-color: var(--ui-g-900);">
      <p>Regular</p>
      <p>#303133</p>
    </div>
    <div class="color__item" style="background-color: var(--ui-g-500);">
      <p>Secondary</p>
      <p>#858585</p>
    </div>
    <div class="color__item" style="background-color: var(--ui-g-400);">
      <p>Placeholder</p>
      <p>#939394</p>
    </div>
    <div class="color__item" style="background-color: var(--ui-g-200); color: var(--ui-g-999);">
      <p>Base Border</p>
      <p>#cccccc</p>
    </div>
    <div class="color__item" style="background-color: var(--ui-g-100); color: var(--ui-g-999);">
      <p>Light Border</p>
      <p>#f5f5f5</p>
    </div>
  </div>
</section>

## Scss

Default theme palette from `/src/theme/default-theme.scss`.

```css
.ui-body {
  /* Main Colors */
  --ui-primary-color: #1890ff;
  --ui-success-color: #52c41a;
  --ui-warning-color: #faad14;
  --ui-mark-color: #ffe58f;
  --ui-danger-color: #f5222d;

  /* Neutral Colors */
  --ui-g-0: #ffffff;
  --ui-g-10: #fafafa;
  --ui-g-100: #f5f5f5;
  --ui-g-200: #cccccc;
  --ui-g-400: #939394;
  --ui-g-500: #858585;
  --ui-g-900: #303133;
  --ui-g-950: #0e0e0e;
  --ui-g-999: #000000;
}
```

## Feel free to change

Uimini builds by css vars that's make easy to change any colors.

How to change colors platte:

1. Change from `/src/theme/dark-theme.scss` (rebuild is required);
2. Or change it by own css file or tag (without any builds). For example:

```html
<html class="ui-html" lang="en">
  <head>
    <link rel="stylesheet" href="/css/uimini.css" />
    <style>
      .ui-body {
        --ui-primary-color: #f368e0 !important;
        --ui-success-color: #00d2d3 !important;
        --ui-danger-color: #5f27cd !important;
        --ui-g-200: #f7beef !important;
      }
    </style>
  </head>
  <body class="ui-body">
    <!-- ... -->
  </body>
</html>
```

### Palette result

Primary, danger, success, and borders colors will change to `#f368e0`; `#00d2d3`; `#5f27cd`; `#f7beef`.

<section class="ui-section">
  <div class="color-list">
    <div class="color__item" style="background-color: #f368e0;">
      <p>Primary</p>
      <p>#f368e0</p>
    </div>
    <div class="color__item" style="background-color: #00d2d3">
      <p>Success</p>
      <p>#00d2d3</p>
    </div>
    <div class="color__item" style="background-color: #5f27cd">
      <p>Danger</p>
      <p>#5f27cd</p>
    </div>
    <div class="color__item" style="background-color: #f7beef; color: black;">
      <p>Base Border</p>
      <p>#f7beef</p>
    </div>
  </div>
</section>

### View result

After palette was change view will looks like:

<section class="ui-section">
  <!-- #1 -->
  <div class="ui-button-group">
    <button class="ui-button isDefault" style="border-color: #f7beef;">Default</button>
    <button class="ui-button isPrimary" style="background-color: #f368e0;">Primary</button>
    <button class="ui-button isSuccess" style="background-color: #01a3a4;">Success</button>
    <button class="ui-button isDangerous" style="background-color: #5f27cd;">Dangerous</button>
    <button class="ui-button isText">Text</button>
    <button class="ui-button isLink" style="color: #f368e0;">Link</button>
  </div>
  <br />
  <!-- #2 -->
  <form style="max-width: 400px;">
    <div class="ui-input-group">
      <div class="ui-input">
        <label for="input-DqS1">Default input</label>
        <input
          id="input-DqS1"
          type="text"
          value=""
          placeholder="hello"
          style="border-color: #f7beef;"
        />
      </div>
    </div>
    <br />
    <!-- #3 -->
    <style>
      .ui-checkbox input[type='checkbox']:checked+label:before {
        background-color: #f368e0;
      }
    </style>
    <div class="ui-input-group">
      <div class="ui-checkbox">
        <input id="checkbox-Xq1" type="checkbox" checked />
        <label for="checkbox-Xq1">Checkbox 1</label>
      </div>
      <div class="ui-checkbox">
        <input id="checkbox-Xq2" type="checkbox" />
        <label for="checkbox-Xq2">Checkbox 2</label>
      </div>
    </div>
  </form>
</section>
