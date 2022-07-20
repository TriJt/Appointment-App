import mongoose from "mongoose";

const NavigatorSchema = mongoose.Schema({
    title: {
        type: String,
    },
    alias: {
        type: String,
    },
    subTitle: [{
        id: {type: mongoose.Schema.Types.ObjectId},
        name: { type: String},
        sub_alias: { type: String},
        post: [{
            post_id: {type: mongoose.Schema.Types.ObjectId},
            tiltle: {type: String},
            post_alias: { type: String },
            content: {type: String},
        }]
    }]

}, {timestamps: true})

const Navigator = mongoose.model('Navigator', NavigatorSchema);

export default Navigator;