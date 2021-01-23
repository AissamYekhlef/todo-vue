<template>
    <div>
        <h3 class="font-weight-bold"> Project Details </h3>
        <div>
            <h5> ID : {{ project.id }}</h5>
            <p> Name : {{ project.name }}</p>
            <p> Description : {{ project.description }}</p>
            <p>Total TodosList : {{ project.todosList.length }} TodosList </p>
        </div>
         <div class="d-flex flex-row">
            <TodosList :todosList="todosList" @add-todos-list="addList"/>
         </div>
    </div>
</template>

<script>
    import TodosList from '../components/TodosList.vue'

export default { 
    name: "ProjectDetails",
    props: {
        
    },
    components: {
        TodosList
    },
    methods: {
        addList({list, projectId}){
            console.log(list);
            this.project.todosList = [...this.project.todosList, list];
            this.todosList = this.project.todosList;
            console.log('project ID : '+projectId);
        }
    },
    mounted(){
        // this.$route.params.id;
        this.todosList = this.project.todosList;
    },
    data(){
        return {
            todosList : [],
            project: {    
                id: 1,
                name: "projects 1",
                description: "desc 1",
                todosList: [
                    {
                        id: 1,
                        name : "Todos Name 1",
                        description : "Todos Description 1",
                        todos: [
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
                    },{
                        id: 2,
                        name : "Todos Name 2",
                        description : "Todos Description 2",
                        todos: [
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
                    },{
                        id: 3,
                        name : "Todos Name 3",
                        description : "Todos Description 3",
                        todos: [
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
                    },{
                        id: 4,
                        name : "Todos Name 3",
                        description : "Todos Description 3",
                        todos: [
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
                    },{
                        id: 5,
                        name : "Todos Name 3",
                        description : "Todos Description 3",
                        todos: [
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
                    },{
                        id: 6,
                        name : "Todos Name 3",
                        description : "Todos Description 3",
                        todos: [
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
                    },{
                        id: 7,
                        name : "Todos Name 3",
                        description : "Todos Description 3",
                        todos: [
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
                    },{
                        id: 8,
                        name : "Todos Name 3",
                        description : "Todos Description 3",
                        todos: [
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
                    },{
                        id: 9,
                        name : "Todos Name 3",
                        description : "Todos Description 3",
                        todos: [
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
                    },{
                        id: 10,
                        name : "Todos Name 3",
                        description : "Todos Description 3",
                        todos: [
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
                    },
                ] 
                }
            }
    }
}

</script>

<style>

</style>