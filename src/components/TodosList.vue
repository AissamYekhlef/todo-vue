<template>
    <div>
        <div class="d-flex flex-row flex-wrap bd-highlight">
            <AddTodosList />

            <div :key="tl.id" v-for="tl in todosList">
                <div class="col">
                    <div class="card mb-4">
                        <div class="card-body">
                            <h5 class="card-title font-weight-bold">{{ tl.name }}</h5>
                            <p class="card-text" :style="textStyle">{{ tl.description }}</p>
                            <p class="card-text text-muted">{{ tl.todos.length }} Todos</p>
                            <router-link :to="{path: `/projects/${$route.params.project_id}/todos/2`}" class="btn btn-success">Go Todos</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AddTodosList from './AddTodosList.vue';

export default { 
    name: "TodosList",
    components: {
        AddTodosList
    },
    props: {
        todosList: Array,
    },
    data(){
        return {
            textStyle: {
                height: '3em',
                overflow: 'hidden',
            },
        }
    },
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