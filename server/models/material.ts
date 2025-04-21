import { Schema } from "mongoose";

const material = new Schema({
    name: {
        type: String,
        required: true,
    }
,
    description: {
        type: String,
    },
    img: {
        type: [String],
    }
})
const Material = mongoose.model('material', material);
module.exports = Material;