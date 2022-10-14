<template>
  <div
    class="icons-main-container bg-linear"
    :class="[
      $store.state.isDesktopView && !$store.state.isMenuActive
        ? 'opacity-zero icon-main-container-desktop'
        : '',
      !$store.state.isDesktopView && $store.state.isMenuActive
        ? 'opacity-zero icon-main-container-mobile'
        : '',
    ]"
  >
    <IconMain
      v-for="(icon, index) of $store.state.iconList"
      :key="index"
      :icon="icon"
    />
  </div>
</template>

<script>
import IconMain from "@/components/Icons/IconMain";
export default {
  name: "IconsMain",
  components: { IconMain },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.icons-main-container {
  padding: 22.5px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: end;
}
.icon-main-container-mobile {
  position: relative;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
}
.icon-main-container-desktop {
  position: absolute;
  right: 0;
  bottom: 120px;
  margin: 0;
  opacity: 1;
  transition: 0.6s ease-in-out;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 15px;
  background: transparent;
}
.opacity-zero {
  opacity: 1;
}
</style>
