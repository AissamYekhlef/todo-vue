<template>
    <div>
        <div v-bind:key="todo.id" v-for="todo in todos" class="tab-content tabs">
            <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)"/>
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default { 
    name: "Todos",
    components: {
        TodoItem
    },
    // TODO avoid declaring props using string syntax, instead use the object syntax https://vuejs.org/v2/api/#props
    props: ["todos"],
}

</script>

<style scoped>

</style>