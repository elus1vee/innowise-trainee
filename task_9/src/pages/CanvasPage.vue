<template>
  <div class="canvas-page">
    <PrimaryButton @click="$router.push('/')">Back</PrimaryButton>
    <div class="canvas-page__content">
      <input
        type="range"
        v-if="sizeSwitcher"
        class="canvas-page__widthSwitcher"
        min="1"
        max="30"
        v-model="widthSize"
      />
      <div class="canvas-page__sidebar">
        <div
          class="canvas-page__pencil"
          @click="tabSwitch('pencil')"
          :class="activeTab === 'pencil' ? 'active-tab' : ''"
        ></div>
        <div
          class="canvas-page__size"
          @click="sizeToggle"
          :class="sizeSwitcher ? 'active-tab' : ''"
        ></div>
        <div
          class="canvas-page__line"
          @click="tabSwitch('line')"
          :class="activeTab === 'line' ? 'active-tab' : ''"
        ></div>
        <div
          class="canvas-page__rectangle"
          @click="tabSwitch('rectangle')"
          :class="activeTab === 'rectangle' ? 'active-tab' : ''"
        ></div>
        <div
          class="canvas-page__circle"
          @click="tabSwitch('circle')"
          :class="activeTab === 'circle' ? 'active-tab' : ''"
        ></div>
        <input type="color" class="canvas-page__color" v-model="color" />
        <div class="canvas-page__trash" @click="clearCanvas"></div>
      </div>
      <canvas
        class="canvas-page__canvas"
        ref="canvas"
        @mousedown="startDrawing"
        @mouseup="stopDrawing"
        @mousemove="drawIfPressed"
        height="500"
        width="500"
      >
      </canvas>
    </div>

    <div class="canvas-page__footer">
      <PrimaryButton @click="saveImg" class="canvas-page__save"
        >Save</PrimaryButton
      >
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { useImageStore } from "@/stores/image";
import { useAuthUser } from "@/stores/auth";

export default defineComponent({
  data() {
    return {
      imageStore: useImageStore(),
      authUser: useAuthUser(),
      activeTab: "none",
      color: "",
      paintType: "",
      isDrawing: false,
      x: 0,
      y: 0,
      prevX: null as number | null,
      prevY: null as number | null,
      canvas: 0 as any,
      context: 0 as any,
      sizeSwitcher: false,
      widthSize: 1,
    };
  },
  methods: {
    startDrawing(event: MouseEvent) {
      this.prevX = event.offsetX;
      this.prevY = event.offsetY;
      this.isDrawing = true;
    },
    stopDrawing(event: MouseEvent) {
      this.context.beginPath();
      switch (this.activeTab) {
        case "rectangle": {
          const x = event.offsetX;
          const y = event.offsetY;
          if (this.prevX !== null && this.prevY !== null) {
            this.context.rect(
              this.prevX,
              this.prevY,
              x - this.prevX,
              y - this.prevY
            );
          }
          break;
        }
        case "line": {
          this.context.moveTo(this.prevX, this.prevY);
          this.context.lineTo(event.offsetX, event.offsetY);
          break;
        }
        case "circle": {
          if (this.prevX !== null && this.prevY !== null) {
            const radius = Math.sqrt(
              Math.pow(event.offsetX - this.prevX, 2) +
                Math.pow(event.offsetY - this.prevY, 2)
            );
            this.context.arc(this.prevX, this.prevY, radius, 0, 2 * Math.PI);
          }
          break;
        }
        default:
          break;
      }
      this.context.stroke();
      this.isDrawing = false;
    },
    drawIfPressed(event: MouseEvent) {
      if (this.activeTab === "pencil") {
        if (this.prevX == null || this.prevY == null || !this.isDrawing) {
          this.prevX = event.offsetX;
          this.prevY = event.offsetY;
          return;
        }

        let currentX = event.offsetX;
        let currentY = event.offsetY;
        this.context.beginPath();

        this.context.moveTo(this.prevX, this.prevY);
        this.context.lineTo(currentX, currentY);
        this.context.stroke();
        this.prevX = currentX;
        this.prevY = currentY;
      }
    },
    sizeToggle() {
      this.sizeSwitcher
        ? (this.sizeSwitcher = false)
        : (this.sizeSwitcher = true);
    },
    pencilTab() {
      if (this.activeTab === "pencil") {
        this.activeTab = "none";
      } else {
        this.activeTab = "pencil";
      }
    },
    tabSwitch(tab: string) {
      if (this.activeTab === tab) {
        this.activeTab = "none";
      } else {
        this.activeTab = tab;
      }
    },
    async saveImg() {
      // this.canvas.toBlob((blob: Blob) => {
      //   console.log(blob);
      // }, "image/png");
      console.log(this.canvas);

      await this.canvas.toBlob(async (blob: Blob) => {
        await this.imageStore.saveImg(blob, this.authUser.email);
      }, "image/png");
      this.$router.push("/");
    },
    async loadImg(name: string) {
      const url = await this.imageStore.getImgByName(name);
      const img = new Image();
      img.addEventListener(
        "load",
        () => {
          this.context.drawImage(img, 0, 0);
        },
        false
      );
      img.src = url;
    },
    checkParams() {
      const id = this.$route.params.id;
      if (typeof id === "string") {
        this.loadImg(id);
      }
    },
    clearCanvas() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
  },
  watch: {
    color() {
      this.context.strokeStyle = this.color;
    },
    widthSize() {
      this.context.lineWidth = this.widthSize;
    },
  },
  mounted() {
    this.canvas = this.$refs.canvas as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.context.lineCap = "round";
    this.context.lineWidth = 1;
    this.context.strokeStyle = "black";
    this.checkParams();
  },
});
</script>
<style lang="scss">
.canvas-page {
  &__content {
    display: flex;
    height: 80%;
    position: relative;
    margin-top: 20px;
    border: 3px solid rgb(48, 217, 255);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    // overflow: hidden;
  }
  &__footer {
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
  }
  &__sidebar {
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 100%;
    background: rgb(136, 130, 236);
    padding: 10px 20px;
    border-top-left-radius: 17px;
    border-bottom-left-radius: 17px;
  }
  &__widthSwitcher {
    appearance: slider-vertical;
    -webkit-appearance: slider-vertical;
    width: 3px;
    height: 100px;
    position: absolute;
    left: -30px;
  }
  &__canvas {
    background-color: white;
  }
  &__pencil {
    -webkit-mask-image: url("@/assets/img/pencil.svg");
    mask-image: url("@/assets/img/pencil.svg");
    mask-size: contain;
    background-color: rgb(48, 217, 255);
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  &__color {
    width: 40px;
    cursor: pointer;
    border: 3px solid rgb(48, 217, 255);
  }
  &__size {
    -webkit-mask-image: url("@/assets/img/width.svg");
    mask-image: url("@/assets/img/width.svg");
    mask-size: contain;
    background-color: rgb(48, 217, 255);
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  &__line {
    -webkit-mask-image: url("@/assets/img/line.svg");
    mask-image: url("@/assets/img/line.svg");
    mask-size: contain;
    background-color: rgb(48, 217, 255);
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  &__rectangle {
    -webkit-mask-image: url("@/assets/img/rect.svg");
    mask-image: url("@/assets/img/rect.svg");
    mask-size: contain;
    background-color: rgb(48, 217, 255);
    background-size: 40px;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  &__circle {
    -webkit-mask-image: url("@/assets/img/circle.svg");
    mask-image: url("@/assets/img/circle.svg");
    background-color: rgb(48, 217, 255);
    mask-size: contain;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  &__trash {
    -webkit-mask-image: url("@/assets/img/trash.svg");
    mask-image: url("@/assets/img/trash.svg");
    background-color: rgb(48, 217, 255);
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  &__save {
    width: 100%;
  }
}

.active-tab {
  position: relative;
  background-color: rgb(1, 49, 242);
}
</style>
