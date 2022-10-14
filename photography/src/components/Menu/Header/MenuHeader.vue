<template>
  <div
    class="bg-linear menu-status-icon"
    :class="[
      {
        'menu-active':
          !$store.state.isMenuActive &&
          !$store.state.isDesktopView &&
          this.$store.state.isScrollUp,
      },
    ]"
  >
    <h1 :class="$store.state.isMenuActive ? 'h1-active' : ''">Alperen Sahin</h1>
    <MenuCloseIcon />
  </div>
</template>

<script>
import MenuCloseIcon from "@/components/Menu/Header/MenuCloseIcon";
export default {
  name: "MenuHeader",
  components: { MenuCloseIcon },
  methods: {},
};
</script>

<style scoped lang="scss">
.menu-status-icon {
  display: flex;
  justify-content: end;
  translate: 0;
  transition: 0.6s ease-in-out;
  position: absolute;
  left: 0;
  right: 0;
  background: none;
}
.menu-active {
  translate: 70px;
}
h1 {
  position: absolute;
  left: -22.5px;
  top: 50%;
  translate: -100% -100%;
  transition: 2s ease-in-out;
  font-style: italic;
}
.h1-active {
  left: 22.5px;
  translate: 0 -50%;
}
</style>
