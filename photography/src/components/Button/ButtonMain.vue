<template>
  <button :type="button.type || submit">
    <span>{{ button.content || "SEND MESSAGE" }}</span>
  </button>
</template>

<script>
export default {
  name: "ButtonMain",
  props: {
    button: Object,
  },
};
</script>

<style scoped lang="scss">
button {
  background-color: rgba(255, 0, 0, 1);
  height: 45px;
  padding: 0 35px;
  font-weight: 600;
  font-size: 11px;
  display: grid;
  align-items: center;
  justify-content: center;
  transition: 0.4s ease-in-out;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
  }
  span {
    color: #20202a;
  }
}
</style>
