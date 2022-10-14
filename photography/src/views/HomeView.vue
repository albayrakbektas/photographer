<template>
  <div class="page">
    <GridMain>
      <ImageHomeCard
        v-for="(item, index) of imgList"
        :card="item"
        :key="`${item.name}_${index}`"
      />
    </GridMain>
  </div>
</template>

<script>
import GridMain from "@/components/Grid/GridMain";
import { getAllImages } from "@/services/firebase.js";
import ImageHomeCard from "@/components/ImageHomeCard";
export default {
  name: "HomeView",
  components: { ImageHomeCard, GridMain },
  data() {
    return {
      imgList: [],
    };
  },
  async mounted() {
    fetch("http://192.168.1.171:3000/image", {
      method: "get",
    })
      .then((response) => {
        this.$store.state.isLoading = true;
        return response.json();
      })
      .then((json) => {
        this.$store.state.albums = json;
      })
      .then(async () => {
        this.imgList = await getAllImages();
      })
      .then(() => {
        this.$store.state.isLoading = false;
      })
      .catch((err) => console.log(err));
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.page {
  display: flex;
  margin: 0 auto;
}
</style>
