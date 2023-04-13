<template>
    <div :class="[active ? 'day_active' : '', 'day']">
        <div class="day__body">
            <p class="day__name">{{ date.title }}</p>
            <p class="day__number">{{ date.number }}</p>
        </div>
        <div class="day__info">
            <div class="day__completed" v-if="completed"></div>
            <div class="day__unfulfilled" v-if="unfulfilled"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "calendar-day",
    data(){
        return{
        }
    },
    props:{
        date:{
            type: Object,
            required: true,
        },
        active:{
            type: Boolean,
            required: true,
        },
        unfulfilled:{
            type: Boolean,
            required: true,
        },
        completed:{
            type: Boolean,
            required: true,
        } 
    }
}
</script>
<style scoped>
    .day{
        margin: 10px;
        width: 55px;
        font-size: 16px;
        cursor: pointer;
    }
    .day_active > .day__body{
        background-color: rgb(24, 24, 24);
        color: white;
    }
    .day:hover>.day__body{
        background-color: rgb(207, 207, 207);
    }
    .day__body{
        border: 1px solid rgb(167, 167, 167);
        border-radius: 15px;
        padding: 8px;
        height: 65px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .day__name{
        margin-bottom: 10px;
    }
    .day__number{
        font-weight: 800;
    }
    .day__info{
        padding: 5px 0px;
        display: flex;
        justify-content: center;
        gap: 5px;
    }
    .day__completed{
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: rgb(255, 187, 0);
    }
    .day__unfulfilled{
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: rgb(117, 79, 17);
    }
</style>