<template>
  <div class="beko-navigation">
    <button
      is="i"
      class="fa-solid fa-chevron-left beko-navigation-button beko-navigation-prev"
      :class="{ 'beko-carousel-navigation--disabled': !canAdvanceBackward }"
      v-on:click.prevent="triggerPageAdvance('backward')"
    ></button>
    <button
      is="i"
      class="fa-solid fa-chevron-right beko-navigation-button beko-navigation-next"
      :class="{ 'beko-carousel-navigation--disabled': !canAdvanceForward }"
      v-on:click.prevent="triggerPageAdvance('forward')"
    ></button>
  </div>
</template>

<script>
export default {
  name: "BekoNavigation",
  inject: ["carousel"],
  computed: {
    canAdvanceForward() {
      return this.carousel.canAdvanceForward || false;
    },
    canAdvanceBackward() {
      return this.carousel.canAdvanceBackward || false;
    },
  },
  methods: {
    triggerPageAdvance(direction) {
      this.$emit("navigationclick", direction);
      this.carousel.activeSlides();
    },
  },
};
</script>

<style lang="scss" scoped>
.beko-navigation {
  position: absolute;
  bottom: -30px;
  right: 0;
  display: flex;
  gap: 5px;
  cursor: pointer;
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
  color: #8c8c8e;
  font-size: 12px;
}
.beko-navigation-prev {
}
.beko-navigation-next {
}
.beko-carousel-navigation--disabled {
  opacity: 0.5;
  cursor: default;
}
</style>
