import mongoose from "mongoose";

const BranchSchema = new mongoose.Schema({
    city: {
        type: String,
    },
    district: {
        type: String,
    },
    address: {
        type: String,
    },
    availability: {
        type: Boolean,
    },
    booking: [
        {
            date: {
                type: Date,
            },
            customer: {
                type: String,
            },
            phone: {
                type: String,
            },
            service: {
                type: String,
            },
            note: {
                type: String,
            },
            confirm: {
                type: Boolean,
                default: false,
            },
            done: {
                type: Boolean,
                default: false,
            }
        }
    ]
});

const Branch = mongoose.model('Branch', BranchSchema);
export default Branch;