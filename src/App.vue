<template>
    <div id="app">
        <todo-header></todo-header>
        <todo-input v-on:addTodoItem="addOneItem"></todo-input>
        <todo-list v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></todo-list>
        <todo-footer v-on:clearItem="clearAllItem"></todo-footer>
    </div>
</template>

<script>
import TodoList  from './components/TodoList';
import TodoInput from './components/Todoinput';
import  TodoHeader from './components/TodoHeader';
import TodoFooter from './components/TodoFooter';
export default {
    data : function(){
        return {
            todoItems : []
        }
    },
    methods : {
        addOneItem(todoItem){
                let obj = {completed : false, item : todoItem};
                 localStorage.setItem(todoItem,JSON.stringify(obj));
                 this.todoItems.push(obj);
        },
        removeOneItem(todoItem,idx){
            localStorage.removeItem(todoItem.item);
            this.todoItems.splice(idx,1);
        },
        toggleOneItem(todoItem,idx){
            // todoItem.completed = !todoItem.completed;
            this.todoItems[idx].completed = !this.todoItems[idx].completed;
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
        },
        clearAllItem : function(){
            this.todoItems =[];
            localStorage.clear();
        }
    },
    components :{
        TodoList,
        TodoInput,
        TodoHeader,
        TodoFooter
    },
    created : function(){
        if(localStorage.length>0){
            for(let i=0; i<localStorage.length; i++){
                if(localStorage.key(i)!=="loglevel:webpack-dev-server"){
                    
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
    },
}
</script>

<style>
    body{
        text-align: center;
        background: #f6f6f6;
    }
    input {
        border-style: groove;
        width : 200px;
    }
    button{
        border-style: groove;
    }
    .shadow{
        box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
    }
</style>