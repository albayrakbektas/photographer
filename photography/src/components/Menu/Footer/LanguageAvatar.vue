<template>
  <div class="language-avatar-container bg-linear">
    <AvatarMain
      v-for="(item, index) of this.languages"
      :key="index"
      :item="item"
    >
      <span ref="span">{{ item.content }}</span>
    </AvatarMain>
  </div>
</template>

<script>
import AvatarMain from "@/components/Avatar/AvatarMain";
export default {
  name: "LanguageAvatar",
  components: { AvatarMain },
  mounted() {
    this.$refs.span[0].classList.add("language-span-active");
  },
  data() {
    return {
      languages: [
        {
          href: "#",
          content: "TR",
        },
        {
          href: "#",
          content: "EN",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.language-avatar-container {
  display: grid;
  justify-content: end;
  padding: calc((70px - 25px) / 2);
}
span {
  color: rgba(255, 0, 0, 1) !important;
}
.language-span-active {
  color: rgba(0, 0, 0, 1) !important;
}
</style>
