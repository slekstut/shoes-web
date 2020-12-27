<template>
  <div class="review-page">
    <div class="record-wrapper" v-if="!loading">
      <div class="record-text">
        <img :src="'/storage/' + record.image" :alt="record.title" />
        <div class="record-title">{{ record.title }}</div>
        <hr />
        <p>Product Details</p>
        <div class="record-description">{{ record.description }}</div>
        <div class="record-details-price">&#8364;{{ record.price }}</div>
      </div>
      <record-options v-bind="record" />
    </div>
    <div class="loading" v-else></div>
  </div>
</template>
<script>
import RecordOptions from "./RecordOptions";

export default {
  components: {
    RecordOptions,
  },
  data() {
    return {
      record: null,
      loading: false,
    };
  },
  async created() {
    this.loading = true;
    await axios.get(`/api/records/${this.$route.params.id}`).then((response) => {
      this.record = response.data.data;
      this.loading = false;
    });
  },
};
</script>
