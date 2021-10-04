---
pageClass: ui-body
---

# Quick start

Get started with Uimini framework for building responsive sites and apps with source files and template starter page.

## Download source

Compile Uimini with your own asset pipeline by downloading our source Sass. For download last realize with all new feature [click here](https://github.com/uimini/uimini/archive/master.zip) or follow button bellow.

You can also choice specific realize if you need in [realizes page](https://github.com/uimini/uimini/realizes). All realizes are stable.

<a class="ui-button isPrimary" href="https://github.com/uimini/uimini/archive/master.zip">Download source</a>

Content:

```bash
uimini/
├── dist/
│   ├── uimini.css
│   ├── uimini-no-reset.css
├── src/
│   ├── scss-source
```

Using a package manager or need to download the source files? Head to the [downloads page](https://uimini.github.io/docs/docs/download.html).

## Starter template

Be sure you put main classes: `ui-html` and `ui-body` in your template to have your pages set up with the latest design and development standards.

Put it all together and your pages should look like this:

```html
<!DOCTYPE html>
<!-- Required class `ui-html` -->
<html class="ui-html" lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Uimini CSS -->
    <link href="./css/uimini.css" rel="stylesheet" />

    <title>Hello, world!</title>
  </head>
  <!-- Required class `ui-body` -->
  <body class="ui-html">
    <h1 class="ui-title-1">Hello, world!</h1>
  </body>
</html>
```

For next steps, visit the [Layout docs](https://uimini.github.io/docs/docs/layout.html#introduction) and check [optionals classes](https://uimini.github.io/docs/docs/layout.html#optionals-classes) to start laying out your site’s content and components.

<!-- todo: Or check our official examples [here](#)  -->
