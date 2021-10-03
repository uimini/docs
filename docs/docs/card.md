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
    <!-- default card center -->
    <div class="ui-card" style="width: 13rem; text-align: center;">
      <div class="ui-card-body">
        <span class="ui-title-3">Some title</span>
        <p>Some quick example text to build on the card title and make up
        the bulk of the card's content</p>
      </div>
    </div>
    <!-- default card right -->
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
