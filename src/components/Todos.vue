<template>
    <div>
        <TodosListNavbar :list="project.lists" @change-todos="changeTodosList"/>

        <div class="mt-5">
            <div class="d-flex flex-row justify-content-center">
            <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <h4>Project Name:
                            <router-link :to="{ 
                                            name:'ProjectDetails', 
                                            params:{project_id: $route.params.project_id} 
                                        }">
                                {{ project.name }}
                            </router-link>
                        </h4>
                    </li>
                    <li class="list-group-item">
                        <h4>Todo List Name: <span class="font-weight-bold"> {{ list.name }} </span> </h4>
                    </li>
                    <li class="list-group-item">
                        <h4>Todo List Description:</h4> <h5> <span class="font-weight-bold"> {{ list.description }} </span></h5>
                    </li>
                </ul>
            </div>
                
            <div class="ml-5">
                <AddTodo @add-todo="addTodo"/>
                <div :key="todo.id" v-for="todo in todos" class="tab-content tabs">
                    <TodoItem   
                        :todo="todo" 
                        @delete-todo="deleteTodo"
                        @update-todo="updateTodo"
                    />
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
import AddTodo from './AddTodo.vue';
import TodosListNavbar from './TodosListNavbar.vue';
import axios from "@/plugins/axios";
import { mapGetters } from 'vuex';

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
            list:{},
            project: {}
        }
    },
    computed: {
        ...mapGetters({
            user: 'auth/getUser'
        })
    },
    methods: {
        deleteTodo(todoId) {
        //   this.$emit('del-todo', todoId);
        console.log(todoId);
        axios
            .delete('/projects/' + this.project.id + '/lists/' + this.list.id + '/todos/' + todoId, 
                {
                    headers:{
                    'Authorization': 'Bearer ' + this.user.access_token
                    }
                }
                )
            .then(( {data} ) => {
                console.log('Delete Todo From API');
                console.log(data);
                if(data.success){
                    this.todos = this.todos.filter(t => { return t.id !== todoId });
                    console.log(data.message);
                }})
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            }); 

        },
        addTodo(newTodo) {
            // this.$emit('add-todo', newTodo);
            // let project_id = parseInt(this.$route.params.project_id);
            // let list_id = parseInt(this.$route.params.todo_id);
            if(newTodo.title.trim() === '' ){
                return 0;
            }else{
                axios
                .post('/projects/' + this.project.id + '/lists/' + this.list.id + '/todos',
                    {
                        title: newTodo.title,
                        completed: newTodo.completed,
                    }, 
                    {
                        headers:{
                        'Authorization': 'Bearer ' + this.user.access_token
                        }
                    }
                    )
                .then(( {data} ) => {
                    console.log('post Todo to API');
                    console.log(data);
                    if(data.success){
                        this.todos = [...this.todos, data.todo];
                        // this.projects = [newTodo];
                    }})
                .catch((err) => {
                    console.log("AXIOS ERROR: ", err);
                }); 
            }
        },
        updateTodo(updatedTodo) {
            console.log(updatedTodo.title);
            console.log(updatedTodo.completed);
            // this.$emit('add-todo', newTodo);
            // let project_id = parseInt(this.$route.params.project_id);
            // let list_id = parseInt(this.$route.params.todo_id);
            if(updatedTodo.title.trim() === ''){
                return 0;
            }else{
                axios
                .put('/projects/' + this.project.id + '/lists/' + this.list.id + '/todos/' + updatedTodo.id,
                    {
                        title: updatedTodo.title,
                        completed: updatedTodo.completed,
                    }, 
                    {
                        headers:{
                        'Authorization': 'Bearer ' + this.user.access_token
                        }
                    }
                    )
                .then(( {data} ) => {
                    console.log('Update List to API');
                    console.log(data);
                    if(data.data){
                        // this.todosList = [...this.todosList, data.data.list];
                        // this.projects = [newList];
                    }})
                .catch((err) => {
                    console.log("AXIOS ERROR: ", err);
                }); 
            }
            
        },
        setTodos(){
            let project_id = parseInt(this.$route.params.project_id);
            let list_id = parseInt(this.$route.params.todo_id);

            axios
            .get('/projects/' + project_id, {
                headers:{
                    'Authorization': 'Bearer ' + this.user.access_token
                }
                })
            .then(({ data }) => {
                console.log('Getting Project Details from API');
                this.project = data.project;
                this.list = data.project.lists.find(l => l.id === list_id);
                this.todos = this.list.todos;
                // return data.project;
            });
        },
        changeTodosList(){
            this.setTodos();
        }
    },
    mounted(){
        this.setTodos();
        console.log(this.list);
    }
}

</script>

<style scoped>

</style>