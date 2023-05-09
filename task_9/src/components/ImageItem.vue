<template>
  <div class="image-item">
    <img :src="imgData.url" alt="" class="image-item__img" />
    <p class="image-item__author">{{ imgData.author }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

import { IImageItem } from "@/models/canvasModels";

export default defineComponent({
  name: "ImageItem",
  props: {
    imgData: {
      type: Object as PropType<IImageItem>,
      required: true,
      default() {
        return { path: "", url: "", author: "", name: "" };
      },
    },
  },
  methods: {},
});
</script>
<style lang="scss">
.image-item {
  border: 1px solid white;
  border-radius: 15px;
  background-color: rgba(36, 30, 167, 0.3);
  padding: 15px;
  margin: 20px 0px;
  position: relative;
  cursor: pointer;

  &:hover {
    z-index: 2;
    transform: scale(1.05);
  }

  &__img {
    background-color: white;
    max-width: 300px;
    max-height: 300px;
  }
  &__author {
    font-size: 18px;
    font-weight: 600;
    color: white;
    text-align: start;
    margin-top: 10px;
  }
}
</style>
