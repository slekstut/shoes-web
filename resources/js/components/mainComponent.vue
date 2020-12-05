<template>
  <div>
    <navbar />
    <action-bar />
    <product-card />
    <footer-component />
  </div>
</template>

<script>
import navbar from "./navbar.vue";
import actionBar from "./actionBar.vue";
import productCard from "./productCards.vue";
import footerComponent from "./footerComponent.vue";

export default {
  components: {
    navbar,
    actionBar,
    productCard,
    footerComponent,
  },
};
</script>
