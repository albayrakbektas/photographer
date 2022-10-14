<template>
  <div
    class="beko-carousel-slide"
    :class="{
      'beko-carousel-slide-center': isCenter,
      'beko-carousel-slide-adjustableHeight': isAdjustableHeight,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BekoSlide",
  inject: ["carousel"],
  data() {
    return {
      width: null,
    };
  },
  mounted() {
    if (!this.$isServer) {
      this.$el.addEventListener("dragstart", (e) => e.preventDefault());
    }
    this.$el.addEventListener(
      this.carousel.isTouch ? "touchend" : "mouseup",
      this.onTouchEnd
    );
  },
  computed: {
    isCenter() {
      const { breakpointSlidesPerPage } = this.carousel;
      if (breakpointSlidesPerPage % 2 === 0 || !this.carousel.activeSlides) {
        return false;
      }
      return this.activeSlides === Math.floor(breakpointSlidesPerPage / 2);
    },
    isAdjustableHeight() {
      const { adjustableHeight } = this.carousel;
      return adjustableHeight;
    },
  },
  methods: {
    onTouchEnd(e) {
      const eventPosX =
        this.carousel.isTouch && e.changedTouches && e.changedTouches.length > 0
          ? e.changedTouches[0].clientX
          : e.clientX;
      const deltaX = this.carousel.dragStartX - eventPosX;
      if (
        this.carousel.minSwipeDistance === 0 ||
        Math.abs(deltaX) < this.carousel.minSwipeDistance
      ) {
        this.$emit("slideclick", Object.assign({}, e.currentTarget.dataset));
        this.$emit("slide-click", Object.assign({}, e.currentTarget.dataset));
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.beko-carousel-slide {
  flex-basis: inherit;
  flex-grow: 0;
  flex-shrink: 0;
  user-select: none;
  backface-visibility: hidden;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: none;
}
.beko-carousel-slide-adjustableHeight {
  display: table;
  flex-basis: auto;
  width: 100%;
}
</style>
