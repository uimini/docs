# Input

A basic component for getting the user input is a text field. Used for user input in a form field is needed.

## Inputs list

<section class="ui-section">
  <form style="max-width: 400px;">
    <div class="ui-input-group">
      <div class="ui-input">
        <label for="input-DqS1">Default input</label>
        <input
          id="input-DqS1"
          type="text"
          value=""
          placeholder="hello"
        />
      </div>
      <div class="ui-input">
        <label for="input-DqS2">Password input</label>
        <input
          id="input-DqS2"
          type="password"
          value=""
          placeholder="hello"
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
      <input id="input-DqS1" type="text" value="" placeholder="hello" />
    </div>
    <div class="ui-input">
      <label for="input-DqS2">Password input</label>
      <input id="input-DqS2" type="password" value="" placeholder="hello" />
    </div>
  </div>
</form>
```

## Required status

Required status for input

Way to make input required:

1. Add class `isRequired` to parent.

<section class="ui-section">
  <form style="max-width: 400px;">
    <div class="ui-input isRequired">
      <label for="input-XqX1">Required input</label>
      <input
        id="input-XqX1"
        type="text"
        value=""
        placeholder="hello"
      />
    </div>
  </form>
</section>

```html
<form style="max-width: 400px;">
  <div class="ui-input isRequired">
    <label for="input-XqX2">Required input</label>
    <input id="input-XqX2" type="text" value="" placeholder="hello" />
  </div>
</form>
```

## Disabled status

Disabled input.

Way to make disabled:

1. Use `disabled="disabled"` for `<input />`
2. Or add class `isRequired` to parent.

<section class="ui-section">
  <form style="max-width: 400px;">
    <div class="ui-input-group">
      <div class="ui-input">
        <label for="input-DaX1">Disabled input by default</label>
        <input
          id="input-DaX1"
          type="text"
          disabled="disabled"
          value=""
          placeholder="hello"
        />
      </div>
      <div class="ui-input isDisabled">
        <label for="input-DaX2">Disabled input by parent class</label>
        <input
          id="input-DaX2"
          type="text"
          value=""
          placeholder="hello"
        />
      </div>
      <div class="ui-input">
        <label for="input-DaX3">Disabled input without placeholder</label>
        <input
          id="input-DaX3"
          type="text"
          disabled="disabled"
          value=""
          placeholder=""
        />
      </div>
    </div>
  </form>
</section>

```html
<form style="max-width: 400px;">
  <div class="ui-input-group">
    <div class="ui-input">
      <label for="input-DaX1">Disabled input by default</label>
      <input id="input-DaX1" type="text" disabled="disabled" value="" placeholder="hello" />
    </div>
    <div class="ui-input isDisabled">
      <label for="input-DaX2">Disabled input by parent class</label>
      <input id="input-DaX2" type="text" value="" placeholder="hello" />
    </div>
    <div class="ui-input">
      <label for="input-DaX3">Disabled input without placeholder</label>
      <input id="input-DaX3" type="text" disabled="disabled" value="" placeholder="" />
    </div>
  </div>
</form>
```
