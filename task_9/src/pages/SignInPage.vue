<template>
  <div class="signin">
    <div class="signin__content">
      <h2 class="signin__title">Sign In</h2>
      <PrimaryInput
        type="email"
        v-model="email"
        placeholder="Email"
        class="signin__input"
      />
      <PrimaryInput
        type="password"
        v-model="password"
        placeholder="Password"
        class="signin__input"
      />
      <div class="signin__buttons">
        <PrimaryButton @click="signIn()">Sign In</PrimaryButton>
        <RouterLink to="/signup">
          <PrimaryButton>Register</PrimaryButton>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import PrimaryButton from "@/components/baseComponents/PrimaryButton.vue";
import PrimaryInput from "@/components/baseComponents/PrimaryInput.vue";

import { useAuthUser } from "@/stores/auth";

export default defineComponent({
  components: {
    PrimaryInput,
    PrimaryButton,
  },
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

  &__content {
    border: 3px solid rgb(48, 217, 255);
    border-radius: 15px;
    padding: 20px;
    width: 80%;
    height: max-content;
  }
  &__title {
    color: rgb(48, 217, 255);
    font-size: 24px;
    font-weight: 800;
    line-height: 24px;
    padding-bottom: 20px;
  }
  &__input {
    margin-bottom: 15px;
  }
  &__buttons {
    display: flex;
    justify-content: space-around;
  }
}
</style>
