---
pageClass: ui-body
---

# Select

To select value from some options. Used for dropdown menu to display some choices.

## Default select

Default select example with default option.

<section class="ui-section">
  <form style="max-width: 400px;">
    <div class="ui-input-group">
      <select class="ui-select" name="select-XcA1">
        <option value="option0" selected disabled>Choose here</option>
        <option value="option1">option 1</option>
        <option value="option2">option 2</option>
        <option value="option3">option 3</option>
      </select>
      <select class="ui-select" name="select-XcA2">
        <option value="orange">Orange</option>
        <option value="apple" selected>Apple</option>
        <option value="mango">Mango</option>
      </select>
    </div>
  </form>
</section>

```html
<form style="max-width: 400px;">
  <div class="ui-input-group">
    <select class="ui-select" name="select-XcA1">
      <option value="option0" selected disabled>Choose here</option>
      <option value="option1">option 1</option>
      <option value="option2">option 2</option>
      <option value="option3">option 3</option>
    </select>
    <select class="ui-select" name="select-XcA2">
      <option value="orange">Orange</option>
      <option value="apple" selected>Apple</option>
      <option value="mango">Mango</option>
    </select>
  </div>
</form>
```

## Selected status

Select status. Use by parent class `isSelected`.

<section class="ui-section">
  <form style="max-width: 400px;">
    <div class="ui-input-group">
      <select class="ui-select" name="select-QcX1">
        <option value="option0" selected disabled>Default Select</option>
        <option value="option1">option 1</option>
        <option value="option2">option 2</option>
        <option value="option3">option 3</option>
      </select>
      <select class="ui-select isSelected" name="select-QcX2">
        <option value="option0" disabled>Select with isSelected status</option>
        <option value="orange">Orange</option>
        <option value="apple" selected>Apple</option>
        <option value="mango">Mango</option>
      </select>
    </div>
  </form>
</section>

```html
<form style="max-width: 400px;">
  <div class="ui-input-group">
    <select class="ui-select" name="select-QcX1">
      <option value="option0" selected disabled>Default Select</option>
      <option value="option1">option 1</option>
      <option value="option2">option 2</option>
      <option value="option3">option 3</option>
    </select>
    <select class="ui-select isSelected" name="select-QcX2">
      <option value="option0" disabled>Select with isSelected status</option>
      <option value="orange">Orange</option>
      <option value="apple" selected>Apple</option>
      <option value="mango">Mango</option>
    </select>
  </div>
</form>
```

## Loading status

Loading status to show progress. Use by parent class `isLoading`.

<section class="ui-section">
  <form style="max-width: 400px;">
    <div class="ui-input-group">
      <select class="ui-select" name="select-XxcQ1">
        <option value="option0" selected disabled>Default Select</option>
        <option value="option1">option 1</option>
        <option value="option2">option 2</option>
        <option value="option3">option 3</option>
      </select>
      <select class="ui-select isLoading" name="select-XxcQ2">
        <option value="option0" disabled>Select with isLoading class</option>
        <option value="orange">Orange</option>
        <option value="apple" selected>Loading</option>
        <option value="mango">Mango</option>
      </select>
    </div>
  </form>
</section>

```html
<form style="max-width: 400px;">
  <div class="ui-input-group">
    <select class="ui-select" name="select-XxcQ1">
      <option value="option0" selected disabled>Default Select</option>
      <option value="option1">option 1</option>
      <option value="option2">option 2</option>
      <option value="option3">option 3</option>
    </select>
    <select class="ui-select isLoading" name="select-XxcQ2">
      <option value="option0" disabled>Select with isLoading class</option>
      <option value="orange">Orange</option>
      <option value="apple" selected>Loading</option>
      <option value="mango">Mango</option>
    </select>
  </div>
</form>
```

## Disabled status

Disabled input.

Way to make input disabled:

1. Add `disabled="disabled"` to the `<select />`.
2. Add class `isDisabled` to the `<div class="ui-select">` (optional).

<section class="ui-section">
  <form style="max-width: 400px;">
    <div class="ui-input-group">
      <select class="ui-select" name="select-Slc111">
        <option value="option0" selected disabled>Default select</option>
        <option value="orange">Orange</option>
        <option value="apple" >Loading</option>
        <option value="mango">Mango</option>
      </select>
      <select class="ui-select isDisabled" disabled="disabled" name="select-Slc222">
        <option value="option0">Disabled select</option>
        <option value="orange">Orange</option>
        <option value="apple" >Loading</option>
        <option value="mango">Mango</option>
      </select>
    </div>
  </form>
</section>

```html
<form style="max-width: 400px;">
  <div class="ui-input-group">
    <select class="ui-select isDisabled" disabled="disabled" name="select-Slc222">
      <option value="option0">Disabled select</option>
      <option value="orange">Orange</option>
      <option value="apple" >Loading</option>
      <option value="mango">Mango</option>
    </select>
  </div>
</form>
```
