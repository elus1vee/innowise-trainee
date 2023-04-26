<template>
  <div class="wrapper">
    <div
      class="calendar-list"
      :style="{ 'margin-left': '-' + currentIndex + 'px' }"
    >
      <calendar-day
        v-for="day in calendarData"
        :date="day"
        :active="selectedDay(day.fullDate)"
        :key="day.fullDate"
        @active="activeDay"
      />
    </div>
  </div>
</template>
<script>
import calendarDay from "./calendarDay.vue";
export default {
  components: {
    calendarDay,
  },
  name: "calendar-list",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    calendarData: {
      require: true,
    },
    active: {
      type: String,
    },
  },
  methods: {
    activeDay(date) {
      this.$emit("active", date);
    },
    selectedDay(date) {
      if (date === this.active) {
        return true;
      } else {
        return false;
      }
    },
    leftSlide() {
      if (this.currentIndex > 0) {
        if (this.currentIndex < 75) {
          this.currentIndex = 0;
        } else {
          this.currentIndex -= this.scrollLength;
        }
      }
    },
    rightSlide() {
      if (this.leftWidth !== 0) {
        this.currentIndex += this.scrollLength;
      }
    },
    updateWidth() {
      this.width = window.innerWidth;
    },
  },
  watch: {},
  computed: {
    fullCalendarWidth() {
      return 75 * this.calendarData.length;
    },
    contentWidth() {
      let width = 722;
      if (!(window.innerWidth > 722)) {
        width = window.innerWidth - 40;
      }
      return width;
    },
    leftWidth() {
      if (this.fullCalendarWidth - this.contentWidth - this.currentIndex < 0)
        return 0;
      return this.fullCalendarWidth - this.contentWidth - this.currentIndex;
    },
    startLeftWidth() {
      if (this.fullCalendarWidth - this.contentWidth < 0) return 0;
      return this.fullCalendarWidth - this.contentWidth;
    },
    scrollLength() {
      let scrollLength = 75;
      if (this.leftWidth % 75 > 0) {
        scrollLength = this.leftWidth % 75;
      }
      return scrollLength;
    },
  },
};
</script>
<style scoped lang="scss">
.calendar-list {
  display: flex;
  margin-bottom: 15px;
}
</style>
