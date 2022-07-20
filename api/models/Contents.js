import mongoose from "mongoose";

const ContentsSchema = mongoose.Schema({ 
    smallservice_id:{
        type:String,
        trim: true
    }, 
    title: { type: String}, 
    description: { type: String}, 
    smallcontent: [{type: mongoose.Schema.Types.ObjectId,ref: 'SmallContent'}],
    photoUrl: { 
        address:{
            type: String,
             trim: true},
        desc: { 
            type: String
        } 
 }
},{timestamps: true})

// sắp xếp schema theo thứ tự của title
ContentsSchema.index({title:1}); 

const Contents = mongoose.model('Contents', ContentsSchema); 
export default Contents; 