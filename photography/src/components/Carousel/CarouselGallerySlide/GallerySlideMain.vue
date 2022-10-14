<template>
  <div class="gallery-slide-main-container">
    <div class="gallery-slide-main">
      <SpanIconButton :button="button" />
      <div
        ref="img-pd"
        class="img-pd"
        v-for="(img, index) of this.imgDetailList"
        :key="`${img}_${index}`"
        :style="{
          translate: `${translatePositions[0]}px ${translatePositions[1]}px`,
        }"
      >
        <GallerySlideImage :gallery-img="img" />
      </div>
    </div>
  </div>
</template>

<script>
import GallerySlideImage from "@/components/Carousel/CarouselGallerySlide/GallerySlideImage";
import SpanIconButton from "@/components/Button/SpanIconButton";
export default {
  name: "GallerySlideMain",
  components: { SpanIconButton, GallerySlideImage },
  props: {
    translatePositions: Array,
  },
  data() {
    return {
      imgDetailList: [],
      button: {
        href: "/albums",
        content: "Go to Album",
        iconClass: "",
      },
    };
  },
  mounted() {},
  watch: {
    "$store.state.imgDetailList": function () {
      const images = this.$store.state.imgList;
      let currentImage = this.$store.state.imgDetailList[0];
      this.imgDetailList = this.getCurrentImageAlbum(images, currentImage);
    },
    "$store.state.galleryImageTranslate": function () {
      console.log("hi");
      const gallery = this.$refs["img-pd"];
      const positionX = this.$store.state.galleryImageTranslate[0];
      const positionY = this.$store.state.galleryImageTranslate[1];
      console.log(gallery);
      this.translateImages(gallery, positionX, positionY);
    },
  },
  methods: {
    translateImages(gallery, positionX, positionY) {
      console.log(positionX, positionY);
      gallery.forEach((img) => {
        img.style.translate = `${positionX}px ${positionY}px`;
      });
    },
    getCurrentImageAlbum(images, currentImage) {
      return images.filter((img) => {
        return img.album === currentImage.album;
      });
    },
  },
};
</script>

<style scoped lang="scss">
.gallery-slide-main-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 160px;
  padding: 15px 0 0;
  z-index: 999;
  overflow-x: hidden;
  overflow-y: visible;
  width: calc(100% - 30px);
}
.gallery-slide-main {
  position: relative;
  height: 140px;
  display: grid;
  align-items: end;
  grid-auto-flow: column;
  gap: 15px;
  padding: 0 30px;
}
.img-pd {
  translate: 0 0;
}
</style>
