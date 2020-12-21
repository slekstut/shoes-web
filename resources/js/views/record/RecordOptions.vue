<template>
  <div class="record-options">
    <h6 class="record-options-header">Choose your best fit</h6>
    <div class="selection-wrapper">
      <form>
        <div class="size">
          <label for="size-number">Size</label>
          <select name="size-number" id="size-number" v-model="selectedSize">
            <option value disabled>Please choose size</option>
            <option
              v-for="(size, index) in sizeSelection"
              :key="index"
              :value="size.value"
            >
              {{ size.text }}
            </option>
          </select>
        </div>
        <div class="color">
          <label for="color-name">Color</label>
          <select name="color-name" id="color-name" v-model="selectedColor">
            <option disabled value>Please choose a color</option>
            <option
              v-for="(color, index) in colorSelection"
              :key="index"
              :value="color.value"
            >
              {{ color.text }}
            </option>
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
          <button id="increase" @click.prevent="increase">+</button><br />
          <button class="add-btn" @click="check">Add to Card &#183; &#36; 244.34</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: { price: Number, size: Number, color: String },
  data() {
    return {
      value: null,
      sizeSelection: [
        { text: "6", value: "six" },
        { text: "7", value: "seven" },
        { text: "8", value: "eight" },
        { text: "9", value: "nine" },
        { text: "10", value: "ten" },
        { text: "11", value: "eleven" },
        { text: "12", value: "twelve" },
      ],
      colorSelection: [
        { text: "Red", value: "R" },
        { text: "Green", value: "G" },
        { text: "Black", value: "B" },
        { text: "White", value: "W" },
      ],
      selectedSize: "",
      selectedColor: "",
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
    check() {
      //
      alert("Alert from check method.");
    },
  },
};
</script>
