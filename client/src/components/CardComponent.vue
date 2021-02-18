<template>
            
            <v-card  
            class="list-group-item">
            <v-card-text class="headline">
               {{ CardName }}
            </v-card-text>            
            <v-card-action>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
               <v-btn icon
               @click.native="deletePost(key)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-card-action>
            
            </v-card>
            
           
</template>

<script>


    export default {
        name: 'card',
        props: ["CardName", "id"] ,
        methods: {
            deletePost: function(id)
            {
                
               let uri = `http://localhost:3001/posts/delete`;
                // eslint-disable-next-line no-unused-vars
                this.axios.post(uri, {id: this.id}).then(response => {
                  this.posts.splice(this.posts.indexOf(id), 1);
                });
                 window.location.reload()
               
            }
        }

        
    }
</script>

<style scoped>

</style>