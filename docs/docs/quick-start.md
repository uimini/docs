---
pageClass: ui-body
---

# Quick start

Get started with Uimini framework for building responsive sites and apps with source files and template starter page.

<div class="support">

Everybody knows that developing runs on coffee! <br/>
Thanks for your support!

<div class="support-links">

[![Buy me a coffee][buymeacoffee-shield]][buymeacoffee]

<a href="https://www.producthunt.com/posts/uimini?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-uimini" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=334978&theme=light" alt="Uimini - Uimini&#0032;modern&#0032;and&#0032;lightweight&#0032;CSS&#0032;framework | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

</div>
</div>

## CDN

Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load our CSS:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/uimini@2.0.8/dist/uimini.min.css"
  integrity="sha256-h8u2/mt0aoFKmyVNtIVA0u65MdOePGkIhenx9fW6n9E="
  crossorigin="anonymous"
/>
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
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/uimini@2.0.8/dist/uimini.min.css"
      integrity="sha256-h8u2/mt0aoFKmyVNtIVA0u65MdOePGkIhenx9fW6n9E="
      crossorigin="anonymous"
    />

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

[buymeacoffee-shield]: https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg
[buymeacoffee]: https://www.buymeacoffee.com/vedegis
