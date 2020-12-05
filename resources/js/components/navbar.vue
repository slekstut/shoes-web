<template>
  <div class="topnav" id="myTopnav" v-bind:class="{ responsive: showMenu }">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Shoes</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">About</a></li>
    </ul>
    <a class="icon" @click="showMenu = !showMenu">&#9776;</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>
