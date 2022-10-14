<template>
  <div
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
    ref="img-container"
    class="img-container"
  >
    <router-link :to="'/album/' + card.album">
      <img class="image" :src="card.src" alt="album" />
      <div class="image-content">
        <h2>{{ card.album }}</h2>
      </div>
      <div
        class="album-info-container"
        :class="[
          isHover ? 'hovered-album-info' : '',
          $store.state.isDesktopView ? '' : 'hovered-album-info-mobile',
        ]"
      >
        <h2>{{ albumCount }}+</h2>
        <h4></h4>
      </div>
    </router-link>
  </div>
</template>

<script>
import { getAlbumsCount } from "@/services/firebase";

export default {
  name: "TextOnImage",
  inject: ["app"],
  props: {
    card: Object,
  },
  data() {
    return {
      albumCount: "",
      isHover: false,
    };
  },
  methods: {
    async getAlbumInformation() {
      const album = this.$props.card.album;
      this.albumCount = await getAlbumsCount(album);
    },
  },
  async mounted() {
    await this.getAlbumInformation();
  },
};
</script>

<style scoped lang="scss">
.img-container {
  position: relative;
  display: grid;
  align-items: center;
  justify-content: center;
  height: 32vh;
  &:hover {
    img {
      filter: brightness(25%);
    }
  }
}
img,
a {
  width: calc(50vw - 70px);
  height: 32vh;
  border-radius: 5px;
  box-shadow: -4px 2px 15px rgba(0, 0, 0, 1);
  transition: 0.4s ease-in-out;
}
img {
  object-fit: cover;
}
.image-content {
  position: absolute;
  left: 15px;
  top: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 15px;
  border-radius: 15px;
}
h2,
h1 {
  font-style: italic;
}
.album-info-container {
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 30px;
  opacity: 0;
  transition: 0.4s ease-in-out;
}
.hovered-album-info {
  opacity: 1;
}
@media (max-width: 500px) {
  img,
  a {
    width: calc(100vw - 70px);
  }
  img {
    object-fit: contain;
  }
  .album-info-container {
    left: unset;
    right: 15px;
    top: 10px;
    translate: 0 0;
    opacity: 1;
    padding: 5px 15px;
    border-radius: 15px;
  }
}
</style>

<!--<template>-->
<!--  <div ref="img-container" class="img-container">-->
<!--    <router-link to="#">-->
<!--      <img-->
<!--        ref="image"-->
<!--        @load="setHeight"-->
<!--        class="image"-->
<!--        :src="card.src"-->
<!--        alt="album"-->
<!--      />-->
<!--      <div class="image-content">{{ card.description }}</div>-->
<!--    </router-link>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "TextOnImage",-->
<!--  inject: ["app"],-->
<!--  props: {-->
<!--    card: Object,-->
<!--  },-->
<!--  methods: {-->
<!--    async setHeight() {-->
<!--      this.$refs["img-container"].style.height = `${this.$refs.image.height}px`;-->
<!--      this.app.albumsLayoutImgHeightList.push(this.$refs.image.height);-->
<!--      console.log(this.app.albumsLayoutImgHeightList);-->
<!--      this.app.imgIsLoad = true;-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style scoped lang="scss">-->
<!--$imgWidth: 408;-->
<!--.img-container {-->
<!--  position: relative;-->
<!--  display: inline-block;-->
<!--  padding: 0 8px 16px;-->
<!--  border-radius: 15px;-->
<!--  &:hover {-->
<!--  }-->
<!--}-->
<!--.image {-->
<!--  position: absolute;-->
<!--  border-radius: 15px;-->
<!--  object-fit: cover;-->
<!--  display: block;-->
<!--  transition: 2.4s ease-in-out;-->
<!--  width: calc(100% / 2);-->
<!--}-->
<!--a {-->
<!--  position: relative;-->
<!--  display: inline-block;-->
<!--  height: 100%;-->
<!--  border-radius: 15px;-->
<!--  overflow: hidden;-->
<!--}-->
<!--@for $i from 1 through 3 {-->
<!--  @media (min-width: #{$i * $imgWidth}px) and (max-width: #{$i * $imgWidth * 2 - 1}px) {-->
<!--    .image,-->
<!--    a {-->
<!--      width: $i * $imgWidth / 2 + px;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--@media (min-width: 0px) and (max-width: 503px) {-->
<!--  .img-container {-->
<!--    width: calc(100% - 16px) !important;-->
<!--    max-width: 424px;-->
<!--  }-->
<!--  .image {-->
<!--    width: calc(100% - 54px) !important;-->
<!--    max-width: 408px;-->
<!--    height: 100% !important;-->
<!--  }-->
<!--}-->
<!--.img-container {-->
<!--  width: calc(50% - 16px);-->
<!--}-->
<!--.image {-->
<!--  height: 272px;-->
<!--}-->
<!--</style>-->
