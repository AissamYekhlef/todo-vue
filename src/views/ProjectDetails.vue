<template>
    <div>
        <h3 class="font-weight-bold"> Project Details </h3>
        <div>
            <h5> ID : {{ project.id }}</h5>
            <p> Name : {{ project.name }}</p>
            <p> Description : {{ project.description }}</p>
            <!-- <p>Total TodosList : {{ project.todosList.length }} TodosList </p> -->
        </div>
         <div class="d-flex flex-row">
            <TodosList :todosList="project.todosList" @add-todos-list="addList"/>
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
        },
        setProject(){
            let id = parseInt(this.$route.params.project_id);
            let list_project = [];
            list_project = JSON.parse(localStorage.projects);
            this.project = list_project.find(project => { return project.id === id });
        }
    },
    data(){
        return {
            todosList : [],
            project: {}
        }
    },
    mounted(){
        this.setProject();
        console.log(this.project.todosList.length);
        console.log(this.$route);
    },
}

</script>

<style>

</style>