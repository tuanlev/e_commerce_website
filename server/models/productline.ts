import mongoose, { Schema } from "mongoose";

const productLineSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    img: {
        type: [String],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})
const ProductLine = mongoose.model('productline', productLineSchema);
export default ProductLine;