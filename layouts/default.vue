<template>
  <div>
    <Header></Header>
    <Nuxt />
  </div>
</template>
<script>
import Header from "../components/header.vue";
export default {
  components: {
    Header,
  },
};
</script>
<style scoped></style>
