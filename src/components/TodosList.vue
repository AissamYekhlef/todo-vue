<template>
    <div>
        <div class="d-flex flex-row flex-wrap bd-highlight">
            <AddTodosList @add-todos-list="addList"/>
            
            <div :key="tl.id" v-for="tl in todosList">
                <ListItem 
                    :list="tl" 
                    @delete-list="deleteList"
                    @update-list="updateList"
                />
            </div>
        </div>
    </div>
</template>

<script>
import AddTodosList from './AddTodosList.vue';
import ListItem from './ListItem.vue';

export default { 
    name: "TodosList",
    components: {
        AddTodosList,
        ListItem
    },
    props: {
        todosList: Array,
    },
    data(){
        return {
            
        }
    },
    methods: {
        deleteTodo(todoId) {
          this.$emit('del-todo', todoId);
        },
        addList(list) {
          this.$emit('add-list', list);
        },
        updateList(list) {
            this.$emit('update-list', list);
        },
        deleteList(list) {
            this.$emit('delete-list', list);
        }
    }
}

</script>

<style scoped>

</style>