---
pageClass: ui-body
---

# Quick start

Get started with Uimini framework for building responsive sites and apps with source files and template starter page.

## CDN

Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load our CSS:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uimini@2.0.7/dist/uimini.min.css" integrity="sha256-h8u2/mt0aoFKmyVNtIVA0u65MdOePGkIhenx9fW6n9E=" crossorigin="anonymous">
```

Using a package manager or need to download the source files? Head to the [downloads page](/docs/download.html).

## Starter template

**Be sure you put main classes: `ui-html` and `ui-body` in your template** to have your pages set up with the latest design and development standards.

Put it all together and your pages should looks like this:

```html
<!DOCTYPE html>
<html class="ui-html" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- cdn link -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uimini@2.0.7/dist/uimini.min.css" integrity="sha256-h8u2/mt0aoFKmyVNtIVA0u65MdOePGkIhenx9fW6n9E=" crossorigin="anonymous">

    <title>Hello world!</title>
  </head>

  <body class="ui-body">
    <div class="ui-wrapper">

      <!-- header -->
      <header>header</header>

      <div class="ui-content-wrapper">
        <!-- page content -->
        <section class="ui-section">
          <div class="ui-container">
            <h1 class="ui-title-1">Hello world!</h1>
          </div>
        </section>
      </div>

      <!-- footer -->
      <footer>footer</footer>
    </div>
  </body>
</html>
```

For next steps, visit the [Layout docs](https://uimini.github.io/docs/docs/layout.html#introduction) and check [optionals classes](https://uimini.github.io/docs/docs/layout.html#optionals-classes) to start laying out your site’s content and components.

<!-- todo: Or check our official examples [here](#)  -->
