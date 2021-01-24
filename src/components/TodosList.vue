<template>
    <div>
        <div class="d-flex flex-row flex-wrap bd-highlight">
            <AddTodosList @add-todos-list="addList"/>

                <div :key="tl.id" v-for="tl in todosList">
                    <div class="col">
                        <div class="card mb-4" :style="cardStyle">
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">{{ tl.name }}</h5>
                                <p class="card-text" :style="textStyle">{{ tl.description }}</p>
                                <p class="card-text text-muted">{{ tl.todos.length }} Todos</p>
                                <router-link :to="{path: `/projects/${$route.params.project_id}/todos/${tl.id}`}" class="btn btn-success">
                                    <span v-if="tl.todos.length > 0"> Go Todos </span>  
                                    <span v-else> Create Todos </span>  
                                </router-link>
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
            cardStyle: {
                width: '200px',
                maxWidth: '200px',
                lineHeight: '1.5em',
                minHeight: '20px',
                maxHeight: 'max-content',

            }
        }
    },
    methods: {
        markTodoAsComplete(todoId, completed) {
            console.log('Todos template');
            this.$emit('completed', {todoId, completed});
        },
        deleteTodo(todoId) {
          this.$emit('del-todo', todoId);
        },
        addList(list) {
          this.$emit('add-todos-list', list);
        }
    }
}

</script>

<style scoped>

</style>