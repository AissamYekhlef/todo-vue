<template>
    <div>
        <TodosListNavbar @change-todos="changeTodosList"/>
        <div>
            <h4>Project Name:
            <router-link :to="{ name:'ProjectDetails', params:{project_id: $route.params.project_id} }">
                {{ projectName }}
            </router-link>
            </h4>
            <h4>Todo Name: <span class="font-weight-bold"> {{ listName }} </span> </h4>
            <p>Todo Description: {{ listDescription }} </p>
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
import TodosListNavbar from './TodosListNavbar.vue';

export default { 
    name: "Todos",
    components: {
        TodoItem,
        AddTodo,
        TodosListNavbar
    },
    props: {

    },
    data(){
        return {
            todos: [],
            projectName: '',
            listName : '',
            listDescription: '',
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
            this.listName = list_todos.name;
            this.projectName = project.name;
            this.listDescription = list_todos.description;
            this.todos = list_todos.todos;
        },
        changeTodosList(){
            this.setTodos();
        }
    },
    mounted(){
        this.setTodos();
    }
}

</script>

<style scoped>

</style>