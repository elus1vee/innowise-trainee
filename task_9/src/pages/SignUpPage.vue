<template>
  <div class="signup">
    <div class="signup__content">
      <h2 class="signup__title">Registration</h2>
      <span>Email</span>
      <PrimaryInput
        type="email"
        v-model="email"
        placeholder="Email"
        class="signup__input"
      />
      <span>Password</span>
      <PrimaryInput
        type="password"
        v-model="password"
        placeholder="Password"
        class="signup__input"
      />
      <span>Confirm password</span>
      <PrimaryInput
        type="password"
        v-model="confirmPassword"
        placeholder="Confirm password "
        class="signup__input"
      />
      <PrimaryButton @click="signUp" class="signup__signup-btn"
        >Register</PrimaryButton
      >
      <div class="signup__signin">
        <p>Already have an account?</p>
        <RouterLink to="/signin">
          <p class="signin__signup-btn">Sign in</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import { useAuthUser } from "@/store/auth";

export default defineComponent({
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      authUser: useAuthUser(),
    };
  },
  methods: {
    async signUp() {
      if (
        this.password === this.confirmPassword &&
        this.email.length > 6 &&
        this.password.length > 6
      ) {
        const loading = toast.loading("Loading...");

        await this.authUser
          .signUp(this.email, this.password)
          .then(() => {
            toast.remove(loading);
            toast.success("Success!");
            this.$router.push("signin");
          })
          .catch((er) => {
            toast.remove(loading);
            toast.error("Error!");
            toast.info(er.message.toString());
          });
      } else if (this.password.length <= 6) {
        toast.warning(`Password must be at least 7 characters!`, {
          autoClose: 3000,
        });

        this.email = "";
        this.password = "";
        this.confirmPassword = "";
      } else {
        toast.warning(`Invalid password or email!`, {
          autoClose: 3000,
        });

        this.email = "";
        this.password = "";
        this.confirmPassword = "";
      }
    },
  },
});
</script>
<style lang="scss">
.signup {
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
    max-width: 50%;
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
  &__signin {
    margin-top: 15px;
    display: flex;
    & > p {
      color: white;
      margin-right: 5px;
    }
  }
  &__signup-btn {
    width: 100%;
  }
  &__signin-btn {
    color: rgb(48, 217, 255);
    text-decoration: underline;
  }
}
</style>
