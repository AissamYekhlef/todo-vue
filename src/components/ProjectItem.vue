<template>
    <div class="project-item">
        <li>  
            {{ project.name }}
        </li>
    </div>
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