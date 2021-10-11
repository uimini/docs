---
pageClass: ui-body
---

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
  <button class="ui-button isOutline isDefault">Default</button>
  <button class="ui-button isOutline isPrimary">Primary</button>
  <button class="ui-button isOutline isSuccess">Success</button>
  <button class="ui-button isOutline isWarning">Warning</button>
  <button class="ui-button isOutline isDangerous">Dangerous</button>
</div>
```

## With icons:

<section class="ui-section">
  <div class="ui-button-group">
    <!-- only icon (without text) -->
    <button class="ui-button isPrimary">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
    </button>
    <!-- button icon with text -->
    <button class="ui-button isPrimary">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" style="margin-right: 6px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
      Download
    </button>
    <!-- head by arrow -->
    <button class="ui-button isPrimary">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    </button>
    <!-- head by arrow with text -->
    <button class="ui-button isPrimary">
      Head to somewhere
      <svg xmlns="http://www.w3.org/2000/svg" style="margin-left: 6px;" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    </button>
    <!-- button icon with text -->
    <button class="ui-button isDangerous">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" style="margin-right: 6px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
      Remove
    </button>
    <!-- button icon with text -->
    <button class="ui-button isLink">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" style="margin-right: 6px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
      Link to send
    </button>
  </div>
</section>

```html
<div class="ui-button-group">
  <button class="ui-button isPrimary">
    <!-- <svg> or <img> is here -->
  </button>
  <button class="ui-button isPrimary">
    <!-- <svg> or <img> is here -->
    Download
  </button>
</div>
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
