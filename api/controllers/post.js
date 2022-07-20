import Post from "../models/Post.js";

// create post 

export const CreatePost = async(req,res, next) =>{ 
    const newPost = new Post(req.body); 
    try {
       const savePost = await newPost.save(); 
       res.status(200).json(savePost); 
    } catch (error) {
        next(error)
    }

}

//update post 

export const UpdatePost = async(req,res,next) => { 

    try {
        const updatePost = await Post.findByIdAndUpdate(req.params.id, 
            { $set: req.body}, 
            { new: true});
        res.status(200).json(updatePost); 
    } catch (error) {
        next(error)
    }

}


//delele post 

export const DeletePost = async(req,res,next)=> { 

    try {
        await Post.findByIdAndDelete(req.params.id); 
    } catch (error) {
        next(error)
    }
}

// get one post 

export const GetPostById = async(req,res,next) =>{ 
    try {
        Post.findById(req.params.id); 
        res.status(200).json("Post was deleted")

    } catch (error) {
        next(error)
    }
}