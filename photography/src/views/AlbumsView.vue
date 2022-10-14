<template>
  <LayoutView>
    <div class="album-layout">
      <TextOnImage
        v-for="(item, index) of albums"
        :key="`${item}_${index}`"
        :card="item"
      />
    </div>
  </LayoutView>
</template>

<script>
import LayoutView from "@/components/Layout/LayoutView";
import axios from "axios";
import { getImage } from "@/services/firebase";
import TextOnImage from "@/components/Albums/TextOnImage";
export default {
  name: "AlbumsView",
  components: { TextOnImage, LayoutView },
  data() {
    return {
      albums: [],
      coverList: [],
    };
  },
  watch: {
    coverList() {
      return this.coverList;
    },
  },
  methods: {
    getAlbums() {
      this.$store.state.isLoading = true;
      this.$store.state.isImageLoaded = false;
      return axios
        .get("http://192.168.1.171:3000/image")
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.log(err));
    },
    async setAlbums() {
      try {
        const albums = await this.getAlbums();
        for (let i = 0; i < albums.length; i++) {
          this.albums.push(await getImage(albums[i]));
        }
        this.$store.state.isLoading = false;
        this.$store.state.isImageLoaded = true;
      } catch (e) {
        console.log(e);
      }
    },
  },
  async mounted() {
    await this.setAlbums();
    // for (let i = 0; i < this.albums.length; i++) {
    //   await getAlbumsCount(this.albums[i]);
    // }
  },
};
</script>

<style scoped lang="scss">
.album-layout {
  //min-height: 100vh;
  width: calc((100vw - 130px));
  padding: 30px 0;
  margin: auto;
  row-gap: 30px;
  column-gap: 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
h1 {
  color: #fafafc;
  z-index: 9999999;
}
@media (max-width: 500px) {
  .album-layout {
    grid-template-columns: 1fr;
    margin: unset;
    width: unset;
  }
}
</style>
