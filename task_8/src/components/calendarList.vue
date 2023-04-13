<template>
    <div style="display: flex;">
        <calendar-day v-for="day in calendarList" :date="day" :unfulfilled="true" :active="false" :completed="true" :key="day.number"/>
    </div>
</template>
<script>
import calendarDay from './calendarDay.vue';
export default {
    components:{
        calendarDay
    },
    name: "calendar-list",
    data(){
        return{
            calendarList: [],
        }
    },
    methods:{
        createCalendar(){
            console.log("hello");
            let list = [];
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
                list.push({title: name,number: date.getUTCDate()})


                date = new Date(date.getTime() + (24 * 60 * 60 * 1000));
            } while (date.getDate() !== 1);
            this.calendarList = list;
        }
    },
    mounted(){
        this.createCalendar();
    }

}
</script>
<style scoped>
    
</style>