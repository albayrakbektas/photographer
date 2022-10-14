<template>
  <div @click="changeMenuStatus" class="icon-button-container">
    <div
      class="icons"
      :class="[{ 'icons-active': !$store.state.isMenuActive }]"
    >
      <span
        class="vertical-line"
        :class="[{ close: $store.state.isMenuActive }]"
      ></span>
      <span
        class="vertical-line"
        :class="[{ close: $store.state.isMenuActive }]"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuCloseIcon",
  methods: {
    changeMenuStatus() {
      let isMenuActive = !this.$store.state.isMenuActive;
      if (isMenuActive) {
        document.body.style.overflow = "hidden";
        document.getElementById("app").style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
        document.getElementById("app").style.overflow = "unset";
      }
      this.$store.state.isMenuActive = isMenuActive;
    },
  },
};
</script>

<style scoped lang="scss">
.icon-button-container {
  position: relative;
  display: flex;
  height: 70px;
  width: 70px;
}
.icons {
  cursor: pointer;
  width: 100%;
  margin: 20px;
  translate: 0;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  font-weight: 900;
  &:hover {
    .vertical-line {
      background: rgba(255, 0, 0, 1);
    }
  }
}
.vertical-line {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  height: 3px;
  width: 15px;
  border-radius: 5px;
  background: rgba(255, 0, 0, 0.5);
  z-index: 99;
  transition: 0.6s ease-in-out;
  &:first-child {
    width: 12px;
    translate: -60% -120%;
  }
  &:last-child {
    translate: -50% 50%;
  }
}
.close {
  translate: -50% -50% !important;
  background: rgba(255, 0, 0, 0.6);
  &:hover {
  }
  &:first-child {
    width: 15px;
    rotate: 45deg;
  }
  &:last-child {
    rotate: -45deg;
  }
}
</style>
