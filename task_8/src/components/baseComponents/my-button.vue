<template>
  <button class="button">
    <slot></slot>
  </button>
</template>
<script>
export default {};
</script>
<style scoped>
.button {
  background: inherit;
  border: 2px solid rgb(254, 170, 13);
  border-radius: 10px;
  padding: 3px 5px;
  font-weight: 800;
  color: rgb(254, 170, 13);
}
.button:hover {
  background-color: rgb(255, 239, 193);
}
</style>
