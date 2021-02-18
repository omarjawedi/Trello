// post.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Post = new Schema({
    title: {
        type: String
    },

    status:{
        type: String,
        enum: ['ToDo', 'InProgress', 'Review', 'Done']
    }
},{
    collection: 'posts'
});
let post = mongoose.model('Post', Post);
module.exports =post
