<template>
  <div class="todo-list">
    <div class="todo-list__title">{{ title }} Tasks today</div>
    <div class="todo-list__content">
      <todoItem
        v-for="todo in todoData"
        :key="todo.description"
        :item="todo"
        @update="updateTodo"
      />
    </div>
  </div>
</template>
<script>
import todoItem from "./todoItem.vue";
import { useAuthUser } from "@/stores/user";

export default {
  name: "todo-list",
  components: {
    todoItem,
  },
  props: {
    todoData: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      authUser: useAuthUser(),
    };
  },
  methods: {
    updateTodo(updatedTodo) {
      const newTodoList = this.newTodoData.map((el) => {
        if (
          el.description === updatedTodo.description &&
          el.title === updatedTodo.title
        ) {
          return updatedTodo;
        } else {
          return el;
        }
      });
      this.$emit("update", newTodoList);
    },
    addNewTodo() {
      this.authUser.selectedDay = this.active;
      this.authUser.calendarData = this.calendarData;
      this.authUser.selectedTodo = {};
      this.$router.push("todo_update");
    },
  },
  computed: {
    title() {
      if (this.todoData === undefined) {
        return "0";
      } else {
        return this.todoData.length;
      }
    },
    newTodoData() {
      if (this.todoData) {
        return this.todoData;
      } else {
        return "!";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.todo-list {
  margin-top: 25px;
  &__title {
    font-weight: 700;
    margin-bottom: 20px;
  }
}
</style>
