<template>
    <div>
        <div class="d-flex flex-row flex-wrap bd-highlight mx-4">

            <AddProject @add-project="addProject"/>

            <div :key="project.id" v-for="project in projects"  class="" id="navbarNav">
                <ProjectItem :project="project" 
                    @set-todos="setTodos(project.id)" 
                    @del-project="deleteProject(project.id)"
                    @update-project="updateProject(project)"
                />
            </div>
        </div>
    </div>
</template>

<script>
import ProjectItem from './ProjectItem.vue';
import AddProject from './AddProject.vue';

export default { 
    name: "Projects",
    props: {
        projects : Array,
    },
    components: {
        ProjectItem,
        AddProject
    },
    data(){
        return {
            navbarStyle : 'navbar navbar-expand-lg navbar-light bg-success mb-5',
            collapseStyle : 'collapse navbar-collapse',
        }
    },
    methods: {
        setTodos(projectId){
            this.$emit('set-todos', projectId);
        },
        addProject(newProject){
            this.$emit('add-project', newProject);
        },
        deleteProject(projectId){
            this.$emit('del-project', projectId);
        },
        updateProject(project){
            this.$emit('update-project', project);
        },
    },
}

</script>

<style>

</style>