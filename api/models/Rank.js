import mongoose from "mongoose";

const RankSchemas = mongoose.Schema({
    rank: {
        type: String,
        trim: true,
    },
    level: {
        type: Number,
    },
    discount: {
        type: Number,
    },
    bonus: {
        type: Number,
    },
    benefit: {
        type: String,
    },
    color: {
        type: String,
        default: "#ff9933"
    },
    active: {
        type: Boolean,
    }
});

const Rank = mongoose.model('Rank', RankSchemas);
export default Rank;