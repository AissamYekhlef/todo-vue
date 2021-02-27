<template>
        <div>
            <form @submit.prevent="addProject" :style="formStyle">
                <div  class="text-center">Add New Project</div>
                <input type="text" name="name" v-model="name" placeholder="Project Name..." autocomplete="off" require>
                <textarea type="text" name="description" rows="4" v-model="description" @keyup.enter="addProject" placeholder="Project Description Here" autocomplete="off" require>
                </textarea>
                <input type="submit" value="Add Project" class="btn btn-primary">
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
            formStyle: {
                width: '200px',
                // height:'290px',
            }
        }
    },
    methods: {
        addProject() {
            if(this.name.trim() !== '' || this.description.trim() !== ''){
              const newProject = {
                  name: this.name,
                  description: this.description, 
              };
              // send up to parent
              this.$emit('add-project', newProject);
              this.name = '';
              this.description = '';
            }else {
              alert('Name & Description are Required !');
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