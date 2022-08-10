---
pageClass: ui-body
---

# Input group

Group for inputs to control bar position (vertical / horizontal) and add margins

By default input-groups is vertical. For use horizontal add class `isHorizontal` to the parent.

Recommended to use for:

- [Checkbox](/docs/checkbox.html)
- [Input](/docs/input.html)
- [Radio](/docs/radio.html)
- [Select](/docs/select.html)
- [Switch](/docs/switch.html)

## Default group

Default example

<section class="ui-section">
  <form style="background: #f3f3f3; padding: 0.8rem;">
    <!-- group #1 -->
    <div class="ui-input-group" style="margin-bottom: 0.8rem;">
      <div class="ui-input isRequired">
        <label for="input-Iq1">Name</label>
        <input
          id="input-Iq1"
          type="text"
          value=""
          placeholder="Enter name here"
        />
      </div>
      <div class="ui-input isRequired">
        <label for="input-Iq2">Surname</label>
        <input
          id="input-Iq2"
          type="text"
          value=""
          placeholder="Enter surname here"
        />
      </div>
    </div>
    <!-- group #2 -->
    <div class="ui-input-group isHorizontal" style="margin-bottom: 0.8rem;">
      <div class="ui-input isRequired" style="max-width: 160px;">
        <label for="input-Lx1">Age</label>
        <input id="input-Lx1" type="number" value="32" placeholder="Enter age here" />
      </div>
      <div class="ui-input" style="width: 260px;">
        <label for="input-Lx2">Address</label>
        <input id="input-Lx2" type="text" value="" placeholder="Enter address here" />
      </div>
    </div>
    <!-- group #3 -->
    <div class="ui-input-group isHorizontal isRight" style="margin-bottom: 0.8rem;">
      <select class="ui-select" name="select-XAq1" style="width: 160px;">
        <option value="option0" selected disabled>Choice gender</option>
        <option value="orange">Male</option>
        <option value="mango">Female</option>
      </select>
      <select class="ui-select isLoading" name="select-XAq2" style="width: 260px;">
        <option value="test-loading" selected>Loading</option>
      </select>
    </div>
    <!-- group #4 -->
    <div class="ui-input-group" style="margin-bottom: 0.8rem;">
      <div class="ui-switch">
        <input type="checkbox" id="switch-DA1"/>
        <label for="switch-DA1">Subscribe to news</label>
      </div>
    </div>
    <!-- group #5 -->
    <!-- note: here's button group! -->
    <div class="ui-button-group isRight">
      <button class="ui-button isDefault">Cancel</button>
      <button class="ui-button isPrimary">Send</button>
    </div>
  </form>
</section>

Source code:

```html
<form style="background: #f3f3f3; padding: 0.8rem;">
  <!-- group #1 -->
  <div class="ui-input-group" style="margin-bottom: 0.8rem;">
    <div class="ui-input isRequired">
      <label for="input-Iq1">Name</label>
      <input id="input-Iq1" type="text" value="" placeholder="Enter name here" />
    </div>
    <div class="ui-input isRequired">
      <label for="input-Iq2">Surname</label>
      <input id="input-Iq2" type="text" value="" placeholder="Enter surname here" />
    </div>
  </div>
    <!-- group #2 -->
  <div class="ui-input-group isHorizontal" style="margin-bottom: 0.8rem;">
    <div class="ui-input isRequired" style="max-width: 160px;">
      <label for="input-Lx1">Age</label>
      <input id="input-Lx1" type="number" value="32" placeholder="Enter age here" />
    </div>
    <div class="ui-input" style="width: 260px;">
      <label for="input-Lx2">Address</label>
      <input id="input-Lx2" type="text" value="" placeholder="Enter address here" />
    </div>
  </div>
  <!-- group #3 -->
  <div class="ui-input-group isHorizontal isRight" style="margin-bottom: 0.8rem;">
    <select class="ui-select" name="select-XAq1" style="width: 160px;">
      <option value="option0" selected disabled>Choice gender</option>
      <option value="orange">Male</option>
      <option value="mango">Female</option>
    </select>
    <select class="ui-select isLoading" name="select-XAq2" style="width: 260px;">
      <option value="test-loading" selected>Loading</option>
    </select>
  </div>
  <!-- group #4 -->
  <div class="ui-input-group" style="margin-bottom: 0.8rem;">
    <div class="ui-switch">
      <input type="checkbox" id="switch-DA1"/>
      <label for="switch-DA1">Subscribe to news</label>
    </div>
  </div>
  <!-- group #5 -->
  <!-- note: here's button group! -->
  <div class="ui-button-group isRight">
    <button class="ui-button isDefault">Cancel</button>
    <button class="ui-button isPrimary">Send</button>
  </div>
</form>
```
