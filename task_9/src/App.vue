<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useAuthUser } from "./stores/auth";
import { authService } from "./services/auth.service";

export default defineComponent({
  data() {
    return {
      authUser: useAuthUser(),
    };
  },
  async mounted() {
    console.log(process.env);

    authService.authStateChanged((user) => {
      if (user) {
        useAuthUser().setEmail(user.email);
      } else {
        this.$router.push("/signin");
      }
    });
    if (!this.authUser.isLoggedIn) this.$router.push("/signin");
  },
});
</script>
<style lang="scss">
.content {
  display: flex;
  justify-content: center;
  height: 80vh;
  margin: 30px 20px;
}
</style>
