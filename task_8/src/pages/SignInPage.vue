<template>
  <div class="signin">
    <div class="signin__content">
      <h2 class="signin__title">Sign In</h2>
      <text-input
        type="email"
        v-model="email"
        placeholder="Email"
        class="signin__input"
      />
      <text-input
        type="password"
        v-model="password"
        placeholder="Password"
        class="signin__input"
      />
      <div class="signin__buttons">
        <my-button @click="signIn()">Sign In</my-button>
        <RouterLink to="/signup">
          <my-button>Register</my-button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import textInput from "@/components/baseComponents/text-input.vue";
import myButton from "@/components/baseComponents/my-button.vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthUser } from "@/stores/user";

export default {
  components: {
    textInput,
    myButton,
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
      await firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.authUser.$state.email = this.email;
          toast.success("Success!");
          this.$router.push("todo");
        })
        .catch((er) => {
          toast.error("Error!");
          toast.info(er.toString());
        });
    },
    async logout() {
      await firebase.auth().signOut();
    },
  },
  async mounted() {
    await this.logout();
  },
};
</script>
<style lang="scss">
.signin {
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    border: 3px solid rgb(255, 170, 13);
    border-radius: 15px;
    padding: 20px;
    width: 80%;
    height: max-content;
  }
  &__title {
    color: rgb(255, 170, 13);
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
