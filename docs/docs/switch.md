---
pageClass: ui-body
---

# Switch

Switching selector for represent the switching between two states or on-off state.

## Default Switch

Default example.

<section class="ui-section">
  <form>
    <div class="ui-input-group">
      <div class="ui-switch">
        <input type="checkbox" id="switch-Xf1" />
        <label for="switch-Xf1">Switch 1</label>
      </div>
      <div class="ui-switch">
        <input type="checkbox" id="switch-Xf2" checked />
        <label for="switch-Xf2">Switch 2</label>
      </div>
    </div>
  </form>
</section>

```html
<form>
  <div class="ui-input-group">
    <div class="ui-switch">
      <input type="checkbox" id="switch-Xf1" />
      <label for="switch-Xf1">Switch 1</label>
    </div>
    <div class="ui-switch">
      <input type="checkbox" id="switch-Xf2" checked />
      <label for="switch-Xf2">Switch 2</label>
    </div>
  </div>
</form>
```

## Empty switch

Empty label and horizontal style.

<section class="ui-section">
  <form>
    <div class="ui-input-group isHorizontal">
      <div class="ui-switch">
        <input type="checkbox" id="switch-Qx1" />
        <!-- empty -->
        <label for="switch-Qx1"></label>
      </div>
      <div class="ui-switch">
        <input type="checkbox" id="switch-Qx2" />
        <!-- empty -->
        <label for="switch-Qx2"></label>
      </div>
      <div class="ui-switch">
        <input type="checkbox" id="switch-Qx3" />
        <!-- empty -->
        <label for="switch-Qx3"></label>
      </div>
      <div class="ui-switch">
        <input type="checkbox" id="switch-Qx4" />
        <!-- empty -->
        <label for="switch-Qx4"></label>
      </div>
    </div>
  </form>
</section>

```html
<form>
  <div class="ui-input-group isHorizontal">
    <div class="ui-switch">
      <input type="checkbox" id="switch-Qx1" />
      <!-- empty -->
      <label for="switch-Qx1"></label>
    </div>
    <div class="ui-switch">
      <input type="checkbox" id="switch-Qx2" />
      <!-- empty -->
      <label for="switch-Qx2"></label>
    </div>
  </div>
</form>
```

## Disabled Status

Disabled switch.

Ways to switch radio disabled:

1. Use `disabled="disabled"` to `input`;
<!-- 2. Or add class `isDisabled` to parent. -->

<section class="ui-section">
  <form>
    <div class="ui-input-group">
      <div class="ui-switch">
        <input type="checkbox" id="switch-DA1" disabled="disabled" checked />
        <label for="switch-DA1">Disabled and checked</label>
      </div>
      <div class="ui-switch">
        <input type="checkbox" id="switch-DA2" disabled="disabled" />
        <label for="switch-DA2">Disabled by default</label>
      </div>
      <!-- <div class="ui-switch isDisabled">
        <input type="checkbox" id="switch-DA3" />
        <label for="switch-DA3">Disabled by parent class</label>
      </div> -->
    </div>
  </form>
</section>

```html
<form>
  <div class="ui-input-group">
    <div class="ui-switch">
      <input type="checkbox" id="switch-DA1" disabled="disabled" checked />
      <label for="switch-DA1">Disabled and checked</label>
    </div>
    <div class="ui-switch">
      <input type="checkbox" id="switch-DA2" disabled="disabled" />
      <label for="switch-DA2">Disabled by default</label>
    </div>
  </div>
</form>
```
