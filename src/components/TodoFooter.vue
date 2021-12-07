<template>
    <div class="clearAllcontainer">
        <span class="clearAllBtn" @click="clearTodo">
            Clear All
        </span>
    </div>
</template>

<script>
export default {
    methods : {
        clearTodo(){
            // this.$emit('clearItem');
            this.$store.commit('clearAllItem');
        }
    }
}
</script>

<style scoped>
    .clearAllcontainer{
        width: 8.5rem;
        height: 50px;
        line-height: 50px;
        background : #fff;
        border-radius: 5px;
        margin : 0 auto;
    }
    .clearAllBtn{
        color: #e20303;
        display: block;
    }
</style>