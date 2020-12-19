<template>
  <div class="record-wrapper">
    <div class="record-info">
      <div class="record-text">
        <div v-if="!loading">
          {{ record.title }}
          <hr />
          {{ record.description }}
        </div>
        <div class="loading" v-else>Loading...</div>
      </div>
    </div>
    <div>
      <record-options />
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
