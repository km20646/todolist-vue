<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
        <!-- <button @click="addTodo" class="addBtn">add</button> -->
        <span class="addContainer" @click="addTodo">
            <i class="fas fa-plus addBtn"></i>
        </span>

        <!-- use the modal component, pass in the prop -->
        <Modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">경고!!!
                <i class="clsoeModalBtn fas fa-times" @click="showModal = false"></i>
            </h3>
            <div slot="body">아무것도 입력하지 않으셨습니다</div>
        </Modal>
    </div>
</template>

<script>
import Modal from './common/Modal.vue';
export default {
    data : function(){
        return {
            newTodoItem : "",
            showModal : false
        }
    },
    methods : {
        addTodo(){
            console.log(this.newTodoItem);
            if(this.newTodoItem !==''){
                const text = this.newTodoItem.trim();
                this.$store.commit("addOneItem",text);
                 this.clearInput();
            }
            // 아무것도 입력하지 않았을경우
            else{
                this.showModal = 
                !this.showModal
            }
        },
        clearInput : function(){
            this.newTodoItem = '';
        }
    },
    components : {
        Modal
    }
}
</script>

<style scoped>
    input:focus{
        outline: none;
    }
    .inputBox{
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius : 5px;
    }
    .inputBox input{
        border-style: none;
        font-size: .9rem;
    }
    .addContainer{
        float : right;
        background : linear-gradient(to right, #6478FB, #8763FB);
        width: 3rem;
        border-radius: 0 5 px 5px 0;
    }
    .addBtn{
        color: white;
        vertical-align: middle;
    }
    .closeModalBtn{
        color: #42b983;
        
    }
</style>