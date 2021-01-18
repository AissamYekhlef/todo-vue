<template>
    <li class="nav-item active border-right pr-3" @click="setTodos(project.id)"> 
        <a class="nav-link" href="#">{{ project.name }}</a> 
    </li>
</template>

<script>

export default { 
    name: "ProjectItem",
    props: {
        project: Object
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