---
pageClass: ui-body
---

# Card

Simple rectangular container to display content related to a single subject.

## Default

Default card with different position

<section class="ui-section">
  <div class="row">
    <!-- default card -->
    <div class="ui-card" style="width: 16rem;">
      <div class="ui-card-body">
        <span class="ui-title-3">Some title</span>
        <p>Some quick example text to build on the card title and make up
        the bulk of the card's content</p>
        <div class="ui-button-group" style="margin-top: 1rem">
          <a href="#" class="ui-button isLink">Cancel</a>
          <a href="#" class="ui-button isPrimary">Confirm</a>
        </div>
      </div>
    </div>
  </div>
</section>

```html
<!-- default card -->
<div class="ui-card" style="width: 16rem;">
  <div class="ui-card-body">
    <span class="ui-title-3">Some title</span>
    <p>Some quick example text to build on the card title and make up
    the bulk of the card's content</p>
    <div class="ui-button-group" style="margin-top: 1rem">
      <a href="#" class="ui-button isLink">Cancel</a>
      <a href="#" class="ui-button isPrimary">Confirm</a>
    </div>
  </div>
</div>
```

## Text alignment

Quickly change the text alignment of any card by add styles for parent class `ui-card`:

- left `text-align: left` (by default)
- center - `text-align: center`
- right - `text-align: right`

<section class="ui-section">
  <div class="row">
    <!-- default card -->
    <div class="ui-card" style="width: 13rem;">
      <div class="ui-card-body">
        <span class="ui-title-3">Some title</span>
        <p>Some quick example text to build on the card title and make up
        the bulk of the card's content</p>
      </div>
    </div>
    <!-- center default card -->
    <div class="ui-card" style="width: 13rem; text-align: center;">
      <div class="ui-card-body">
        <span class="ui-title-3">Some title</span>
        <p>Some quick example text to build on the card title and make up
        the bulk of the card's content</p>
      </div>
    </div>
    <!-- right default card -->
    <div class="ui-card" style="width: 13rem; text-align: right;">
      <div class="ui-card-body">
        <span class="ui-title-3">Some title</span>
        <p>Some quick example text to build on the card title and make up
        the bulk of the card's content</p>
        </div>
      </div>
    </div>
  </div>
</section>

```html
<!-- center default card -->
<div class="ui-card" style="width: 13rem; text-align: center;">
  <div class="ui-card-body">
    <span class="ui-title-3">Some title</span>
    <p>Some quick example text to build on the card title and make up
    the bulk of the card's content</p>
  </div>
</div>
<!-- right default card -->
<div class="ui-card" style="width: 13rem; text-align: right;">
  <div class="ui-card-body">
    <span class="ui-title-3">Some title</span>
    <p>Some quick example text to build on the card title and make up
    the bulk of the card's content</p>
    </div>
  </div>
</div>
```

## Animated card

Add animation by `.isAnimated` class and background color for display animation.

<section class="ui-section">
  <div class="row">
    <!-- animated card -->
    <div class="ui-card isAnimated" style="width: 20rem; background-color: #ccfbe5;">
      <div class="ui-card-body">
        <span class="ui-title-3">Some title</span>
        <p>Some quick example text to build on the card title</p>
        <div class="ui-button-group" style="margin-top: 1rem">
          <a href="#" class="ui-button isLink">Go somewhere</a>
        </div>
      </div>
    </div>
    <!-- animated card -->
    <div class="ui-card isAnimated" style="width: 20rem; background-color: #ffdd9a;">
      <div class="ui-card-body">
        <span class="ui-title-3">Some title</span>
        <p>Some quick example text to build on the card title</p>
        <div class="ui-button-group" style="margin-top: 1rem">
          <a href="#" class="ui-button isLink">Go somewhere</a>
        </div>
      </div>
    </div>
    <!-- animated card -->
    <div class="ui-card isAnimated" style="width: 20rem; background-color: #ffd3ce;">
      <div class="ui-card-body">
        <span class="ui-title-3">Some title</span>
        <p>Some quick example text to build on the card title</p>
        <div class="ui-button-group" style="margin-top: 1rem">
          <a href="#" class="ui-button isLink">Go somewhere</a>
        </div>
      </div>
    </div>
    <!-- animated card -->
    <div class="ui-card isAnimated" style="width: 20rem; background-color: #ded6ff;">
      <div class="ui-card-body">
        <span class="ui-title-3">Some title</span>
        <p>Some quick example text to build on the card title</p>
        <div class="ui-button-group" style="margin-top: 1rem">
          <a href="#" class="ui-button isLink">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</section>

```html
<!-- animated card -->
<div
  class="ui-card isAnimated"
  style="width: 20rem; background-color: #ffd3ce;"
>
  <div class="ui-card-body">
    <span class="ui-title-3">Some title</span>
    <p>Some quick example text to build on the card title</p>
    <div class="ui-button-group" style="margin-top: 1rem">
      <a href="#" class="ui-button isLink">Go somewhere</a>
    </div>
  </div>
</div>
```

## Images

Places an image without any helpers classes

<section class="ui-section">
  <div class="row">
    <!-- image card -->
    <div class="ui-card" style="width: 20rem;">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <div class="ui-card-body">
        <span class="ui-title-3">Some title</span>
        <p>Some quick example text to build on the card title</p>
        <div class="ui-button-group" style="margin-top: 1rem">
          <a href="#" class="ui-button isLink">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</section>

```html
<!-- image card -->
<div class="ui-card" style="width: 20rem;">
  <img src="..." class="card-img-top" alt="..." />
  <div class="ui-card-body">
    <span class="ui-title-3">Some title</span>
    <p>Some quick example text to build on the card title</p>
    <div class="ui-button-group" style="margin-top: 1rem">
      <a href="#" class="ui-button isLink">Go somewhere</a>
    </div>
  </div>
</div>
```
