<template>
  <div
    class="header-main bg-linear"
    :class="$store.state.isImgDetail ? 'full-width' : ''"
  >
    <i
      v-show="$store.state.isImgDetail"
      @click="closeDetailPage"
      class="fa-solid fa-xmark"
    ></i>
  </div>
</template>

<script>
export default {
  name: "HeaderMain",
  methods: {
    closeDetailPage() {
      this.$store.state.isImgDetail = false;
      this.$store.state.imgDetailList = [];
      document.body.style.overflow = "unset";
    },
  },
};
</script>

<style scoped lang="scss">
.header-main {
  position: absolute;
  display: none;
  z-index: 999;
  height: 70px;
  background-color: #000000;
}
.full-width {
  left: 0;
  right: 0;
  height: 0;
}
i {
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  right: 35px;
  top: 35px;
  translate: 50% -50%;
  color: #fafafc;
  opacity: 0.6;
  transition: 0.6s ease-in-out;
  &:hover {
    opacity: 1;
  }
}
</style>
