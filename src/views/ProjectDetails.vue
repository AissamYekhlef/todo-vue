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
            <TodosList :todosList="todosList" />
         </div>
    </div>
</template>

<script>
    import TodosList from '../components/TodosList.vue'

export default { 
    name: "ProjectDetails",
    props: {
        
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
                    },
                ] 
                }
            }
    },
    components: {
        TodosList
    },
    methods: {
        
    },
    mounted(){
        // this.$route.params.id;
        this.todosList = this.project.todosList;
    }
}

</script>

<style>

</style>