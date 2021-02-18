<template>
<v-app id="inspire">
    <v-app-bar
      app
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>

   
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>

          
           <board-component
          :id="titleToDo"
          :title="titleToDo"
          :list="todo"
           >
           </board-component>
           <board-component
           :id="titleProgress"
          :title ="titleProgress"
          :list="inprogress"
           >
           </board-component>
           <board-component
           :id="titleReview"
          :title ="titleReview"
          :list="review"
           >
           </board-component>
           <board-component
           :id="titleDone"
          :title ="titleDone"
          :list="done"
           >
           </board-component>
           
           
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
//import draggable

//import draggable from "vuedraggable";
import BoardComponent from './components/BoardComponent.vue';
export default {
  
  components: {
    
    //draggable,
    BoardComponent
  },
  created() {
            let uri = 'http://localhost:3001/';
            this.axios.get(uri).then(response => {
              this.filterData(response.data)
                this.posts = response.data;
            }).catch((err) => console.log(err))
            
      },
  
  data() {
    return {
      // for new tasks
     titleToDo: "ToDo",
     titleProgress: "InProgress",
     titleReview: "Review",
     titleDone: "Done",

     posts: [],
     todo: [],
     inprogress: [],
     review: [],
     done: [],
     list: [],
     
    };
  },
  methods: {
    filterData: function(posts) {
      this.todo = posts.filter((post) => post.status === 'ToDo');
      this.inprogress = posts.filter((post) => post.status === 'InProgress');
      this.review = posts.filter((post) => post.status === 'Review');
      this.done = posts.filter((post) => post.status === 'Done')
    console.table('inprogress', posts.filter((post) => post.status === 'InProgress'))
    },

  }


  
};
</script>

<style>


</style>
