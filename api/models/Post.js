import mongoose from "mongoose";

const PostSchema = mongoose.Schema({ 
    name:{ 
        type : String
    }, 
    header:{ 
        type: String
    }, 
    description: { 
        type: String
    }, 
    photoUrl: { 
        type: String,
        trim: true
    }
}, { timestamps: true}
)

PostSchema.index({name: 1}); 

const Post = mongoose.model('Post',PostSchema); 
export default Post; 

