<template>
  <a target="_blank" :href="icon.href">
    <i
      :class="[icon.class, $store.state.isMenuActive ? 'icon-active' : '']"
    ></i>
  </a>
</template>

<script>
export default {
  name: "IconMain",
  props: {
    icon: Object,
  },
};
</script>

<style scoped lang="scss">
a {
  width: 25px;
  height: 25px;
}
i {
  transition: 1s ease-in-out;
  font-size: 25px;
  color: #fafafc;
  filter: brightness(75%);
  &:hover {
    filter: brightness(100%);
  }
}
.icon-active {
  translate: 0 0 !important;
}
</style>
