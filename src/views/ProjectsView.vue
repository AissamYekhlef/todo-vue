<template>
  <div class="home">
    <h1> Projects View </h1>
    <AddProject @add-project="addProject"/> 
    <Projects :projects="projects" @del-project="deleteProject" @set-todos="setTodos"/>
  </div>
</template>

<script>
// @ is an alias to /src

import Projects from '../components/Projects';

export default {
  name: 'Home',
  components: {
    Projects,
    // AddProject,
  },
  data() {
    return {
      cuerrentProject:1,
      projectName: "",
      todos: [],  
      styleObject: {
        width: '400px',
      },
      projects: [
        {    
          id: 1,
          name: "project 1",
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
          },{
          id: 2,
          name: "projects 2",
          description: "desc 222",
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
              }
          ]   
        },
      ]
    }
  },
}
</script>
