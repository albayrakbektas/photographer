<template>
  <CardMain>
    <TableMain>
      <TableRow v-for="(item, index) of tableRow" :key="index" :row="item" />
    </TableMain>
  </CardMain>
</template>

<script>
import CardMain from "@/components/Card/CardMain";
import TableMain from "@/components/Table/TableMain";
import TableRow from "@/components/Table/TableRow";
export default {
  name: "CardTable",
  components: { TableRow, TableMain, CardMain },
  props: {
    tableRow: Array,
  },
};
</script>

<style scoped></style>
