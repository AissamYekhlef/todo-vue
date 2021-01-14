<template>
    <div>
        <form @submit.prevent="addProject">
            <input type="text" name="name" v-model="name" placeholder="Add Project..." autocomplete="off">
            <input type="text" name="description" v-model="description" placeholder="Add Description Here" autocomplete="off">
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
        addProject(e) {
            e.preventDefault();
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
  }

  input[type="text"] {
    flex: 10;
    padding: 5px;
  }

  input[type="submit"] {
    flex: 2;
  }
</style>