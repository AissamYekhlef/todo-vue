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
        addList(list){
            console.log(list);
            this.project.todosList = [...this.project.todosList, list];
            let list_projects = [];
            list_projects = JSON.parse(localStorage.projects);
            list_projects = list_projects.filter(project => { return project.id !== this.cuerrentProject });
            list_projects.push(this.project);
            console.log(list_projects);
            localStorage.setItem( "projects", JSON.stringify(list_projects));


            this.todosList = this.project.todosList;
            console.log('project ID : ' + this.cuerrentProject);
        },
        setProject(){
            let id = parseInt(this.$route.params.project_id);
            let list_project = [];
            list_project = JSON.parse(localStorage.projects);
            this.project = list_project.find(project => { return project.id === id });
            this.cuerrentProject = this.project.id;
        }
    },
    data(){
        return {
            cuerrentProject: 1,
            todosList : [],
            project: {}
        }
    },
    mounted(){
        this.setProject();
        // console.log(this.project.todosList.length);
        // console.log(this.$route);
    },
}

</script>

<style>

</style>