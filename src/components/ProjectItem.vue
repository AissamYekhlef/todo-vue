<template>


  <div class="col">
    <div class="card mb-4 text-center" :style="[widthStyle, hightStyle]">
 
      <div class="card-body">
        <h5 v-if="!editing" class="card-title font-weight-bold" 
          :style="[titleStyle]" 
          @dblclick="toggleInput">
            {{ project.name }}
        </h5>
        <input  v-if="editing" type="text" name="name" class="border border-primary " style="width:100%;border-width:10px" v-model="project.name" @dblclick="toggleInput" placeholder="Project Name..." autocomplete="off" require>
               
        <p v-if="!editing" class="card-text" 
        :style="textStyle"
        @dblclick="toggleInput">
          {{ project.description }}
        </p>
         <textarea v-if="editing" type="text" class="border border-primary" name="description" style="width:100%;margin-top:5px" rows="4" 
          v-model="project.description" 
          @dblclick="toggleInput"
          @keyup.enter="updateProject" 
          placeholder="Project Description Here" autocomplete="off" require>
         </textarea>
        <router-link :to="{ 
              name: 'ProjectDetails', 
              params: { project_id: project.id } 
          }" 
          class="btn btn-primary">
            See Todo List
        </router-link>
      </div>
      <div class="card-footer text-muted">
        {{ project.lists.length}} 
        Todos Lists
        <button class="btn btn-outline-danger" v-on:click="deleteProject(project)">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
      </button>
      </div>
      
      
    </div>
  </div>
</template>

<script>

export default { 
    name: "ProjectItem",
    props: {
        project: Object,
    },
    data(){
      return {
        editing: false,
        // name:this.project.name,
        // description:this.project.description,

        widthStyle: {
          width:"200px",
          maxWidth: "200px",
        },
        hightStyle: {
          lineHeight: "1.5em",
          // Height: "3em",
          minHeight: "20px",
          maxHeight: "max-content",
        },
        textStyle: {
          height: '3em',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        titleStyle: {
          lineHeight: "1em",
          height: '2em',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
      }
    },
    methods: {
        setTodos(projectId){
            this.$emit('set-todos', projectId);
        },
        deleteProject(project){
          if(project.lists.length > 0){
              alert('the project lists not empty');
          }else {
            if (confirm('the project lists is empty,Are you sure to delete it?')){
              this.$emit('del-project', project.id);
            }
          }    
        },
        updateProject(){
          if(this.project.name.trim() !== '' && this.project.description.trim() !== ''){
              const updatedProject = {
                  name: this.name,
                  description: this.description, 
              };
              // send up to parent
              
              console.log(updatedProject);
              this.$emit('update-project', updatedProject);
              this.toggleInput();
            }else {
              alert('Name And Description are Required to Update !');
            }  
        },
        toggleInput(){
          this.editing = !this.editing
        }
    },
}

</script>

<style>

</style>