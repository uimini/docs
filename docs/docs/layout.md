# Layout

**Layouts is important** for uimini works correct.

## Introduction:

Required classes and main layouts.

Uimini provided classes for correct work with others frameworks.

> This approach makes it easy to change or combine different frameworks in an application or a website.

## Html class

First **required class** is `ui-html`.

Using for control main sizes, fonts and layout.

Example:

```html
<html class="ui-html" lang="en">
  <!-- content -->
</html>
```

## Body class

Second **required class** is `ui-body`.

Using for create colors and themes.

Example:

```html
<body class="ui-body">
  <!-- content -->
</body>
```

## Optionals classes

Other optionals classes for make view of the page better:

- `ui-wrapper` - use for main content for make heder in the top and footer on the bottom;
- `ui-content-wrapper` - use for make content on the center between header and footer.

## Default layout

Default layout example.

<section class="ui-section">
  <div style="text-align: center; height: 80px; line-height: 80px; background-color: #b3c0d1;"><span>Header</span></div>
  <div style="text-align: center; height: 160px; line-height: 160px; background-color: #e9eef3;"><span>Content</span></div>
  <div style="text-align: center; height: 80px; line-height: 80px; background-color: #b3c0d1;"><span>Footer</span></div>
</section>

```html
<!DOCTYPE html>

<!-- class="ui-html" is required! -->
<html class="ui-html" lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Uimini title</title>
  </head>
  <!-- class="ui-body" is required! -->
  <body class="ui-body">
    <div class="ui-wrapper">
      <header><!-- ... --></header>

      <div class="ui-content-wrapper">
        <!-- content is here -->
      </div>

      <footer><!-- ... --></footer>
    </div>
  </body>
</html>
```

## Section

Sections for make space between blocks on the page. Use: `ui-section` for `div` or `section`

<!-- todo rm -->
<br />

<section class="ui-section" style="text-align: center; background-color: #e9eef3;">
  <div class="ui-container">Example section #1</div>
</section>

<br />

<section class="ui-section" style="text-align: center; background-color: #e9eef3;">
  <div class="ui-container">Example section #2</div>
</section>

```html
<section class="ui-section">
  <div class="ui-container">Example section #1</div>
</section>

<section class="ui-section">
  <div class="ui-container">Example section #2</div>
</section>
```

## Container

Containers are a fundamental building block. For contain, pad, and align your content within a given viewport or device.

<section class="ui-section" style="text-align: center; background-color: #e9eef3;">
  <div class="ui-container" style="text-align: center; background-color: #b3c0d1; width: 96%;">
    <p>container view</p>
  </div>
</section>

```html
<div class="ui-container">
  <p>container view</p>
</div>
```
