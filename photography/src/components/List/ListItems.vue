<template>
  <div is="ul" :class="isSubUl ? 'sub-ul' : ''">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ListItems",
  components: {},
  props: {
    isSubUl: Boolean,
  },
};
</script>

<style scoped lang="scss">
.sub-ul {
  translate: 0 0;
  position: relative;
  max-height: 0;
  background: #20202a;
  box-shadow: inset 0 3px 8px 0 rgb(15 15 20 / 20%);
  transition: 0.6s ease-in-out;
}
.sub-ul-active {
  max-height: 500px;
  li {
    &:first-child {
      padding-top: 10px;
    }
    &:last-child {
      padding-bottom: 10px;
    }
  }
}
</style>
