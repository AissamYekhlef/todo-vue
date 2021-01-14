<template>
  <div id="app">
    <Header />
    <Projects v-bind:projects="projects" v-on:del-project="deleteProject" v-on:set-todos="setTodos"/> 
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
    <AddProject v-on:add-project="addProject"/> 
  </div>
</template>

<script>

import Header from './components/layout/Header';
import Projects from './components/Projects';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import AddProject from './components/AddProject';

export default {
  name: 'App',
  components: {
    Header,
    Projects,
    Todos,
    AddTodo,
    AddProject,
  },
  data() {
    return {
      cuerrentProject:1,
      todos: [],  
      projects: [
        {
          id: 1,
          name: "projects 1",
          description: "desc 1",
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
          ]   
        },{
          id: 2,
          name: "projects 2",
          description: "desc 2",
          todos: [
            {
              id: 2,
              title: 'Project 2 Todo One',
              completed: true,
            },
            {
              id: 3,
              title: 'Project 2 Todo Two',
              completed: true,
            },
            {
              id: 4,
              title: 'Project 2 Todo Three',
              completed: false,
            },
          ]   
        },
      
      ]
    }
  },
  methods: {
    deleteTodo(id) {
      // deleteTodoLocal
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(newTodo) {
      // addTodoLocal
      const project = this.projects.filter(project => project.id == this.cuerrentProject)[0];
      project.todos.push(newTodo);
    },
    addProject(newProject) {
      // addProjectLocal
      this.projects = [...this.projects, newProject];
    },
    deleteProject(id) {
      // addProjectLocal
      this.projects = this.projects.filter(project => project.id !== id);
    },
    setTodos(id) {
      this.cuerrentProject = id;
      const project = this.projects.filter(project => project.id == id)[0];
      this.todos = project.todos;
      // console.log(project.todos);
    }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
  
  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }
  .btn:hover {
    background: #666;
  }
</style>
