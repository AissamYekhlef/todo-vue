<template>
        <div style="width: 400px; position:fixed;top: 40%; right:15px;">
            <form @submit.prevent="addProject">
                <div  class="text-center" style="width: 400px;">Add New Project</div>
                <input type="text" name="name" v-model="name" placeholder="Project Name..." autocomplete="off" require>
                <textarea type="text" name="description" rows="4" v-model="description" placeholder="Project Description Here" autocomplete="off" require>
                </textarea>
                <input type="submit" value="Submit" class="btn">
            </form>
        </div>
</template>

<script>

// import { v1 as uuid4 }from 'uuid';

export default { 
    name: "AddProject",
    data() {
        return {
            name: '',
            description: '',
        }
    },
    methods: {
        addProject() {
            const UUID = require('uuid-int');
            const newProject = {
                id: UUID(10).uuid(),
                name: this.name,
                description: this.description, 
                todos: [], 
            };
            // send up to parent
            this.$emit('add-project', newProject);
            this.name = '';
            this.description = '';
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