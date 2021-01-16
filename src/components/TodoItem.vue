<template>
    <div class="todo-item mx-auto" style="width: 400px;" v-bind:class="{'is-complete': todo.completed}">
        <p>  
            <span v-if="todo.completed">
                <input type="checkbox" v-on:change="markComplete" checked>
            </span>
            <span v-else>
                <input type="checkbox" v-on:change="markComplete">
            </span>
            {{ todo.title }} 
            <button @click="$emit('del-todo', todo.id)" class="del">X</button>
        </p>
        
    </div>
</template>

<script>

export default { 
    name: "TodoItem",
    props: ["todo"],
    methods: {
        markComplete() {
          /* TODO avoid mutating the passed props directly, instead try to $emit an event with the new value.
            For example:
              ** TodoItem.vue **
                ....
                markComplete() {
                  this.$emit('completed', !this.todo.completed)
                }
                ...
            ---------------------
              ** Todos.vue **
                ....
                 <TodoItem v-bind:todo="todo" v-on:completed="markTodoAsComplete(todo.id, $event)"  v-on:del-todo="$emit('del-todo', todo.id)"/>
                ...
                markTodoAsComplete(todoId, completed) {
                  this.$emit('completed', {todoId, completed})
                }
            ---------------------
              ** Todos.vue **
                ....
                 <Todos v-bind:todos="todos" v-on:completed="markTodoAsComplete($event) v-on:del-todo="deleteTodo" />
                ...
                markTodoAsComplete({todoId, completed}) {
                  // find the todo by "todoId" and set the completed property to "completed"
                }
          */
            this.todo.completed = !this.todo.completed;
        }
    }
}

</script>

<style scoped>
  .todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }
  .is-complete {
    text-decoration: line-through;
  }
  .del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }
</style>