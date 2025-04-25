import mongoose from 'mongoose';
const ColorSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    hexCode: {
        type: String,
        unique: true,
        required: true,
    },
    });
const Color = mongoose.model('color', ColorSchema);
export default Color;