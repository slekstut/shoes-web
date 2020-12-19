<template>
  <div class="wrapper">
    <Header />
    <Topbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Topbar from "./Topbar.vue";
import Footer from "./Footer.vue";
export default {
  components: {
    Header,
    Topbar,
    Footer,
  },
};
</script>
