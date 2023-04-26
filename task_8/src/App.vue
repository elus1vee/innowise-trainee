<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
.content {
  display: flex;
  justify-content: center;
  height: 80vh;
  margin: 30px 20px;
}
</style>
