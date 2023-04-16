<template>
    <div>
        TodoUpdatePage
        {{ email }}
    </div>
</template>
<script>
import {useAuthUser} from "@/stores/user";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export default {
    data(){
        return{
            authUser : useAuthUser(),
        }
    },
    methods:{
        userAuthorized(){
            firebase.auth().onAuthStateChanged((user)=>{
                if(user){
                    this.authUser.fetchEmail();
                }else{
                    this.$router.push("signin");
                }
            })
        }
    },
    computed:{
        email(){
            return this.authUser.email;
        }
    },
    mounted(){
        this.userAuthorized();
    }
}
</script>
<style>
    
</style>