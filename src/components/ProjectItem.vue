<template>


  <div class="col">
    <div class="card mb-4 text-center" :style="[widthStyle, hightStyle]">
      <div class="card-body">
        <h5 class="card-title">{{ project.name }}</h5>
        <p class="card-text" :style="textStyle">{{ project.description }}</p>
        <router-link :to="{ name: 'ProjectDetails', params: { project_id: project.id } }" class="btn btn-primary">
          Todo List
        </router-link>
      </div>
      <div class="card-footer text-muted">
        {{ project.todosList.length }} Todos Lists
      </div>
    </div>
  </div>
</template>

<script>

export default { 
    name: "ProjectItem",
    props: {
        project: Object
    },
    data(){
      return {
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
      }
    },
    methods: {
        setTodos(projectId){
            this.$emit('set-todos', projectId);
        },
    },
}

</script>

<style>

</style>