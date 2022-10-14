<template>
  <div ref="img-container" class="img-container">
    <router-link to="#.">
      <img
        ref="image"
        @load="setHeight"
        @click="setDetailData($event, card)"
        class="image"
        :src="card.src"
        :data="card.timeCreated"
        :alt="card.description"
      />
    </router-link>
  </div>
</template>

<script>
import { getDetailedImage } from "@/services/firebase";

export default {
  name: "ImageHomeCard",
  inject: ["app"],
  props: {
    card: Object,
  },
  mounted() {},
  methods: {
    getMousePosition(e) {
      let position = this.$store.state.createdPosition;
      const limit = this.app.getBrowserWidth() / 4;
      if (e.target.getBoundingClientRect().left < limit) {
        position = "from-left";
      } else if (e.target.getBoundingClientRect().left < limit * 2) {
        position = "from-top";
      } else {
        position = "from-right";
      }
      this.$store.state.createdPosition = position;
    },
    setPos() {
      this.$store.state.setPosition = this.$store.state.createdPosition;
      setTimeout(() => {
        this.$store.state.setPosition =
          this.$store.state.createdPosition + " img-detail-main";
      }, 100);
    },
    async setDetailData(e, item) {
      this.getMousePosition(e);
      await getDetailedImage(item);
      this.$store.state.isImgDetail = true;
      document.body.style.overflow = "hidden";
      this.setPos();
    },
    async setHeight() {
      this.$refs[
        "img-container"
      ].style.height = `${this.$refs.image.naturalHeight}px`;
      this.app.homeLayoutImgHeightList.push(this.$refs.image.naturalHeight);
      this.app.imgIsLoad = true;
    },
  },
};
</script>

<style scoped lang="scss">
.img-container {
  position: absolute;
  display: inline-block;
  overflow: hidden;
  padding: 0 8px 16px;
  border-radius: 15px;
  &:hover {
    .image {
      scale: 1.2;
    }
  }
}
.image {
  position: absolute;
  border-radius: 15px;
  object-fit: contain;
  display: block;
  transition: 0.6s ease-in-out;
  //width: 408px;
  //height: 200px;
}
a {
  position: relative;
  display: inline-block;
  height: 100%;
  width: 408px;
  border-radius: 15px;
  overflow: hidden;
}
@media (min-width: 0px) and (max-width: 503px) {
  .img-container {
    width: calc(100% - 16px) !important;
    max-width: 424px;
  }
  .image {
    width: calc(100% - 54px) !important;
    max-width: 408px;
    height: 100% !important;
  }
}
</style>
