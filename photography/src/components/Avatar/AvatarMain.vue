<template>
  <router-link
    ref="link"
    @click.native="changeLanguage"
    :to="item.href || '#'"
    :data="item.content"
    class="avatar-container"
    :class="[
      {
        'avatar-language-active': $store.state.activeLanguage === item.content,
      },
    ]"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "AvatarMain",
  props: {
    item: Object,
  },
  methods: {
    changeLanguage(e) {
      document
        .querySelectorAll(".avatar-container > span")
        .forEach((span) => span.classList.remove("language-span-active"));
      e.target.classList.add("language-span-active");
      this.$store.state.activeLanguage = e.target.textContent;
    },
  },
};
</script>

<style scoped lang="scss">
.avatar-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #1e1e28;
  color: #8c8c8e;
  width: 25px;
  height: 25px;
  margin: 0.5rem 0;
  font-weight: 900;
  transition: 0.4s ease-in-out;
  &:hover {
    color: #ffffff;
  }
  &:first-child {
    margin: 0 0 0.5rem;
  }
  &:last-child {
    margin: 0.5rem 0 0;
  }
}
.avatar-language-active {
  background: rgba(255, 0, 0, 1);
  span {
    color: rgba(0, 0, 0, 1) !important;
  }
  &:hover {
    color: rgba(255, 0, 0, 1) !important;
  }
}
</style>
