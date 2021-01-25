<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand mr-5" href="#">Lists</a>
        <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button> -->

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul v-for="l in list" :key="l.id" class="navbar-nav mr-auto">
                <li class="nav-item" :class="[{active: isActive(l.id)}]">
                    <router-link class="nav-link" :to="{
                        name: 'Todos',
                        params : {
                            project_id : $route.params.project_id,
                            todo_id : l.id,
                        }
                    }" > {{ l.name }} </router-link>
                     <!-- <router-link class="nav-link" to="/projects/$()"> {{ l.name }} </router-link> -->
                </li>
            </ul>  
        </div>
    </nav>
</template>

<script>
export default {

    data(){
        return {
            list: [],
            currentListId : function(){
                return parseInt(this.$route.params.todo_id);
            },
            isActive(id){
                return id == this.currentListId;
            },
        }
    },
    watch: {
        $route(){
            this.$emit('change-todos');
        }
    },
    mounted(){
        this.getTodosList();
        console.log(this.$router);
    },
    methods: {
        getTodosList(){
            let id = parseInt(this.$route.params.project_id);
            let list_projects = [];
            list_projects = JSON.parse(localStorage.projects);
            let project = list_projects.find(project => { return project.id === id });
            this.list = project.todosList;
            console.log(this.list);
        },
    }

}
</script>

<style scoped>


a.router-link-exact-active {
  color: #42b983 !important;
}

</style>