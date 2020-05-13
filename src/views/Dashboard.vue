<template>
  <div>
    <h1>Dashboard</h1>
    <div v-for="item in events" :key="item.id">
      {{ item }}
    </div>
  </div>
</template>

<script>
import { getEvents } from "@/services/event-service.js";

export default {
  name: "Dashboard",
  data() {
    return {
      events: []
    };
  },
  async created() {
    try {
      const res = await getEvents();
      this.events = res.data;
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style scoped></style>
