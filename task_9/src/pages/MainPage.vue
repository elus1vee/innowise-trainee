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
      <ImageList :img-data="sortedImageData" v-if="!loading" />
      <ContentLoader v-else class="main__loader" />
    </div>
    <div class="main__footer"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import PrimaryButton from "@/components/baseComponents/PrimaryButton.vue";
import PrimaryInput from "@/components/baseComponents/PrimaryInput.vue";
import ImageList from "@/components/ImageList.vue";
import ContentLoader from "@/components/baseComponents/ContentLoader.vue";

import { useAuthUser } from "@/stores/auth";
import { useImageStore } from "@/stores/image";

import { IImageItem } from "@/models/canvasModels";

export default defineComponent({
  components: {
    PrimaryButton,
    PrimaryInput,
    ImageList,
    ContentLoader,
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
  methods: {
    createNewImg() {
      this.$router.push("canvas");
    },
    async fetchImgData() {
      setTimeout(async () => {
        const imgData = await this.imageStore.loadImg();
        this.imageData = imgData;
        this.loading = false;
      }, 500);
    },
  },
  computed: {
    sortedImageData() {
      return this.imageData.filter((image) =>
        image.author.includes(this.searchQuery)
      );
    },
  },
  mounted() {
    console.log(process.env);

    this.fetchImgData();
    // this.userAuthorized();
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
