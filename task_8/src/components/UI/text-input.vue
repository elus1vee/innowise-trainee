<template >
    <input :type="type" class="input" required :value="modelValue" @input="updateInput" />
</template>
<script>
export default {
    name: "text-input",
    props:{
        type:{
            type: String,
            require: true,
        },
        modelValue:{
            type: [String,Number],
        }
    },
    methods:{
        updateInput(event){
            this.$emit('update:modelValue', event.target.value);
        }
    }
}
</script>
<style scoped>
    .input{
        border: 1px solid rgb(198, 198, 198);
        border-radius: 10px;
        padding: 5px 10px;
        width: 100%;
    }
    .input:focus{
        background-color: rgb(225, 225, 225);
        outline: 1px solid rgb(198, 198, 198);
        
    }
</style>