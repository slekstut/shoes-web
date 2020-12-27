<template>
  <div class="record-options">
    <h6 class="record-options-header">Choose your best fit</h6>
    <div class="selection-wrapper">
      <form>
        <div class="size">
          <label for="size-number">Size</label>
          <select name="size-number" id="size-number" v-model="selectedSize">
            <option value disabled>Please choose size</option>
            <option>
              {{ size }}
            </option>
          </select>
        </div>
        <div class="color">
          <label for="color-name">Color</label>
          <select name="color-name" id="color-name" v-model="selectedColor">
            <option disabled value>Please choose a color</option>
            <option>
              {{ color }}
            </option>
          </select>
        </div>
        <div class="quantity-selector">
          <label for="quantity"
            >Quantity <span>({{ units }} Available)</span>
          </label>
          <button id="decrease" @click.prevent="decrease">-</button>
          <input
            type="number"
            min="0"
            step="1"
            onkeypress="return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57"
            :value="quantity"
            v-on:keyup.delete="clear"
            @input="check"
          />
          <button id="increase" @click.prevent="increase">+</button><br />
          <span class="units-error" v-if="quantityError"
            >Only {{ units }} pieces available</span
          >
          <button class="add-btn" type="submit" @click.prevent="toShoppingCart">
            Add to Card &#183; € {{ totalCartPrice }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    units: {
      type: Number,
      required: false,
    },
    size: {
      type: Number,
      required: false,
    },
    color: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      selectedSize: "",
      selectedColor: "",
      quantity: 1,
      totalCartPrice: 0,
      quantityError: false,
    };
  },
  async created() {
    this.loading = true;
    await axios.get(`/api/records/${this.$route.params.id}`).then((response) => {
      this.record = response.data.data;
      this.loading = false;
      this.totalCartPrice = this.record.price;
    });
  },
  methods: {
    increase() {
      if (this.quantity === this.units) {
        return (this.quantityError = true);
      } else {
        this.quantity += 1;
        this.totalCartPrice = this.record.price * this.quantity;
        this.quantityError = false;
      }
    },
    decrease() {
      if (this.quantity === 1) return;
      this.quantity -= 1;
      this.totalCartPrice = this.record.price * this.quantity;
      this.quantityError = false;
    },
    clear() {
      this.quantity = 0;
      this.quantityError = false;
      this.totalCartPrice = this.record.price * this.quantity;
    },
    check(event) {
      const value = parseInt(event.target.value);
      this.quantityError = false;
      if (value <= this.units) {
        this.quantity = value;
        this.totalCartPrice = this.record.price * this.quantity;
      } else {
        this.quantityError = true;
      }
      this.$forceUpdate();
    },
    toShoppingCart() {
      console.log("to shopping cart");
    },
  },
};
</script>
