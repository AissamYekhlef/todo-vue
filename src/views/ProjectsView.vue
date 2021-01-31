<template>
  <div class="home">
    <h1> Projects View </h1>
    <Projects :projects="projects" @del-project="deleteProject" @add-list="addList" @add-project="addProject"/>
  </div>
</template>

<script>
// @ is an alias to /src

import Projects from '../components/Projects';

export default {
  name: 'Home',
  components: {
    Projects,
  },
  methods: {
    addProject(newProject){
      if(newProject.name.trim() === '' || newProject.description.trim() === ''){
        return 0;
      }else{
        this.projects = [...this.projects, newProject];
        let list_projects = [];
        list_projects = JSON.parse(localStorage.projects);
        list_projects = [newProject, ...list_projects];
        localStorage.setItem( "projects", JSON.stringify(list_projects));
      }
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
    this.projects = JSON.parse(localStorage.projects);
  }
}
</script>
