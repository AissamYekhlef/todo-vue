<template>
   <nav :class="navbarStyle">
        <a class="navbar-brand" href="#">Projects</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div :class="collapseStyle" id="navbarNav">
            <ul :key="project.id" v-for="project in projects" class="navbar-nav p-2">
                <ProjectItem :project="project" @set-todos="setTodos(project.id)"/>
            </ul>
        </div>
    </nav>
</template>

<script>
import ProjectItem from './ProjectItem.vue';

export default { 
    name: "Projects",
    props: {
        projects : Array,
    },
    components: {
        ProjectItem
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
    },
}

</script>

<style>

</style>