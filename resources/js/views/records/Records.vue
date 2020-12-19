<template>
  <div>
    <ActionBar />
    <div class="loading" v-if="loading">Loading...</div>
    <div class="cards-section" v-else>
      <div v-for="(record, index) in records" :key="index">
        <record-list-item v-bind="record"></record-list-item>
      </div>
    </div>
  </div>
</template>

<script>
import ActionBar from "../../components/ActionBar.vue";
import RecordListItem from "./RecordListItem";

export default {
  components: {
    ActionBar,
    RecordListItem,
  },
  data() {
    return {
      records: null,
      loading: false,
    };
  },
  methods: {},
  created() {
    this.loading = true;
    const request = axios.get("/api/records").then((response) => {
      this.records = response.data.data;
      this.loading = false;
    });
  },
};
</script>
