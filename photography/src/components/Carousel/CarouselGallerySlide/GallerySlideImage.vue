<template>
  <img
    :src="galleryImg.src"
    :alt="galleryImg.alt"
    @click="setDetailData(galleryImg)"
  />
</template>

<script>
export default {
  name: "GallerySlideImage",
  props: {
    galleryImg: Object,
  },
  methods: {
    setDetailData(item) {
      this.$store.state.imgDetailList = [item];
    },
  },
};
</script>

<style scoped lang="scss">
img {
  height: 120px;
  width: 240px;
  opacity: 0.6;
  scale: 1;
  cursor: pointer;
  transition: 0.6s ease-in-out;
  &:hover {
    opacity: 1;
    scale: 1.1;
    z-index: 100;
  }
}
@media (max-width: 400px) {
  img {
    width: calc((100vw - 75px) / 2);
  }
}
</style>
