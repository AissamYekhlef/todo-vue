<template>
  <div id="app">
    <div id="nav">
      <nav class="d-flex justify-content-between">
        <div  class="p-2 flex-grow-1 bd-highlight">
          <router-link to="/">Home</router-link> | 
          <router-link to="/about">About</router-link> 

          <router-link v-if="loggedIn" 
            :to="{ name: 'Projects'}" 
            :class="{ 'router-link-exact-active' : navShow()  }">
            | Projects
          </router-link>
        </div>

      <div class="ml-auto">
        <span v-if="loggedIn">
        User:<span class="pr-3 text-success font-weight-bold" > {{ this.user.user }} </span>
        </span>
        <button class="btn btn-outline-danger" @click="logoutUser" v-if="loggedIn"> Logout </button>
        <router-link  v-if="! loggedIn" to="/login"> 
            <button class="btn btn-outline-success" 
                    :class="{ 'btn-success text-white' :this.$route.name === 'Login'}">
              Login
            </button> 
        </router-link> 
        <router-link to="/register" v-if="! loggedIn"> 
            <button class="btn btn-outline-success ml-1" 
                    :class="{ 'btn-success text-white' :this.$route.name === 'Register'}">
              Register
            </button> 
        </router-link> 
      </div>
      </nav>
      

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

import { mapActions, mapGetters } from "vuex";


export default {
  mounted(){
    // console.log(store);
  },
  data(){
    return {
      path : window.location.pathname,
      isLoggedIn: this.loggedIN
    }
  },
  computed: {
    ...mapGetters("auth", ["loggedIn"]),
    ...mapGetters({
      user: 'auth/getUser'
    })
  },
  methods :{

    navShow() {
      let path = window.location.pathname;
      if(path.startsWith('/projects')){
        return true;
      } else {
        return false;
      }
    },
    logoutUser(){
      this.logout().then(() => {
        this.$router.push({ path: "/login" });
      });
    },
    ...mapActions("auth", ["logout"])
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
