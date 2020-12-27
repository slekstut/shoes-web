<template>
  <div class="card-item">
    <router-link :to="{ name: 'record', params: { id } }">
      <div>
        <img :src="'/storage/' + image" :alt="title" />
      </div>
      <div class="product-description">
        <p>{{ title }}</p>
      </div>
      <div class="product-description">
        <p>{{ description }}</p>
      </div>
      <p>
        <span class="new-price">&#8364; {{ price }}</span>
      </p>
    </router-link>
    <button class="favorite">
      <span><i class="fas fa-heart fa-border-none"></i></span>
    </button>
  </div>
</template>

<script>
export default {
  props: { title: String, description: String, id: Number, price: Number, image: String },
};
</script>
