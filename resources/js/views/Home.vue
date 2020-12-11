<template>
  <div>
    <div class="homepage-hero">
      <div class="homepage-hero-image"></div>
      <div class="text-left">
        <h1>New Collection</h1>
        <a href="#">Shop now</a>
      </div>
      <section id="section10" class="demo">
        <a href="#"><span></span></a>
      </section>
    </div>
    <Featured />
  </div>
</template>

<script>
import Featured from "../components/Featured.vue";

export default {
  components: {
    Featured,
  },
};
</script>
