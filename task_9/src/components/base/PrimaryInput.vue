<template>
  <input
    :type="type"
    class="input"
    required
    :value="modelValue"
    @input="updateInput"
  />
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PrimaryInput",
  props: {
    type: {
      type: String,
      require: true,
      default: "text",
    },
    modelValue: {
      type: [String, Number],
    },
  },
  methods: {
    updateInput(event: Event) {
      this.$emit("update:modelValue", (event.target as HTMLInputElement).value);
    },
  },
});
</script>
<style scoped>
.input {
  border: 2px solid rgb(86, 100, 255);
  border-radius: 10px;
  padding: 5px 10px;
  width: 100%;
}
.input:focus {
  background-color: rgb(207, 245, 255);
}
</style>
