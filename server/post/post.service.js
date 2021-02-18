const mongoose = require('mongoose');
// Require Post model in our routes module
let Post = mongoose.model('Post')



   const addPost = async (req,res)=>{
        try {
            let post = new Post(req.body);
            await post.save()
                .then(() => {
                    res.status(201).json({'business': 'business in added successfully'});
                })
                .catch(() => {
                    res.status(400).send("unable to save to database");
                });
        } catch (e) {
            res.status(500).send("Serveur Erro");
    
        }
    }
    const getAll =  async (req,res)=>{
        try {
            await Post.find(function(err, posts){
                if(err){
                    res.json(err);
                }
                else {
    
                    res.json(posts);
                }
            });
        } catch (e) {
            res.status(500).send("Serveur Error");
    
        }
    }
    const getById =   async (req, res) => {
        try {
            let id = req.params.id;
            await Post.findById(id,  (err, post)=>{
                if(err) {
                    res.json(err);
                }
                res.json(post);
            });
        } catch (error) {
            res.status(500).send("Serveur Error");
        }
    }
    const editPost = async (req,res)=>{
        try {
            let {_id , status} = req.body       
            let post = await Post.findById(_id) 
            if(post){
                await Post.updateOne({ _id: _id }, { status: status })
                res.json({success: true})
            } else {
                res.status(404).send('No Data')
            }
            
        } catch (error) {
            res.status(500).send("Serveur Error");
        }
    }
    const deletePost =  async (req,res)=>{
        try {
            let {id} = req.body       
            let post = await Post.findById(id) 
            if(post){
                await Post.deleteOne({_id: id} )
                res.status(200).json({success: true})
            } else {
                res.status(404).send('No Data')
            }
        } catch (error) {
            res.status(500).send("Serveur Error");
        }
    }



exports.addPost = addPost
exports.getAll = getAll
exports.getById = getById
exports.editPost = editPost
exports.deletePost = deletePost
