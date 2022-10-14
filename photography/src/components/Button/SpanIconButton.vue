<template>
  <router-link :to="button.href || '#.'" class="span-icon-button-container">
    <span>{{ button.content }}</span>
    <i :class="button.iconClass || 'fa-solid fa-chevron-right'"></i>
  </router-link>
</template>

<script>
export default {
  name: "SpanIconButton",
  props: {
    button: Object,
  },
};
</script>

<style scoped lang="scss">
.span-icon-button-container {
  position: absolute;
  right: 15px;
  top: 0;
  translate: 0 -5px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  &:hover {
    i {
      translate: 5px 0;
      opacity: 1;
    }
    span {
      opacity: 1;
    }
  }
}
i {
  font-weight: 900;
}
span {
  color: #fafafc;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: rgba(255, 0, 0, 1);
  text-decoration-thickness: 2px;
  opacity: 0.6;
  transition: 0.6s ease-in-out;
  font-style: italic;
  margin-right: 2px;
  &:hover {
    text-decoration-color: #fafafc;
  }
}
i {
  opacity: 0.6;
  scale: 1.1;
  color: #ffc107;
  translate: 0 0;
  transition: 0.6s ease-in-out;
}
</style>
