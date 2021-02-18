const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');


mongoose.connect(config.DB, {     
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true  }).then(
    () => {console.log(`(DataBase) : Connected to ${config.DB}...`) },
    err => {  
        console.log('DataBase Connection Error: ', err.message)
        process.exit(1)
    }
);

require('./post/post.model')
const postRoutes = require('./post/post.router')
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 3001;

app.listen(port, ()=>{
    console.log("the server is running on ", port);
});
app.use(postRoutes)





