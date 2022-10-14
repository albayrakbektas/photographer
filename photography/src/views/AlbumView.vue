<template>
  <LayoutView>
    <GridMain>
      <ImageHomeCard
        v-for="(item, index) of imgList"
        :card="item"
        :key="`${item.name}_${index}`"
      />
    </GridMain>
  </LayoutView>
</template>

<script>
import LayoutView from "@/components/Layout/LayoutView";
import GridMain from "@/components/Grid/GridMain";
import ImageHomeCard from "@/components/ImageHomeCard";
import { getAllImages } from "@/services/firebase";
export default {
  name: "AlbumView",
  components: { ImageHomeCard, GridMain, LayoutView },
  data() {
    return {
      imgList: [],
    };
  },
  methods: {},
  async mounted() {
    const album = this.$route.params.albumName;
    this.imgList = await getAllImages([album]);
  },
};
</script>

<style scoped lang="scss"></style>
