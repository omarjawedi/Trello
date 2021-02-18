<template>
            <v-card  
            class="list-group-item">
         
            <v-text-field
             v-model="description"
                label="add task "
                @keyup.enter="addPost"
                append-outer-icon="mdi-comment"
          ></v-text-field>
                
            

            </v-card>
    
</template>

<script>


    export default {
        name: 'addcard',
        props: {
          CardName: String
        },


        data(){
            return {
                description: '',
                post:{}
            }
        },
        methods: {
             
              
            addPost(){
                
                this.post.title = this.description;
                this.post.status = "ToDo";
                let uri = 'http://localhost:3001/posts/add';
                this.axios.post(uri, this.post).then(() => {
                    this.$router.push({name: 'posts'});
                    
                });
                this.description = '';
                window.location.reload()
            }
        }
        
    }
</script>

<style scoped>

</style>