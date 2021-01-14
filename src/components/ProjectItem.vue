<template>
    <li class="nav-item active border-right pr-3" @click="$emit('set-todos', project.id)"> 
        <a class="nav-link" href="#">{{ project.name }}</a> 
    </li>
</template>

<script>

export default { 
    name: "ProjectItem",
    props: ["project"],
    methods: {
        
    }
}

</script>

<style>

</style>