import mongoose from "mongoose";


// Chủ công nợ 

const DebteeSchema = new mongoose.Schema({
    name: {
        type: String, 
    },
    email:{ 
        type: String, 
        trim: true
    },
    phone: { 
        type: String, 
        required : true
    }, 
    description: String
 })

 const Debtee = mongoose.model('Debtee', DebteeSchema); 
 export default Debtee ; 