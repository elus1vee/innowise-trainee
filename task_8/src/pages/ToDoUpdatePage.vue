<template>
    <div class="todoupdate-page">
        <div class="todoupdate-page__header">
            <button class="arrows__button left" @click="this.$router.push('todo')"></button>
            <h1 class="todoupdate-page__title">Task`s Editor</h1>
        </div>
        <div class="todoupdate-page__title">
            <input type="checkbox" name="todo" class="checkbox" id="checkbox" v-model="selected">
            <input type="text" required v-model="title" class="input" placeholder="Title...">
        </div>
        <div class="todoupdate-page__body">
            <textarea name="" id="" class="todoupdate-page__textarea" placeholder="Description..." v-model="description"></textarea>
        </div>
        <div class="todoupdate-page__footer">
            <button class="todoupdate-page__delete" @click="deleteTodo" />
            <button class="todoupdate-page__save" @click="saveTodo">Complete</button>
        </div>
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
            selected: false,
            title:"",
            description:"",
            editFlag: false,
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
        },
        async saveTodo(){
            const newTodo = {title: this.title,completed: this.selected,description: this.description};
            if(!this.editFlag){
                await this.authUser.addNewTodo(newTodo);
            }else{
                await this.authUser.editTodo(newTodo);
            }
            this.$router.push("todo");
        },
        editTodo(){
            if(this.authUser.selectedTodo.title !== undefined){
                this.editFlag = true;
                this.title = this.authUser.selectedTodo.title;
                this.description = this.authUser.selectedTodo.description;
                this.selected = this.authUser.selectedTodo.completed;
            }
        }
    },
    computed:{
        email(){
            return this.authUser.email;
        }
    },
    mounted(){
        this.userAuthorized();
        this.editTodo();
    }
}
</script>
<style lang="scss" scoped>
.todoupdate-page{
    width: 100%;

    &__title{
        display: flex;
        gap: 10px;
        font-size: 20px;
        margin-bottom: 20px;
        font-weight: 700;
        .input{
            font-size: 20px;
            font-weight: 700;
            width: 100%;
            border-bottom: 1px solid grey;
        }
    }
    &__header{
        display: flex;
        gap: 20px;
        margin-bottom: 25px;
    }
    &__body{
        margin-bottom: 20px;
    }
    &__textarea{
        width: 100%;
        height: 60vh;
        font-size: 18px;
        border-bottom: 1px solid grey;
    }
    &__delete{
        background: url("@/assets/img/seo-social-web-network-internet_262_icon-icons.com_61518.svg") 0 0 no-repeat;
        background-size: contain;
        width:18px;
        height: 20px;
    }
    &__save{
        background-color: rgb(175, 247, 175);
        color: green;
        padding: 10px 33px 10px 12px;
        border-radius: 15px;
        position: relative;
        &::after{
            content: "";
            background: url("@/assets/img/Tick_Mark_icon-icons.com_69146.svg");
            height: 15px;
            width: 15px;
            position: absolute;
            right: 8px;
            top: 8px;
        }

        &:hover{
            box-shadow: 0px 0px 5px 5px rgb(188, 255, 188,0.7);
        }
    }
    &__footer{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 15px;
    }
}
.left{
    background: url("@/assets/img/left.png") 0 0 no-repeat;
    background-size: contain;
    width: 20px;
    height: 20px;
}

</style>