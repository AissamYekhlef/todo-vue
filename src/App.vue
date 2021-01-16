<template>
  <div id="app">
    <Header />
    <!-- TODO instead of using v-bind:prop="propValue" you can use shorthand like :prop="propValue" https://vuejs.org/v2/guide/syntax.html#v-bind-Shorthand -->
    <!-- TODO instead of using v-on:action="actionHandler" you can use shorthand like @action="actionHandler" https://vuejs.org/v2/guide/syntax.html#v-on-Shorthand -->
    <Projects v-bind:projects="projects" v-on:del-project="deleteProject" v-on:set-todos="setTodos"/>
    <!-- TODO instead of hard coding the style attribute (e.g. style="width: 400px;") you can use "Style Binding" https://vuejs.org/v2/guide/class-and-style.html#Binding-Inline-Styles --> 
    <h2 class="mx-auto text-center" style="width: 400px;"> {{ projectName }} </h2>
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
    AddTodo,
    Todos,
    AddProject,
  },
  data() {
    return {
      cuerrentProject:1,
      projectName: "",
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
      // TODO instead of using Array.prototype.filter to find one element you can use Array.prototype.find https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
      const project = this.projects.filter(project => project.id == this.cuerrentProject)[0];
      project.todos = project.todos.filter(todo => todo.id !== id);
      this.todos = project.todos;
    },
    addTodo(newTodo) {
      // addTodoLocal
      if(newTodo.title === '' ){
        return 0;
      }else{
        const project = this.projects.filter(project => project.id == this.cuerrentProject)[0];
        project.todos.push(newTodo);
      }
    },
    addProject(newProject) {
      // addProjectLocal
      // TODO always trim the white spaces before comparing empty strings https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
      if(newProject.name === '' || newProject.description === ''){
        return 0;
      }else{
        this.projects = [...this.projects, newProject];
      }
    },
    deleteProject(id) {
      // addProjectLocal
      this.projects = this.projects.filter(project => project.id !== id);
    },
    setTodos(id) {
      this.cuerrentProject = id;
      const project = this.projects.filter(project => {
        // TODO always use strict comparison '===' instead of equality https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
        return project.id == id
      })[0];
      this.todos = project.todos;
      this.projectName = project.name;

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
