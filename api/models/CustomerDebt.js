import mongoose from "mongoose";

const CustomerDebtSchema = mongoose.Schema({
    customer_id: {
        type: mongoose.Types.ObjectId,
        ref: 'customer'
    },
    customer_phonenumber: {
        type: String, 
        ref: 'customer'
    },
    customer_name: {
        type: String,
        ref: 'customer'
    },
    state: {
        type: String,
        enum: ['Đã trả xong','Đã trả một phần','Chưa trả']
    },
    interest_rate: Number,
    paid: Number, //Đã trả
    owed: Number, //Còn nợ
    total: Number,
    date_paid: Date, //Ngày trả cuối
    description: String
}, {timestamps: true})

const CustomerDebt = mongoose.model('CustomerDebt', CustomerDebtSchema);
export default CustomerDebt;