import mongoose from "mongoose";

const SmallServicesSchema = mongoose.Schema({ 
    service_id:{
        type: String, 
        trim:true
    },
    name: { type: String}, 
    description: { type: String},
    content:[{type: mongoose.Schema.Types.ObjectId,ref: 'Contents'}]
}, {timestamps: true})


const SmallServices = mongoose.model('SmallService', SmallServicesSchema); 
export default SmallServices; 
