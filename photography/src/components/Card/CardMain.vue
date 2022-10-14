<template>
  <div class="card-main-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CardMain",
};
</script>

<style scoped lang="scss">
.card-main-container {
  padding: 30px;
  background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
}
</style>
