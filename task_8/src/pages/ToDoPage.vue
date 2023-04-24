<template>
    <div class="todo-page">
        <div class="todo-page__header">
            <h1 class="todo-page__title">Tassker</h1>
            <my-button :onclick="authUser.logout">Logout</my-button>     
        </div>
        <calendarList :calendar-data="calendarData" class="todo-page__list" @active="activeDay" :active="active" @edit="editTodo"/>
        <todoList :todo-data="todoActiveDayData" @update="updateTodoList"/>
        <button class="todo-page__button" @click="addNewTodo">Add a new task</button>
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
        },
        activeDay(date){
            this.active = date;
            this.authUser.selectedDay = this.active;
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
            newCalendar.forEach((el)=>{
                if(el.todolist !== undefined){
                    if(el.todolist.some(val=>val.completed===true)){
                        el.completed = true;
                    }else{
                        el.completed = false
                    }
                }
            })


            this.calendarData = newCalendar;
            this.authUser.setCalendarData(newCalendar);
            await this.authUser.saveUserData();
        },
        addNewTodo(){
            this.authUser.selectedDay = this.active;
            this.authUser.calendarData = this.calendarData;
            this.authUser.selectedTodo = {};
            this.$router.push('todo_update');
        },
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
        if(this.authUser.selectedDay){
            this.activeDay(this.authUser.selectedDay)
        }
    },
}
</script>
<style lang="scss">
.todo-page{
    width: 100%;
    &__header{
        display: flex;
        justify-content: space-between;
        align-items: center ;
    }
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