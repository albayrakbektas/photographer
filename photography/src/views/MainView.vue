<template>
  <div class="main-view-container">
    <div class="main">
      <div
        class="main-content"
        :class="[{ 'main-content-active': $store.state.isMenuActive }]"
      >
        <SpinnerMain
          v-show="!$store.state.isImageLoaded || $store.state.isLoading"
        />
        <router-view />
      </div>
      <MenuMain />
    </div>
  </div>
</template>

<script>
import MenuMain from "@/components/Menu/MenuMain";
import SpinnerMain from "@/components/Spinner/SpinnerMain";
export default {
  name: "MainView",
  components: { SpinnerMain, MenuMain },
  mounted() {
    this.$store.state.isImgDetail = false;
  },
  watch: {
    $route(val) {
      if (val.hash !== "#.") {
        this.$store.state.isImgDetail = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.main-container {
  position: relative;
  height: 100%;
  //overflow: hidden;
  background-color: #1e1e28;
}
.main {
  width: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
}
.main-content {
  position: relative;
  width: 100vw;
  padding-top: 70px;
  translate: 0;
  transition: 0.6s ease-in-out;
}
.main-content-active {
  translate: calc(70vw);
}

@media (min-width: 900px) {
  .main-content {
    padding-top: 0 !important;
    padding-left: 70px;
  }
  .main-content-active {
    translate: calc(25vw - 70px);
  }
}
</style>
