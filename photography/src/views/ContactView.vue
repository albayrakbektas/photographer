<template>
  <LayoutView>
    <ContactInformation />
    <GetInTouch />
    <CarouselRow />
  </LayoutView>
</template>

<script>
import ContactInformation from "@/components/Page/Contact/ContactInformation";
import LayoutView from "@/components/Layout/LayoutView";
import GetInTouch from "@/components/Page/Contact/GetInTouch";
import CarouselRow from "@/components/Page/Contact/CarouselRow";
export default {
  name: "ContactView",
  components: { CarouselRow, GetInTouch, LayoutView, ContactInformation },
  mounted() {
    this.$store.state.isLoading = false;
    this.$store.state.isImageLoaded = true;
  },
};
</script>

<style scoped lang="scss"></style>
