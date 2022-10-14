<template>
  <div class="carousel-row-container">
    <beko-carousel
      :scroll-per-page="false"
      :per-page-custom="[[900, 3]]"
      :autoplay="true"
      :loop="true"
      :navigation-enabled="true"
    >
      <beko-slide v-for="(item, index) of $store.state.imgList" :key="index">
        <img :src="item.src" :alt="item.alt" />
      </beko-slide>
    </beko-carousel>
  </div>
</template>

<script>
import BekoCarousel from "@/components/Carousel/BekoCarousel";
import BekoSlide from "@/components/Carousel/BekoSlide";
export default {
  name: "CarouselRow",
  components: { BekoSlide, BekoCarousel },
};
</script>

<style scoped lang="scss">
.carousel-row-container {
  width: calc(100% - 70px);
  overflow: hidden;
  display: none;
}
img {
  height: 100%;
}
</style>
