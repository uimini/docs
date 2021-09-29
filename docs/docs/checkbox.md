---
pageClass: ui-body
---

# Checkbox

Checkbox component for selecting some values from several options.

## Default checkbox

Default example.

<section class="ui-section">
  <form>
    <div class="ui-input-group">
      <div class="ui-checkbox">
        <input id="checkbox-Xq1" type="checkbox" checked />
        <label for="checkbox-Xq1">Checkbox 1</label>
      </div>
      <div class="ui-checkbox">
        <input id="checkbox-Xq2" type="checkbox" />
        <label for="checkbox-Xq2">Checkbox 2</label>
      </div>
    </div>
  </form>
</section>

```html
<form>
  <div class="ui-input-group">
    <div class="ui-checkbox">
      <input id="checkbox-Xq1" type="checkbox" checked />
      <label for="checkbox-Xq1">Checkbox 1</label>
    </div>
    <div class="ui-checkbox">
      <input id="checkbox-Xq2" type="checkbox" />
      <label for="checkbox-Xq2">Checkbox 2</label>
    </div>
  </div>
</form>
```

## Empty label

Empty label and horizontal style.

<section class="ui-section">
  <form>
    <div class="ui-input-group isHorizontal">
      <div class="ui-checkbox">
        <input id="checkbox-Xka1" type="checkbox" />
        <!-- empty label -->
        <label for="checkbox-Xka1"></label>
      </div>
      <div class="ui-checkbox">
        <input id="checkbox-Xka2" type="checkbox" checked />
        <!-- empty label -->
        <label for="checkbox-Xka2"></label>
      </div>
      <div class="ui-checkbox">
        <input id="checkbox-Xka3" type="checkbox" />
        <!-- empty label -->
        <label for="checkbox-Xka3"></label>
      </div>
      <div class="ui-checkbox">
        <input id="checkbox-Xka4" type="checkbox" />
        <!-- empty label -->
        <label for="checkbox-Xka4"></label>
      </div>
    </div>
  </form>
</section>

```html
<form>
  <div class="ui-input-group isHorizontal">
    <div class="ui-checkbox">
      <input id="checkbox-Xka1" type="checkbox" />
      <!-- empty label -->
      <label for="checkbox-Xka1"></label>
    </div>
    <div class="ui-checkbox">
      <input id="checkbox-Xka2" type="checkbox" checked />
      <!-- empty label -->
      <label for="checkbox-Xka2"></label>
    </div>
    <div class="ui-checkbox">
      <input id="checkbox-Xka3" type="checkbox" />
      <!-- empty label -->
      <label for="checkbox-Xka3"></label>
    </div>
    <div class="ui-checkbox">
      <input id="checkbox-Xka4" type="checkbox" />
      <!-- empty label -->
      <label for="checkbox-Xka4"></label>
    </div>
  </div>
</form>
```

## Disabled status

Disabled checkbox.

Ways to make checkbox disabled:

1. Use `disabled="disabled"` to `input`;
2. Or add class `isDisabled` to parent.

<section class="ui-section">
  <form>
    <div class="ui-input-group">
        <div class="ui-checkbox">
        <input id="checkbox-XaA1" type="checkbox" disabled="disabled" checked />
        <label for="checkbox-XaA1">Disabled and checked</label>
      </div>
      <div class="ui-checkbox">
        <input id="checkbox-XaA2" disabled="disabled" type="checkbox" />
        <label for="checkbox-XaA2">Disabled by default</label>
      </div>
      <div class="ui-checkbox isDisabled">
        <input id="checkbox-XaA3" type="checkbox" />
        <label for="checkbox-XaA3">Disabled by parent class isDisabled</label>
      </div>
    </div>
  </form>
</section>

```html
<form>
  <div class="ui-input-group">
    <div class="ui-checkbox">
      <input id="checkbox-XaA1" type="checkbox" disabled="disabled" checked />
      <label for="checkbox-XaA1">Disabled and checked</label>
    </div>
    <div class="ui-checkbox">
      <input id="checkbox-XaA2" disabled="disabled" type="checkbox" />
      <label for="checkbox-XaA2">Disabled by default</label>
    </div>
    <div class="ui-checkbox isDisabled">
      <input id="checkbox-XaA3" type="checkbox" />
      <label for="checkbox-XaA3">Disabled by parent class isDisabled</label>
    </div>
  </div>
</form>
```
