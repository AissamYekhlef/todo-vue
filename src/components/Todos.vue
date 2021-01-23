<template>
    <div>
        <div>
            <h4>Project ID: {{ $route.params.project_id }}</h4>
            <span>Project NAME:</span>
            <router-link :to="{ name:'ProjectDetails', params:{project_id: $route.params.project_id} }">
                project name 1
            </router-link>
            <!-- <h2>Project NAME: {{ project.name }}</h2> -->
            <h4>Todo ID: {{ $route.params.todo_id }}</h4>
            <h4>Todo NAME: {{ $route.params.todo_id }}</h4>
        </div>
        <div>
            <AddTodo />
            <div :key="todo.id" v-for="todo in todos" class="tab-content tabs">
                <TodoItem :todo="todo" @completed="markTodoAsComplete(todo.id, $event)"  @del-todo="deleteTodo(todo.id)"/>
            </div>
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
import AddTodo from './AddTodo.vue';

export default { 
    name: "Todos",
    components: {
        TodoItem,
        AddTodo
    },
    props: {
        todos: Array,
    },
    methods: {
        markTodoAsComplete(todoId, completed) {
            console.log('Todos template');
            this.$emit('completed', {todoId, completed});
        },
        deleteTodo(todoId) {
          this.$emit('del-todo', todoId);
        }
    },
    mounted(){
        this.todos = [
            {
                id: 1,
                title: 'Todo One',
                completed: true,
            },
            {
                id: 2,
                title: 'Todo Two',
                completed: true,
            },
            {
                id: 3,
                title: 'Todo Three',
                completed: false,
            },
            {
                id: 4,
                title: 'Todo four',
                completed: true,
            },
        ]
    }
}

</script>

<style scoped>

</style>