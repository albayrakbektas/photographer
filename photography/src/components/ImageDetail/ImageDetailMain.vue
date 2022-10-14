<template>
  <div @click="closeDetail" v-show="$store.state.isImgDetail">
    <div :class="$store.state.setPosition">
      <i @click="closeDetailPage" class="fa-solid fa-xmark"></i>
      <img
        v-for="(item, index) of $store.state.imgDetailList"
        :src="item.src"
        :alt="item.alt"
        :key="`${item}_${index}`"
        class="image"
      />
      <img
        v-for="(item, index) of $store.state.imgDetailList"
        :src="item.src"
        :alt="item.alt"
        :key="index"
        class="img-detail-main img-detail-main-bg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageDetailMain",
  data() {
    return {
      translatePositions: [0, 0],
    };
  },
  mounted() {},
  methods: {
    closeDetailPage() {
      this.$store.state.isImgDetail = false;
      this.$store.state.imgDetailList = [];
      document.body.style.overflow = "unset";
      this.$router.push("/");
    },
    closeDetail(e) {
      if (e.target.className !== "image") {
        this.$store.state.isImgDetail = false;
        this.$store.state.imgDetailList = [];
        document.body.style.overflow = "unset";
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.from-left {
  translate: -100% 0;
}
.from-top {
  translate: 0 -100%;
}
.from-right {
  translate: 100% 0;
}
.img-detail-main {
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  translate: 0 0;
  transition: 1s ease-in-out;
}
img {
  position: absolute;
  z-index: 9999;
  object-fit: cover;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  scale: 1;
  transition: 0.6s ease-in-out;
  height: 90vh;
  &:hover {
    //scale: 1.1;
  }
}
.img-detail-main-bg {
  z-index: -1;
  filter: blur(8px);
  width: 90vw;
  height: 90vh;
  translate: 5% 5%;
  cursor: unset;
  object-fit: cover;
  &:hover {
    //scale: 1;
  }
}
.rel {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 160px;
}
i {
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  font-size: 25px;
  color: #fafafc;
  cursor: pointer;
  opacity: 0.6;
  transition: 0.4s ease-in-out;
  z-index: 999999;
  &:hover {
    opacity: 1;
  }
}
.fa-xmark {
  font-size: 30px;
  top: 30px;
  right: 30px;
  translate: -30% -30%;
}
.fa-chevron-left {
  left: 5px;
}
.fa-chevron-right {
  right: 5px;
}
@media (max-width: 900px) {
  img {
    width: 100vw;
  }
  .img-detail-main-bg {
    width: 100vw;
    translate: 0 5%;
  }
}
</style>
