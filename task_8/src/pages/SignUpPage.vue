<template>
    <div class="signup">
        <div class="signup__content">
            <h2 class="signup__title">Registration</h2>
            <text-input type="email" v-model="email" placeholder="Email" class="signup__input" />
            <text-input type="password" v-model="password" placeholder="Password" class="signup__input" />
            <text-input type="password" v-model="confirmPassword" placeholder="Confirm password " class="signup__input" />
            <div class="signin__buttons">
                <my-button @click="signUp()">Sign Up</my-button>
                <RouterLink to="/signin">
                  <my-button>Sign In</my-button>
                </RouterLink>
            </div>
        </div>
    </div>
</template>
<script>
import {toast} from "vue3-toastify";
import 'vue3-toastify/dist/index.css'; 
import textInput from "@/components/UI/text-input.vue";
import myButton from "@/components/UI/my-button.vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import {useAuthUser} from "@/stores/user"

export default {
    components:{
        textInput, myButton
    },
    data(){
        return{
            email: "",
            password: "",
            confirmPassword: "",
            authUser : useAuthUser(),
        }
    },
    methods:{
        async signUp(){
            if(this.password === this.confirmPassword && this.email.length >6 && this.password> 6){
                const loading = toast.loading("Loading...")
                await firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(()=>{
                    toast.remove(loading);
                    toast.success("Success!");
                    this.$router.push('signin');
                }).catch((er)=>{
                    toast.remove(loading);
                    toast.error("Error!");
                    toast.info(er.message.toString())
                })
            }else{
                toast.warning(`Invalid email or password!`,{
                    autoClose:3000,
                });
                this.email = "";
                this.password = "";
                this.confirmPassword = ""
            }
        }
    }
}
</script>
<style>
    .signup{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .signup__content{
        border: 3px solid rgb(255, 170, 13);
        border-radius: 15px;
        padding: 20px;
        width: 80%;
        height: max-content;
    }
    .signup__title{
        color: rgb(255, 170, 13);
        font-size: 24px;
        font-weight: 800;
        line-height: 24px;
        padding-bottom: 20px;
    }
    .signup__input{
        margin-bottom: 15px;
    }
    .signup__buttons{
        display: flex;
        justify-content: space-around;
    }
</style>