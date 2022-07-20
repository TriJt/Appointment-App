import mongoose from 'mongoose'; 

const BookingSchema =  new mongoose.Schema({ 
    slot_id: { 
        type: mongoose.Schema.ObjectId,
        ref:'SlotSchema' 
    }, 
    customer: { 
        firstname: {type:String,trim: true}, 
        lastname: {type:String, trim: true}, 
        email: {type:String, trim: true, lowercase:true}, 
        telephone:{type: String, trim: true}
    }, 
    price: Number, 
    quantity: Number, 
    total: Number,  
    cupomCode: String, 
    state: { type: String, trim:true, lowercase: true, default: 'new'}, 
    created_at:{type:Date, default:Date.now}, 
    updated_at:{type:Date, default: Date.now}
})

const Bookings = mongoose.model('Booking', BookingSchema); 
export default Bookings; 