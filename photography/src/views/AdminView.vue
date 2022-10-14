<template>
  <div>
    <ImageAddingForm />
  </div>
</template>

<script>
import ImageAddingForm from "@/components/Admin/ImageAddingForm";
import axios from "axios";
export default {
  name: "AdminView",
  components: { ImageAddingForm },
  async mounted() {
    let req = axios.create({ baseURL: "http://192.168.1.171:3000/" });
    await req
      .get("/admin")
      .then((res) => {
        if (res.data === "ok") {
          return;
        }
        this.$router.push(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    this.$store.state.isLoading = false;
    this.$store.state.isImageLoaded = true;
  },
  methods: {
    async isAdmin() {
      let response = await axios.get("/admin");
      console.log(response);
    },
  },
};
</script>

<style scoped lang="scss"></style>
