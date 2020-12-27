<template>
  <div id="top-bar">
    <div class="logo">
      <img src="/storage/e.shop-icon.png" alt="eshop-brand" />
    </div>
    <div class="search-bar">
      <label for="search"></label>
      <input
        id="search"
        type="text"
        placeholder="Search for items, brand and inspiration"
      />
      <button id="search-icon">
        <i class="fas fa-search fa-lg"></i>
      </button>
    </div>
    <ul>
      <li>
        <i class="fas fa-user fa-2x"></i>
        <ul class="my-account-dropdown">
          <router-link to="/login" tag="li"><a href="#">Sign In</a></router-link>
          <router-link to="/register" tag="li"><a href="#">Sign Up</a></router-link>
          <li v-if="(user = !null)" @click.prevent="logout"><a href="#">Log Out</a></li>
        </ul>
      </li>
      <li><i class="fas fa-heart fa-2x"></i></li>
      <li><i class="fas fa-shopping-bag fa-2x"></i></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  methods: {
    logout() {
      axios.post("/api/logout").then(() => {
        this.$router.push({ name: "home" });
      });
    },
  },
  mounted() {
    axios.get("/api/user").then((res) => {
      this.user = res.data;
    });
  },
};
</script>
