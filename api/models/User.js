import mongoose from "mongoose";


//Initialize the user model with the fields : name, email, telephone, password, avartar, date

const UserSchema = new mongoose.Schema({
    name: { 
        type:String, 
        required:true
    }, 
    email: { 
        type: String, 
        require:true
    },
    telephone: { 
        type:String, 
        require: true
    }, 
    password: { 
        type:String, 
        require: true
    }, 
    avatar:{
        type: String,
    },
    //date user make account
    date:{ 
        type:Date, 
        default: Date.now
    },
    isAdmin: {
        type:Boolean, 
        default: false
    }
})
const  User = mongoose.model('user',UserSchema); 
export default User; 