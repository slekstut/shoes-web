<template>
  <div class="card-item">
    <router-link :to="{ name: 'record', params: { id } }">
      <!-- <a href="#"> -->
      <!-- <div>
            <img
              alt="image-test"
              src="https://images.unsplash.com/photo-1602524818604-fb5277190621?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80"
            />
          </div> -->

      <div class="product-description">
        <p>{{ title }}</p>
      </div>
      <div class="product-description">
        <p>{{ description }}</p>
      </div>
      <p>
        <!-- <span class="old-price">&#8364; 129.99</span> -->
        <span class="new-price">&#8364; {{ price }}</span>
      </p>
      <!-- </a> -->
    </router-link>
    <button class="favorite">
      <span><i class="fas fa-heart fa-border-none"></i></span>
    </button>
  </div>
</template>

<script>
export default {
  props: { title: String, description: String, id: Number, price: Number },
};
</script>
