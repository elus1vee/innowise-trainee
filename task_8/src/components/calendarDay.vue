<template>
  <div
    :class="[active ? 'day_active' : '', 'day']"
    @click="activeDay(date.fullDate)"
  >
    <div class="day__body">
      <p class="day__name">{{ date.title }}</p>
      <p class="day__number">{{ date.numberDate }}</p>
    </div>
    <div class="day__info">
      <div class="day__completed" v-if="date.completed"></div>
      <div class="day__unfulfilled" v-if="date.unfulfilled"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "calendar-day",
  components: {},
  data() {
    return {};
  },
  props: {
    date: {
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    activeDay(date) {
      this.$emit("active", date);
    },
  },
};
</script>
<style lang="scss">
.day {
  margin: 10px;
  min-width: 55px;
  font-size: 16px;
  cursor: pointer;

  &_active > .day__body {
    background-color: rgb(24, 24, 24);
    color: white;
  }
  &:hover > .day__body {
    background-color: rgb(207, 207, 207);
  }
  &__body {
    border: 1px solid rgb(167, 167, 167);
    border-radius: 15px;
    padding: 8px;
    height: 65px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__name {
    margin-bottom: 10px;
  }
  &__number {
    font-weight: 800;
  }
  &__info {
    padding: 5px 0px;
    display: flex;
    justify-content: center;
    gap: 5px;
  }
  &__completed {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: rgb(255, 187, 0);
  }
  &__unfulfilled {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: rgb(117, 79, 17);
  }
}
</style>
