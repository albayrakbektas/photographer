<template>
  <div id="app">
    <ImageDetailMain />
    <HeaderMain />
    <MainView />
  </div>
</template>

<style lang="scss">
html {
  -webkit-tap-highlight-color: transparent;
}
span {
  color: rgba(255, 0, 0, 0.5);
  transition: 0.4s ease-in-out;
  &:hover {
    color: rgba(255, 0, 0, 1);
  }
}
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: #191923;
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: 0.5px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1,
h2,
h3,
h4,
h5,
h6,
i {
  margin: 0;
  //color: #fafafc;
  color: rgba(255, 0, 0, 1) !important;
}
a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
ul,
li {
  padding-inline-start: 0;
  margin: 0;
  list-style: none;
}
.bg-linear {
  background: linear-gradient(
    159deg,
    rgba(37, 37, 50, 0.98) 0%,
    rgba(35, 35, 45, 0.98) 100%
  );
}
.sub-li {
  translate: 0 !important;
  a {
    span {
      font-size: 10px;
    }
  }
}
.list-item-container {
  &:hover {
    li {
      span {
        color: #fafafc;
      }
    }
  }
}
</style>
<script>
import MainView from "@/views/MainView";
import HeaderMain from "@/components/Header/HeaderMain";
import ImageDetailMain from "@/components/ImageDetail/ImageDetailMain";
export default {
  components: { ImageDetailMain, HeaderMain, MainView },
  provide() {
    return {
      app: this,
    };
  },
  data() {
    return {
      prev: window.scrollY,
      imgIsLoad: false,
      homeLayoutImgHeightList: [],
      albumsLayoutImgHeightList: [],
      browserWidth: window.innerWidth,
      perPageCustom: [
        [1272, 3],
        [848, 2],
        [0, 1],
      ],
    };
  },
  computed: {},
  methods: {
    scrollHandler(e) {
      const window = e.currentTarget;
      if (this.prev > window.scrollY) {
        this.$store.state.isScrollUp = true;
      } else if (this.prev < window.scrollY) {
        this.$store.state.isScrollUp = false;
      }
      this.prev = window.scrollY;
    },
    getBrowserWidth() {
      this.browserWidth = window.innerWidth;
      return this.browserWidth;
    },
    getGridItemWidth() {
      return 408;
    },
    getImgPerPage() {
      const breakpointArray = this.perPageCustom;
      const width = this.getBrowserWidth();
      const breakpoints = breakpointArray.sort((a, b) =>
        a[0] > b[0] ? -1 : 1
      );
      const matches = breakpoints.filter(
        (breakpoint) => width >= breakpoint[0]
      );
      return matches[0] && matches[0][1];
    },
  },
  mounted() {
    this.$store.state.detailPagePosition = [0, 0, 0];
    window.addEventListener("scroll", this.scrollHandler);
    window.addEventListener("resize", this.getBrowserWidth);
    window.addEventListener("resize", this.getImgPerPage);
  },
  beforeDestroy() {
    window.addEventListener("scroll", this.scrollHandler);
    window.removeEventListener("resize", this.getBrowserWidth);
    window.removeEventListener("resize", this.getImgPerPage);
  },
};
</script>
