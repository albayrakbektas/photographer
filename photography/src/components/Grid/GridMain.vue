<template>
  <div class="grid-centered">
    <div
      v-show="!$store.state.isLoading && $store.state.isImageLoaded"
      ref="grid-main-container"
      class="grid-main-container"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "GridMain",
  inject: ["app"],
  data() {
    return {
      columnsTopHeights: [0, 0, 0],
    };
  },
  computed: {
    // count() {
    //   console.log(this.$store.state.isLoading);
    //   return this.$store.state.isLoading;
    // },
  },
  watch: {
    "$store.state.isImageLoaded": function (val) {
      if (val) {
        this.setLayout();
      }
    },
    // async count(newC, oldC) {
    //   console.log(newC, oldC);
    //   await this.setLayout();
    // },
    // isOpen() {
    //   if (this.$store.state.isImageLoaded) {
    //     this.$nextTick(async () => {
    //       await this.setLayout();
    //     });
    //   }
    // },
  },
  methods: {
    setLayout() {
      this.$store.state.isLoading = true;
      this.columnsTopHeights = [0, 0, 0];
      const imgCountPerPage = this.app.getImgPerPage();
      const imgWithPadding = this.app.getGridItemWidth() + 16;
      const container = this.$refs["grid-main-container"];
      setTimeout(() => {
        const imgContainers = Array.from(container.children);
        imgContainers.forEach((img) => {
          img.style.width = `${this.app.getGridItemWidth()}px`;
          img.children[0].style.width = `${this.app.getGridItemWidth()}px`;
        });
        if (imgCountPerPage !== 1) {
          for (let i = 0; i < imgContainers.length; i++) {
            for (let j = 0; j < this.columnsTopHeights.length; j++) {
              if (i % imgCountPerPage === j) {
                imgContainers[i].style.left = `${imgWithPadding * j}px`;
                imgContainers[i].style.top += `${this.columnsTopHeights[j]}px`;
                this.columnsTopHeights[j] +=
                  imgContainers[i].children[0].children[0].height + 16;
              }
            }
          }
        } else {
          this.columnsTopHeights = [0, 0, 0];
          for (let i = 0; i < imgContainers.length; i++) {
            const naturalHeight =
              imgContainers[i].children[0].children[0].naturalHeight;
            console.log(imgContainers[i].children[0].children[0].naturalHeight);
            imgContainers[i].style.left = `0`;
            imgContainers[i].style.top = `${this.columnsTopHeights[0]}px`;
            this.columnsTopHeights[0] += naturalHeight + 16;
            imgContainers[i].children[0].children[0].style.height =
              naturalHeight;
            imgContainers[i].children[0].style.height = naturalHeight;
            imgContainers[i].style.height = `${naturalHeight}px`;
          }
        }
        this.$store.state.isLoading = false;
      }, 2000);
    },
  },
  async mounted() {
    // window.addEventListener("load", this.setLayout);
    window.addEventListener("resize", this.setLayout);
  },
  async beforeDestroy() {
    // window.removeEventListener("load", this.setLayout);
    window.removeEventListener("resize", this.setLayout);
  },
};
</script>

<style scoped lang="scss">
$imgWidth: 424;

.grid-main-container {
  position: relative;
  min-height: 100vh;
  margin: 0 0 3rem 0;
  width: calc(100% - 8px) !important;
}
.grid-centered {
  margin: 0 auto;
}
@for $i from 1 through 3 {
  @media (min-width: #{$i * $imgWidth}px) and (max-width: #{$i * $imgWidth * 2 - 1}px) {
    .grid-centered {
      width: $i * $imgWidth + px;
    }
  }
}
@media (min-width: 0px) and (max-width: 503px) {
  .grid-main-container {
    width: 100%;
  }
  .grid-centered {
    width: 100%;
    max-width: 424px;
  }
}
@media (min-width: 400px) {
  .grid-main-container {
    margin: 3rem 0;
  }
}
</style>
