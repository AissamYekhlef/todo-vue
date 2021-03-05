<template>
  <div class="home">
    <h1> Projects View </h1>
    <Projects :projects="projects" 
              @del-project="deleteProject" 
              @add-list="addList" 
              @add-project="addProject"
              @update-project="updateProject"
    />
  </div>
</template>

<script>
// @ is an alias to /src

import Projects from '../components/Projects';
import axios from "../plugins/axios";
import { mapGetters } from 'vuex';
// import {mapGetters} from 'vuex';

export default {
  name: 'Home',
  components: {
    Projects,
  },
  computed: {
    ...mapGetters({
      user: 'auth/getUser'
    })
  },
  data() {
    return {
      cuerrentProject:1,
      projectName: "",
      todos: [],  
      styleObject: {
        width: '400px',
      },
      projects : [],
    }
  },
  mounted(){
  //  this.projects.concat(this.getProjects());
   this.getProjects();
   console.log('Mounted');
  },
  methods: {
    // ...mapGetters('projects', ['getProjects']),
    // ...mapActions('projects', ['set_projects']),
   getProjects(){
    axios.get('/projects', {
      headers:{
          'Authorization': 'Bearer ' + this.user.access_token
      }
      })
      .then(({ data }) => {
          console.log('Getting Projects from API');
          this.projects = data.projects;
      });
    },
     addProject(newProject){
      if(newProject.name.trim() === '' || newProject.description.trim() === ''){
        return 0;
      }else{
        axios.post('/projects',
          {
            name: newProject.name,
            description: newProject.description,
          }, 
          {
            headers:{
              'Authorization': 'Bearer ' + this.user.access_token
            }
          }
        )
        .then(({ data }) => {
          console.log('post Project to API');
          if(data.data){
            this.projects = [...this.projects, data.data.project];
            // this.projects = [newProject];
          }
        }).catch((err) => {
          console.log("AXIOS ERROR: ", err);
        }); 
      }
    },
    /**     */
    deleteProject(project_id){
      axios.delete('/projects/' + project_id,
          {
            headers:{
              'Authorization': 'Bearer ' + this.user.access_token
            }
          }
        )
        .then(({ data }) => {
          console.log('Delete Project from API');
          if(data.success == 'true'){
         
            let new_list = this.projects.filter(project => { return project.id !== project_id });
            this.projects = new_list;
            // alert('delete project successfuly');
            // this.projects = [newProject];
          }
        }).catch((err) => {
          console.log("AXIOS ERROR: ", err);
        });
    },
    updateProject(project){
      console.log(project);
        axios.put('/projects/' + project.id,
          {
            name: project.name,
            description: project.description,
          }, 
          {
            headers:{
              'Authorization': 'Bearer ' + this.user.access_token
            }
          }
        )
        .then(({ data }) => {
          if(data.success == 'true'){
          console.log('Updated project successfuly');
          alert('Updated Successfuly API');
            // this.getProjects();
            // this.projects = [newProject];
          }
        }).catch((err) => {
          console.log("AXIOS ERROR: ", err);
        });
    },  
    addList(list, projectId){
        const project = this.projects.find(project => {
          return project.id === projectId;
        });
        if(project){
          project.todosList = [...project.todosList, list];
          
          let list_projects = [];
          list_projects = JSON.parse(localStorage.projects);
          let p = {};
          p = list_projects.find(project => { return project.id === projectId });
          p.todosList.push(list);
        }else{
            return 0;
        }
    },  
  },
}
</script>
