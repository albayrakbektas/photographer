<template>
  <div class="beko-pagination">
    <div class="beko-carousel-dot-container">
      <button
        v-for="(item, index) of paginationCount"
        :key="`${item}_${index}`"
        class="beko-carousel-dot"
        :class="{ 'beko-carousel-dot--active': isCurrentDot(index) }"
        v-on:click="goToPage(index)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "BekoPagination",
  inject: ["carousel"],
  mounted() {
    // console.log(this.paginationCount, this.carousel.slideCount);
  },
  computed: {
    paginationCount() {
      const perPageCustom = this.carousel.perPageCustom[0][1];
      return this.carousel && this.carousel.scrollPerPage
        ? this.carousel.pageCount
        : this.carousel.slideCount - perPageCustom + 1 || 0;
    },
  },
  methods: {
    isCurrentDot(index) {
      return index === this.carousel.currentPage;
    },
    goToPage(index) {
      this.$emit("paginationclick", index);
      this.carousel.activeSlides();
    },
  },
};
</script>

<style lang="scss" scoped>
.beko-pagination {
  position: absolute;
  left: 0;
  bottom: -30px;
}
.beko-carousel-dot {
  width: 8px;
  display: inline-block;
  margin-right: 10px;
  background-color: #8c8c8e;
  border-radius: 5px;
  opacity: 0.5;
  height: 4px;
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
}
.beko-carousel-dot--active {
  width: 20px;
  background-color: #ffc107;
  opacity: 1;
}
button {
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
}
</style>
