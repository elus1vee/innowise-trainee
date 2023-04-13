<template>
  <div>
    <calendarList/>
  </div>
</template>
<script>
import calendarList from './components/calendarList.vue';
export default {
  components:{
     calendarList
  },
  data(){
    return{
      date:{
        title: "Wed",
        number: "10",
      }
    }
  }
}
</script>
<style>
  
</style>