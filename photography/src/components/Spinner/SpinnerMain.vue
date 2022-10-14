<template>
  <div class="spinner-main-container">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: "SpinnerMain",
  components: {},
};
</script>

<style scoped lang="scss">
.spinner-main-container {
  position: absolute;
  z-index: 9999999999;
  width: 100vw;
  height: 100vh;
  background: #1e1e28;
  display: grid;
  align-items: center;
  justify-content: center;
}
.loader {
  border-radius: 50%;
  border: 12px solid rgba(255, 0, 0, 1);
  border-top: 12px solid #1e1e28;
  border-bottom: 12px solid #1e1e28;
  width: 60px;
  height: 60px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
