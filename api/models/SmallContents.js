import mongoose, { mongo } from "mongoose";

const SmallContentSchema = mongoose.Schema({ 
    content_id: { 
        type:String, 
        trim:true
    }, 
    title:{
        type: String
    }, 
    description:{
        type: String
    }, 
    photoUrl: {
        type: String,
        trim: true
    }, 
}, {timestamps: true})

SmallContentSchema.index({title: 1});

const SmallContent = mongoose.model('SmallContent', SmallContentSchema); 
export default SmallContent; 