<template>
  <div>
    <div class="dashboard-wrapper">
      <h1>Dashboard</h1>
      <h3>User name: {{ user.name }}</h3>
      <h3>email: {{ user.email }}</h3>
      <button @click.prevent="logout">Logout</button>
    </div>
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
