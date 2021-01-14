<template>
    <div  class="todo-item mx-auto" style="width: 400px;">
        <form @submit.prevent="addTodo">
            <input type="text" name="title" v-model="title" placeholder="Add Todo..." autocomplete="off">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>

// import { v1 as uuid4 }from 'uuid';

export default { 
    name: "AddTodo",
    data() {
        return {
            title: ''
        }
    },
    methods: {
        addTodo(e) {
            e.preventDefault();
            const UUID = require('uuid-int');
            const newTodo = {
                id: UUID(10).uuid(),
                title: this.title,
                completed: false,
                projectId: 1, 

            };
            // send up to parent
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