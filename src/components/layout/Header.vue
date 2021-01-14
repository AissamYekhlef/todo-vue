<template>
    <header class="header">
        <h1> TodoList </h1>
        <Projects v-bind:projects="projects"/> 
    </header>
</template>

<script>

import Projects from '../Projects.vue';

export default { 
    name: "Header",
    props: ["projects"],
    components: {
        Projects,
    }
}

</script>

<style scoped>
  .header {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
  }
  .header a {
    color: #fff;
    padding-right: 5px;
    text-decoration: none;
  }
</style>