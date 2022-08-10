---
pageClass: ui-body
---

# Input

A basic component for getting the user input is a text field. Used for user input in a form field is needed.

## Inputs list

Default example.

<section class="ui-section">
  <form style="max-width: 400px;">
    <div class="ui-input-group">
      <div class="ui-input">
        <label for="input-DqS1">Default input</label>
        <input
          id="input-DqS1"
          type="text"
          value=""
          placeholder="Enter your name"
        />
      </div>
      <div class="ui-input">
        <label for="input-DqS2">Password input</label>
        <input
          id="input-DqS2"
          type="password"
          value=""
          placeholder="Enter your password"
        />
      </div>
    </div>
  </form>
</section>

```html
<form style="max-width: 400px;">
  <div class="ui-input-group">
    <div class="ui-input">
      <label for="input-DqS1">Default input</label>
      <input id="input-DqS1" type="text" value="" placeholder="Enter your name" />
    </div>
    <div class="ui-input">
      <label for="input-DqS2">Password input</label>
      <input id="input-DqS2" type="password" value="" placeholder="Enter your password" />
    </div>
  </div>
</form>
```

## Required status

Required status for input.

Use by add class `isRequired` to parent.

<section class="ui-section">
  <form style="max-width: 400px;">
    <div class="ui-input isRequired">
      <label for="input-XqX1">Required input</label>
      <input
        id="input-XqX1"
        required
        type="text"
        value=""
        placeholder="This is required input"
      />
    </div>
  </form>
</section>

```html
<form style="max-width: 400px;">
  <div class="ui-input isRequired">
    <label for="input-XqX2">Required input</label>
    <input id="input-XqX2" type="text" required value="" placeholder="hello" />
  </div>
</form>
```

## Disabled status

Disabled input.

Way to make input disabled:

1. Add `disabled="disabled"` to the `<input />`.
2. Add class `isDisabled` to the `<div class="ui-input">` (optional).

<section class="ui-section">
  <form style="max-width: 400px;">
    <div class="ui-input-group">
      <div class="ui-input">
        <label for="input-DaX111">Default input</label>
        <input
          id="input-DaX111"
          type="text"
          value=""
          placeholder=""
        />
      </div>
      <div class="ui-input">
        <label for="input-DaX112">Default input with placeholder</label>
        <input
          id="input-DaX112"
          type="text"
          value=""
          placeholder="Default input with placeholder"
        />
      </div>
      <div class="ui-input isDisabled">
        <label for="input-DaX2">Disabled input</label>
        <input
          id="input-DaX2"
          type="text"
          disabled="disabled"
          value=""
          placeholder=""
        />
      </div>
      <div class="ui-input isDisabled">
        <label for="input-DaX3">Disabled input with placeholder</label>
        <input
          id="input-DaX3"
          type="text"
          disabled="disabled"
          value=""
          placeholder="Disabled input with placeholder"
        />
      </div>
    </div>
  </form>
</section>

```html
<form style="max-width: 400px;">
  <div class="ui-input-group">
    <div class="ui-input isDisabled">
      <label for="input-DaX2">Disabled input</label>
      <input
        id="input-DaX2"
        type="text"
        disabled="disabled"
        value=""
        placeholder=""
      />
    </div>
    <div class="ui-input isDisabled">
      <label for="input-DaX3">Disabled input with placeholder</label>
      <input
        id="input-DaX3"
        type="text"
        disabled="disabled"
        value=""
        placeholder="Disabled input with placeholder"
      />
    </div>
  </div>
</form>
```
