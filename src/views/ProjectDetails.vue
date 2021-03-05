<template>
    <div>
        <h3 class="font-weight-bold"> Project Details </h3>
        <div>
            <h5> ID : {{ project.id }}</h5>
            <h4> Name :  <span class="font-weight-bold"> {{ project.name  }} </span> </h4>
            <h4> Description :  <span class="font-weight-bold"> {{ project.description  }} </span> </h4>
            <!-- <p>Total TodosList : {{ project.todosList.length }} TodosList </p> -->
        </div>
         <div class="d-flex flex-row">
            <TodosList 
                :todosList="todosList" 
                @add-list="addList" 
                @delete-list="deleteList" 
                @update-list="updateList"
            />
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
    computed: {
        ...mapGetters({
            user: 'auth/getUser'
        })
    },
    components: {
        TodosList
    },
    methods: {
        addList(newList){
            if(newList.name.trim() === '' || newList.description.trim() === ''){
                return 0;
            }else{
                axios
                .post('/projects/' + this.project.id + '/lists',
                    {
                        name: newList.name,
                        description: newList.description,
                    }, 
                    {
                        headers:{
                        'Authorization': 'Bearer ' + this.user.access_token
                        }
                    }
                    )
                .then(( {data} ) => {
                    console.log('post List to API');
                    console.log(data);
                    if(data.data){
                        this.todosList = [...this.todosList, data.data.list];
                        // this.projects = [newList];
                    }})
                .catch((err) => {
                    console.log("AXIOS ERROR: ", err);
                }); 
            }
        },
        updateList(updatedList){
            if(updatedList.name.trim() === '' || updatedList.description.trim() === ''){
                return 0;
            }else{
                axios
                .put('/projects/' + this.project.id + '/lists/' + updatedList.id,
                    {
                        name: updatedList.name,
                        description: updatedList.description,
                    }, 
                    {
                        headers:{
                        'Authorization': 'Bearer ' + this.user.access_token
                        }
                    }
                    )
                .then(( {data} ) => {
                    console.log('Update List to API');
                    // console.log(data);
                    if(data.data){
                        // this.todosList = [...this.todosList, data.data.list];
                        // this.projects = [newList];
                    }})
                .catch((err) => {
                    console.log("AXIOS ERROR: ", err);
                }); 
            }
        },
        deleteList(list){
            axios
            .delete('/projects/' + this.project.id + '/lists/' + list.id, 
                {
                    headers:{
                    'Authorization': 'Bearer ' + this.user.access_token
                    }
                }
                )
            .then(( {data} ) => {
                console.log('Delete List From API');
                console.log(data);
                if(data.success){
                    this.todosList = this.todosList.filter(l => { return l.id !== list.id });
                    console.log(data.message);
                }})
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            }); 
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

            axios
            .get('/projects/' + id, {
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
}

</script>

<style>

</style>