<template>
    <div class="todo-item mx-auto" style="width: 400px;" v-bind:class="{'is-complete': todo.completed}">
        <p>  
            <input  type="checkbox" 
                    v-model="todo.completed" 
                    v-on:change="updateTodo(todo)" 
                    :checked="todo.completed"
            >
            <span class="font-weight-bold"
                  v-if="! editing" 
                  @dblclick="toggleInput"
            >
            {{ todo.title }}
            </span> 

            <input type="text" name="title" 
                    v-if="editing" 
                    @dblclick="toggleInput" 
                    @keydown.enter="updateTodo(todo)"
                    v-model="todo.title" 
                    placeholder="Add Todo..." autocomplete="off">

            <button @click="deleteTodo(todo.id)" class="del">X</button>
        </p>
        
    </div>
</template>

<script>

export default { 
    name: "TodoItem",
    data(){
      return {
        editing: false,
      }
    },
    props: {
      todo: Object,
    },
    methods: {
        markComplete() {
          this.$emit('completed', this.todo.completed);
        },
        deleteTodo(todoId) {
          this.$emit('delete-todo', todoId);
        },
        updateTodo(todo) {
          // this.toggleInput();
          if(this.editing == true){
            this.toggleInput();
          }
          this.$emit('update-todo', todo);
        },
        toggleInput(){
          this.editing = ! this.editing;
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