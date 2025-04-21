import { Schema } from "mongoose";

const catagorySchema = new Schema({
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
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    sizeGroupId: {
        type: Schema.Types.ObjectId,
        ref: 'sizegroup',
        required: true,
    }
})
const Catagory = mongoose.model('catagory', catagorySchema);
module.exports = Catagory;