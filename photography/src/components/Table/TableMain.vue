<template>
  <div class="table-main-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TableMain",
};
</script>

<style scoped lang="scss">
.table-main-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 1fr;
  gap: 7.5px;
  align-items: center;
}
</style>
