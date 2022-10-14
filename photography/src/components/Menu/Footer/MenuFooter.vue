<template>
  <div
    class="menu-footer-container"
    :class="
      $store.state.isDesktopView && !$store.state.isMenuActive
        ? 'menu-footer-container-desktop'
        : ''
    "
  >
    <IconsMain />
    <LanguageAvatar />
  </div>
</template>

<script>
import LanguageAvatar from "@/components/Menu/Footer/LanguageAvatar";
import IconsMain from "@/components/Icons/IconsMain";
export default {
  name: "MenuFooter",
  components: { IconsMain, LanguageAvatar },
};
</script>

<style scoped lang="scss">
.menu-footer-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 2fr 1fr;
  transition: 0.6s ease-in-out;
}
.menu-footer-container-desktop {
  display: block;
}
</style>
