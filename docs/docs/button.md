# Button

To trigger an operation.

Uimini provide 8 types of button:

- Default
- Secondary
- Primary
- Success
- Warning
- Dangerous
- Link
- Text

## Default buttons:

<section class="ui-section">
  <div class="ui-button-group">
    <button class="ui-button isDefault">Default</button>
    <button class="ui-button isPrimary">Primary</button>
    <button class="ui-button isSuccess">Success</button>
    <button class="ui-button isWarning">Warning</button>
    <button class="ui-button isDangerous">Dangerous</button>
  </div>
</section>

```html
<div class="ui-button-group">
  <button class="ui-button isDefault">Default</button>
  <button class="ui-button isPrimary">Primary</button>
  <button class="ui-button isSuccess">Success</button>
  <button class="ui-button isWarning">Warning</button>
  <button class="ui-button isDangerous">Dangerous</button>
</div>
```

## Outline buttons:

<section class="ui-section">
  <div class="ui-button-group">
    <button class="ui-button isOutline isDefault">Default</button>
    <button class="ui-button isOutline isPrimary">Primary</button>
    <button class="ui-button isOutline isSuccess">Success</button>
    <button class="ui-button isOutline isWarning">Warning</button>
    <button class="ui-button isOutline isDangerous">Dangerous</button>
  </div>
</section>

```html
<div class="ui-button-group">
  <button class="ui-button isDefault">Default</button>
  <button class="ui-button isPrimary">Primary</button>
  <button class="ui-button isSuccess">Success</button>
  <button class="ui-button isWarning">Warning</button>
  <button class="ui-button isDangerous">Dangerous</button>
</div>
```

## Icons:

<section class="ui-section">
  <div class="ui-button-group">
    todo
  </div>
</section>

```html
todo
```

## Helpers:

<section class="ui-section">
  <div class="ui-button-group">
    <button class="ui-button isDefault">Default button</button>
    <button class="ui-button isSecondary">Secondary button</button>
    <button class="ui-button isLink">Link button</button>
    <button class="ui-button isText">Text button</button>
  </div>
</section>

```html
<div class="ui-button-group">
  <button class="ui-button isDefault">Default button</button>
  <button class="ui-button isSecondary">Secondary button</button>
  <button class="ui-button isLink">Link button</button>
  <button class="ui-button isText">Text button</button>
</div>
```

## Statuses

Uimini provide 3 types of statuses:

- `isLoading`: loading status
- `isActive`: active status
- `isDisabled`: disabled status

### Loading Status:

<section class="ui-section">
  <div class="ui-button-group">
    <button class="ui-button isDefault isLoading">Loading</button>
    <button class="ui-button isSecondary isLoading">Loading</button>
    <button class="ui-button isPrimary isLoading">Loading</button>
    <!-- empty button with isLoading -->
    <button class="ui-button isPrimary isLoading"></button>
    <button class="ui-button isDangerous isLoading">Loading</button>
  </div>
</section>

```html
<section class="ui-section">
  <div class="ui-button-group">
    <button class="ui-button isDefault isLoading">Loading</button>
    <button class="ui-button isSecondary isLoading">Loading</button>
    <button class="ui-button isPrimary isLoading">Loading</button>
    <!-- empty button -->
    <button class="ui-button isPrimary isLoading"></button>
    <button class="ui-button isDangerous isLoading">Loading</button>
  </div>
</section>
```

### Active Status:

<section class="ui-section">
  <div class="ui-button-group">
    <button class="ui-button isPrimary">Primary</button>
    <button class="ui-button isPrimary isActive">Active primary</button>
    <button class="ui-button isPrimary">Primary</button>
  </div>
</section>

```html
<section class="ui-section">
  <div class="ui-button-group">
    <button class="ui-button isPrimary">Primary</button>
    <button class="ui-button isPrimary isActive">Active primary</button>
    <button class="ui-button isPrimary">Primary</button>
  </div>
</section>
```

### Disabled Status:

<section class="ui-section">
  <div class="ui-button-group">
    <button class="ui-button isPrimary">Primary</button>
    <button class="ui-button isPrimary isDisabled">Disabled primary</button>
    <button class="ui-button isDangerous">Danger</button>
    <button class="ui-button isDangerous isDisabled">Disabled danger</button>
  </div>
</section>

```html
<section class="ui-section">
  <div class="ui-button-group">
    <button class="ui-button isPrimary">Primary</button>
    <button class="ui-button isPrimary isDisabled">Disabled primary</button>
    <button class="ui-button isDangerous">Danger</button>
    <button class="ui-button isDangerous isDisabled">Disabled danger</button>
  </div>
</section>
```
