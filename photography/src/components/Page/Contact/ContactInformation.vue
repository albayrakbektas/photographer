<template>
  <div class="contact-information-container">
    <HeaderRow :header="header" />
    <div class="card-grid">
      <CardTable :table-row="locationRow" />
    </div>
  </div>
</template>

<script>
import HeaderRow from "@/components/Header/HeaderRow";
import CardTable from "@/components/Card/CardTable";
export default {
  name: "ContactInformation",
  components: { CardTable, HeaderRow },
  data() {
    return {
      header: {
        title: "Contact Information",
      },
      locationRow: [
        {
          key: "Country",
          value: "Turkey",
        },
        {
          key: "State",
          value: "Izmir",
        },
        {
          key: "City",
          value: "Bornova",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.card-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
  align-items: center;
  gap: 30px;
}
@media (min-width: 900px) {
  .card-grid {
    width: calc(100% / 3);
  }
}
</style>
