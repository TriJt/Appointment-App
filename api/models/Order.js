import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
    smallservice:[{
        id: {
            type: mongoose.Types.ObjectId,
            ref: 'SmallServices'
        },
        name: {type: String, trim: true},
        price: {
            type: Number,
            ref: 'SmallServices'
        }
    }],
    price: Number,
    VAT: Number,
    discount: Number,
    total: Number,
    payment_method: {
        type: String,
        enum: ['Tiền mặt','Chuyển khoản','Thẻ']
    },
    note: String

}, {timestamps: true})

const Order = mongoose.model('Order', OrderSchema); 
export default Order; 