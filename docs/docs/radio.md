---
pageClass: ui-body
---

# Radio

Radio to select a single state from multiple options.

## Default radio

Default example.

<section class="ui-section">
  <form>
    <div class="ui-input-group">
      <div class="ui-radio">
        <input id="radio-aX1" type="radio" name="group111" />
        <label for="radio-aX1">Radio 1</label>
      </div>
      <div class="ui-radio">
        <input id="radio-aX2" type="radio" name="group111" checked />
        <label for="radio-aX2">Radio 2</label>
      </div>
      <div class="ui-radio">
        <input id="radio-aX3" type="radio" name="group111" />
        <label for="radio-aX3">Radio 3</label>
      </div>
    </div>
  </form>
</section>

```html
<form>
  <div class="ui-input-group">
    <div class="ui-radio">
      <input id="radio-aX1" type="radio" name="group111" />
      <label for="radio-aX1">Radio 1</label>
    </div>
    <div class="ui-radio">
      <input id="radio-aX2" type="radio" name="group111" checked />
      <label for="radio-aX2">Radio 2</label>
    </div>
    <div class="ui-radio">
      <input id="radio-aX3" type="radio" name="group111" />
      <label for="radio-aX3">Radio 3</label>
    </div>
  </div>
</form>
```

## Empty label

Empty label and horizontal style.

<section class="ui-section">
  <form>
    <div class="ui-input-group isHorizontal">
      <div class="ui-radio">
        <input id="radio-aQ1" type="radio" name="group222" checked/>
        <!-- empty label -->
        <label for="radio-aQ1"></label>
      </div>
      <div class="ui-radio">
        <input id="radio-aQ2" type="radio" name="group222" />
        <!-- empty label -->
        <label for="radio-aQ2"></label>
      </div>
      <div class="ui-radio">
        <input id="radio-aQ3" type="radio" name="group222" />
        <!-- empty label -->
        <label for="radio-aQ3"></label>
      </div>
      <div class="ui-radio">
        <input id="radio-aQ4" type="radio" name="group222" />
        <!-- empty label -->
        <label for="radio-aQ4"></label>
      </div>
    </div>
  </form>
</section>

```html
<form>
  <div class="ui-input-group isHorizontal">
    <div class="ui-radio">
      <input id="radio-aQ1" type="radio" name="group222" checked />
      <!-- empty label -->
      <label for="radio-aQ1"></label>
    </div>
    <div class="ui-radio">
      <input id="radio-aQ2" type="radio" name="group222" />
      <!-- empty label -->
      <label for="radio-aQ2"></label>
    </div>
  </div>
</form>
```

## Disabled status

Disabled radio.

Ways to make radio disabled:

1. Add `disabled="disabled"` to the `<input/>`;
   <!-- 2. Or add class `isDisabled` to parent. -->

<section class="ui-section">
  <form>
    <div class="ui-input-group">
      <div class="ui-radio">
        <input id="radio-diz111" type="radio" name="group333" />
        <label for="radio-diz111">Default</label>
      </div>
      <div class="ui-radio">
        <input id="radio-diz112" type="radio" name="group333" checked />
        <label for="radio-diz112">Default and checked</label>
      </div>
      <div class="ui-radio">
        <input id="radio-diz2" disabled="disabled" type="radio" name="group444" />
        <label for="radio-diz2">Disabled</label>
      </div>
      <div class="ui-radio isDisabled">
        <input id="radio-diz3" type="radio" disabled="disabled" name="group444" checked />
        <label for="radio-diz3">Disabled and checked</label>
      </div>
    </div>
  </form>
</section>

```html
<form>
  <div class="ui-input-group">
    <div class="ui-radio">
      <input id="radio-diz2" disabled="disabled" type="radio" name="group444" />
      <label for="radio-diz2">Disabled</label>
    </div>
    <div class="ui-radio isDisabled">
      <input id="radio-diz3" type="radio" disabled="disabled" name="group444" checked />
      <label for="radio-diz3">Disabled and checked</label>
    </div>
  </div>
</form>
```
