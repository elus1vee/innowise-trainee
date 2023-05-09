<template>
  <div class="image-list">
    <ImageItem
      class="image-list__item"
      v-for="item in imgData"
      :key="item.path"
      :img-data="item"
    ></ImageItem>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

import { IImageItem } from "@/models/canvasModels";

import ImageItem from "./ImageItem.vue";

export default defineComponent({
  name: "ImageList",
  components: { ImageItem },
  props: {
    imgData: {
      type: Array as PropType<Array<IImageItem>>,
      required: true,
      default() {
        return [{ path: "", url: "", author: "" }];
      },
    },
  },
  methods: {},
  mounted() {
    console.log(this.imgData);
  },
});
</script>
<style lang="scss">
.image-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  //   gap: 15px;
}
</style>
