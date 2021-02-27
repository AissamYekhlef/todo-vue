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
            <TodosList :todosList="todosList" @add-todos-list="addList"/>
         </div>
    </div>
</template>

<script>
import TodosList from '../components/TodosList.vue'
import axios from "../plugins/axios";
import { mapGetters } from 'vuex';

export default { 
    name: "ProjectDetails",
    props: {
        
    },
    computed: {
        ...mapGetters({
            user: 'auth/getUser'
        })
    },
    components: {
        TodosList
    },
    methods: {
        addList(list){
            this.project.todosList = [...this.project.todosList, list];
            let list_projects = [];
            list_projects = JSON.parse(localStorage.projects);
            list_projects = list_projects.filter(project => { return project.id !== this.cuerrentProject });
            list_projects = [this.project, ...list_projects];
            localStorage.setItem( "projects", JSON.stringify(list_projects));


            this.todosList = this.project.todosList;
        },
        setProject(){
            let id = parseInt(this.$route.params.project_id);
            let list_project = [];
            list_project = JSON.parse(localStorage.projects);
            this.project = list_project.find(project => { return project.id === id });
            this.cuerrentProject = this.project.id;
        },
        getProjectById(){
            let id = parseInt(this.$route.params.project_id);
            // let list_project = [];

            axios.get('/projects/' + id, {
            headers:{
                'Authorization': 'Bearer ' + this.user.access_token
            }
            })
            .then(({ data }) => {
                console.log('Getting Project Details from API');
                this.project = data.project;
                this.todosList = data.project.lists;
                // return data.project;
      });
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
        // this.setProject();
        this.getProjectById();
    },
}

</script>

<style>

</style>