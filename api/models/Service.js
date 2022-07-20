import mongoose from "mongoose";

const ServiceSchema = mongoose.Schema({ 
    name: { type: String}, 
    description:{ type: String}, 
    photoUrl: { type: String, trim: true}, 
    duration:Number, 
    content: {type: String},
    smallservice: [{
        id: {type: mongoose.Schema.Types.ObjectId,ref: 'SmallServices'},
        name: {type: String, trim: true},
        content: {type: String}
    }], 
    slots: [{type: mongoose.Schema.Types.ObjectId,ref: 'Slot'}]
}, {timestamps: true})

ServiceSchema.index({name: 1}); 

const Services = mongoose.model('Service', ServiceSchema); 
export default Services; 
