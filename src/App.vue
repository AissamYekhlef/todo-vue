<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/about">About</router-link> | 

      <router-link :to="{ name: 'Projects'}" :class="{ 'router-link-exact-active' : navShow()  }">Projects</router-link>
      <nav aria-label="breadcrumb" v-if="navShow()">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link :to="{ name: 'Projects'}">Projects</router-link></li>
          <li class="breadcrumb-item" aria-current="page" v-if="this.$route.name === 'ProjectDetails' || this.$route.name === 'Todos'">
            <router-link :to="{ 
              name: 'ProjectDetails', 
              params: {
                project_id: this.$route.params.project_id
              }
            }">Project Details</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page" v-if="this.$route.name === 'Todos'">
            <router-link :to="{ 
              name: 'Todos',
              params: {  
                project_id: this.$route.params.project_id, 
                todo_id: this.$route.params.todo_id
              }
            }"> Todos </router-link>
          </li>
        </ol>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log(this.$route.params.id);
    console.log(this.path);
  },
  data(){
    return {
      path : window.location.pathname,
    }
  },
  methods :{
    navShow() {
      let path = window.location.pathname;
      if(path.startsWith('/projects')){
        return true;
      } else {
        return false;
      }
    }
  }
}


</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
