import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({ 
    user_id: { 
        type:String, 
        trim: true
    }, 
    description:{ 
        type:String
    }, 
    photoUrl: { 
        type: String, 
        trim: true
    }

}, { timestamps: true})

CommentSchema.index({user_id:1}); 

const Comment = mongoose.model('Comment', CommentSchema); 
export default Comment; 