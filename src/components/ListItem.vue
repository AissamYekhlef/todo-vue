<template>
   <div class="col">
            <div class="card mb-4" :style="cardStyle">
                <div class="card-body">
                    <!-- <h5 class="card-title font-weight-bold"  :style="titleStyle">{{ tl.name }}</h5> -->
                    <h5 v-if="!editing" class="card-title font-weight-bold" 
                        :style="[titleStyle]" 
                        @dblclick="toggleInput()"
                    >
                        {{ list.name }}
                    </h5>
                    <input  v-if="editing" type="text" name="name" 
                            class="border border-primary" 
                            style="width:100%;border-width:10px" 
                            v-model="list.name" 
                            @dblclick="toggleInput()" 
                            placeholder="List Name..." 
                            autocomplete="off" require
                    >
                        
                    <p  v-if="!editing" class="card-text" 
                        :style="textStyle"
                        @dblclick="toggleInput()"
                    >
                        {{ list.description }}
                    </p>

                    <textarea   v-if="editing" type="text" 
                                class="border border-primary" name="description" 
                                style="width:100%;margin-top:5px" rows="4" 
                                v-model="list.description" 
                                @dblclick="toggleInput()"
                                @keyup.enter="updateList()" 
                                placeholder="List Description Here" autocomplete="off" require>
                    </textarea>



                    <p class="card-text text-muted">{{  list.todos.length  }} Todos</p> 
                    <router-link :to="
                                {
                                    path: `/projects/${$route.params.project_id}/todos/${list.id}`
                                }" 
                                class="btn btn-success">

                        <span v-if="list.todos.length > 0"> Go Todos </span> 
                        <span v-else >Create Todos </span>  
                    </router-link>
                    <button class="btn btn-outline-danger ml-3 px-2 py-1" v-on:click="deleteList(list)" width="20" height="20">
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
    name: "ListItem",
    props:{
        list: Object,
    },
    data(){
        return {
            editing: false,
            textStyle: {
                height: '3em',
                overflow: 'hidden',
            },
            titleStyle: {
                height: '3em',
                lineHeight: '1.5em',
                overflow: 'hidden',
            },
            cardStyle: {
                width: '220px',
                maxWidth: '220px',
                lineHeight: '1.5em',
                minHeight: '20px',
                maxHeight: 'max-content',

            }
        }
    },
    methods: {
        toggleInput(){
          this.editing = !this.editing;
        },
        updateList() {
            if(this.list.name.trim() !== '' && this.list.description.trim() !== ''){
              const updatedList = {
                  name: this.list.name,
                  description: this.list.description, 
              };
              // send up to parent
              
              console.log(updatedList);
            this.toggleInput();
            this.$emit('update-list', this.list);
            }else {
              alert('Name And Description are Required to Update !');
            } 
        },
        deleteList(list) {
            // console.log(list);
            if(confirm('Are You sure to Delete this List of Todos ?')){
               this.$emit('delete-list', list);
            }
        }
    }
}
</script>

<style>

</style>