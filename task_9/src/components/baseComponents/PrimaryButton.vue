<template>
  <button class="button">
    <slot></slot>
  </button>
</template>
<script lang="ts">
export default {};
</script>
<style scoped>
.button {
  background: inherit;
  border: 2px solid rgb(48, 217, 255);
  border-radius: 10px;
  padding: 7px 15px;
  font-weight: 800;
  color: rgb(48, 217, 255);
}
.button:hover {
  background-color: rgba(28, 133, 156, 0.3);
}
</style>
