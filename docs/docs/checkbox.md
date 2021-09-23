# Checkbox

## Default checkbox

<section class="ui-section">
  <div class="ui-input-group">
    <div class="ui-checkbox">
      <input id="checkbox1" type="checkbox" checked />
      <label for="checkbox1">Checkbox 1</label>
    </div>
    <div class="ui-checkbox">
      <input id="checkbox2" type="checkbox" />
      <label for="checkbox2">Checkbox 2</label>
    </div>
  </div>
</section>

```html
<div class="ui-input-group">
  <div class="ui-checkbox">
    <input id="checkbox1" type="checkbox" checked />
    <label for="checkbox1">Checkbox 1</label>
  </div>
  <div class="ui-checkbox">
    <input id="checkbox2" type="checkbox" />
    <label for="checkbox2">Checkbox 2</label>
  </div>
</div>
```

## Empty label

Empty label and horizontal style

<section class="ui-section">
  <div class="ui-input-group isHorizontal">
    <div class="ui-checkbox">
      <input id="checkbox-Xka1" type="checkbox" />
      <!-- empty label -->
      <label for="checkbox-Xka1"></label>
    </div>
    <div class="ui-checkbox">
      <input id="checkbox-Xka2" type="checkbox" checked />
      <label for="checkbox--Xka2"></label>
    </div>
    <div class="ui-checkbox">
      <input id="checkbox-Xka3" type="checkbox" />
      <label for="checkbox-Xka3"></label>
    </div>
    <div class="ui-checkbox">
      <input id="checkbox-Xka4" type="checkbox" />
      <label for="checkbox-Xka4"></label>
    </div>
  </div>
</section>

```html
<div class="ui-input-group isHorizontal">
  <div class="ui-checkbox">
    <input id="checkbox-Xka1" type="checkbox" />
    <!-- empty label -->
    <label for="checkbox-Xka1"></label>
  </div>
  <div class="ui-checkbox">
    <input id="checkbox-Xka2" type="checkbox" checked />
    <!-- empty label -->
    <label for="checkbox--Xka2"></label>
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
```

## Disabled status

<section class="ui-section">
  <div class="ui-input-group">
    <div class="ui-checkbox isDisabled">
      <input id="checkbox-diz2" type="checkbox" disabled="disabled" checked />
      <label for="checkbox-diz2">Disabled and checked</label>
    </div>
    <div class="ui-checkbox">
      <input id="checkbox-diz3" disabled="disabled" type="checkbox" />
      <label for="checkbox-diz3">Disabled by <code>disabled="disabled"</code></label>
    </div>
    <div class="ui-checkbox">
      <input id="checkbox-diz4" class="isDisabled" type="checkbox" />
      <label for="checkbox-diz4">Disabled by <b>input class</b> <code>isDisabled</code></label>
    </div>
    <div class="ui-checkbox isDisabled">
      <input id="checkbox-diz5" type="checkbox" />
      <label for="checkbox-diz5">Disabled by <b>parent class</b> <code>isDisabled</code></label>
    </div>
  </div>
</section>

```html
<div class="ui-input-group">
  <div class="ui-checkbox isDisabled">
    <input id="checkbox-diz2" type="checkbox" disabled="disabled" checked />
    <label for="checkbox-diz2">Disabled and checked</label>
  </div>
  <div class="ui-checkbox">
    <input id="checkbox-diz3" disabled="disabled" type="checkbox" />
    <label for="checkbox-diz3">Disabled by <code>disabled="disabled"</code></label>
  </div>
  <div class="ui-checkbox">
    <input id="checkbox-diz4" class="isDisabled" type="checkbox" />
    <label for="checkbox-diz4">Disabled by <b>input class</b> <code>isDisabled</code></label>
  </div>
  <div class="ui-checkbox isDisabled">
    <input id="checkbox-diz5" type="checkbox" />
    <label for="checkbox-diz5">Disabled by <b>parent class</b> <code>isDisabled</code></label>
  </div>
</div>
```
