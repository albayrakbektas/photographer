<template>
  <div class="table-row-container">
    <h3>{{ row.key }}:</h3>
    <span>{{ row.value }}</span>
  </div>
</template>

<script>
export default {
  name: "TableRow",
  props: {
    row: Object,
  },
};
</script>

<style scoped lang="scss">
.table-row-container {
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  align-items: center;
}
</style>
