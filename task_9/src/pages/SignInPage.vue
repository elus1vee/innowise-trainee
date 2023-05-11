<template>
  <div class="signin">
    <div class="signin__content">
      <h2 class="signin__title">Sign In</h2>
      <span>Email</span>
      <PrimaryInput
        type="email"
        v-model="email"
        placeholder="Enter email"
        class="signin__input"
      />
      <span>Password</span>
      <PrimaryInput
        type="password"
        v-model="password"
        placeholder="Enter password"
        class="signin__input"
      />
      <PrimaryButton @click="signIn()" class="signin__signin-btn"
        >Sign In</PrimaryButton
      >
      <div class="signin__register">
        <p>Still not registered?</p>
        <RouterLink to="/signup">
          <!-- <PrimaryButton class="signin__signup-btn">Register</PrimaryButton> -->
          <p class="signin__signup-btn">Register</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import { useAuthUser } from "@/stores/auth";

export default defineComponent({
  data() {
    return {
      email: "",
      password: "",
      authUser: useAuthUser(),
    };
  },
  methods: {
    async signIn() {
      this.authUser
        .signIn(this.email, this.password)
        .then(() => {
          toast.success("Success!");
          this.$router.push("/");
        })
        .catch((er) => {
          toast.error("Error!");
          toast.info(er.toString());
        });
    },
  },
});
</script>
<style lang="scss">
.signin {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  &__content {
    border: 3px solid rgb(48, 217, 255);
    background-color: rgb(0, 53, 99);
    border-radius: 15px;
    padding: 20px;
    height: max-content;

    span {
      font-size: 18px;
      width: 100%;
      color: rgb(48, 217, 255);
    }
  }
  &__title {
    color: rgb(48, 217, 255);
    font-size: 24px;
    font-weight: 800;
    line-height: 24px;
    border-bottom: 1px solid rgb(48, 217, 255);
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  &__input {
    margin-top: 7px;
    margin-bottom: 15px;
  }
  &__register {
    margin-top: 15px;
    display: flex;
    & > p {
      color: white;
      margin-right: 5px;
    }
  }
  &__signin-btn {
    width: 100%;
  }
  &__signup-btn {
    color: rgb(48, 217, 255);
    text-decoration: underline;
  }
}
</style>
