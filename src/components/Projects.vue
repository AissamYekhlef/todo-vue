<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-success  mb-5">
        <a class="navbar-brand" href="#">Projects</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul v-bind:key="project.id" v-for="project in projects" class="navbar-nav p-2 ">
                <ProjectItem v-bind:project="project" v-on:set-todos="$emit('set-todos', project.id)"/>
            </ul>
        </div>
    </nav>
</template>

<script>
import ProjectItem from './ProjectItem.vue';

export default { 
    name: "Projects",
    components: {
        ProjectItem
    },
    props: ["projects"],
}

</script>

<style>

</style>