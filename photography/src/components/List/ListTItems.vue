<template>
  <div>
    <ul>
      <ListItem
        ref="list-item"
        v-for="(item, index) of listItems"
        :key="index"
        :item="item"
      >
        <slot></slot>
        <!--        <ul>-->
        <!--          <ListItem-->
        <!--            v-for="(subItem, index) of item.subItems"-->
        <!--            :key="index"-->
        <!--            :item="subItem"-->
        <!--          >-->
        <!--          </ListItem>-->
        <!--        </ul>-->
      </ListItem>
    </ul>
  </div>
</template>

<script>
import ListItem from "@/components/List/ListItem";
export default {
  name: "ListTItems",
  components: { ListItem },
  props: {
    listItems: Array,
  },
};
</script>

<style scoped></style>
