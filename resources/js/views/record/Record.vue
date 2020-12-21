<template>
  <div class="record-wrapper">
    <div class="record-info">
      <div class="record-text">
        <div v-if="!loading">
          <div class="record-title">{{ record.title }}</div>
          <hr />
          <p>Product Details</p>
          <div class="record-description">{{ record.description }}</div>
          <div class="record-details-price">&#8364;{{ record.price }}</div>
        </div>
        <div class="loading" v-else>Loading...</div>
      </div>
    </div>
    <div>
      <record-options v-bind="record" />
    </div>
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
  created() {
    this.loading = true;
    axios.get(`/api/records/${this.$route.params.id}`).then((response) => {
      this.record = response.data.data;
      this.loading = false;
    });
  },
};
</script>
