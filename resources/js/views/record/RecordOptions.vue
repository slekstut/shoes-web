<template>
  <div class="record-options">
    <h6 class="record-options-header">Choose your best fit</h6>
    <div class="selection-wrapper">
      <form>
        <div class="size">
          <label for="size">Size</label>
          <select name="size" id="size">
            <option selected value>Please choose size</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
          </select>
        </div>
        <div class="color">
          <label for="color">Color</label>
          <select name="color" id="color">
            <option selected value>Please choose a color</option>
            <option value="">Red</option>
            <option value="">Green</option>
            <option value="">Black</option>
            <option value="">White</option>
            <option value="">Gray</option>
          </select>
        </div>
        <div class="quantity-selector">
          <label for="quantity">Quantity</label>
          <button id="decrease" @click.prevent="decrease">-</button>
          <input
            type="number"
            min="0"
            step="1"
            onkeypress="return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57"
            v-model="value"
          />
          <button id="increase" @click.prevent="increase">+</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
    };
  },
  methods: {
    increase() {
      this.value += 1;
    },
    decrease() {
      if (this.value === 0) return;
      this.value -= 1;
    },
  },
};
</script>
