<template>
    <div class="todo-item mx-auto" style="width: 400px;" v-bind:class="{'is-complete': todo.completed}">
        <p>  
            <input type="checkbox" v-on:change="markComplete" :checked="todo.completed">
            {{ todo.title }} 
            <button @click="deleteTodo(todo.id)" class="del">X</button>
        </p>
        
    </div>
</template>

<script>

export default { 
    name: "TodoItem",
    props: {
      todo: Object,
    },
    methods: {
        markComplete() {
          /* TODO avoid mutating the passed props directly, instead try to $emit an event with the new value.
            Fixed
          */
          this.$emit('completed', !this.todo.completed);
        },
        deleteTodo(todoId) {
          this.$emit('del-todo', todoId);
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