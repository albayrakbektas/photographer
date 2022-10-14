<template>
  <h2
    :class="
      $store.state.isDesktopView && !$store.state.isMenuActive
        ? 'opacity-zero'
        : ''
    "
  >
    {{ $route.name }}
  </h2>
</template>

<script>
export default {
  name: "CurrentPage",
};
</script>

<style scoped lang="scss">
h2 {
  color: #8c8c8e;
  rotate: -90deg;
  text-transform: uppercase;
  font-weight: 600;
  position: absolute;
  right: -70px;
  translate: -2.5% 0;
  top: 150px;
  width: 200px;
  overflow: hidden;
  margin: 0;
  opacity: 0;
  transition: 0.6s ease-in-out;
}
.opacity-zero {
  opacity: 1;
}
</style>
