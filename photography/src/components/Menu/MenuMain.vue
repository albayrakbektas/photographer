<template>
  <div
    class="menu-main-container"
    :class="[{ 'menu-main-container-active': $store.state.isMenuActive }]"
  >
    <MenuHeader />
    <div class="menu-main-content">
      <CurrentPage />
      <IconsMain
        v-show="$store.state.isDesktopView && !$store.state.isMenuActive"
      />
      <MenuContent />
    </div>
    <MenuFooter />
  </div>
</template>

<script>
import MenuHeader from "@/components/Menu/Header/MenuHeader";
import MenuFooter from "@/components/Menu/Footer/MenuFooter";
import CurrentPage from "@/components/Menu/Content/CurrentPage";
import MenuContent from "@/components/Menu/Content/MenuContent";
import IconsMain from "@/components/Icons/IconsMain";
export default {
  name: "MenuMain",
  components: {
    IconsMain,
    MenuContent,
    CurrentPage,
    MenuFooter,
    MenuHeader,
  },
};
</script>

<style scoped lang="scss">
.menu-main-container {
  position: fixed;
  width: 70vw;
  height: 100vh;
  background: #20202a;
  top: 0;
  left: -70vw;
  bottom: 0;
  transition: 0.6s ease-in-out;
}
.menu-main-container-active {
  translate: 70vw;
}
.menu-main-content {
  height: 100%;
  display: flex;
  align-items: center;
}
@media (min-width: 900px) {
  .menu-main-container {
    width: 25vw;
    left: calc(-25vw + 70px);
  }
  .menu-main-container-active {
    translate: calc(25vw - 70px);
  }
}
//@media (min-width: 848px) {
//  .menu-main-container {
//    width: 50vw;
//  }
//}
//@media (min-width: 1272px) {
//  .menu-main-container {
//    width: 30vw;
//  }
//}
</style>
