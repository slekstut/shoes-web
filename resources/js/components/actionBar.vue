<template>
  <div class="action-bar">
    <ul>
      <li>
        <button class="selection-button">
          <div class="selection-text">Sort</div>
        </button>
      </li>
      <li>
        <button class="selection-button">
          <div class="selection-text">Product Type</div>
        </button>
      </li>
      <li>
        <button class="selection-button">
          <div class="selection-text">Brand</div>
        </button>
      </li>
      <li>
        <button class="selection-button">
          <div class="selection-text">Colour</div>
        </button>
      </li>
      <li>
        <button class="selection-button">
          <div class="selection-text">Size</div>
        </button>
      </li>
      <li>
        <button class="selection-button">
          <div class="selection-text">Price Range</div>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  },
};
</script>
