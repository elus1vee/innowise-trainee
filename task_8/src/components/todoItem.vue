<template>
  <div class="todo-item">
    <div class="todo-item__content">
      <input
        type="checkbox"
        name="todo"
        class="todo-item__checkbox"
        v-model="selected"
      />
      <label class="todo-item__title">{{ item.title }}</label>
    </div>
    <div class="todo-item__edit">
      <button class="todo-item__button" @click="todoEdit" />
    </div>
  </div>
</template>
<script>
import { useAuthUser } from "@/stores/user";

export default {
  name: "todo-item",
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      newItem: this.item,
      selected: this.item.completed,
      authUser: useAuthUser(),
    };
  },
  methods: {
    todoEdit() {
      this.authUser.selectedTodo = this.newItem;
      this.$router.push("todo_update");
    },
  },
  watch: {
    selected(newValue) {
      this.newItem.completed = newValue;
      this.$emit("update", this.newItem);
    },
  },
};
</script>
<style lang="scss" scoped>
.todo-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  justify-content: space-between;
  &__content {
    display: flex;
  }
  &__checkbox {
    display: block;
    border: 2px solid black;
    border-radius: 50%;
  }
  &__title {
    margin-left: 20px;
    font-size: 20px;
  }
  &__button {
    background: url("@/assets/img/three_dots.svg") 0 0 no-repeat;
    background-size: contain;
    background-position: center;
    width: 20px;
    height: 20px;
  }
  &__checkbox {
    cursor: pointer;
    display: block;
    border-radius: 50%;
  }
}
</style>
