<template>
  <div>
    <navbar />
    <top-bar-component />
    <action-bar />
    <product-card />
    <footer-component />
  </div>
</template>

<script>
import topBarComponent from "./topBarComponent.vue";
import navbar from "./navbar.vue";
import actionBar from "./actionBar.vue";
import productCard from "./productCards.vue";
import footerComponent from "./footerComponent.vue";

export default {
  components: {
    topBarComponent,
    navbar,
    actionBar,
    productCard,
    footerComponent,
  },
};
</script>
