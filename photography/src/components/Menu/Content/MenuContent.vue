<template>
  <div class="list-items-grid">
    <ListItems>
      <ListItem
        v-for="(item, index) of listItems"
        :key="index"
        :item="item"
      ></ListItem>
    </ListItems>
  </div>
</template>

<script>
import ListItems from "@/components/List/ListItems";
import ListItem from "@/components/List/ListItem";
import axios from "axios";
export default {
  name: "MenuContent",
  components: { ListItem, ListItems },
  computed: {},
  data() {
    return {
      updatedList: [],
      listItems: [
        {
          content: "home",
          href: "/",
        },
        {
          content: "albums",
          href: "#.",
          subItems: [
            {
              content: "all",
              href: "albums",
            },
          ],
        },
        {
          content: "contact",
          href: "/contact",
        },
      ],
    };
  },
  methods: {
    getAlbums() {
      let req = axios.create({
        baseURL: "https://photographer-albayrakbektas.vercel.app/api/",
      });
      return req
        .get("image")
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.log(err));
    },
    async setAlbums() {
      const albums = await this.getAlbums();
      for (let i = 0; i < albums.length; i++) {
        this.listItems[1].subItems.push({
          content: albums[i],
          href: `${albums[i]}`,
        });
      }
    },
  },
  created() {
    this.$watch(
      () => this.getAlbums(),
      () => {
        this.setAlbums();
      },
      { immediate: true }
    );
  },
};
</script>

<style scoped lang="scss">
.list-items-grid {
  width: 100%;
  padding-bottom: 45px;
}
</style>
