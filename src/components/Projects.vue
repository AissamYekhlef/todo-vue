<template>
    <div>
        <ul v-bind:key="project.id" v-for="project in projects">
            <ProjectItem v-bind:project="project"/>
        </ul>
    </div>
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