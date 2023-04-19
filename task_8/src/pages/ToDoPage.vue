<template>
    <div class="todo-page">
        <h1 class="todo-page__title">Tassker</h1>
        <calendarList :calendar-data="calendarData" class="todo-page__list" @active="activeDay" :active="active"/>
        <my-button :onclick="authUser.logout">Logout</my-button>
        <todoList :todo-data="todoActiveDayData" @update="updateTodoList"/>
        <button class="todo-page__button">Add a new task</button>
    </div>
</template>
<script>
import {useAuthUser} from "@/stores/user";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import calendarList from "@/components/calendarList.vue";
import myButton from "@/components/UI/my-button.vue";
import todoList from "@/components/todoList.vue";

export default {
    components:{
        calendarList,myButton,todoList
    },
    data(){
        return{
            authUser : useAuthUser(),
            calendarData : [],
            active: "",
            todoActiveDayData: "",
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
        async createCalendar(){
            let list = [];
            const fetchList = this.authUser.calendarData;
            const weekDays={
                1: "Mon",
                2: "Tue",
                3: "Wed",
                4: "Thu",
                5: "Fri",
                6: "Sat",
                0: "Sun",
            }
            const today = new Date();
            let date = today;
            do {
                let name = "";
                Object.entries(weekDays).forEach(el=>{
                    if(el[0] === `${date.getDay()}`) name = el[1]
                })
                if(fetchList){
                    fetchList.forEach((el)=>{
                        if(el.fullDate !== undefined && el.unfulfilled !== undefined && el.completed !== undefined){
                            if(el.fullDate === date.toLocaleDateString()){
                                if(el.todolist !== undefined){
                                    if(el.todolist.some(val=>val.completed===true)){
                                        list.push({title: name,numberDate: date.getDate(),fullDate: date.toLocaleDateString(),unfulfilled: true,completed: true,todolist: el.todolist})
                                    }else{
                                        list.push({title: name,numberDate: date.getDate(),fullDate: date.toLocaleDateString(),unfulfilled: true,completed: false,todolist: el.todolist})
                                    }
                                }else{
                                    list.push({title: name,numberDate: date.getDate(),fullDate: date.toLocaleDateString(),unfulfilled: false,completed: false})
                                }
                            }
                        }
                    })
                }else{
                    list.push({title: name,numberDate: date.getDate(),fullDate: date.toLocaleDateString(),unfulfilled: false,completed: false})
                }


                date = new Date(date.getTime() + (24 * 60 * 60 * 1000));
            } while (date.getDate() !== 1);
            this.authUser.calendarData = list;
            this.calendarData = list;
            console.log(this.calendarData);
        },
        activeDay(date){
            this.active = date;
            this.todoActiveDay();
        },
        todoActiveDay(){
            this.calendarData.forEach(el=>{
                if(el.fullDate === this.active){
                    this.todoActiveDayData = el.todolist;
                }
            });
        },
        async updateTodoList(newTodoList){
            const newCalendar = this.calendarData.map(el=>{
                if(el.fullDate === this.active){
                   el.todolist = newTodoList
                }
                return el;
            });
            console.log("aga");
            newCalendar.forEach((el)=>{
                if(el.todolist !== undefined){
                    if(el.todolist.some(val=>val.completed===true)){
                        el.completed = true;
                    }else{
                        el.completed = false
                    }
                }
            })
            console.log(newCalendar);


            this.calendarData = newCalendar;
            this.authUser.setCalendarData(newCalendar);
            await this.authUser.saveUserData();
        }
    },
    computed:{
        email(){
            return this.authUser.email;
        },
    },
    async mounted(){
        this.userAuthorized();
        await this.authUser.fetchCalendar();
        await this.createCalendar();
    },
}
</script>
<style lang="scss">
.todo-page{
    max-width: 100%;
    &__title{
        font-size: 20px;
        font-weight: 700;
    }
    &__button{
        background-color:rgb(255, 170, 13);
        color: white;
        font-size: 14px;
        border-radius: 15px;
        padding: 10px;
        width: 100%;
    }
}
</style>