<template>
  <nav>
    <input type="checkbox" id="check" />
    <label for="check" class="checkbtn">
      <i class="fas fa-bars"></i>
    </label>

    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li><router-link to="/records">Shoes</router-link></li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "navbarComponent",
};
</script>
