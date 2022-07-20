import mongoose from "mongoose";

const DebtSchema = mongoose.Schema({
    debtee_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Debtee'
    },
    debtee_name: {
        type: String,
        ref: 'Debtee'
    },
    debtee_phone: {
        type: String,
        ref: 'Debtee'
    },
    state: {
        type: String,
        enum: ['Đã trả xong','Đã trả một phần','Chưa trả']
    },
    interest_rate: Number,
    paid: Number, //Đã trả
    owed: Number, //Còn nợ
    total: Number,
    date_paid: {
        type: Date,
        default: new Date().toLocaleDateString('en-US', { timeZone: 'Asia/Ho_Chi_Minh'}),
    }, //Ngày trả cuối
    description: String
}, {timestamps: true})

const Debt = mongoose.model('Debt', DebtSchema);
export default Debt;