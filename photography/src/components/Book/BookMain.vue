<template>
  <div class="hello">
    <div class="book">
      <div class="cover front-cover"></div>
      <div v-for="item in pageCount" class="page" :key="item"></div>
      <div class="cover back-cover"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookMain",
  data() {
    return {
      pageCount: 10,
    };
  },
};
</script>

<style scoped lang="scss">
.book {
  perspective: 1000px;
  position: relative;
  translate: 500px 200px;
  height: 400px;
  width: 300px;
  cursor: pointer;
  &:hover {
    .front-cover {
      transform: rotateX(10deg) rotateY(-180deg);
    }
    .page {
      z-index: 9999;
      transform: rotateX(10deg) rotateY(-180deg);
    }
    .cover {
      transition: 0.5s linear;
    }
  }
}
.cover {
  position: absolute;
  background-color: purple;
  height: 400px;
  width: 300px;
  transition: 2s linear;
  border-radius: 2px 20px 20px 2px;
  transform: rotateX(10deg);
  box-shadow: 1px 1px 10px #808080;
}
.front-cover {
  z-index: 999;
  transform-origin: center left;
}
.page {
  z-index: 99;
  transform-origin: center left;
}
.back-cover {
  z-index: 9;
}
.page {
  position: absolute;
  background-color: bisque;
  top: 10px;
  height: 380px;
  width: 290px;
  border-radius: 2px 10px 10px 2px;
  transform: rotateX(10deg);
}
@for $i from 1 through 11 {
  .page:nth-child(#{$i}) {
    transition-duration: $i * 0.1 + 0.5 + s;
  }
  .book {
    &:hover {
      .page:nth-child(#{$i}) {
        transition-duration: $i * 0.8 + s;
      }
    }
  }
}
</style>
