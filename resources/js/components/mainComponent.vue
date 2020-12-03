<template>
  <div>
    <action-bar />
    <product-card />
    <footer-component />
  </div>
</template>

<script>
import actionBar from "./actionBar.vue";
import productCard from "./productCards.vue";
import footerComponent from "./footerComponent.vue";

export default {
  components: {
    actionBar,
    productCard,
    footerComponent,
  },
};
</script>
