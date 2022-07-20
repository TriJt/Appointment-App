import mongoose from "mongoose";


// Information of customer 

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String, 
    }, 
    age: { 
        type: Number, 
    }, 
    email:{ 
        type: String, 
        trim: true
    },
    phone: { 
        type: String, 
        required : true
    }, 
    job: { 
        type : String,
    },
    amount:{
        type: String, 
    }, 
    electronicSignature:{ 
        type: String, 
        trim : true
    },
    rank: {
        type: String,
    },
    branch: {
        type: mongoose.Schema.ObjectId,
    },
    dateCreated: {
        type: Date,
        default: new Date().toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh'}),
    }
 })

 const Customer = mongoose.model('customer', CustomerSchema); 
 export default Customer ; 