<template>
    <div  class="todo-item mx-auto" style="width: 400px;">
        <form @submit.prevent="addTodo">
            <input type="text" name="title" v-model="title" placeholder="Add Todo..." autocomplete="off">
            <input type="submit" value="Submit" class="btn btn-success">
        </form>
    </div>
</template>

<script>

export default { 
    name: "AddTodo",
    data() {
        return {
            title: ''
        }
    },
    methods: {
        addTodo() {
            const UUID = require('uuid-int');
            const newTodo = {
                id: UUID(10).uuid(),
                title: this.title,
                completed: false,

            };
            this.$emit('add-todo', newTodo);
            this.title = '';
        }
    },
}

</script>

<style scoped>
  form {
    display: flex;
  }

  input[type="text"] {
    flex: 10;
    padding: 5px;
  }

  input[type="submit"] {
    flex: 2;
  }
</style>