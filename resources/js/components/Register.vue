<template>
  <div class="register-form">
    <form>
      <div>
        <h1>Create Account</h1>
      </div>
      <div class="floating-label">
        <input
          class="floating-input"
          placeholder=" "
          type="text"
          v-model="form.name"
          name="name"
        />
        <span class="error-msg" v-if="errors.name">{{ errors.name[0] }}</span>
        <label>Name</label>
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
        <label>Your email</label>
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
        <label>Password</label>
      </div>
      <div class="floating-label">
        <input
          class="floating-input"
          placeholder=" "
          type="password"
          v-model="form.password_confirmation"
          name="password_confirmation"
        />
        <span class="error-msg" v-if="errors.password">
          {{ errors.password[0] }}
        </span>
        <label>Confirm Password</label>
      </div>
      <div>
        <button @click.prevent="saveForm" type="submit">Create</button>
      </div>
      <div class="links-under">
        <span
          ><router-link to="/login"><a href="#">Login</a></router-link></span
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
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      errors: [],
    };
  },
  methods: {
    saveForm() {
      axios
        .post("/api/register", this.form)
        .then(() => {
          this.$router.push({ name: "login" });
          this.form.name = "";
          this.form.email = "";
          this.form.password = "";
          this.form.password_confirmation = "";
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
