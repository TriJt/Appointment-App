import mongoose from "mongoose";

const ProcessImageSchema = mongoose.Schema({ 
    user_id: { 
        type: mongoose.Schema.ObjectId, 
        ref: 'user'
    }, 
    photoUrl: { 
        type: String, 
        trim: true
    }, 
    description:{ 
        type:String
    }

})

const ProcessImage = mongoose.model('ProcessImage', ProcessImageSchema); 
export default ProcessImage; 