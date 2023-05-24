<template>
  <div class="main">
    <div class="main__header">
      <PrimaryButton class="main__logout" @click="authUser.logout"
        >Logout</PrimaryButton
      >
      <div class="main__user">
        <p class="main__email">{{ authUser.email }}</p>
        <PrimaryButton @click="createNewImg">Create</PrimaryButton>
      </div>
    </div>
    <div class="main__body">
      <p>Search by user</p>
      <PrimaryInput v-model="searchQuery" />
      <ImageList
        :img-data="reversedItems"
        v-if="!loading && reversedItems.length > 0"
      />
      <ContentLoader v-else-if="loading" class="main__loader" />
      <div v-else class="main__error">No images yet</div>
    </div>
    <div class="main__footer"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import ImageList from "@/components/ImageList.vue";

import { useAuthUser } from "@/store/auth";
import { useImageStore } from "@/store/userImages";

import { IImageItem } from "@/models/canvasModels";

export default defineComponent({
  components: {
    ImageList,
  },
  data: () => {
    return {
      authUser: useAuthUser(),
      imageStore: useImageStore(),
      imageData: [
        { author: "", url: "", path: "", name: "" },
      ] as Array<IImageItem>,
      loading: true,
      searchQuery: "",
    };
  },
  created() {
    this.fetchImgData();
  },
  computed: {
    sortedImageData() {
      return this.imageData.filter((image) =>
        image.author.includes(this.searchQuery)
      );
    },
    reversedItems() {
      return [...this.sortedImageData].reverse();
    },
  },
  methods: {
    createNewImg() {
      this.$router.push("canvas");
    },
    async fetchImgData() {
      setTimeout(async () => {
        const imgData = await this.imageStore.loadImg();
        this.imageData = imgData;
        this.loading = false;
      }, 800);
    },
  },
});
</script>
<style lang="scss">
.main {
  width: 80vw;
  &__header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    border-bottom: 2px solid rgb(48, 217, 255);
    margin-bottom: 15px;
  }
  &__error {
    text-align: center;
    margin-top: 30px;
    font-weight: 800;
    font-size: 25px;
    color: rgb(48, 217, 255);
  }
  &__user {
    display: flex;
    align-items: center;
    gap: 10px;
    p {
      font-size: 18px;
      font-weight: 700;
      color: rgb(48, 217, 255);
    }
  }
  &__body {
    display: flex;
    flex-direction: column;
    > p {
      font-size: 25px;
      color: rgb(48, 217, 255);
      margin: 0px 10px 7px 0px;
    }
    input {
      max-width: 300px;
      font-size: 16px;
    }
  }
  &__loader {
    margin: 30px auto;
  }
}
</style>
