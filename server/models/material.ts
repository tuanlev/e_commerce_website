import mongoose,{ Schema } from "mongoose";

const material = new Schema({
    name: {
        type: String,
        required: true,
    }
,
    description: {
        type: String,
    },
})
const Material = mongoose.model('material', material);
export default Material;