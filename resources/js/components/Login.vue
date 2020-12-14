<template>
  <div class="register-form">
    <form>
      <div>
        <h1>Login</h1>
      </div>
      <div class="floating-label">
        <input
          class="floating-input"
          placeholder=" "
          type="email"
          v-model="form.email"
          name="email"
        />
        <span class="error-msg" v-if="errors.email">{{ errors.email[0] }}</span>
        <label for="email">Your e-mail</label>
      </div>
      <div class="floating-label">
        <input
          class="floating-input"
          placeholder=" "
          type="password"
          v-model="form.password"
          name="password"
        />
        <span class="error-msg" v-if="errors.password">
          {{ errors.password[0] }}
        </span>
        <label for="password">Password</label>
      </div>
      <div>
        <button @click.prevent="loginUser" type="submit">Sign In</button>
      </div>
      <div class="links-under">
        <span
          ><router-link to="/register"><a href="#">Register</a></router-link></span
        >
        <span
          ><router-link to="/products"><a href="#">Return to Store</a></router-link></span
        >
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      errors: [],
    };
  },
  methods: {
    loginUser() {
      axios
        .post("/api/login", this.form)
        .then(() => {
          this.$router.push({ name: "dashboard" });
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
