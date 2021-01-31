<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand mr-5" href="#">Lists</a>
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
    },
    methods: {
        getTodosList(){
            let id = parseInt(this.$route.params.project_id);
            let list_projects = [];
            list_projects = JSON.parse(localStorage.projects);
            let project = list_projects.find(project => { return project.id === id });
            this.list = project.todosList;
        },
    }

}
</script>

<style scoped>


a.router-link-exact-active {
  color: #42b983 !important;
}

</style>