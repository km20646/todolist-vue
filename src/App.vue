<template>
    <div id="app">
        <todo-header></todo-header>
        <todo-input></todo-input>
        <todo-list></todo-list>
        <todo-footer ></todo-footer>
    </div>
</template>

<script>
import TodoList  from './components/TodoList';
import TodoInput from './components/Todoinput';
import  TodoHeader from './components/TodoHeader';
import TodoFooter from './components/TodoFooter';
export default {
    // methods : {
    //     // store의 mutations와 같은 역할
    // },
    components :{
        TodoList,
        TodoInput,
        TodoHeader,
        TodoFooter
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