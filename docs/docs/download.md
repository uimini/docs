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

Not available yet. We need to have [100+ start on github](https://github.com/uimini/uimini) for start to use CDN. Help us to make it :)

## Download source

Compile Uimini with your own asset pipeline by downloading our source Sass. For download last realize with all new feature [click here](https://github.com/uimini/uimini/archive/master.zip) or follow button bellow.

You can also choice specific realize if you need in [realizes page](https://github.com/uimini/uimini/realizes). All realizes are stable.

<a class="ui-button isPrimary" href="https://github.com/uimini/uimini/archive/master.zip">Download source</a>

## Package managers

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

// Or import specific file:
import 'uimini/dist/uimini.css'
import 'uimini/dist/uimini_no_reset.css' // Not recommended. Cause inconsistencies across browsers / devices will works incorrect

// Or imports scss core files:
import 'uimini/scr/scss/utils/reset.scss' // reset
import 'uimini/scr/scss/uimini.scss' // core of uimini
```

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

## Uimini v1

Since 2020 uimini v1 is not supported. But if you still want to use first version follow one of this options:

- Install **Uimini v1** in your via yarn or npm:

  ```bash
  # with npm
  npm install uimini@1.1.3

  # with yarn
  yarn add uimini@1.1.3
  ```

- Or install by download **last realize of uimini v1**:

  1. Uimini v1 with webpack [link to realize is here](https://github.com/uimini/uimini/releases/tag/v1) or just [download directly zip file](https://github.com/uimini/uimini/archive/refs/tags/v1.zip)
  2. Uimini v1 with gulp [link to realize is here](https://github.com/uimini/uimini/releases/tag/1.1.3) or just [download directly zip file](https://github.com/uimini/uimini/archive/refs/tags/1.1.3.zip)

- Or **build uimini v1 from source** for this option follow [v1 branch in github](https://github.com/uimini/uimini/tree/v1-stable)

Additional links for uimini v1:

- Documentation page [is here](https://uimini.github.io/docs/v1/index.html);
- Get started link [is here](https://uimini.github.io/docs/v1/get-started);
- Github branch of stable v1 [is here](https://github.com/uimini/uimini/tree/v1-stable).
