import mongoose from "mongoose";

//Schema Slot with fields: 
// date: date of customer want to check
// time: time in a date customer check
// price: price of slot
// vacancies: vacancy of this Slot

const SlotSchema = new mongoose.Schema({ 
    service_id: {type: mongoose.Schema.ObjectId, ref: 'ServiecSchema'}, 
    date: {type:Date, default: Date.now},
    time: {type:Date}, 
    price: Number,
    vacancies:{ type: Number, default: 1}, 
    created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }

}); 
SlotSchema.index({date:1}, {unique: true}); 

const Slot = mongoose.model('Slot', SlotSchema); 
export default Slot; 