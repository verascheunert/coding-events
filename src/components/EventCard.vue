<template>
  <div>
    <h2>{{ event.title }}</h2>
    <p>{{ event.location }}</p>
    <p>{{ event.details }}</p>
  </div>
</template>

<script>
export default {
  props: ["event"],
};
</script>

<style scoped></style>
