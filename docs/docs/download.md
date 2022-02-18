---
pageClass: ui-body
---

# Download

Learn where to download and how to compile the Uimini sources.

Here's ways how you can download uimini:

<!-- ## Compiled CSS

Download ready-to-use compiled css for uimini to easily drop into your project

This option doesn’t include documentation, source files, or any optional JavaScript dependencies like Popper.

<a class="ui-button isPrimary" href="#">Download source</a> -->

## CDN

Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load our CSS:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uimini@2.0.7/dist/uimini.min.css" integrity="sha256-h8u2/mt0aoFKmyVNtIVA0u65MdOePGkIhenx9fW6n9E=" crossorigin="anonymous">
```

## Or compiled CSS

Download ready-to-use compiled code for Uimini to easily drop into your project

This doesn’t include configs, scss source file.

<DownloadLink />

Content:

```bash
uimini/
├── uimini.css                # default uimini
├── uimini.min.css            # same but .min version
├── uimini_no_reset.css       # uimini without rest (read 'Reset' section bellow for more info)
├── uimini_no_reset.min.css   # same but .min version

# optional build with support old browsers like ie10
# (read 'Legacy browser support' section bellow for more info)
├── ie-10/
│   ├── uimini.css
│   ├── uimini.min.css
│   ├── uimini_no_reset.css
│   ├── uimini_no_reset.min.css
```

## Or download source

Compile Uimini with your own asset pipeline by downloading our source Sass. For download last realize with all new feature [click here](https://github.com/uimini/uimini/archive/master.zip) or follow button bellow.

You can also choice specific realize if you need in [realizes page](https://github.com/uimini/uimini/realizes). All realizes are stable.

<a href="https://github.com/uimini/uimini/archive/master.zip">
  <div class="ui-button isPrimary">
    Download source
  </div>
</a>

Content:

```bash
uimini/
├── dist/
│   ├── uimini.css
│   ├── ...
├── src/
│   ├── builds/              # build options
│   ├── components/          # buttons, inputs, etc
│   ├── theme/               # theme config
│   ├── typography/          # lists, title, etc
│   ├── utils/               # vars, mixains, etc
│   ├── uimini-core.scss     # core import
│   ├── uimini-body.scss     # body styles

```

## Or use package managers

Pull in Uimini source files into nearly any project with some of the most popular package managers like webpack or gulp.

### NPM

Install Uimini in your Node.js with [the npm package](https://www.npmjs.com/package/uimini):

```bash
npm install uimini
```

### Yarn

Install Uimini in your Node.js with [the yarn package](https://classic.yarnpkg.com/en/package/uimini):

```bash
yarn add uimini
```

### Usage Uimini

After installation via npm or yarn pull in Uimini source or dist files into nearly any project with `imports` or `required` (depend of package manager).

**With webpack**: make import of uimini from `node_modules` inside main entry of webpack (usually it's `app.js` or `index.js`):

```js
// Default import uimini:
// will be same as `uimini/dist/uimini.css`
import 'uimini'

// Or import specific css file:
import 'uimini/dist/uimini.css'
import 'uimini/dist/uimini_no_reset.css' // Not recommended. Cause inconsistencies across browsers / devices will works incorrect

// Or imports specific scss files:
import 'uimini/src/utils/reset.scss' // reset
import 'uimini/src/uimini-core.scss' // core of uimini

// Or you can also import only components that you need (for less build size).
// For example:
import 'uimini/src/theme/default-theme.scss' // theme is required
import 'uimini/src/components/button.scss'
```

**Remember to use helpers classes: `.ui-html` and `.ui-body`** for better responsive and smooth scroll. Visit the [Layout docs](https://uimini.github.io/docs/docs/layout.html#introduction) for know more.

## Build From Source

Optionally, you can build Uimini from [source on Github](https://github.com/uimini/uimini). To do this, you'll need to have [Node.js and npm installed](https://nodejs.org/en/download/).

Build From Source with npm:

```bash
git clone https://github.com/uimini/uimini.git
cd uimini
npm install
npm start
```

Build From Source with yarn:

```bash
git clone https://github.com/uimini/uimini.git
cd uimini
yarn && yarn start
```

## Reset (reboot)

For improved cross-browser rendering, we use Reset by default to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.

Inside css folder two types of uimini:

1. `uimini.css` - reset included (highly recommend to use)
2. `uimini_no_reset.css` - Without reset styles (**Be careful cause with `no_reset` option inconsistencies across browsers and devices will works incorrect**)

## Legacy browser support

Сss in `uimini-ie10` folder builded with: `"browserslist": "last 3 versions",`

Build size with extra browser support increased by ~22% (from 19kb to 23kb)

### Extra browsers supported:

- Ie 10 - 11;
- Firefox 2-21, 22-27 (2006-2012);
- Chrome 4-20 (2010-2012);
- Safari iOS 3.2-6.1 (2010-2013);
- Android browser 2.1-4.3 (2009-2013).

### When to use extra browsers support

For e-commerce, state projects etc.

Summing up: for e-commerce which using jquery and polyfills it's a good solution to use uimini with extra browsers support.

### When NOT TO USE extra browsers support

For example:

1. If you gonna use Vue.js 3 which not supported ie 11 then you don't need extra browser support.
2. If you gonna use React.js + Mobx 4+ (also not supported ie 11) then you don't need extra browser support.
3. When you using es6+ feature without bable and extra polyfills. Cause that's means you don't support old browsers then you don't need extra browser support.

Summing up: if you using modern JavaScript (or modern css like grids) then you don't need uimini with extra browser support.

## Uimini v1

**Since 2020 uimini v1 is not supported**. But if you still want to use first version follow one of this options:

- Install **Uimini v1** in your project via yarn or npm:

  ```bash
  # with npm
  npm install uimini@1.1.3

  # with yarn
  yarn add uimini@1.1.3
  ```

- Or install by download **last realize of uimini v1**:

  - Uimini v1 with webpack [link to realize is here](https://github.com/uimini/uimini/releases/tag/v1) or just [download directly zip file](https://github.com/uimini/uimini/archive/refs/tags/v1.zip)
  - Uimini v1 with gulp [link to realize is here](https://github.com/uimini/uimini/releases/tag/1.1.3) or just [download directly zip file](https://github.com/uimini/uimini/archive/refs/tags/1.1.3.zip)

- Or **build uimini v1 from source** for this option follow [v1 branch in github](https://github.com/uimini/uimini/tree/v1-stable)

Additional links for uimini v1:

- Documentation page [is here](https://uimini.github.io/docs/v1/index.html);
- Get started link [is here](https://uimini.github.io/docs/v1/get-started);
- Github branch of Uimini v1 [is here](https://github.com/uimini/uimini/tree/v1-stable).
