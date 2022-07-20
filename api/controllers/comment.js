import Comment from "../models/Comment.js";

// create comment

export const CreateComment = async(req,res, next) =>{ 
    const newComment = new Comment(req.body); 
    try {
       const saveComment = await newComment.save(); 
       res.status(200).json(saveComment); 
    } catch (error) {
        next(error)
    }

}

//update Comment 

export const UpdateComment = async(req,res,next) => { 

    try {
        const updateComment = await Comment.findByIdAndUpdate(req.params.id, 
            { $set: req.body}, 
            { new: true});
        res.status(200).json(updateComment); 
    } catch (error) {
        next(error)
    }

}


//delele Comment 

export const DeleteComment = async(req,res,next)=> { 

    try {
        await Comment.findByIdAndDelete(req.params.id);
        res.status(200).json("Comment was deleted") 
    } catch (error) {
        next(error)
    }
}

// get one Comment 

export const GetCommentById = async(req,res,next) =>{ 
    try {
        Comment.findById(req.params.id); 
    } catch (error) {
        next(error)
    }
}

// get all comment 
