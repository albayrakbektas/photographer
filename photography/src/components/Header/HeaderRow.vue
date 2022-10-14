<template>
  <div class="header-row-container">
    <h1>{{ header.title }}</h1>
  </div>
</template>

<script>
export default {
  name: "HeaderRow",
  props: {
    header: Object,
  },
};
</script>

<style scoped lang="scss">
.header-row-container {
  padding: 30px 0 15px;
}
</style>
