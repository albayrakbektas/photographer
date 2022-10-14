<template>
  <div class="layout-view-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LayoutView",
};
</script>

<style scoped lang="scss">
.layout-view-container {
  width: calc(100% - 70px);
  padding: 0 30px;
}
@media (max-width: 500px) {
  .layout-view-container {
    width: calc(100% - 60px);
  }
}
</style>
