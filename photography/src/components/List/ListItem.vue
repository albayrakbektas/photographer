<template>
  <div
    is="li"
    @click="showSubItems(item)"
    class="list-item-container"
    :class="[$store.state.isMenuActive ? 'li-active' : '']"
  >
    <router-link :to="item.href || '#'">
      <span
        class="parent-span"
        :class="this.$route.name === item.content ? 'router-link-active' : ''"
        >{{ item.content }}</span
      >
      <i
        ref="fa-chevron-right"
        v-if="item.subItems"
        :class="[
          isUlActive
            ? 'fa-solid fa-chevron-down'
            : 'fa-solid fa-chevron-right' || item.nextIcon,
        ]"
      ></i>
    </router-link>
    <ListItems :is-sub-ul="true" :class="[isUlActive ? 'sub-ul-active' : '']">
      <li
        @click="showSubItems"
        class="list-item-container sub-li"
        :class="[isUlActive ? 'sub-li-active' : '']"
        v-for="(subItem, index) of item.subItems"
        :key="index"
      >
        <router-link
          :to="
            subItem.content === 'all'
              ? '/albums'
              : { name: 'album', params: { albumName: subItem.href } }
          "
        >
          <span>{{ subItem.content }}</span>
          <i
            v-if="subItem.subItems"
            :class="subItem.nextIcon || 'fa-solid fa-chevron-right'"
          ></i>
        </router-link>
      </li>
    </ListItems>
  </div>
</template>

<script>
import ListItems from "@/components/List/ListItems";
export default {
  name: "ListItem",
  components: { ListItems },
  data() {
    return {
      isUlActive: false,
    };
  },
  props: {
    item: Object,
  },
  methods: {
    showItems(item) {
      this.$route.name = item.href;
      //     .catch((err) => {
      //   if (
      //     err.name !== "NavigationDuplicated" &&
      //     !err.message.includes(
      //       "Avoided redundant navigation to current location"
      //     )
      //   ) {
      //     console.log(err);
      //   }
      // });
      // location.reload();
    },
    setActiveSpanColor() {
      console.log(this.$route);
      const spanElements = document.querySelectorAll("span");
      spanElements.forEach((span) => {
        console.log(this.$route.name === span.textContent);
        if (this.$route.name === span.textContent) {
          span.classList.add("active-router-span");
        }
      });
    },
    showSubItems(item) {
      if (!item.subItems) {
        this.$store.state.isMenuActive = false;
      }
      this.isUlActive = !this.isUlActive;
    },
  },
  mounted() {
    // this.setActiveSpanColor();
  },
};
</script>

<style scoped lang="scss">
.list-item-container {
  cursor: pointer;
}
li {
  display: block;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  background-color: transparent;
  width: 0;
  translate: -100% -100%;
  transition: 1s ease-in-out;
  &:hover {
    a {
      span.parent-span {
        color: rgba(255, 0, 0, 1) !important;
      }
    }
  }
}
.sub-li {
  &:hover {
    a {
      span {
        color: rgba(255, 0, 0, 1) !important;
      }
    }
  }
}
.li-active {
  width: 100%;
  translate: 0 0;
}
span {
  font-size: 12px;
  color: #8c8c8e;
}
.router-link-active {
  color: rgba(255, 0, 0, 0.8);
}
i {
  color: #ffc107;
}
.sub-li {
  pointer-events: none;
  font-size: 10px;
  opacity: 0;
  transition: 0.6s ease-in-out;
}
.sub-li-active {
  opacity: 1;
  pointer-events: all;
}
a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 30px;
  line-height: 1.2;
}
</style>
