<template>
    <div class="todo-item">
        <input type="checkbox" name="todo" class="checkbox" id="checkbox" v-model="selected">
        <label for="checkbox" class="todo-item__title">{{ item.title }}</label>
    </div>
</template>
<script>
export default {
    name:"todo-item",
    props:{
        item:{
            type: Object,
        }
    },
    data(){
        return{
            newItem: this.item,
            selected: this.item.completed,
        }
    },
    watch:{
        selected(newValue){
            this.newItem.completed = newValue;
            this.$emit('update',this.newItem);
        }
    }
}
</script>
<style lang="scss" scoped>
    .todo-item{
        display: flex;
        margin-bottom: 15px;
        &__checkbox{
            display: block;
            border: 2px solid black;
            border-radius: 50%;
        }
        &__title{
            margin-left: 20px;
            font-size: 20px;
        }
    }
    #checkbox{
        cursor: pointer;
        display: block;
        border-radius: 50%;
    }

</style>