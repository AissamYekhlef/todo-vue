<template>
    <div>
        <div>
            <h4>Project ID: {{ $route.params.project_id }}</h4>
            <h4>Project NAME:
            <router-link :to="{ name:'ProjectDetails', params:{project_id: $route.params.project_id} }">
                project name 1
            </router-link>
            </h4>
            <!-- <h2>Project NAME: {{ project.name }}</h2> -->
            <h4>Todo ID: {{ $route.params.todo_id }}</h4>
            <h4>Todo NAME: {{ $route.params.todo_id }}</h4>
        </div>
        <div>
            <AddTodo @add-todo="addTodo"/>
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

    },
    data(){
        return {
            todos: [],
        }
    },
    methods: {
        markTodoAsComplete(todoId, completed) {
            console.log('Todos template');
            this.$emit('completed', {todoId, completed});
        },
        deleteTodo(todoId) {
          this.$emit('del-todo', todoId);

        },
        addTodo(newTodo) {
            // this.$emit('add-todo', newTodo);
            let project_id = parseInt(this.$route.params.project_id);
            let todo_id = parseInt(this.$route.params.todo_id);
            this.todos = [...this.todos, newTodo];

            let list_projects = [];
            list_projects = JSON.parse(localStorage.projects);

            let project = list_projects.find(project => { return project.id === project_id });
            list_projects = list_projects.filter(project => { return project.id !== project_id });
            
            let has_new = project.todosList.find(todo => { return todo.id === todo_id });
            let list_todos = project.todosList.filter(todo => { return todo.id !== todo_id });

            has_new.todos.push(newTodo);
            list_todos.push(has_new);
            project.todosList = list_todos;
            list_projects.push(project);

            // console.log(list_todos);
            localStorage.setItem( "projects", JSON.stringify(list_projects));
        },
        setTodos(){
            let project_id = parseInt(this.$route.params.project_id);
            let todo_id = parseInt(this.$route.params.todo_id);

            let list_projects = []; 
            list_projects = JSON.parse(localStorage.projects);
            let project = list_projects.find(project => { return project.id === project_id });
            let list_todos = project.todosList.find(todo => { return todo.id === todo_id });
            this.todos = list_todos.todos;
        }
    },
    mounted(){
        this.setTodos();
    }
}

</script>

<style scoped>

</style>