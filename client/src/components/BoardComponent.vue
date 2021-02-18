<template>
        <v-col col= "3" >
            <v-card>
                <v-card-subtitle class="headline">
              {{this.title}}
                 </v-card-subtitle>
              <draggable
                class="list-group"
                :list="list"
                :id="id"
                group="tasks"
                @end="moved($event)"
              >
              <card-component
               v-for= "i in list "
              :key="i._id"
              :CardName="i.title"
              :id="i._id"
              >
              
              </card-component>
             </draggable>
             
              <addCardComponent v-if="this.title === 'ToDo'"></addCardComponent>
            </v-card>
        </v-col>
       
</template>

<script>

import draggable from "vuedraggable";
import CardComponent from './CardComponent.vue';
import addCardComponent from './addCardComponent'
    export default {
      name: 'board',
       props: [ "list", "title", "id" ],
        components: {
          
          addCardComponent,
          draggable,
         CardComponent
  },



  data() {
    return {

      listCard: "",
      CardName:"",
      newCard: "",
      
      post : {}
     

    };
  },
  methods: {
     moved: function($event) {
       let id = $event.item._underlying_vm_.__ob__.value._id
       let uri = `http://localhost:3001/posts/update`;
        this.axios.post(uri, { _id: id, status: $event.to.id } ).then(() => {
        }).catch(() =>{})
    }

  }       
    }
</script>

<style scoped>

</style>