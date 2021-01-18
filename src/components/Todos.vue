<template>
    <div>
        <div :key="todo.id" v-for="todo in todos" class="tab-content tabs">
            <TodoItem :todo="todo" @completed="markTodoAsComplete(todo.id, $event)"  @del-todo="deleteTodo(todo.id)"/>
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
    props: ["todos"],
    methods: {
        markTodoAsComplete(todoId, completed) {
            console.log('Todos template');
            this.$emit('completed', {todoId, completed});
        },
        deleteTodo(todoId) {
          this.$emit('del-todo', todoId);
        }
    }
}

</script>

<style scoped>

</style>