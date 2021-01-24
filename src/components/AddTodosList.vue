<template>
        <div >
            <form @submit.prevent="addTodosList" :style="formStyle">
                <div  class="text-center">Add New List of Todos</div>
                <input type="text" name="name" v-model="name" placeholder="List Name..." autocomplete="off" require>
                <textarea type="text" name="description" rows="4" v-model="description" @keyup.enter="addTodosList" placeholder="List Description Here" autocomplete="off" require>
                </textarea>
                <input type="submit" value="Add" class="btn btn-success">
            </form>
        </div>
</template>

<script>

// import { v1 as uuid4 }from 'uuid';

export default { 
    name: "AddTodosList",
    data() {
        return {
            name: '',
            description: '',
            formStyle: {
                width: '200px',
                height:'225px',
                margin:'6px',
            }
        }
    },
    methods: {
        addTodosList() {
          if(this.name.trim() === '' || this.description.trim() === ''){
            return 0;
          }else {  
            const UUID = require('uuid-int');
            const newList = {
                id: UUID(10).uuid(),
                name: this.name,
                description: this.description, 
                todos: [], 
            };
            // send up to parent
            this.$emit('add-todos-list', newList);
            this.name = '';
            this.description = '';
          }    
        }
    },
}

</script>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
  }

  input[type="text"] {
    padding: 5px;
    width: 100%;
    margin: 5px;
  }
  textarea {
    padding: 5px;
    width: 100%;
    margin: 5px;
  }

  input[type="submit"] {
    width: 100%;
    margin: 5px;
  }
</style>