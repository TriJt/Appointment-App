import mongoose from "mongoose";

const TransactionSchema = mongoose.Schema({
    customer_name: {
        type: String,
    },
    customer_phone: {
        type: String,
    },
    state: {
        type: String,
        enum: ['paid','debt','unpaid'],
        default: 'paid'
    },
    employee_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    },
    services: [
        {
            name: String,
            unit_price: Number,
            amount: Number,
        }
    ],
    price: Number,
    VAT: Number,
    discount: Number,
    total: Number,
    note: String,
    date_paid: {
        type: Date,
        default: new Date().toLocaleDateString('en-US', { timeZone: 'Asia/Ho_Chi_Minh'}),
    }

}, {timestamps: true})

const Transaction = mongoose.model('Transaction', TransactionSchema); 
export default Transaction; 
