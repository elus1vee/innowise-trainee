<template>
    <div class="wrapper">
        <div class="calendar-list" :style="{'margin-left':'-'+ currentIndex + 'px'}">
            <calendar-day v-for="day in calendarData" :date="day" :active="selectedDay(day.fullDate)" :key="day.fullDate"  @active="activeDay"/>
        </div>
        <div class="arrows">
            <button class="arrows__button left" @click="leftSlide"></button>
            <button class="arrows__button right" @click="rightSlide"></button>
        </div>
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
            currentIndex: 0,
        }
    },
    props:{
        calendarData:{
            require: true,
        },
        active:{
            type: String,
        }
    },
    methods:{
        activeDay(date){
            this.$emit('active',date);
        },
        selectedDay(date){
            if(date === this.active){
                return true
            }else{
                return false
            }
        },
        leftSlide(){
            if(this.currentIndex > 0){
                if(this.currentIndex < 75){
                    this.currentIndex=0;
                }else{
                    this.currentIndex-= this.scrollLength;
                }
            }
        },
        rightSlide(){
            if(this.leftWidth !== 0){
                this.currentIndex+= this.scrollLength;
            }
        },
        updateWidth() {
            this.width = window.innerWidth;
        },
    },
    mounted(){
    },
    computed:{
        fullCalendarWidth(){
            return 75* this.calendarData.length;
        },
        contentWidth(){
            let width = 722;
            if(!(window.innerWidth > 722)){
                width = window.innerWidth - 40;
            }
            return width;
        },
        leftWidth(){
            return this.fullCalendarWidth - this.contentWidth - this.currentIndex;
        },
        scrollLength(){
            let scrollLength = 75;
            if(this.leftWidth % 75 > 0){
                scrollLength = this.leftWidth % 75;
            }
            return scrollLength;
        },
        startLeftWidth(){
            return  75* this.calendarData.length - this.contentWidth;
        }
    },

}
</script>
<style scoped lang="scss">
.calendar-list{
    display: flex;
}
.arrows{
    display: flex;
    justify-content: center;
    gap: 20px;

    &__button{
        width: 25px;
        height: 25px;
    }
}
.left{
    background: url("@/assets/img/left.png") 0 0 no-repeat;
}
.right{
    background: url("@/assets/img/right.png") 0 0 no-repeat;
    
}
</style>